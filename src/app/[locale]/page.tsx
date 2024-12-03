import { getPage } from "@/api/pagesApi";
import { Metadata } from "next";
import { getCategoriesTree } from "@/api/categoriesApi";
import { getProducts } from "@/api/productsApi";
import { getSettings } from "@/api/settingsApi";
import { getPublications } from "@/api/publicationsApi";
import { IPageParams } from "@/types/pageParams.types";
import HomeSectionsWrapper from "@/components/pages/home/HomeSectionsWrapper";

export default async function HomePage({ params: { locale } }: IPageParams) {
    const settings = await getSettings({ locale });
    const categories = await getCategoriesTree({ locale });
    const bestsellerProducts = await getProducts({
        quantity: 10,
        is_bestseller: 1,
        locale,
    });
    const newProducts = await getProducts({
        quantity: 10,
        is_new: 1,
        locale,
    });
    const news = await getPublications({
        type: 2,
        quantity: 6,
        locale,
    });

    return (
        <>
            <HomeSectionsWrapper
                locale={locale}
                settings={settings}
                categories={categories}
                bestsellerProducts={bestsellerProducts}
                newProducts={newProducts}
                news={news}
            />
        </>
    );
}

export async function generateMetadata({
    params: { locale },
}: IPageParams): Promise<Metadata> {
    const page = await getPage({ pageId: 1, locale });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
