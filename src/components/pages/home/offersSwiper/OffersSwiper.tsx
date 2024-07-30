import OfferCard from "@/components/ui/OfferCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const offers = [
    {
        id: 0,
        title: "Мебель и товары для детской со скидками",
        img: "/images/offers/01.png",
    },
    {
        id: 1,
        title: "Мебель и товары для детской со скидками",
        img: "/images/offers/02.png",
    },
    {
        id: 2,
        title: "Мебель и товары для детской со скидками",
        img: "/images/offers/03.png",
    },
];

export default function OffersSwiper() {
    return (
        <div className="section-header-wrapper">
            <SectionHeader
                title="ШИРОКИЙ АССОРТИМЕНТ"
                subtitle="Рекомендуем сегодня"
            />

            <Swiper
                slidesPerView={1.2}
                speed={600}
                spaceBetween={24}
                autoplay={{ delay: 10000 }}
                modules={[Autoplay, Pagination]}
                className="swiper-with-grid products-swiper"
                breakpoints={{
                    370: { slidesPerView: 1.5 },
                    520: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                pagination={{
                    clickable: true,
                    type: "bullets",
                    hiddenClass: "!hidden",
                }}>
                {offers.map((offer) => {
                    return (
                        <SwiperSlide key={offer.id} className="h-auto">
                            <OfferCard offer={offer} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
