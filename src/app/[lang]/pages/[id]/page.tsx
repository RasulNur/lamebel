import { getPage, getPages } from "@/api/pagesApi";
import { getTexts } from "@/api/textsApi";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Lang } from "@/types/api/api.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "../../../../components/ui/PageHeader";

export default async function TextPage({
    params: { id, lang },
}: {
    params: { id: string; lang: Lang };
}) {
    const page = await getPage({
        pageId: Number(id.split("-")[0]),
        lang,
    });
    const { text } = await getTexts({ lang });

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: page.data.seo_title,
                }}
                title={page.data.seo_title}
            />
            <section className="mt-5 last-section-margin">
                <div className="container">
                    <div
                        className="text-section lg:mt-10 mt-5"
                        dangerouslySetInnerHTML={{
                            __html: page.data.body,
                        }}></div>
                </div>
            </section>
        </>
    );
}

export async function generateMetadata({
    params: { id, lang },
}: {
    params: { id: string; lang: Lang };
}): Promise<Metadata> {
    const slug = id.split("-").slice(1).join("-");

    const page = await getPage({ pageId: Number(id.split("-")[0]), lang });

    if (!page || page.data.slug !== slug) notFound();

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
