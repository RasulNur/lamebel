import { getPage } from "@/api/pagesApi";
import { getTexts } from "@/api/textsApi";
import Brands from "@/components/pages/brands/Brands";
import PageHeader from "@/components/ui/PageHeader";
import { Lang } from "@/types/api/api.types";
import {
    IExtendedPageParams,
    INewsPageSearchParams,
} from "@/types/pageParams.types";
import { Metadata } from "next";

export default async function BrandsPage({
    params: { lang },
    searchParams,
}: IExtendedPageParams<INewsPageSearchParams>) {
    const page = await getPage({ pageId: 14, lang });
    const { text } = await getTexts({ lang });

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
                    <Brands page={searchParams.page} lang={lang} />
                </div>
            </section>
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Lang };
}): Promise<Metadata> {
    const page = await getPage({ pageId: 14, lang });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
