"use client";

import { IProductLinksProps } from "@/types/props.types";

const links = [
    { id: 0, title: "Xарактеристики" },
    { id: 1, title: "Описание" },
    { id: 2, title: "Отзывы" },
];

export default function ProductLinks({ setTabIndex }: IProductLinksProps) {
    const handleClick = (id: number) => {
        setTabIndex(id);
        document
            .getElementById("product-tabs")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="flex flex-col">
            {links.map((link) => {
                return (
                    <button
                        type="button"
                        className="py-4 w-full text-start hover:text-main font-medium border-b last:border-0 border-gray5"
                        key={link.id}
                        onClick={() => handleClick(link.id)}>
                        {link.title}
                    </button>
                );
            })}
        </div>
    );
}
