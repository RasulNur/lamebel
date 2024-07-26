import { getPage } from "@/api/pagesApi";
import { Lang } from "@/types/api/api.types";
import { Metadata } from "next";

export default async function HomePage({
    params: { lang },
}: {
    params: { lang: Lang };
}) {
    return <div className="container"></div>;
}

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Lang };
}): Promise<Metadata> {
    const page = await getPage({ pageId: 1, lang });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
