"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { useText } from "@/context/text.context";

const slides = [
    {
        id: 0,
        title: "Индивидуальная мебель на заказ",
        descr: "это уникальная возможность создать интерьер, полностью соответствующий вашим вкусам и потребностям.",
        img: "/images/home-banner.png",
    },
    {
        id: 1,
        title: "Индивидуальная мебель на заказ",
        descr: "это уникальная возможность создать интерьер, полностью соответствующий вашим вкусам и потребностям.",
        img: "/images/home-banner.png",
    },
    {
        id: 2,
        title: "Индивидуальная мебель на заказ",
        descr: "это уникальная возможность создать интерьер, полностью соответствующий вашим вкусам и потребностям.",
        img: "/images/home-banner.png",
    },
];

export default function HomeBanner() {
    const { text } = useText();
    return (
        <Swiper
            slidesPerView={1}
            speed={600}
            spaceBetween={20}
            autoplay={{ delay: 10000 }}
            modules={[Autoplay, Navigation, Pagination]}
            className="home-header-banner h-screen min-h-[400px] xl:max-h-[700px] lg:max-h-[600px] sm:max-h-[550px] max-h-[500px]"
            // pagination={{
            //     type: "fraction",
            // }}
            navigation={{
                hiddenClass: "!hidden",
                disabledClass: "pointer-events-none",
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            }}>
            {slides.map((slide) => {
                return (
                    <SwiperSlide
                        key={slide.id}
                        className="bg-[linear-gradient(135deg,rgba(255,228,145,0.4)_0%,rgba(249,203,182,0.4)_100%)]">
                        <div className="relative container flex flex-col lg:justify-center xl:gap-12 gap-8 h-full lg:py-0 sm:py-20 py-10">
                            <div className="flex flex-col xl:gap-6 gap-4 2xl:max-w-[860px] xl:max-w-[690px] lg:max-w-[500px] relative z-[2]">
                                <h2 className="font-medium 2xl:text-[80px] xl:text-6xl md:text-4xl text-2xl leading-100">
                                    {slide.title}
                                </h2>

                                <p className="font-medium xl:text-xl md:text-lg text-base leading-140">
                                    {slide.descr}
                                </p>
                            </div>

                            <button className="main-btn">
                                {text("Подробнее")}
                            </button>

                            <div className="absolute right-0 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto sm:bottom-20 bottom-10 after:absolute lg:after:block after:hidden after:right-3 after:bottom-5 after:bg-white after:rounded-full xl:after:size-[494px] after:size-[420px] after:z-[-2]">
                                <Image
                                    src={slide.img}
                                    alt={slide.title}
                                    width={470}
                                    height={620}
                                    className="xl:w-[470px] lg:w-[350px] md:w-[300px] sm:w-[250px] w-[220px] h-auto object-contain relative z-[-1]"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
            <div className="absolute left-0 top-0 size-full">
                <div className="container size-full flex items-end">
                    <div className="relative z-[2] w-max">
                        <button className="group md:p-5 p-4 bg-white swiper-prev">
                            <Icon
                                name="chevron"
                                className="stroke-primary group-hover:stroke-main md:size-5 rotate-180"
                            />
                        </button>
                        <button className="group md:p-5 p-4 bg-white swiper-next">
                            <Icon
                                name="chevron"
                                className="stroke-primary group-hover:stroke-main md:size-5"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Swiper>
    );
}
