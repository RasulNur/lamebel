import { Locale } from "./api/api.types";
import { OrderBy, SortDirectionType } from "./types";

export interface IRootLayoutParams extends IPageParams {
    children: React.ReactNode;
}

export interface ICategoryPageParams {
    params: { id: string; locale: Locale };
    searchParams: ICategoryPageSearchParams;
}
export interface ICategoryPageSearchParams {
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

export interface ISearchPageSearchParams {
    keyword: string;
    page?: string;
    sort?: OrderBy;
    direction?: SortDirectionType;
}

export interface INewsPageSearchParams {
    page?: string;
}
export interface IBrandsPageSearchParams {
    page?: string;
}

export type CategoriesPagesParams = IExtendedPageParams<{
    page?: string;
}>;

export interface IExtendedPageParams<SearchParams> extends IPageParams {
    searchParams: SearchParams;
}

export interface IPageParams {
    params: { locale: Locale };
}

export interface IPageParamsWithId {
    params: { id: string; locale: Locale };
}
export interface IBrandPageParams {
    params: { id: string; locale: Locale };
    searchParams: { page?: string };
}
