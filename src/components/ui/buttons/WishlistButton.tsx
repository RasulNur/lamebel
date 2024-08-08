"use client";

import { useWishlist } from "@/context/wishlist.context";
import Icon from "../Icon";
import { useState } from "react";
import classNames from "classnames";
import OvalSpinner from "../OvalSpinner";
import { IWishlistButtonProps } from "@/types/props.types";

export default function WishlistButton({
    product,
    className = "",
}: IWishlistButtonProps) {
    const { checkExist: checkWishlistExist, toggleWishlist } = useWishlist();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <button
            disabled={isLoading}
            onClick={() => toggleWishlist({ product, setIsLoading })}
            type="button"
            className={classNames("group p-2 w-fit", className)}>
            {isLoading ? (
                <OvalSpinner size={20} />
            ) : (
                <Icon
                    name="heart"
                    className={`${
                        checkWishlistExist(product.id)
                            ? "fill-red stroke-red"
                            : "fill-transparent stroke-primary"
                    } group-hover:stroke-red size-5`}
                />
            )}
        </button>
    );
}
