import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { ICategoriesPagesProps } from "@/types/pageParams.types";
import PageHeader from "@/components/ui/PageHeader";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";
import { Lang } from "@/types/api/api.types";

export default async function SpecialPage({
    searchParams: { page },
    params: { lang },
}: ICategoriesPagesProps) {
    const { text } = await getTexts({ lang });

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Специально для вас"),
                }}
                title={text("Специально для вас")}
            />

            <FilteredProducts
                filterName="is_special"
                lang={lang}
                swiperName="is_bestseller"
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
        title: text("Специально для вас"),
        description: text("Специально для вас"),
        keywords: text("Специально для вас"),
    };
}
