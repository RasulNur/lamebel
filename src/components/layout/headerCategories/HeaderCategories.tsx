import Link from "next/link";

const links = [
    { id: 0, title: "Диваны" },
    { id: 1, title: "Мягкая мебель" },
    { id: 2, title: "Эксклюзив lamebel.uz" },
    { id: 3, title: "Коллекция «Цветы»" },
];

export default function HeaderCategories() {
    return (
        <div className="sticky top-[97px] lg:block hidden bg-white z-[90]">
            <div className="container py-2">
                <div className="flex items-center gap-6">
                    {links.map((link) => {
                        return (
                            <Link
                                href="/"
                                key={link.id}
                                className="py-2 text-sm hover:text-main">
                                {link.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
