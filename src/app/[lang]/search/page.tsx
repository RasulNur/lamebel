import { getProducts } from "@/api/productsApi";
import { getTexts } from "@/api/textsApi";
import Search from "@/components/pages/search/Search";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Lang } from "@/types/api/api.types";
import { ISearchParams } from "@/types/pageParams.types";

export default async function SearchPage({
    searchParams,
    params: { lang },
}: ISearchParams) {
    const { text } = await getTexts({ lang });
    const { sort, direction, page } = searchParams;
    const products = await getProducts({
        lang,
        page: Number(page),
        quantity: 20,
        search: searchParams.keyword,
        order_by: sort ? sort : "created_at",
        order_direction: direction ? direction : "desc",
    });
    return (
        <>
            <div className="container py-5 flex flex-col gap-3">
                <Breadcrumbs
                    breadcrumbs={{
                        links: [{ href: "/", title: text("Главная") }],
                        current: text("Поиск"),
                    }}
                />

                <h1 className="font-bold lg:text-[28px] md:text-2xl text-xl leading-120">
                    {text("Поиск")}{" "}
                    <span className="text-sm text-placeholder">
                        ({searchParams.keyword})
                    </span>
                </h1>
            </div>

            <section className="mt-5 last-section-margin">
                <div className="container">
                    <Search
                        products={products}
                        keyword={searchParams.keyword}
                    />
                </div>
            </section>
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Lang };
}) {
    const { text } = await getTexts({ lang });

    return {
        title: text("Поиск"),
        description: text("Поиск"),
        keywords: text("Поиск"),
    };
}
