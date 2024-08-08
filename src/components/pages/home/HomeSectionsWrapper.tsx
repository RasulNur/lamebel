import SectionWrapper from "@/components/layout/SectionWrapper";
import HomeBanner from "./homeBanner/HomeBanner";
import CategoriesSwiper from "@/components/ui/swipers/CategoriesSwiper";
import ProductsSwiper from "@/components/ui/swipers/ProductsSwiper";
import OffersSwiper from "./offersSwiper/OffersSwiper";
import HomeAdvantages from "./homeAdvantages/HomeAdvantages";
import HomeAbout from "./homeAbout/HomeAbout";
import MapSection from "../../ui/sections/MapSection";
import NewsSwiper from "./newsSwiper/NewsSwiper";
import ContactsSection from "@/components/ui/sections/ContactsSection";
import ReviewsSwiper from "./reviewsSwiper/ReviewsSwiper";
import InstagramSwiper from "@/components/ui/swipers/InstagramSwiper";
import SeoSection from "@/components/ui/sections/SeoSection";
import { IHomeSectionWrapperProps } from "@/types/props.types";

export default function HomeSectionsWrapper({
    settings,
    categories,
    bestsellerProducts,
    newProducts,
    news,
    lang,
}: IHomeSectionWrapperProps) {
    return (
        <>
            <HomeBanner />

            <SectionWrapper>
                <CategoriesSwiper categories={categories} />
            </SectionWrapper>

            <SectionWrapper>
                <ProductsSwiper
                    products={newProducts}
                    subtitle="ШИРОКИЙ АССОРТИМЕНТ"
                    title="Новинки"
                />
            </SectionWrapper>

            <SectionWrapper>
                <OffersSwiper />
            </SectionWrapper>

            <SectionWrapper className="bg-main-light section-padding">
                <ProductsSwiper
                    products={bestsellerProducts}
                    subtitle="ШИРОКИЙ АССОРТИМЕНТ"
                    title="Хиты интернет продаж"
                />
            </SectionWrapper>

            <SectionWrapper>
                <HomeAdvantages />
            </SectionWrapper>

            <SectionWrapper>
                <HomeAbout lang={lang} />
            </SectionWrapper>

            <SectionWrapper>
                <MapSection settings={settings} />
            </SectionWrapper>

            <SectionWrapper>
                <NewsSwiper news={news} />
            </SectionWrapper>

            <SectionWrapper className="bg-[url(/images/contacts-bg.png)] bg-center bg-cover bg-no-repeat section-padding">
                <ContactsSection lang={lang} />
            </SectionWrapper>

            <SectionWrapper>
                <ReviewsSwiper />
            </SectionWrapper>

            <SectionWrapper>
                <InstagramSwiper />
            </SectionWrapper>

            <SectionWrapper className="last-section-margin">
                <SeoSection />
            </SectionWrapper>
        </>
    );
}
