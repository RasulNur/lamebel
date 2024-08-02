"use client";

import { useState } from "react";
import Icon from "./Icon";
import { useCart } from "@/context/cart.context";
import { IQuantityChangerLoading } from "@/types/context/cart.context.types";
import OvalSpinner from "./OvalSpinner";
import toast from "react-hot-toast";
import { IQuantityProps } from "@/types/props.types";
import { useText } from "@/context/text.context";

export default function Quantity({
    productQuantity,
    product,
    setQuantity,
}: IQuantityProps) {
    const { updateProduct } = useCart();
    const [isLoading, setIsLoading] = useState<IQuantityChangerLoading>({
        minus: false,
        plus: false,
    });
    const { text } = useText();

    const commonBtnClass =
        "size-8 flex-center bg-gray2 rounded-[4px] hover:opacity-80";
    const commonIconClass = "stroke-primary size-5";

    const handleMinus = () => {
        if (
            productQuantity > 1 &&
            !(productQuantity > 255 || productQuantity < 1)
        ) {
            if (setQuantity) {
                setQuantity((prev) => prev - 1);
            } else {
                updateProduct({
                    product,
                    action: "minus",
                    quantity: productQuantity - 1,
                    setIsLoading,
                });
            }
        }
    };

    const handlePlus = () => {
        if (product.in_stock <= productQuantity) {
            toast.error(text("Нет такого количества товаров в наличии"));
        } else {
            if (
                productQuantity < 255 &&
                !(productQuantity > 255 || productQuantity < 1)
            ) {
                if (setQuantity) {
                    setQuantity((prev) => prev + 1);
                } else {
                    updateProduct({
                        action: "plus",
                        product,
                        quantity: productQuantity + 1,
                        setIsLoading,
                    });
                }
            }
        }
    };

    return (
        <div className="flex items-center gap-4 w-max">
            <button
                type="button"
                disabled={
                    isLoading.minus ||
                    isLoading.plus ||
                    productQuantity === 1 ||
                    productQuantity === 0
                }
                className={commonBtnClass}
                onClick={handleMinus}>
                {isLoading.minus ? (
                    <OvalSpinner size={16} />
                ) : (
                    <Icon name="minus" className={commonIconClass} />
                )}
            </button>
            <span className="text-sm font-medium select-none">
                {productQuantity}
            </span>
            <button
                type="button"
                disabled={
                    isLoading.minus ||
                    isLoading.plus ||
                    productQuantity === 0 ||
                    productQuantity === product.in_stock
                }
                className={commonBtnClass}
                onClick={handlePlus}>
                {isLoading.plus ? (
                    <OvalSpinner size={16} />
                ) : (
                    <Icon name="plus" className={commonIconClass} />
                )}
            </button>
        </div>
    );
}
