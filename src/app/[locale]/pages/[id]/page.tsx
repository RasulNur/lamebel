import { getPage } from "@/api/pagesApi";
import { getTexts } from "@/api/textsApi";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "../../../../components/ui/PageHeader";
import { IPageParamsWithId } from "@/types/pageParams.types";

export default async function TextPage({
    params: { id, locale },
}: IPageParamsWithId) {
    const page = await getPage({
        pageId: Number(id.split("-")[0]),
        locale,
    });
    const { text } = await getTexts({ locale });

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
    params: { id, locale },
}: IPageParamsWithId): Promise<Metadata> {
    const slug = id.split("-").slice(1).join("-");

    const page = await getPage({ pageId: Number(id.split("-")[0]), locale });

    if (!page || page.data.slug !== slug) notFound();

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
