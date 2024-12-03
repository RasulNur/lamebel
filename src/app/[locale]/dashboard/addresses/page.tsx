import { getTexts } from "@/api/textsApi";
import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DashboardTabs from "@/components/pages/dashboard/DashboardTabs";
import Addresses from "@/components/pages/addresses/Addresses";
import { IPageParams } from "@/types/pageParams.types";

export default async function AddressesPage({
    params: { locale },
}: IPageParams) {
    const { text } = await getTexts({ locale });

    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: "Manzillar",
                }}
                title="Manzillar"
            />

            <DashboardTabs activeRoute="addresses" locale={locale}>
                <Addresses locale={locale} />
            </DashboardTabs>
        </>
    );
}

export async function generateMetadata({
    params: { locale },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ locale });
    return {
        title: "Адреса",
        description: "Адреса",
        keywords: "Адреса",
    };
}
