import Icon from "@/components/ui/Icon";
import { Lang } from "@/types/api/api.types";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./headerMenu/HeaderMenu";
import HeaderList from "./headerList/HeaderList";
import HeaderIcons from "./headerIcons/HeaderIcons";

export default async function Header({ lang }: { lang: Lang }) {
    return (
        <header className="sticky top-0 py-8">
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href={"/"}>
                        <Image
                            src="/images/logo.svg"
                            alt="Lamebel"
                            title="Lamebel"
                            width={248}
                            height={48}
                        />
                    </Link>

                    <HeaderMenu />

                    <HeaderList />
                </div>
                <div className="flex items-center gap-6">
                    <Link
                        href={"/"}
                        className="group bg-blue py-3 px-5 flex-center gap-3 text-white hover:text-blue hover:bg-transparent border-2 border-blue rounded-[30px] font-semibold text-sm">
                        <Icon
                            name="telegram"
                            className="block fill-white group-hover:fill-blue w-5 h-5"
                        />
                        Наш канал в телеграм
                    </Link>

                    <Link
                        href={"tel:+998 99 123 45 67"}
                        className="font-semibold hover:text-main">
                        +998 99 123 45 67
                    </Link>

                    <HeaderIcons />
                </div>
            </div>
        </header>
    );
}
