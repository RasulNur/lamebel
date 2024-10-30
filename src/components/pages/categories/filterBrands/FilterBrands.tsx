"use client";

import HideFilter from "@/components/ui/HideFilter";
import { useState } from "react";
import BrandCheckbox from "./brandCheckbox/BrandCheckbox";
import useLimit from "@/hooks/useLimit";
import { useText } from "@/context/text.context";
import { IFilterBrandsProps } from "@/types/props/pages.types";

export default function FilterBrands({
    brands,
    isDisabled,
    setIsDisabled,
}: IFilterBrandsProps) {
    const { handleLimit, isShow, limit } = useLimit({
        data: brands.data,
        limitNumber: 5,
    });
    const { text } = useText();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div>
            <HideFilter
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={text("Бренды")}
            />
            <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-3`}>
                <div className="flex flex-col gap-2">
                    {brands.data.slice(0, limit).map((brand) => {
                        return (
                            <BrandCheckbox
                                key={brand.id}
                                brand={brand}
                                isDisabled={isDisabled}
                                setIsDisabled={setIsDisabled}
                            />
                        );
                    })}
                </div>
                {brands.data.length > 5 && (
                    <button
                        type="button"
                        onClick={handleLimit}
                        className="text-xs text-second w-max hover:text-main transition-300">
                        {isShow ? text("Скрыть") : text("Показать еще")}
                    </button>
                )}
            </div>
        </div>
    );
}
