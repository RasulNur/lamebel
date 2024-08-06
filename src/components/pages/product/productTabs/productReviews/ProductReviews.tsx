import ReviewsForm from "./reviewsForm/ReviewsForm";
import ReviewsList from "./reviewsList/ReviewsList";
import { ISingleProduct } from "@/types/api/products.types";
import { Lang } from "@/types/api/api.types";
import { IReviews } from "@/types/api/reviews.types";

export default function ProductReviews({
    product,
    lang,
    reviews,
}: {
    product: ISingleProduct;
    lang: Lang;
    reviews: IReviews;
}) {
    return (
        <div className="flex flex-col gap-10">
            <ReviewsList reviews={reviews} />
            <ReviewsForm product={product} lang={lang} />
        </div>
    );
}
