import { getMenu } from "@/api/menusApi";
import { Lang } from "@/types/api/api.types";
import Link from "next/link";

export default async function HeaderList({ lang }: { lang: Lang }) {
    const menu = await getMenu({ menuId: 2, lang });

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
