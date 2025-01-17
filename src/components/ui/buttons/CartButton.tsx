"use client";

import classNames from "classnames";
import Icon from "../Icon";
import { useCart } from "@/context/cart.context";
import { useEffect, useState } from "react";
import OvalSpinner from "../OvalSpinner";
import { useText } from "@/context/text.context";
import { ICartButtonProps } from "@/types/props/ui.types";

export default function CartButton({
    className,
    product,
    quantity = 1,
    type = "text",
}: ICartButtonProps) {
    const { checkExist: checkCartExist, toggleCart } = useCart();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { text } = useText();

    const [isExist, setIsExist] = useState<boolean>(false);

    useEffect(() => {
        setIsExist(checkCartExist(product.id));
    }, [checkCartExist]);
    return (
        <button
            disabled={isLoading || product.in_stock === 0}
            onClick={() => toggleCart({ product, quantity, setIsLoading })}
            className={classNames(
                `main-btn min-[460px]:py-[10px] py-2 lg:px-6 min-[460px]:px-4 px-2 ${
                    type === "icon" ? "!min-w-0 w-fit" : ""
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
                isExist ? (
                    <Icon
                        name="check"
                        className="stroke-white min-w-4 min-h-4 group-hover:stroke-main"
                    />
                ) : (
                    <Icon
                        name="cart"
                        className="stroke-white min-w-4 min-h-4 group-hover:stroke-main"
                    />
                )
            ) : product.in_stock === 0 ? (
                text("нет в наличии")
            ) : (
                <>
                    {isExist ? (
                        <>
                            <Icon
                                name="check"
                                className="stroke-white group-hover:stroke-main"
                            />
                            {text("В корзине")}
                        </>
                    ) : (
                        text("в корзину")
                    )}
                </>
            )}
        </button>
    );
}
