import { getTexts } from "@/api/textsApi";
import Wishlist from "@/components/pages/wishlist/Wishlist";
import PageHeader from "@/components/ui/PageHeader";
import { Lang } from "@/types/api/api.types";
import { Metadata } from "next";

export default async function WishlistPage({
    params: { lang },
}: {
    params: { lang: Lang };
}) {
    const { text } = await getTexts({ lang });

    return (
        <>
            <PageHeader
                title={text("Избранное")}
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Избранное"),
                }}
            />

            <section className="mt-5 last-section-margin">
                <div className="container">
                    <Wishlist />
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
    const { text } = await getTexts({ lang });
    return {
        title: text("Избранное"),
        description: text("Избранное"),
        keywords: text("Избранное"),
    };
}
