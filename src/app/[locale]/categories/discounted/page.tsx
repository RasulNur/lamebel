import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import { CategoriesPagesParams, IPageParams } from "@/types/pageParams.types";
import PageHeader from "@/components/ui/PageHeader";
import FilteredProducts from "@/components/pages/categories/FilteredProducts";

export default async function DiscountedPage({
    searchParams: { page },
    params: { locale },
}: CategoriesPagesParams) {
    const { text } = await getTexts({ locale });

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
        title: "Со скидкой",
        description: "Со скидкой",
        keywords: "Со скидкой",
    };
}
