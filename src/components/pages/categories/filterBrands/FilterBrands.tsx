"use client";

import HideFilter from "@/components/ui/HideFilter";
import { useEffect, useState } from "react";
import Icon from "../../../ui/Icon";
import { ICategoryBrand, ICategoryBrands } from "@/types/api/categories.types";
import BrandCheckbox from "./brandCheckbox/BrandCheckbox";
import useLimit from "@/hooks/useLimit";
import { useText } from "@/context/text.context";

export default function FilterBrands({ brands }: { brands: ICategoryBrands }) {
    const { handleLimit, isShow, limit } = useLimit({
        data: brands.data,
        limitNumber: 5,
    });
    const { text } = useText();
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [searchBrand, setSearchBrand] = useState<string>("");
    const [filteredBrands, setFilteredBrands] = useState<ICategoryBrand[]>([]);

    useEffect(() => {
        setFilteredBrands(brands.data);
    }, []);
    useEffect(() => {
        setFilteredBrands(
            brands.data.filter((brand) =>
                brand.name.toLowerCase().includes(searchBrand.toLowerCase()),
            ),
        );
    }, [searchBrand]);

    return (
        <div>
            <HideFilter
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={text("Бренды")}
            />
            <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-3`}>
                <div className="flex flex-col gap-2">
                    {filteredBrands.slice(0, limit).map((brand) => {
                        return <BrandCheckbox key={brand.id} brand={brand} />;
                    })}
                </div>
                {filteredBrands.length > 5 && (
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
