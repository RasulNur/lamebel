import ClearFilters from "../clearFilters/ClearFilters";
import FilterAttributes from "../filterAttributes/FilterAttributes";
import FilterBrands from "../filterBrands/FilterBrands";
import FilterCategories from "../filterCategories/FilterCategories";
import FilterPrice from "../filterPrice/FilterPrice";
import ParentCategory from "../parentCategory/ParentCategory";
import { IProductsFiltersProps } from "@/types/props.types";

export default function ProductsFilters({
    attributes,
    categoryBrands,
    price,
    subCategories,
    parentCategory,
}: IProductsFiltersProps) {
    return (
        <div className="flex flex-col gap-10 grow h-full">
            <ParentCategory parentCategory={parentCategory} />

            {subCategories.data.length > 0 && (
                <FilterCategories categories={subCategories} />
            )}
            {categoryBrands.data.length > 0 && (
                <FilterBrands brands={categoryBrands} />
            )}
            {attributes.data.length > 0 && (
                <FilterAttributes attributes={attributes} />
            )}
            {price.max > 0 && <FilterPrice price={price} />}

            {subCategories.data.length > 0 &&
                categoryBrands.data.length > 0 &&
                price.max > 0 &&
                attributes.data.length > 0 && <ClearFilters price={price} />}
        </div>
    );
}
