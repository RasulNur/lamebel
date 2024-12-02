import { getPage } from "@/api/pagesApi";
import { getTexts } from "@/api/textsApi";
import Brands from "@/components/pages/brands/Brands";
import PageHeader from "@/components/ui/PageHeader";
import { Locale } from "@/types/api/api.types";
import {
    IBrandsPageSearchParams,
    IExtendedPageParams,
} from "@/types/pageParams.types";
import { Metadata } from "next";

export default async function BrandsPage({
    params: { locale },
    searchParams,
}: IExtendedPageParams<IBrandsPageSearchParams>) {
    const page = await getPage({ pageId: 14, locale });
    const { text } = await getTexts({ locale });

    return (
        <>
            <PageHeader
                title={page.data.seo_title}
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: page.data.seo_title,
                }}
            />

            <section className="mt-5 last-section-margin">
                <div className="container">
                    <Brands page={searchParams.page} locale={locale} />
                </div>
            </section>
        </>
    );
}

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: Locale };
}): Promise<Metadata> {
    const page = await getPage({ pageId: 14, locale });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
