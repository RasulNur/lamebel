import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

import {
    cartAdd,
    cartClear,
    cartCreate,
    cartRemove,
    cartUpdate,
    getCart,
} from "@/api/cartApi";
import { createOrder } from "@/api/orderApi";
import { ICart } from "@/types/api/cart.types";
import { IProduct } from "@/types/api/products.types";
import {
    ICardProvideProps,
    ICartAddProduct,
    ICartCheckout,
    ICartContextProps,
    ICartRemoveProduct,
    ICartUpdateProduct,
    IToggleCart,
} from "@/types/context/cart.context.types";
import { SetState } from "@/types/types";
import { useText } from "./text.context";
import { Lang } from "@/types/api/api.types";

const CartContext = createContext<ICartContextProps>({
    cart: [],
    apiCart: {
        items: [],
        installment: [],
        subtotal: 0,
        subtotal_formatted: "",
        total: 0,
        total_formatted: "",
        quantity: 0,
    },
    addProduct: () => null,
    updateProduct: () => null,
    toggleCart: () => null,
    removeProduct: () => null,
    checkExist: () => false,
    clearCart: () => null,
    localCartTotal: 0,
    localCartQuantity: 0,
    checkout: () => null,
});

export const CartProvider = ({ children, lang }: ICardProvideProps) => {
    const cartLocal =
        typeof window !== "undefined" && localStorage.getItem("cart");
    const parsedCart = cartLocal ? JSON.parse(cartLocal) : [];
    const { replace, refresh } = useRouter();
    const [cart, setCart] = useState<
        {
            quantity: number;
            item: IProduct;
        }[]
    >(parsedCart);
    const [apiCart, setApiCart] = useState<ICart>({
        items: [],
        installment: [],
        subtotal: 0,
        subtotal_formatted: "",
        total: 0,
        total_formatted: "",
        quantity: 0,
    });
    const cookies = useCookies();
    const token = cookies.get("token");

    const [localCartTotal, setLocalCartTotal] = useState<number>(0);
    const [localCartQuantity, setLocalCartQuantity] = useState<number>(0);
    const { text } = useText();

    useEffect(() => {
        const totalQuantity = cart
            .map((el) => {
                return el.quantity;
            })
            .reduce((acc, next) => acc + next, 0);
        setLocalCartQuantity(totalQuantity);
    }, [cart]);

    useEffect(() => {
        const totalSum = cart
            .map((el) => el.item.current_price * el.quantity)
            .reduce((acc, next) => acc + next, 0);
        setLocalCartTotal(totalSum);
    }, [cart]);

    useEffect(() => {
        if (token) {
            getCart({ token, lang }).then((data) => {
                if (typeof data !== "string") {
                    if (data.quantity === 0 && cart.length > 0) {
                        const products = cart.map((el) => {
                            return { id: el.item.id, quantity: el.quantity };
                        });
                        cartCreate({
                            token,
                            body: { products: products },
                            lang,
                        }).then((updatedData) => {
                            setCart([]);
                            typeof updatedData !== "string" &&
                                setApiCart(updatedData);
                            refresh();
                        });
                    } else if (data.quantity > 0 && cart.length === 0) {
                        setApiCart(data);
                        setCart([]);
                    } else if (data.quantity > 0 && cart.length > 0) {
                        const localProducts = cart.map((el) => {
                            return { id: el.item.id, quantity: el.quantity };
                        });
                        const apiProducts = data.items.map((el) => {
                            return { id: el.id, quantity: el.quantity };
                        });
                        const products = [...localProducts, ...apiProducts];

                        cartCreate({
                            token,
                            body: { products: products },
                            lang,
                        }).then((updatedData) => {
                            setCart([]);
                            typeof updatedData !== "string" &&
                                setApiCart(updatedData);
                            refresh();
                        });
                    }
                }
            });
        }
    }, [token]);

    const addProduct = ({
        product,
        quantity,
        setIsLoading,
    }: ICartAddProduct): void => {
        !token && setCart([...cart, { item: product, quantity: quantity }]);
        if (token) {
            setIsLoading(true);
            cartAdd({ token, body: { product_id: product.id, quantity }, lang })
                .then((data) => typeof data !== "string" && setApiCart(data))
                .finally(() => setIsLoading(false));
        }
    };

    const removeProduct = ({ productId, setIsLoading }: ICartRemoveProduct) => {
        !token && setCart(cart.filter((el) => productId !== el.item.id));
        if (token) {
            setIsLoading(true);
            cartRemove({ token, body: { product_id: productId }, lang })
                .then((data) => typeof data !== "string" && setApiCart(data))
                .finally(() => setIsLoading(false));
        }
    };

    const updateProduct = ({
        product,
        quantity,
        setIsLoading,
        action,
    }: ICartUpdateProduct): void => {
        if (!token) {
            const updatedCart = cart.map((el) => {
                if (el.item.id == product.id) {
                    return { item: product, quantity };
                }
                return el;
            });
            setCart(updatedCart);
        }
        if (token) {
            action == "minus" && setIsLoading({ minus: true, plus: false });
            action == "plus" && setIsLoading({ minus: false, plus: true });

            if (product.in_stock < quantity) {
                toast.error(text("Нет такого количества товаров в наличии"));
                setIsLoading({ minus: false, plus: false });
                return;
            }
            cartUpdate({
                token,
                body: { product_id: product.id, quantity },
                lang,
            })
                .then((data) => typeof data !== "string" && setApiCart(data))
                .finally(() => setIsLoading({ minus: false, plus: false }));
        }
    };

    const toggleCart = ({ product, quantity, setIsLoading }: IToggleCart) => {
        if (!token) {
            if (cart.length > 0) {
                const searchProduct = cart.filter((el) => {
                    return el.item.id == product.id;
                });
                if (searchProduct.length === 1)
                    removeProduct({ productId: product.id, setIsLoading });
                else addProduct({ product, quantity, setIsLoading });
            } else addProduct({ product, quantity, setIsLoading });
        } else {
            const filteredApiCart = apiCart.items.filter((el) => {
                return el.id === product.id;
            });
            if (filteredApiCart.length === 1)
                removeProduct({ productId: product.id, setIsLoading });
            else addProduct({ product, quantity, setIsLoading });
        }
    };

    const checkExist = (productId: number): boolean => {
        if (!token) {
            const filteredArr = cart.filter((el) => {
                return el.item.id == productId;
            });
            return filteredArr.length === 1;
        } else {
            const filteredApiCart = apiCart.items.filter((el) => {
                return el.id === productId;
            });

            return filteredApiCart.length === 1;
        }
    };

    const clearCart = ({
        setIsLoading,
    }: {
        setIsLoading: SetState<boolean>;
    }) => {
        if (!token) {
            setCart([]);
            replace("/");
        } else if (token) {
            setIsLoading(true);
            cartClear({ token, lang })
                .then((data) => {
                    setApiCart({
                        installment: [],
                        subtotal: 0,
                        subtotal_formatted: "",
                        total: 0,
                        total_formatted: "",
                        items: [],
                        quantity: 0,
                    });
                    replace("/");
                    toast.success(data.message);
                })
                .finally(() => setIsLoading(false));
        }
    };

    const checkout = ({ body, setIsLoading }: ICartCheckout) => {
        const {
            address_id,
            name,
            payment_method_id,
            phone_number,
            shipping_method_id,
            email,
            message,
        } = body;
        if (token) {
            setIsLoading(true);
            createOrder({
                token,
                body: {
                    address_id,
                    name,
                    payment_method_id,
                    phone_number,
                    shipping_method_id,
                    email,
                    message,
                },
                lang,
            })
                .then((data) => {
                    getCart({ token, lang }).then((data) => {
                        if (typeof data !== "string") {
                            setApiCart(data);
                        }
                    });
                    replace(`/order/${data.data.id}`);
                })
                .finally(() => setIsLoading(false));
        }
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const values = {
        cart,
        apiCart,
        addProduct,
        removeProduct,
        checkExist,
        toggleCart,
        clearCart,
        updateProduct,
        localCartTotal,
        localCartQuantity,
        checkout,
    };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
