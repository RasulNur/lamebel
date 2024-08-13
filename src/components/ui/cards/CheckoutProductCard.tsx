"use client";

import { useText } from "@/context/text.context";
import { ICheckoutProductCardProps } from "@/types/props.types";
import Link from "next/link";

export default function CheckoutProductCard({
    product,
    quantity,
}: ICheckoutProductCardProps) {
    const { text } = useText();
    return (
        <div className="flex flex-col gap-2">
            <Link
                href={`/product/${product.id}-${product.slug}`}
                className="font-medium leading-150 hover:text-main line-clamp-2">
                {product.name} ({quantity})
            </Link>

            <div className="text-sm flex items-center justify-between">
                <span>{text("Цена")}:</span>
                <span className="font-bold">
                    {product.current_price_formatted}
                </span>
            </div>
        </div>
    );
}
