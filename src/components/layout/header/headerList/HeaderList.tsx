import { ISingleMenu } from "@/types/api/menus.types";
import Link from "next/link";

export default function HeaderList({ menu }: { menu: ISingleMenu }) {
    return (
        <ul className="2xl:flex hidden items-center gap-6">
            {menu.data.menuItems.map((link) => {
                return (
                    <li key={link.id}>
                        <Link
                            href={link.url}
                            className="inline-block py-2 hover:text-main text-sm font-medium">
                            {link.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
