import { getTexts } from "@/api/textsApi";
import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DashboardTabs from "@/components/pages/dashboard/DashboardTabs";
import { getCookies } from "next-client-cookies/server";
import { getOrders } from "@/api/orderApi";
import Orders from "../../../../components/pages/orders/Orders";
import { IPageParams } from "@/types/pageParams.types";

export default async function OrdersPage({ params: { locale } }: IPageParams) {
    const { text } = await getTexts({ locale });
    const cookies = getCookies();
    const orders = await getOrders({ token: cookies.get("token"), locale });

    return (
        <>
            <PageHeader
                title={text("Мои заказы")}
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Мои заказы"),
                }}
            />

            <DashboardTabs activeRoute="orders" locale={locale}>
                {typeof orders !== "string" && <Orders orders={orders} />}
            </DashboardTabs>
        </>
    );
}

export async function generateMetadata({
    params: { locale },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ locale });
    return {
        title: text("Мои заказы"),
        description: text("Мои заказы"),
        keywords: text("Мои заказы"),
    };
}
