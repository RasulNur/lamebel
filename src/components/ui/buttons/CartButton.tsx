"use client";

import classNames from "classnames";
import Icon from "../Icon";
import { useCart } from "@/context/cart.context";
import { useState } from "react";
import OvalSpinner from "../OvalSpinner";
import { ICartButtonProps } from "@/types/props.types";
import { useText } from "@/context/text.context";

export default function CartButton({
    className,
    product,
    quantity = 1,
    type = "text",
}: ICartButtonProps) {
    const { checkExist: checkCartExist, toggleCart } = useCart();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { text } = useText();
    return (
        <button
            disabled={isLoading || product.in_stock === 0}
            onClick={() => toggleCart({ product, quantity, setIsLoading })}
            className={classNames(
                `main-btn py-[10px] ${
                    type === "icon" ? "min-w-0 w-fit" : ""
                } group flex items-center gap-2`,
                `${
                    product.in_stock === 0
                        ? "bg-placeholder2 border-placeholder2 hover:bg-placeholder2 pointer-events-none hover:text-main"
                        : ""
                }`,
                className,
            )}
            type="button">
            {isLoading ? (
                <OvalSpinner size={16} type={"second"} />
            ) : type === "icon" ? (
                <Icon
                    name="cart"
                    className="stroke-white min-w-4 min-h-4 group-hover:stroke-main"
                />
            ) : product.in_stock === 0 ? (
                text("Нет в наличии")
            ) : (
                <>
                    {checkCartExist(product.id) ? (
                        <>
                            <Icon
                                name="check"
                                className="stroke-white group-hover:stroke-main"
                            />
                            {text("В корзине")}
                        </>
                    ) : (
                        text("В корзину")
                    )}
                </>
            )}

            {/* {isLoading ? (
                <OvalSpinner size={16} type={"second"} />
            ) : product.in_stock === 0 ? (
                text("Нет в наличии")
            ) : (
                <>
                    {checkCartExist(product.id) ? (
                        <>
                            <Icon
                                name="check"
                                className="stroke-white group-hover:stroke-main"
                            />
                            {text("В корзине")}
                        </>
                    ) : (
                        text("В корзину")
                    )}
                </>
            )} */}
        </button>
    );
}
