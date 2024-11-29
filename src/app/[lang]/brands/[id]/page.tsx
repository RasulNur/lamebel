import { getBrand } from "@/api/brandsApi";
import { getTexts } from "@/api/textsApi";
import Brand from "@/components/pages/brands/Brand";
import PageHeader from "@/components/ui/PageHeader";
import { IBrandPageParams, IPageParamsWithId } from "@/types/pageParams.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function BrandPage({
    params: { id, lang },
    searchParams,
}: IBrandPageParams) {
    const { text } = await getTexts({ lang: lang });
    const brand = await getBrand({
        brandId: Number(id.split("-")[0]),
        lang,
    });
    return (
        <>
            <PageHeader
                title={brand.data.h1_name}
                breadcrumbs={{
                    links: [
                        { href: "/", title: text("Главная") },
                        { href: "/brands", title: text("Бренды") },
                    ],
                    current: brand.data.h1_name,
                }}
            />
            <section className="mt-5 last-section-margin">
                <div className="container">
                    <Brand
                        lang={lang}
                        brandId={Number(id.split("-")[0])}
                        page={searchParams.page}
                    />
                </div>
            </section>
        </>
    );
}

export async function generateMetadata({
    params: { id, lang },
}: IPageParamsWithId): Promise<Metadata> {
    const slug = id.split("-").slice(1).join("-");

    const brand = await getBrand({
        brandId: Number(id.split("-")[0]),
        lang,
    });

    if (!brand || brand.data.slug !== slug) notFound();

    return {
        title: brand.data.seo_title,
        description: brand.data.meta_description,
        keywords: brand.data.meta_keywords,
    };
}
