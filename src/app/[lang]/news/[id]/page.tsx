import { getPublication } from "@/api/publicationsApi";
import { getTexts } from "@/api/textsApi";
import SingleNews from "@/components/pages/news/SingleNews";
import PageHeader from "@/components/ui/PageHeader";
import { IPageParamsWithId } from "@/types/pageParams.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function SingleNewsPage({ params }: IPageParamsWithId) {
    const id = params.id.split("-")[0];
    const { text } = await getTexts({ lang: params.lang });
    const publication = await getPublication({
        id: Number(id),
        lang: params.lang,
    });
    return (
        <>
            <PageHeader
                title={publication.data.seo_title}
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: publication.data.seo_title,
                }}
            />
            <section className="mt-5 last-section-margin">
                <div className="container">
                    <SingleNews publication={publication} />
                </div>
            </section>
        </>
    );
}

export async function generateMetadata({
    params,
}: IPageParamsWithId): Promise<Metadata> {
    const id = params.id.split("-")[0];
    const slug = params.id.split("-").slice(1).join("-");

    const publication = await getPublication({
        id: Number(id),
        lang: params.lang,
    });

    if (!publication || publication.data.slug !== slug) notFound();

    return {
        title: publication.data.seo_title,
        description: publication.data.meta_description,
        keywords: publication.data.meta_keywords,
    };
}
