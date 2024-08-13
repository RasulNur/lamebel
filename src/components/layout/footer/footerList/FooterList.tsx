import { IFooterListProps } from "@/types/props.types";
import Link from "next/link";

export default function FooterList({ menu }: IFooterListProps) {
    return (
        <div className="flex flex-col sm:gap-8 gap-4 sm:items-baseline items-center">
            <h3 className="font-bold text-lg leading-130">{menu.data.name}</h3>
            <ul className="flex flex-col gap-4 sm:items-baseline items-center sm:text-start text-center">
                {menu.data.menuItems.map((item, id) => {
                    if (item.url) {
                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.url}
                                    className="py-1 block hover:text-main">
                                    {item.title}
                                </Link>
                            </li>
                        );
                    } else {
                        return (
                            <li key={item.id}>
                                <p className="py-1 block">{item.title}</p>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}
