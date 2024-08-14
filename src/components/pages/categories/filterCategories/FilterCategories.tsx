"use client";

import HideFilter from "@/components/ui/HideFilter";
import useLimit from "@/hooks/useLimit";
import Link from "next/link";
import { useState } from "react";
import { useText } from "@/context/text.context";
import { IFilterCategoriesProps } from "@/types/props/pages.types";

export default function FilterCategories({
    categories,
}: IFilterCategoriesProps) {
    const { handleLimit, isShow, limit } = useLimit({
        data: categories.data,
        limitNumber: 5,
    });
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const { text } = useText();

    return (
        <div>
            <HideFilter
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={text("Категории")}
            />
            <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-3`}>
                <div className="flex flex-col gap-2">
                    {categories.data.slice(0, limit).map((category) => {
                        return (
                            <Link
                                href={`/categories/${category.id}-${category.slug}`}
                                key={category.id}
                                className="text-sm leading-160 hover:text-main">
                                {category.name}
                            </Link>
                        );
                    })}
                </div>
                {categories.data.length > 5 && (
                    <button
                        type="button"
                        onClick={handleLimit}
                        className="text-xs text-secondary w-max hover:text-main transition-300">
                        {isShow ? text("Скрыть") : text("Показать еще")}
                    </button>
                )}
            </div>
        </div>
    );
}
