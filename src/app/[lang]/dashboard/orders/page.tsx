import { getTexts } from "@/api/textsApi";
import { Lang } from "@/types/api/api.types";
import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DashboardTabs from "@/components/pages/dashboard/DashboardTabs";

export default async function OrdersPage({
    params: { lang },
}: {
    params: { lang: Lang };
}) {
    const { text } = await getTexts({ lang });

    return (
        <>
            <PageHeader
                title={text("Мои заказы")}
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Мои заказы"),
                }}
            />

            <DashboardTabs activeRoute="orders" lang={lang}>
                {/* <Orders lang={lang} /> */}
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
        title: text("Мои заказы"),
        description: text("Мои заказы"),
        keywords: text("Мои заказы"),
    };
}
