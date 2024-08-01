import Link from "next/link";
import Icon from "../../../ui/Icon";
import LangDropdown from "../langDropdown/LangDropdown";
import AuthMenu from "../authMenu/AuthMenu";
import { Lang } from "@/types/api/api.types";

import { SetState } from "@/types/types";

export default function HeaderIcons({
    lang,
    setIsSearchOpen,
}: {
    lang: Lang;
    setIsSearchOpen: SetState<boolean>;
}) {
    let svgClassnames = "stroke-primary group-hover:stroke-main size-5";
    return (
        <div className="flex items-center gap-2">
            <LangDropdown />

            <button
                type="button"
                className="2xl:flex hidden group p-2"
                onClick={() => setIsSearchOpen((prev) => !prev)}>
                <Icon
                    name="loupe"
                    className="stroke-primary group-hover:stroke-main size-5"
                />
            </button>

            <Link href="/cart" className="group p-2">
                <Icon name="cart" className={svgClassnames} />
            </Link>

            <Link href="/wishlist" className="group p-2 sm:block hidden">
                <Icon name="heart" className={svgClassnames} />
            </Link>

            <AuthMenu lang={lang} />
        </div>
    );
}
