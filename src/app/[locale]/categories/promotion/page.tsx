import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { CategoriesPagesParams, IPageParams } from "@/types/pageParams.types";
import PageHeader from "@/components/ui/PageHeader";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";

export default async function PromotionPage({
    searchParams: { page },
    params: { locale },
}: CategoriesPagesParams) {
    const { text } = await getTexts({ locale });

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Все акции"),
                }}
                title={text("Все акции")}
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
        title: text("Все акции"),
        description: text("Все акции"),
        keywords: text("Все акции"),
    };
}
