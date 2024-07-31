import {
    getCategoryAttributes,
    getCategoryBrands,
    getCategoryPrices,
    getParentCategory,
    getSubCategories,
} from "@/api/categoriesApi";
import ProductsGrid from "@/components/ui/ProductsGrid";

import { ICategoriesProps } from "@/types/props.types";
import ProductsFiltersMenu from "./productsFiltersMenu/ProductsFiltersMenu";
import ProductsFilters from "./productsFilters/ProductsFilters";

export default async function Categories({
    products,
    categoryId,
    lang,
}: ICategoriesProps) {
    const subCategories = await getSubCategories({ categoryId, lang });
    const categoryBrands = await getCategoryBrands({ categoryId, lang });
    const price = await getCategoryPrices({ categoryId, lang });
    const attributes = await getCategoryAttributes({ categoryId, lang });
    const parentCategory = await getParentCategory({ categoryId, lang });

    return (
        <div className="products-grid-wrapper">
            <ProductsFilters
                subCategories={subCategories}
                categoryBrands={categoryBrands}
                price={price}
                attributes={attributes}
                parentCategory={parentCategory}
            />

            <div className="flex flex-col gap-7">
                <div className="flex items-center justify-between">
                    <div className="lg:hidden">
                        <ProductsFiltersMenu
                            subCategories={subCategories}
                            categoryBrands={categoryBrands}
                            price={price}
                            attributes={attributes}
                            parentCategory={parentCategory}
                        />
                    </div>
                </div>

                <ProductsGrid products={products} />
            </div>
        </div>
    );
}
