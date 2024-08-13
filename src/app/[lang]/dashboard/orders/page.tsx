import { getTexts } from "@/api/textsApi";
import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import DashboardTabs from "@/components/pages/dashboard/DashboardTabs";
import { getCookies } from "next-client-cookies/server";
import { getOrders } from "@/api/orderApi";
import Orders from "../../../../components/pages/orders/Orders";
import { IPageParams } from "@/types/pageParams.types";

export default async function OrdersPage({ params: { lang } }: IPageParams) {
    const { text } = await getTexts({ lang });
    const cookies = getCookies();
    const orders = await getOrders({ token: cookies.get("token"), lang });

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
                {typeof orders !== "string" && <Orders orders={orders} />}
            </DashboardTabs>
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ lang });
    return {
        title: text("Мои заказы"),
        description: text("Мои заказы"),
        keywords: text("Мои заказы"),
    };
}
