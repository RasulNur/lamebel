import Icon from "@/components/ui/Icon";
import { ISettings } from "@/types/api/settings.types";
import Link from "next/link";

const links = [
    { id: 0, title: "Диваны" },
    { id: 1, title: "Мягкая мебель" },
    { id: 2, title: "Эксклюзив lamebel.uz" },
    { id: 3, title: "Коллекция «Цветы»" },
];

export default function HeaderCategories({
    settings,
}: {
    settings: ISettings;
}) {
    return (
        <div className="lg:block hidden">
            <div className="container py-2 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    {links.map((link) => {
                        return (
                            <Link
                                href="/"
                                key={link.id}
                                className="py-2 text-sm hover:text-main">
                                {link.title}
                            </Link>
                        );
                    })}
                </div>

                {settings.telegram && (
                    <Link
                        href={settings.telegram}
                        className="group bg-blue py-3 2xl:px-5 px-3 lg:flex-center hidden gap-3 text-white hover:text-blue hover:bg-transparent border-2 border-blue rounded-[30px] font-semibold text-sm">
                        <Icon
                            name="telegram"
                            className="block fill-white group-hover:fill-blue"
                        />
                        <span className="2xl:inline-block hidden">
                            Наш канал в телеграм
                        </span>
                    </Link>
                )}
            </div>
        </div>
    );
}
