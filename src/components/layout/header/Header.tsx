import { Lang } from "@/types/api/api.types";
import { getSettings } from "@/api/settingsApi";
import HeaderCategories from "../headerCategories/HeaderCategories";
import HeaderTop from "./headerTop/HeaderTop";

export default async function Header({ lang }: { lang: Lang }) {
    const settings = await getSettings({ lang });
    return (
        <header className="sticky top-0 z-[90] bg-white shadow-md">
            <HeaderTop lang={lang} settings={settings} />
            <HeaderCategories />
        </header>
    );
}
