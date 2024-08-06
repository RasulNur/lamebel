import { Lang } from "./api/api.types";
import { OrderBy, SortDirectionType } from "./types";

export interface IRootLayoutParams {
    children: React.ReactNode;
    params: { lang: Lang };
}
export interface INewsPageParams {
    params: { lang: Lang };
    searchParams: { page?: string };
}
export interface ICategoryPageParams {
    params: { id: string; lang: Lang };
    searchParams: ICategorySearchParams;
}
export interface ICategorySearchParams {
    is_discounted?: string;
    is_bestseller?: string;
    is_new?: string;
    is_popular?: string;
    is_promotion?: string;
    is_special?: string;
    price?: string;
    brands?: string;
    attributes?: string;
    sort?: OrderBy;
    direction?: SortDirectionType;
    page?: string;
}
export interface ISearchParams {
    params: { lang: Lang };
    searchParams: {
        keyword: string;
        page?: string;
        sort?: OrderBy;
        direction?: SortDirectionType;
    };
}
export interface ICategoriesPagesProps {
    searchParams: {
        page?: string;
    };
    params: { lang: Lang };
}
