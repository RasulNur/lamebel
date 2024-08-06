import { getPage } from "@/api/pagesApi";
import { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";
import InstagramSwiper from "@/components/ui/InstagramSwiper";
import MapSection from "@/components/pages/home/mapSection/MapSection";
import { getTexts } from "@/api/textsApi";
import { getSettings } from "@/api/settingsApi";
import PageHeader from "../../../components/ui/PageHeader";
import Contacts from "@/components/pages/contacts/Contacts";
import { IPageParams } from "@/types/pageParams.types";

export default async function HomePage({ params: { lang } }: IPageParams) {
    const settings = await getSettings({ lang });
    const page = await getPage({ pageId: 2, lang });
    const { text } = await getTexts({ lang });

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
                    <Contacts settings={settings} lang={lang} />
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
    params: { lang },
}: IPageParams): Promise<Metadata> {
    const page = await getPage({ pageId: 2, lang });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
