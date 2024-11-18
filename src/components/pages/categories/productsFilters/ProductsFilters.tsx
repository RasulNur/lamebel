"use client";

import { IProductsFiltersProps } from "@/types/props/pages.types";
import ClearFilters from "../clearFilters/ClearFilters";
import FilterAttributes from "../filterAttributes/FilterAttributes";
import FilterBrands from "../filterBrands/FilterBrands";
import FilterCategories from "../filterCategories/FilterCategories";
import FilterPrice from "../filterPrice/FilterPrice";
import ParentCategory from "../parentCategory/ParentCategory";
import { useState } from "react";

export default function ProductsFilters({
    attributes,
    categoryBrands,
    price,
    subCategories,
    parentCategory,
}: IProductsFiltersProps) {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-10 grow h-full">
            <ParentCategory parentCategory={parentCategory} />

            {subCategories.data.length > 0 && (
                <FilterCategories categories={subCategories} />
            )}
            {categoryBrands.data.length > 0 && (
                <FilterBrands
                    brands={categoryBrands}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                />
            )}
            {attributes.data.length > 0 && (
                <FilterAttributes
                    attributes={attributes}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                />
            )}
            {price.max > 0 && (
                <FilterPrice
                    price={price}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                />
            )}

            {(categoryBrands.data.length > 0 ||
                price.max > 0 ||
                attributes.data.length > 0) && (
                <ClearFilters
                    price={price}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                />
            )}
        </div>
    );
}
