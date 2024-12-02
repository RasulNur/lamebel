import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { CategoriesPagesParams, IPageParams } from "@/types/pageParams.types";
import PageHeader from "@/components/ui/PageHeader";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";

export default async function PopularPage({
    searchParams: { page },
    params: { locale },
}: CategoriesPagesParams) {
    const { text } = await getTexts({ locale });

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: "Популярные товары",
                }}
                title={"Популярные товары"}
            />

            <FilteredProducts
                filterName="is_popular"
                locale={locale}
                swiperName="is_bestseller"
                page={page}
            />
        </>
    );
}

export async function generateMetadata({
    params: { locale },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ locale });
    return {
        title: text("Популярные товары"),
        description: text("Популярные товары"),
        keywords: text("Популярные товары"),
    };
}
