import Link from "next/link";
import Icon from "../../../ui/Icon";
import LangDropdown from "../langDropdown/LangDropdown";

export default function HeaderIcons() {
    let svgClassnames = "stroke-primary group-hover:stroke-main size-5";
    return (
        <div className="flex items-center gap-2">
            <LangDropdown />
            <button type="button" className="group p-2 md:block hidden">
                <Icon name="loupe" className={svgClassnames} />
            </button>
            <Link href="/cart" className="group p-2">
                <Icon name="cart" className={svgClassnames} />
            </Link>
            <Link href="/wishlist" className="group p-2 sm:block hidden">
                <Icon name="heart" className={svgClassnames} />
            </Link>
        </div>
    );
}
