"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "./Icon";

export default function ProductSticker() {
    const texts = [{ text: "Экстраскидка" }, { text: "до 21 августа" }];
    return (
        <div className="bg-orange-light rounded-[32px] flex items-center px-2 gap-2">
            <Icon name="fire" className="fill-orange" />
            <Swiper
                slidesPerView={1}
                speed={600}
                spaceBetween={20}
                autoplay={{ delay: 5000 }}
                loop={true}
                direction="vertical"
                draggable={false}
                modules={[Autoplay]}
                className="h-[32px]">
                {texts.map((el, id) => {
                    return (
                        <SwiperSlide
                            key={id}
                            className="flex items-center text-sm leading-120 font-semibold pointer-events-none">
                            {el.text}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
