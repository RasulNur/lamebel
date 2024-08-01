import { Lang } from "@/types/api/api.types";
import { getSettings } from "@/api/settingsApi";
import HeaderCategories from "../headerCategories/HeaderCategories";
import HeaderTop from "./headerTop/HeaderTop";
import { getMenu } from "@/api/menusApi";

export default async function Header({ lang }: { lang: Lang }) {
    const settings = await getSettings({ lang });
    const menu = await getMenu({ menuId: 2, lang });
    return (
        <header className="sticky top-0 z-[90] bg-white shadow-md">
            <HeaderTop lang={lang} settings={settings} menu={menu} />
            <HeaderCategories settings={settings} />
        </header>
    );
}
