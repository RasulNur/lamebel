"use client";

import LogoutButton from "@/components/ui/buttons/LogoutButton";
import { useText } from "@/context/text.context";
import { IDashboardTab } from "@/types/types";
import { useCookies } from "next-client-cookies";
import DashboardLink from "./dashboardLink/DashboardLink";
import { IDashboardTabsProps } from "@/types/props/pages.types";

export default function DashboardTabs({
    children,
    activeRoute,
    lang,
}: IDashboardTabsProps) {
    const cookies = useCookies();
    const token = cookies.get("token");
    const { text } = useText();
    const dashboardTabs: IDashboardTab[] = [
        {
            id: 0,
            title: text("Профиль"),
            iconName: "user",
            route: "profile",
        },
        {
            id: 1,
            title: text("Заказы"),
            iconName: "cart",
            route: "orders",
        },
        {
            id: 2,
            title: "Manzillar",
            iconName: "location",
            route: "addresses",
        },
    ];

    return (
        <section className="mt-5 last-section-margin">
            <div className="container">
                <div className="products-grid-wrapper lg:gap-5 gap-10">
                    <div className="flex flex-col gap-4">
                        {dashboardTabs.map((tab) => {
                            return (
                                <DashboardLink
                                    key={tab.id}
                                    activeRoute={activeRoute}
                                    tab={tab}
                                />
                            );
                        })}
                        {token && <LogoutButton lang={lang} />}
                    </div>
                    {children}
                </div>
            </div>
        </section>
    );
}
