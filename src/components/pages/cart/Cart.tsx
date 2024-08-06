"use client";

import CartProductCard from "@/components/ui/CartProductCard";
import Empty from "@/components/ui/Empty";
import { useCart } from "@/context/cart.context";
import { useCookies } from "next-client-cookies";

export default function Cart() {
    const { cart, apiCart, localCartQuantity } = useCart();
    const cookies = useCookies();
    const token = cookies.get("token");

    return (
        <>
            {((token && apiCart.quantity == 0) ||
                (!token && localCartQuantity == 0)) && <Empty />}
            {((token && apiCart.items && apiCart.items.length > 0) ||
                (!token && localCartQuantity > 0)) && (
                <div className="grid gap-10">
                    {token &&
                        apiCart.quantity > 0 &&
                        apiCart.items.map((item) => {
                            return (
                                <CartProductCard
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
                                <CartProductCard
                                    product={item.item}
                                    key={item.item.id}
                                    quantity={item.quantity}
                                />
                            );
                        })}
                </div>
            )}
        </>
    );
}
