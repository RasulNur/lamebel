import Link from "next/link";
import Icon from "../../../ui/Icon";
import LangDropdown from "../langDropdown/LangDropdown";
import AuthMenu from "../authMenu/AuthMenu";
import { useWishlist } from "@/context/wishlist.context";
import { useCart } from "@/context/cart.context";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { IHeaderIconsProps } from "@/types/props.types";

export default function HeaderIcons({ lang }: IHeaderIconsProps) {
    const cookies = useCookies();
    const token = cookies.get("token");
    let svgClassnames =
        "stroke-primary group-hover:stroke-main size-5 fill-none";

    const { apiWishlist, wishlist } = useWishlist();
    const { apiCart, localCartQuantity } = useCart();
    const [wishlistQuantity, setWishlistQuantity] = useState<number>(0);
    const [cartQuantity, setCartQuantity] = useState<number>(0);

    useEffect(() => {
        token
            ? setWishlistQuantity(apiWishlist.quantity)
            : setWishlistQuantity(wishlist.length);
    }, [wishlist, apiWishlist, token]);

    useEffect(() => {
        token
            ? setCartQuantity(apiCart.quantity)
            : setCartQuantity(localCartQuantity);
    }, [apiCart, localCartQuantity, token]);

    return (
        <div className="flex items-center gap-2">
            <Link href="/cart" className="group sm:p-2 p-1 relative">
                <Icon name="cart" className={svgClassnames} />
                <span className="flex-center absolute sm:top-0 -top-[3px] sm:right-0 -right-[3px] bg-main text-white size-4 rounded-full text-[8.5px] z-[1] select-none">
                    {cartQuantity}
                </span>
            </Link>

            <Link
                href="/wishlist"
                className="group sm:p-2 p-1 sm:block hidden relative">
                <Icon name="heart" className={svgClassnames} />
                <span className="flex-center absolute top-0 right-0 bg-main text-white size-4 rounded-full text-[8.5px] z-[1] select-none">
                    {wishlistQuantity}
                </span>
            </Link>

            <AuthMenu lang={lang} />
        </div>
    );
}
