import { getPage } from "@/api/pagesApi";
import { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";
import InstagramSwiper from "@/components/ui/swipers/InstagramSwiper";
import MapSection from "@/components/ui/sections/MapSection";
import { getTexts } from "@/api/textsApi";
import { getSettings } from "@/api/settingsApi";
import PageHeader from "../../../components/ui/PageHeader";
import Contacts from "@/components/pages/contacts/Contacts";
import { IPageParams } from "@/types/pageParams.types";

export default async function HomePage({ params: { locale } }: IPageParams) {
    const settings = await getSettings({ locale });
    const page = await getPage({ pageId: 2, locale });
    const { text } = await getTexts({ locale });

    return (
        <>
            <PageHeader
                title={page.data.seo_title}
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: page.data.seo_title,
                }}
            />

            <section className="mt-5">
                <div className="container">
                    <Contacts settings={settings} locale={locale} />
                </div>
            </section>

            <SectionWrapper>
                <MapSection settings={settings} />
            </SectionWrapper>

            <SectionWrapper className="last-section-margin">
                <InstagramSwiper />
            </SectionWrapper>
        </>
    );
}

export async function generateMetadata({
    params: { locale },
}: IPageParams): Promise<Metadata> {
    const page = await getPage({ pageId: 2, locale });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
