import { getPage } from "@/api/pagesApi";
import CategoriesSwiper from "@/components/ui/CategoriesSwiper";
import HomeBanner from "@/components/pages/home/homeBanner/HomeBanner";
import { Lang } from "@/types/api/api.types";
import { Metadata } from "next";
import ProductsSwiper from "@/components/ui/ProductsSwiper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import HomeAdvantages from "@/components/pages/home/homeAdvantages/HomeAdvantages";
import HomeAbout from "@/components/pages/home/homeAbout/HomeAbout";
import NewsSwiper from "@/components/pages/home/newsSwiper/NewsSwiper";
import ContactsSection from "@/components/ui/ContactsSection";
import ReviewsSwiper from "@/components/pages/home/reviewsSwiper/ReviewsSwiper";
import InstagramSwiper from "@/components/ui/InstagramSwiper";
import SeoSection from "@/components/ui/SeoSection";
import OffersSwiper from "@/components/pages/home/offersSwiper/OffersSwiper";
import MapSection from "@/components/pages/home/mapSection/MapSection";
import { getCategoriesTree } from "@/api/categoriesApi";
import { getProducts } from "@/api/productsApi";
import { getSettings } from "@/api/settingsApi";
import { getPublications } from "@/api/publicationsApi";

export default async function HomePage({
    params: { lang },
}: {
    params: { lang: Lang };
}) {
    const settings = await getSettings({ lang });
    const categories = await getCategoriesTree({ lang });
    const bestsellerProducts = await getProducts({
        quantity: 10,
        is_bestseller: 1,
        lang,
    });
    const newProducts = await getProducts({
        quantity: 10,
        is_new: 1,
        lang,
    });
    const news = await getPublications({
        type: 2,
        quantity: 6,
        lang,
    });

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

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Lang };
}): Promise<Metadata> {
    const page = await getPage({ pageId: 1, lang });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
