import ReviewCard from "@/components/ui/ReviewCard";
import { IReviews } from "@/types/api/reviews.types";

export default function ReviewsList({ reviews }: { reviews: IReviews }) {
    return (
        <div className="flex flex-col gap-5">
            {reviews.data.map((review) => {
                return <ReviewCard key={review.id} review={review} />;
            })}
        </div>
    );
}
