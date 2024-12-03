import { ILinks, IMeta, Locale } from "./api.types";

export interface IReviews {
    data: IReview[];
    links: ILinks;
    meta: IMeta;
}

export interface IReview {
    id: number;
    name: string;
    email: string;
    body: string;
    rating: number;
    created_at: string;
}

export interface ICreateReviewParams {
    body: {
        product_id: number;
        name: string;
        email: string;
        body: string;
        rating: number;
    };
    locale: Locale;
}
export interface IGetReviewsParams {
    locale: Locale;
    productId: number;
}
