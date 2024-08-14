import { IProductReviewsProps } from "@/types/props/pages.types";
import ReviewsForm from "./reviewsForm/ReviewsForm";
import ReviewsList from "./reviewsList/ReviewsList";

export default function ProductReviews({
    product,
    lang,
    reviews,
}: IProductReviewsProps) {
    return (
        <div className="flex flex-col gap-10">
            <ReviewsList reviews={reviews} />
            <ReviewsForm product={product} lang={lang} />
        </div>
    );
}
