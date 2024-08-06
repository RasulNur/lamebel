import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { ICategoriesPagesProps } from "@/types/pageParams.types";
import PageHeader from "@/components/ui/PageHeader";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";
import { Lang } from "@/types/api/api.types";

export default async function DiscountedPage({
    searchParams: { page },
    params: { lang },
}: ICategoriesPagesProps) {
    const { text } = await getTexts({ lang });

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: "Со скидкой",
                }}
                title={"Со скидкой"}
            />

            <FilteredProducts
                filterName="is_discounted"
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
        title: "Со скидкой",
        description: "Со скидкой",
        keywords: "Со скидкой",
    };
}
