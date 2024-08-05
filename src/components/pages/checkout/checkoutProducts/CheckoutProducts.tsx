import CheckoutProductCard from "@/components/ui/CheckoutProductCard";
import { useCart } from "@/context/cart.context";
import { useCookies } from "next-client-cookies";

export default function CheckoutProducts() {
    const { cart, apiCart, localCartQuantity } = useCart();
    const cookies = useCookies();
    const token = cookies.get("token");

    return (
        <div className="max-h-[400px] overflow-y-auto pr-2">
            {((token && apiCart.items && apiCart.items.length > 0) ||
                (!token && localCartQuantity > 0)) && (
                <div className="grid gap-10">
                    {token &&
                        apiCart.quantity > 0 &&
                        apiCart.items.map((item) => {
                            return (
                                <CheckoutProductCard
                                    key={item.id}
                                    product={item.product}
                                    quantity={item.quantity}
                                />
                            );
                        })}
                    {!token &&
                        cart.length > 0 &&
                        cart.map((item) => {
                            return (
                                <CheckoutProductCard
                                    product={item.item}
                                    key={item.item.id}
                                    quantity={item.quantity}
                                />
                            );
                        })}
                </div>
            )}
        </div>
    );
}
