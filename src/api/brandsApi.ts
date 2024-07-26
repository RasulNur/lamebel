import {
    IBrandCategories,
    IBrands,
    IGetBrandCategoriesParams,
    IGetBrandParams,
    IGetBrandsParams,
    ISingleBrand,
} from "@/types/api/brand.types";

import { fetchGET } from "./fetch";

export const getBrands = async ({
    page = 1,
    quantity = 20,
    lang,
}: IGetBrandsParams) => {
    return await fetchGET({
        url: `brands/?page=${page}&quantity=${quantity}`,
        tag: "Brands",
        lang,
    }).then((data: IBrands) => data);
};

export const getBrand = async ({ brandId, lang }: IGetBrandParams) => {
    return await fetchGET({
        url: `brands/${brandId}`,
        tag: "Brands",
        lang,
    }).then((data: ISingleBrand) => data);
};

export const getBrandCategories = async ({
    lang,
    brandId,
}: IGetBrandCategoriesParams) => {
    return await fetchGET({
        url: `brands/${brandId}/categories/tree`,
        tag: "Brands",
        lang,
    }).then((data: IBrandCategories) => data);
};
