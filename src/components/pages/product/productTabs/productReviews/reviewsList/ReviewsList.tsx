import ReviewCard from "@/components/ui/ReviewCard";
import { IReviewsListProps } from "@/types/props.types";

export default function ReviewsList({ reviews }: IReviewsListProps) {
    return (
        <div className="flex flex-col gap-5">
            {reviews.data.map((review) => {
                return <ReviewCard key={review.id} review={review} />;
            })}
        </div>
    );
}
