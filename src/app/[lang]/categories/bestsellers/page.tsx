import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { CategoriesPagesParams, IPageParams } from "@/types/pageParams.types";
import PageHeader from "../../../../components/ui/PageHeader";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";

export default async function BestsellersPage({
    searchParams: { page },
    params: { lang },
}: CategoriesPagesParams) {
    const { text } = await getTexts({ lang });

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Хиты продаж"),
                }}
                title={text("Хиты продаж")}
            />

            <FilteredProducts
                filterName="is_bestseller"
                lang={lang}
                swiperName="is_popular"
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
        title: text("Хиты продаж"),
        description: text("Хиты продаж"),
        keywords: text("Хиты продаж"),
    };
}
