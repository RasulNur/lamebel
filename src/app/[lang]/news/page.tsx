import { getPage } from "@/api/pagesApi";
import { getPublications } from "@/api/publicationsApi";
import { getTexts } from "@/api/textsApi";
import News from "@/components/pages/news/News";
import PageHeader from "@/components/ui/PageHeader";
import { Lang } from "@/types/api/api.types";
import { INewsPageParams } from "@/types/pageParams.types";
import { Metadata } from "next";

export default async function NewsPage({
    params: { lang },
    searchParams,
}: INewsPageParams) {
    const page = await getPage({ pageId: 9, lang });
    const { text } = await getTexts({ lang });
    const news = await getPublications({
        type: 2,
        quantity: 12,
        page: Number(page),
        lang,
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
    params: { lang },
}: {
    params: { lang: Lang };
}): Promise<Metadata> {
    const page = await getPage({ pageId: 9, lang });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
