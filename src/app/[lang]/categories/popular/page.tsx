import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { CategoriesPagesParams, IPageParams } from "@/types/pageParams.types";
import PageHeader from "@/components/ui/PageHeader";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";

export default async function PopularPage({
    searchParams: { page },
    params: { lang },
}: CategoriesPagesParams) {
    const { text } = await getTexts({ lang });

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
                lang={lang}
                swiperName="is_bestseller"
                page={page}
            />
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ lang });
    return {
        title: text("Популярные товары"),
        description: text("Популярные товары"),
        keywords: text("Популярные товары"),
    };
}
