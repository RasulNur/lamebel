import { getSettings } from "@/api/settingsApi";
import HeaderCategories from "../headerCategories/HeaderCategories";
import HeaderTop from "./headerTop/HeaderTop";
import { getMenu } from "@/api/menusApi";
import { getCategoriesTree } from "@/api/categoriesApi";
import { IHeaderProps } from "@/types/props/types";

export default async function Header({ locale }: IHeaderProps) {
    const settings = await getSettings({ locale });
    const menu = await getMenu({ menuId: 2, locale });
    const categories = await getCategoriesTree({ locale });
    return (
        <header className="fixed w-full top-0 z-[90] header">
            <HeaderTop
                locale={locale}
                settings={settings}
                menu={menu}
                categories={categories}
            />
            <HeaderCategories settings={settings} />
        </header>
    );
}
