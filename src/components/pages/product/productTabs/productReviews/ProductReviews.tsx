import ReviewsForm from "./reviewsForm/ReviewsForm";
import ReviewsList from "./reviewsList/ReviewsList";
import { IProductReviewsProps } from "@/types/props.types";

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
