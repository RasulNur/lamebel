"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const posts = [
    { id: 0, img: "/images/inst/01.png" },
    { id: 1, img: "/images/inst/02.png" },
    { id: 2, img: "/images/inst/03.png" },
    { id: 3, img: "/images/inst/01.png" },
    { id: 4, img: "/images/inst/02.png" },
    { id: 5, img: "/images/inst/03.png" },
];

export default function InstagramSwiper() {
    return (
        <div>
            <div className="mb-[60px] flex flex-wrap gap-5 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Image
                        src="/images/instagram.png"
                        alt=""
                        width={70}
                        height={70}
                    />
                    <h3 className="font-semibold text-2xl">
                        Актуальные новости в instagram
                    </h3>
                </div>
                <Link href="/" className="main-btn">
                    Подписывайтесь на нас
                </Link>
            </div>
            <Swiper
                slidesPerView={1.5}
                speed={600}
                spaceBetween={20}
                autoplay={{ delay: 10000 }}
                modules={[Autoplay]}
                className="swiper-with-grid"
                breakpoints={{
                    500: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                pagination={{
                    clickable: true,
                    type: "bullets",
                    hiddenClass: "!hidden",
                }}>
                {posts.map((post, id) => {
                    return (
                        <SwiperSlide key={post.id} className="h-auto">
                            <Link href="/">
                                <Image
                                    src={post.img}
                                    alt=""
                                    width={360}
                                    height={360}
                                    className="w-full h-auto object-contain object-center"
                                />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
