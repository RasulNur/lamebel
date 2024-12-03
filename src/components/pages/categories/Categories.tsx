import {
    getCategoryAttributes,
    getCategoryBrands,
    getCategoryPrices,
    getParentCategory,
    getSubCategories,
} from "@/api/categoriesApi";
import ProductsGrid from "@/components/ui/ProductsGrid";
import ProductsFiltersMenu from "./productsFiltersMenu/ProductsFiltersMenu";
import ProductsFilters from "./productsFilters/ProductsFilters";
import { ICategoriesProps } from "@/types/props/pages.types";

export default async function Categories({
    products,
    categoryId,
    locale,
}: ICategoriesProps) {
    const subCategories = await getSubCategories({ categoryId, locale });
    const categoryBrands = await getCategoryBrands({ categoryId, locale });
    const price = await getCategoryPrices({ categoryId, locale });
    const attributes = await getCategoryAttributes({ categoryId, locale });
    const parentCategory = await getParentCategory({ categoryId, locale });

    return (
        <div className="products-grid-wrapper">
            <div className="lg:block hidden pb-6 pt-4 pr-6">
                <ProductsFilters
                    subCategories={subCategories}
                    categoryBrands={categoryBrands}
                    price={price}
                    attributes={attributes}
                    parentCategory={parentCategory}
                />
            </div>

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

                <ProductsGrid products={products} locale={locale} />
            </div>
        </div>
    );
}
