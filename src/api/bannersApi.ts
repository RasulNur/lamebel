import { fetchGET } from "./fetch";

import { IBanners, IGetBannersParams } from "@/types/api/banners.types";

export const getBanners = async ({ type, locale }: IGetBannersParams) => {
    return await fetchGET({
        url: `banners?type=${type}`,
        tag: "Banners",
        locale,
    }).then((data: IBanners) => data);
};
