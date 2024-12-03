import { getCategory } from "@/api/categoriesApi";
import { getProducts } from "@/api/productsApi";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Categories from "@/components/pages/categories/Categories";
import CategoriesPageHeader from "@/components/pages/categories/CategoriesPageHeader";
import SeoSection from "@/components/ui/sections/SeoSection";
import { Locale } from "@/types/api/api.types";
import { ICategoryPageParams } from "@/types/pageParams.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function CategoriesPage({
    params: { id, locale },
    searchParams: {
        is_bestseller,
        is_discounted,
        is_new,
        is_popular,
        is_promotion,
        is_special,
        price,
        brands,
        attributes,
        sort,
        direction,
        page,
    },
}: ICategoryPageParams) {
    const brandsArr: number[] | null = brands
        ? brands.split(",").map((el) => Number(el.split("-")[0]))
        : null;

    const attrsArr:
        | {
              attrId: number;
              attrValId: number;
          }[]
        | null = attributes
        ? attributes.split(",").map((el) => {
              const arr = el.split("_");
              const attr = arr[0];
              const attrVal = arr[1];
              return {
                  attrId: Number(attr.split("-")[0]),
                  attrValId: Number(attrVal.split("-")[0]),
              };
          })
        : null;

    const products = await getProducts({
        quantity: 20,
        page: Number(page),
        category_id: Number(id.split("-")[0]),
        is_bestseller: is_bestseller ? 1 : null,
        is_discounted: is_discounted ? 1 : null,
        is_new: is_new ? 1 : null,
        is_popular: is_popular ? 1 : null,
        is_promotion: is_promotion ? 1 : null,
        is_special: is_special ? 1 : null,
        price_from: price ? Number(price.split("-")[0]) : null,
        price_to: price ? Number(price.split("-")[1]) : null,
        brands: brandsArr,
        attributes: attrsArr,
        order_by: sort ? sort : "created_at",
        order_direction: direction ? direction : "desc",
        locale,
    });

    return (
        <>
            <CategoriesPageHeader
                categoryId={Number(id.split("-")[0])}
                locale={locale}
            />
            <section className="mt-5">
                <div className="container">
                    <Categories
                        locale={locale}
                        products={products}
                        categoryId={Number(id.split("-")[0])}
                    />
                </div>
            </section>

            <SectionWrapper className="last-section-margin">
                <SeoSection />
            </SectionWrapper>
        </>
    );
}
export async function generateMetadata({
    params,
}: {
    params: { id: string; locale: Locale };
}): Promise<Metadata> {
    const id = params.id.split("-")[0];
    const slug = params.id.split("-").slice(1).join("-");

    const category = await getCategory({
        categoryId: Number(id),
        locale: params.locale,
    });

    if (!category || category.data.slug !== slug) notFound();
    return {
        title: category.data.seo_title,
        description: category.data.meta_description,
        keywords: category.data.meta_keywords,
    };
}
