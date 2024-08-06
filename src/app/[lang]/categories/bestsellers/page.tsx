import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { ICategoriesPagesProps } from "@/types/pageParams.types";
import { Lang } from "@/types/api/api.types";
import PageHeader from "../../../../components/ui/PageHeader";
import ProductsGrid from "@/components/ui/ProductsGrid";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";

export default async function BestsellersPage({
    searchParams: { page },
    params: { lang },
}: ICategoriesPagesProps) {
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
}: {
    params: { lang: Lang };
}): Promise<Metadata> {
    const { text } = await getTexts({ lang });
    return {
        title: text("Хиты продаж"),
        description: text("Хиты продаж"),
        keywords: text("Хиты продаж"),
    };
}
