import { ILinks, ILocalization, IMeta, Locale } from "./api.types";

export interface IPromotions {
    data: IPromotion[];
    links: ILinks;
    meta: IMeta;
}

export interface IPromotion {
    id: number;
    slug: string;
    name: string;
    url: string;
    img: string;
    medium_img: string;
    description: string;
    start_at: string;
    end_at: string;
    is_archived: boolean;
    localization: ILocalization;
}

export interface IGetPromotionsParams {
    page?: number;
    quantity?: number;
    type?: "active" | "archived";
    locale: Locale;
}
