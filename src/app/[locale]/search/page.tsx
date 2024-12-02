import { getProducts } from "@/api/productsApi";
import { getTexts } from "@/api/textsApi";
import Search from "@/components/pages/search/Search";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
    IExtendedPageParams,
    IPageParams,
    ISearchPageSearchParams,
} from "@/types/pageParams.types";

export default async function SearchPage({
    searchParams,
    params: { locale },
}: IExtendedPageParams<ISearchPageSearchParams>) {
    const { text } = await getTexts({ locale });
    const { sort, direction, page } = searchParams;
    const products = await getProducts({
        locale,
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
                        locale={locale}
                        products={products}
                        keyword={searchParams.keyword}
                    />
                </div>
            </section>
        </>
    );
}

export async function generateMetadata({ params: { locale } }: IPageParams) {
    const { text } = await getTexts({ locale });

    return {
        title: text("Поиск"),
        description: text("Поиск"),
        keywords: text("Поиск"),
    };
}
