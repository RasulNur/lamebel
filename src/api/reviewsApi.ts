import { fetchGET, fetchMutate } from "./fetch";
import {
    ICreateReviewParams,
    IGetReviewsParams,
    IReviews,
} from "@/types/api/reviews.types";
import toast from "react-hot-toast";

export const getReviews = async ({ lang, productId }: IGetReviewsParams) => {
    return await fetchGET({
        url: `reviews?product_id=${productId}`,
        tag: "Reviews",
        lang,
    }).then((data: IReviews) => data);
};

export const createReview = async ({ body, lang }: ICreateReviewParams) => {
    return await fetchMutate({
        url: "reviews",
        body,
        method: "POST",
        tag: "Reviews",
        lang,
    }).then((data: { message: string }) => {
        toast.success(data.message);
    });
};