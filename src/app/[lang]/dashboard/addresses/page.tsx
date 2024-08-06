import { getTexts } from "@/api/textsApi";
import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DashboardTabs from "@/components/pages/dashboard/DashboardTabs";
import Addresses from "@/components/pages/addresses/Addresses";
import { IPageParams } from "@/types/pageParams.types";

export default async function AddressesPage({ params: { lang } }: IPageParams) {
    const { text } = await getTexts({ lang });

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: "Manzillar",
                }}
                title="Manzillar"
            />

            <DashboardTabs activeRoute="addresses" lang={lang}>
                <Addresses lang={lang} />
            </DashboardTabs>
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ lang });
    return {
        title: "Адреса",
        description: "Адреса",
        keywords: "Адреса",
    };
}
