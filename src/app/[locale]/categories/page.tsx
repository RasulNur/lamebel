import { Metadata } from "next";
import { getTexts } from "@/api/textsApi";
import PageHeader from "@/components/ui/PageHeader";
import { getCategoriesTree } from "@/api/categoriesApi";
import Catalog from "@/components/pages/categories/Catalog";
import { IPageParams } from "@/types/pageParams.types";

export default async function CategoriesPage({
    params: { locale },
}: IPageParams) {
    const { text } = await getTexts({ locale });
    const categoriesTree = await getCategoriesTree({ locale });
    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Категории"),
                }}
                title={text("Категории")}
            />

            <section className="mt-5 last-section-margin">
                <div className="container">
                    <Catalog categoriesTree={categoriesTree} />
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
        title: text("Категории"),
        description: text("Категории"),
        keywords: text("Категории"),
    };
}
