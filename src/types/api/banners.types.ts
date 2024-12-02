import { Locale } from "./api.types";

export interface IBanners {
    data: IBanner[];
}
export interface IBanner {
    id: number;
    name: string;
    description: string;
    button_text: string;
    url: string;
    img: string;
}

export type BannerType =
    | "home_slider"
    | "home_2"
    | "home_3"
    | "home_4"
    | "home_5";

export interface IGetBannersParams {
    type: BannerType;
    locale: Locale;
}
