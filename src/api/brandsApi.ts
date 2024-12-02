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
    locale,
}: IGetBrandsParams) => {
    return await fetchGET({
        url: `brands/?page=${page}&quantity=${quantity}`,
        tag: "Brands",
        locale,
    }).then((data: IBrands) => data);
};

export const getBrand = async ({ brandId, locale }: IGetBrandParams) => {
    return await fetchGET({
        url: `brands/${brandId}`,
        tag: "Brands",
        locale,
    }).then((data: ISingleBrand) => data);
};

export const getBrandCategories = async ({
    locale,
    brandId,
}: IGetBrandCategoriesParams) => {
    return await fetchGET({
        url: `brands/${brandId}/categories/tree`,
        tag: "Brands",
        locale,
    }).then((data: IBrandCategories) => data);
};
