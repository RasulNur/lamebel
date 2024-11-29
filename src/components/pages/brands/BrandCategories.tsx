import { getBrand, getBrandCategories } from "@/api/brandsApi";
import { IBrandCategoriesProps } from "@/types/props/pages.types";
import Link from "next/link";

export default async function BrandCategories({
    brandId,
    lang,
}: IBrandCategoriesProps) {
    const brandCategoriesTree = await getBrandCategories({ brandId, lang });
    const brand = await getBrand({ brandId, lang });

    return (
        <div className="flex flex-col gap-1">
            {brandCategoriesTree.data.map((category) => {
                return (
                    <div key={category.id} className="flex flex-col gap-1">
                        <Link
                            key={category.id}
                            className="font-medium leading-160 hover:text-main"
                            href={`/categories/${category.id}-${category.slug}?page=1&brands=${brand.data.id}-${brand.data.slug}`}>
                            {category.name}
                        </Link>
                        <div className="flex flex-col gap-[2px]">
                            {category.children.length > 0 &&
                                category.children.map((subCategory) => {
                                    return (
                                        <Link
                                            key={subCategory.id}
                                            className="text-sm leading-160 hover:text-main"
                                            href={`/categories/${subCategory.id}-${subCategory.slug}?page=1&brands=${brand.data.id}-${brand.data.slug}`}>
                                            {subCategory.name}
                                        </Link>
                                    );
                                })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
