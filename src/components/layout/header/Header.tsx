import { getSettings } from "@/api/settingsApi";
import HeaderCategories from "../headerCategories/HeaderCategories";
import HeaderTop from "./headerTop/HeaderTop";
import { getMenu } from "@/api/menusApi";
import { IHeaderProps } from "@/types/props.types";
import { getCategoriesTree } from "@/api/categoriesApi";

export default async function Header({ lang }: IHeaderProps) {
    const settings = await getSettings({ lang });
    const menu = await getMenu({ menuId: 2, lang });
    const categories = await getCategoriesTree({ lang });
    return (
        <header className="sticky top-0 z-[90] bg-white shadow-md">
            <HeaderTop
                lang={lang}
                settings={settings}
                menu={menu}
                categories={categories}
            />
            <HeaderCategories settings={settings} />
        </header>
    );
}
