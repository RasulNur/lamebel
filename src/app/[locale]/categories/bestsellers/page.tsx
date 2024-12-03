import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { CategoriesPagesParams, IPageParams } from "@/types/pageParams.types";
import PageHeader from "../../../../components/ui/PageHeader";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";

export default async function BestsellersPage({
    searchParams: { page },
    params: { locale },
}: CategoriesPagesParams) {
    const { text } = await getTexts({ locale });

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
                locale={locale}
                swiperName="is_popular"
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
        title: text("Хиты продаж"),
        description: text("Хиты продаж"),
        keywords: text("Хиты продаж"),
    };
}
