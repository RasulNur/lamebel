import Link from "next/link";
import Icon from "./Icon";

interface IOffer {
    id: number;
    title: string;
    img: string;
}

export default function OfferCard({ offer }: { offer: IOffer }) {
    return (
        <Link
            href="/"
            className="group relative flex items-end 2xl:p-8 md:p-6 p-4 h-full overflow-hidden">
            <div
                className="absolute top-0 left-0 size-full bg-center bg-no-repeat bg-cover transition-all duration-700 group-hover:scale-125"
                style={{ backgroundImage: `url(${offer.img})` }}></div>

            <h4 className="lg:text-2xl md:text-xl text-lg font-semibold text-white group-hover:text-main leading-130 transition-300 relative z-[1]">
                {offer.title}
            </h4>
            <div className="absolute 2xl:right-8 md:right-6 right-4 2xl:top-8 md:top-6 top-4 z-[1]">
                <Icon
                    name="tag"
                    className="w-[56px] h-[24px] stroke-main fill-main"
                />
                <span className="absolute left-[22px] top-1/2 -translate-y-1/2 text-[12px] font-medium text-white">
                    -15%
                </span>
            </div>
        </Link>
    );
}
