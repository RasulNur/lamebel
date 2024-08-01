import { getTexts } from "@/api/textsApi";
import { Lang } from "@/types/api/api.types";
import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DashboardTabs from "@/components/pages/dashboard/DashboardTabs";

export default async function AddressesPage({
    params: { lang },
}: {
    params: { lang: Lang };
}) {
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
                {/* <Addresses lang={lang} /> */}
            </DashboardTabs>
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Lang };
}): Promise<Metadata> {
    const { text } = await getTexts({ lang });
    return {
        title: "Адреса",
        description: "Адреса",
        keywords: "Адреса",
    };
}
