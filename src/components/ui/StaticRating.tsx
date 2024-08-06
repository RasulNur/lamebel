import Icon from "./Icon";

export default function StaticRating({ rating }: { rating: number }) {
    return (
        <div className="grid grid-cols-5 gap-1 items-center w-max">
            {Array(rating)
                .fill("")
                .map((el, id) => {
                    return (
                        <div key={id}>
                            <Icon
                                name="star"
                                className="fill-main stroke-main"
                            />
                        </div>
                    );
                })}
            {Array(5 - rating)
                .fill("")
                .map((el, id) => {
                    return (
                        <div key={id}>
                            <Icon
                                name="star"
                                className="fill-placeholder stroke-placeholder"
                            />
                        </div>
                    );
                })}
        </div>
    );
}
