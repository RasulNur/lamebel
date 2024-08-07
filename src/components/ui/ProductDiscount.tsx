import React from "react";
import Icon from "@/components/ui/Icon";
import { IProductDiscountProps } from "@/types/props.types";

export default function ProductDiscount({
    product,
    type = "card",
}: IProductDiscountProps) {
    return (
        <>
            {Number(product.discount) > 0 && (
                <div
                    className={`relative ${
                        type === "card" ? "max-[450px]:hidden" : ""
                    } `}>
                    <Icon
                        name="tag"
                        className="w-[56px] h-[24px] stroke-placeholder2 fill-none"
                    />
                    <span className="absolute left-[22px] top-1/2 -translate-y-1/2 text-[12px] font-medium text-placeholder2">
                        -{Number(product.discount)}%
                    </span>
                </div>
            )}
        </>
    );
}
