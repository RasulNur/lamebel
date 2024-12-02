import { IGetPromotionsParams, IPromotions } from "@/types/api/promotion.types";

import { fetchGET } from "./fetch";

export const getPromotions = async ({
    page = 1,
    quantity = 10,
    type,
    locale,
}: IGetPromotionsParams) => {
    return await fetchGET({
        url: `promotions?page=${page}&quantity=${quantity}${
            type ? `&type=${type}` : null
        }`,
        tag: "Promotions",
        locale,
    }).then((data: IPromotions) => data);
};
