import { getTexts } from "@/api/textsApi";
import Wishlist from "@/components/pages/wishlist/Wishlist";
import PageHeader from "@/components/ui/PageHeader";
import { IPageParams } from "@/types/pageParams.types";
import { Metadata } from "next";

export default async function WishlistPage({
    params: { locale },
}: IPageParams) {
    const { text } = await getTexts({ locale });

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
                    <Wishlist locale={locale} />
                </div>
            </section>
        </>
    );
}

export async function generateMetadata({
    params: { locale },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ locale });
    return {
        title: text("Избранное"),
        description: text("Избранное"),
        keywords: text("Избранное"),
    };
}
