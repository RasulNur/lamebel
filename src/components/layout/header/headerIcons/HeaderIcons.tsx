import Link from "next/link";
import Icon from "../../../ui/Icon";

export default function HeaderIcons() {
    return (
        <div className="flex items-center gap-6">
            <Link href="/"></Link>
            <Link href="/">
                <Icon name="cart" />
            </Link>
            <Link href="/">
                <Icon name="heart" />
            </Link>
        </div>
    );
}
