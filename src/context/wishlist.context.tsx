import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCookies } from "next-client-cookies";

import {
    getWishlist,
    wishlistAdd,
    wishlistClear,
    wishlistCreate,
    wishlistRemove,
} from "@/api/wishlistApi";

import { IProduct } from "@/types/api/products.types";
import { IWishlist } from "@/types/api/wishlist.types";
import { useRouter } from "@/i18n/routing";
import {
    IWishlistAdd,
    IWishlistContextProps,
    IWishlistProviderParams,
    IWishlistRemove,
    IWishlistToggle,
} from "@/types/context/wishlist.context.type";
import { SetState } from "@/types/types";

const WishlistContext = createContext<IWishlistContextProps>({
    wishlist: [],
    apiWishlist: { items: [], quantity: 0 },
    addProduct: () => null,
    toggleWishlist: () => null,
    removeProduct: () => null,
    checkExist: () => false,
    clearWishlist: () => null,
});

export const WishlistProvider = ({
    children,
    locale,
}: IWishlistProviderParams) => {
    const wishlistLocal =
        typeof window !== "undefined" && localStorage.getItem("wishlist");
    const parsedWishlist = wishlistLocal ? JSON.parse(wishlistLocal) : [];
    const [wishlist, setWishlist] = useState<IProduct[]>(parsedWishlist);
    const [apiWishlist, setApiWishlist] = useState<IWishlist>({
        items: [],
        quantity: 0,
    });
    const { refresh } = useRouter();
    const cookies = useCookies();
    const token = cookies.get("token");

    useEffect(() => {
        if (token) {
            getWishlist({ token, locale }).then((data) => {
                if (typeof data !== "string") {
                    if (data.quantity === 0 && wishlist.length > 0) {
                        const products = wishlist.map((el) => {
                            return { id: el.id };
                        });
                        wishlistCreate({
                            token,
                            body: { products: products },
                            locale,
                        }).then((updatedData) => {
                            setWishlist([]);
                            typeof updatedData !== "string" &&
                                setApiWishlist(updatedData);
                        });
                    } else if (data.quantity > 0 && wishlist.length === 0) {
                        setApiWishlist(data);
                        setWishlist([]);
                    } else if (data.quantity > 0 && wishlist.length > 0) {
                        const apiArr = data.items.map((el) => {
                            return el.product;
                        });
                        const wishlistIds = wishlist.map((el) => {
                            return el.id;
                        });
                        const filteredApiArr = apiArr.filter((el) => {
                            return !wishlistIds.includes(el.id);
                        });

                        const arr = [...filteredApiArr, ...wishlist];
                        wishlistCreate({
                            body: { products: arr },
                            token,
                            locale,
                        }).then((updatedData) => {
                            setWishlist([]);
                            typeof updatedData !== "string" &&
                                setApiWishlist(updatedData);
                            refresh();
                        });
                    }
                }
            });
        }
    }, [token]);

    const addProduct = ({ product, setIsLoading }: IWishlistAdd): void => {
        !token && setWishlist([...wishlist, product]);
        if (token) {
            setIsLoading(true);
            wishlistAdd({ token, body: { product_id: product.id }, locale })
                .then((data) => {
                    if (typeof data !== "string") {
                        setApiWishlist(data);
                    }
                })
                .finally(() => setIsLoading(false));
        }
    };

    const removeProduct = ({ productId, setIsLoading }: IWishlistRemove) => {
        !token && setWishlist(wishlist.filter((el) => productId !== el.id));
        if (token) {
            setIsLoading(true);
            wishlistRemove({ token, body: { product_id: productId }, locale })
                .then((data) => {
                    if (typeof data !== "string") {
                        setApiWishlist(data);
                    }
                })
                .finally(() => setIsLoading(false));
        }
    };

    const toggleWishlist = ({ product, setIsLoading }: IWishlistToggle) => {
        if (!token) {
            if (wishlist.length > 0) {
                const searchProduct = wishlist.filter((el) => {
                    return el.id == product.id;
                });
                if (searchProduct.length === 1)
                    removeProduct({ productId: product.id, setIsLoading });
                else addProduct({ product, setIsLoading });
            } else addProduct({ product, setIsLoading });
        } else {
            const filteredApiWishlist = apiWishlist.items.filter((el) => {
                return el.id === product.id;
            });
            if (filteredApiWishlist.length === 1)
                removeProduct({ productId: product.id, setIsLoading });
            else addProduct({ product, setIsLoading });
        }
    };

    const checkExist = (productId: number): boolean => {
        if (!token) {
            const filteredArr = wishlist.filter((el) => {
                return el.id == productId;
            });
            return filteredArr.length === 1;
        } else {
            const filteredApiWishlist = apiWishlist.items.filter((el) => {
                return el.id === productId;
            });

            return filteredApiWishlist.length === 1;
        }
    };
    const clearWishlist = ({
        setIsLoading,
    }: {
        setIsLoading: SetState<boolean>;
    }) => {
        if (!token) setWishlist([]);
        else if (token) {
            setIsLoading(true);
            wishlistClear({ token, locale })
                .then((data) => {
                    setApiWishlist({ items: [], quantity: 0 });
                    toast.success(data.message);
                })
                .finally(() => setIsLoading(false));
        }
    };

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const values = {
        wishlist,
        apiWishlist,
        addProduct,
        removeProduct,
        checkExist,
        toggleWishlist,
        clearWishlist,
    };

    return (
        <WishlistContext.Provider value={values}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
