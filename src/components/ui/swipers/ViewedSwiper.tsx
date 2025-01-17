"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { useViewed } from "@/context/viewed.context";
import ProductsSwiper from "./ProductsSwiper";
import { IViewedSwiperProps } from "@/types/props/ui.types";

export default function ViewedSwiper({
    productId,
    locale,
}: IViewedSwiperProps) {
    const { viewed } = useViewed();
    return (
        <>
            {viewed.length > 0 && (
                <SectionWrapper>
                    <ProductsSwiper
                        locale={locale}
                        products={viewed.filter((el) => {
                            if (el.id !== productId) {
                                return el;
                            }
                        })}
                        subtitle="ШИРОКИЙ АССОРТИМЕНТ"
                        title="Вы уже смотрели"
                    />
                </SectionWrapper>
            )}
        </>
    );
}
