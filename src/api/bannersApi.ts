import { fetchGET } from "./fetch";

import { IBanners, IGetBannersParams } from "@/types/api/banners.types";

export const getBanners = async ({ type, lang }: IGetBannersParams) => {
    return await fetchGET({
        url: `banners?type=${type}`,
        tag: "Banners",
        lang,
    }).then((data: IBanners) => data);
};
