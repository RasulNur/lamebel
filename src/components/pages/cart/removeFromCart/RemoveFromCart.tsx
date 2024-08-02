"use client";

import { useState } from "react";
import { useCart } from "@/context/cart.context";
import { IProduct } from "@/types/api/products.types";
import OvalSpinner from "@/components/ui/OvalSpinner";
import Icon from "@/components/ui/Icon";

export default function RemoveFromCart({ product }: { product: IProduct }) {
    const { removeProduct: removeFromCart } = useCart();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleRemove = () => {
        removeFromCart({ productId: product.id, setIsLoading });
    };
    return (
        <button className="group p-2" type="button" onClick={handleRemove}>
            {isLoading ? (
                <OvalSpinner size={20} />
            ) : (
                <Icon
                    name="trash"
                    className="stroke-primary fill-transparent group-hover:fill-red group-hover:stroke-red size-5"
                />
            )}
        </button>
    );
}
