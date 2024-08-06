import { getTexts } from "@/api/textsApi";
import DashboardTabs from "@/components/pages/dashboard/DashboardTabs";
import Profile from "@/components/pages/profile/Profile";
import PageHeader from "@/components/ui/PageHeader";
import { IPageParams } from "@/types/pageParams.types";
import { Metadata } from "next";

export default async function ProfilePage({ params: { lang } }: IPageParams) {
    const { text } = await getTexts({ lang });
    return (
        <>
            <PageHeader
                breadcrumbs={{
                    links: [{ href: "/", title: text("Главная") }],
                    current: text("Профиль"),
                }}
                title={text("Профиль")}
            />

            <DashboardTabs activeRoute="profile" lang={lang}>
                <Profile lang={lang} />
            </DashboardTabs>
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: IPageParams): Promise<Metadata> {
    const { text } = await getTexts({ lang });
    return {
        title: text("Профиль"),
        description: text("Профиль"),
        keywords: text("Профиль"),
    };
}
