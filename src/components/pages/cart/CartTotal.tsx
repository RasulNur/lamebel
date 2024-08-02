"use client";

import Link from "next/link";
import { useCookies } from "next-client-cookies";
import { useCart } from "@/context/cart.context";
import { useText } from "@/context/text.context";
import { useState } from "react";
import OvalSpinner from "@/components/ui/OvalSpinner";

export default function CartTotal() {
    const cookies = useCookies();
    const token = cookies.get("token");
    const { apiCart, localCartTotal, localCartQuantity, clearCart } = useCart();
    const [isClearLoading, setIsClearLoading] = useState<boolean>(false);
    const { text } = useText();

    return (
        <div
            className={`sticky top-[170px] md:p-6 p-4 flex flex-col gap-9 border border-gray5 h-max bg-white`}>
            <div className="flex flex-col gap-3">
                <div className="text-secondary2 flex items-center justify-between gap-4">
                    <h4>Товары:</h4>
                    <p>{token ? apiCart.quantity : localCartQuantity} шт.</p>
                </div>
                <div className="md:text-2xl sm:text-xl text-lg flex items-center justify-between gap-4">
                    <h4 className="font-medium">К оплате :</h4>

                    <p className="font-bold text-main">
                        {token
                            ? apiCart.total_formatted
                            : `${new Intl.NumberFormat("fr-FR").format(
                                  localCartTotal,
                              )} сум`}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Link
                    href="/checkout"
                    className={`main-btn w-full ${
                        token && apiCart.quantity > 0
                            ? ""
                            : "pointer-events-none"
                    }`}>
                    {text("Оформить заказ")}
                </Link>

                <button
                    disabled={isClearLoading}
                    className="main-btn w-full"
                    type="button"
                    onClick={() =>
                        clearCart({ setIsLoading: setIsClearLoading })
                    }>
                    {isClearLoading && <OvalSpinner size={16} type="second" />}
                    {text("Очистить корзину")}
                </button>
            </div>
        </div>
    );
}
