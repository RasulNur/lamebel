"use client";

import Icon from "./Icon";
import OvalSpinner from "./OvalSpinner";
import { IQuantityProps } from "@/types/props.types";
import useQuantity from "@/hooks/useQuantity";

export default function Quantity({
    productQuantity,
    product,
    setQuantity,
}: IQuantityProps) {
    const { handleMinus, handlePlus, isLoading } = useQuantity({
        productQuantity,
        setQuantity,
        product,
    });

    const commonBtnClass =
        "size-8 flex-center bg-gray2 rounded-[4px] hover:opacity-80 disabled:pointer-events-none";
    const commonIconClass = "stroke-primary size-5";

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
