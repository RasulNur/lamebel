import Link from "next/link";

interface IMenu {
    id: number;
    name: string;
    items: {
        id: number;
        link?: string;
        name: string;
    }[];
}

export default function FooterList({ menu }: { menu: IMenu }) {
    return (
        <div className="flex flex-col sm:gap-8 gap-4 sm:items-baseline items-center">
            <h3 className="font-bold text-lg leading-130">{menu.name}</h3>
            <ul className="flex flex-col gap-4 sm:items-baseline items-center">
                {menu.items.map((item, id) => {
                    if (item.link) {
                        return (
                            <li key={item.id}>
                                <Link
                                    href="/"
                                    className="py-1 block hover:text-main">
                                    {item.name}
                                </Link>
                            </li>
                        );
                    } else {
                        return (
                            <li key={item.id}>
                                <p className="py-1 block">{item.name}</p>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}
