import { getPage } from "@/api/pagesApi";
import { getPublications } from "@/api/publicationsApi";
import { getTexts } from "@/api/textsApi";
import News from "@/components/pages/news/News";
import PageHeader from "@/components/ui/PageHeader";
import { Locale } from "@/types/api/api.types";
import {
    IExtendedPageParams,
    INewsPageSearchParams,
} from "@/types/pageParams.types";
import { Metadata } from "next";

export default async function NewsPage({
    params: { locale },
    searchParams,
}: IExtendedPageParams<INewsPageSearchParams>) {
    const page = await getPage({ pageId: 9, locale });
    const { text } = await getTexts({ locale });
    const news = await getPublications({
        type: 2,
        quantity: 12,
        page: Number(searchParams.page),
        locale,
    });

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
                    <News news={news} />
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
    const page = await getPage({ pageId: 9, locale });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
