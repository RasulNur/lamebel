import StaticRating from "../StaticRating";
import { IReviewCardProps } from "@/types/props.types";

export default function ReviewCard({ review }: IReviewCardProps) {
    return (
        <div className="flex items-center justify-between gap-5 bg-main-light p-5">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <h4 className="font-medium">{review.name}</h4>
                        <p className="text-placeholder text-sm">
                            {review.created_at}
                        </p>
                    </div>
                    <div className="sm:hidden">
                        <StaticRating rating={review.rating} />
                    </div>
                </div>
                <div>
                    <p className="leading-140">{review.body}</p>
                </div>
            </div>
            <div className="sm:block hidden">
                <StaticRating rating={review.rating} />
            </div>
        </div>
    );
}
