import { getMenu } from "@/api/menusApi";
import FooterList from "../footerList/FooterList";
import { Link } from "@/i18n/routing";
import { getSettings } from "@/api/settingsApi";
import { numberWithSpaces } from "@/utils/numberWithSpaces";
import { getTexts } from "@/api/textsApi";
import { IFooterMenusProps } from "@/types/props/types";

export default async function FooterMenus({ locale }: IFooterMenusProps) {
    const menu5 = await getMenu({ menuId: 5, locale });
    const menu3 = await getMenu({ menuId: 3, locale });
    const menu4 = await getMenu({ menuId: 4, locale });
    const settings = await getSettings({ locale });
    const { text } = await getTexts({ locale });

    const menuItems = [
        {
            id: 0,
            url: `tel:${settings.phone}`,
            title: `${text("Телефон")}: ${numberWithSpaces(settings.phone, "#### ## ### ## ##")} `,
        },
        { id: 1, title: `${text("Режим работы")}: ${settings.work_hours}` },
        {
            id: 2,
            url: `mailto:${settings.email}`,
            title: `${text("E-mail")}: ${settings.email}`,
        },
        { id: 3, title: `${text("Адрес")}: ${settings.address}` },
    ];

    return (
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 2xl:gap-[100px] gap-10 w-full">
            <div className="flex flex-col sm:gap-8 gap-4 sm:items-baseline items-center">
                <h3 className="font-bold text-lg leading-130">Свяжитесь с нами</h3>
                <ul className="flex flex-col gap-4 sm:items-baseline items-center sm:text-start text-center">
                    {menuItems.map((item) => {
                        if (item.url) {
                            return (
                                <li key={item.id}>
                                    <Link href={item.url} className="py-1 block hover:text-main">
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    <p className="py-1 block">{item.title}</p>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            <FooterList menu={menu3} />
            <FooterList menu={menu4} />
            <FooterList menu={menu5} />
        </div>
    );
}
