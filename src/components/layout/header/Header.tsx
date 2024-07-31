import Icon from "@/components/ui/Icon";
import { Lang } from "@/types/api/api.types";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./headerMenu/HeaderMenu";
import HeaderList from "./headerList/HeaderList";
import HeaderIcons from "./headerIcons/HeaderIcons";

export default async function Header({ lang }: { lang: Lang }) {
    return (
        <header className="sticky top-0 py-6 bg-white z-[90] lg:shadow-none shadow-md">
            <div className="container flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <Link href={"/"}>
                        <Image
                            src="/images/logo.svg"
                            alt="Lamebel"
                            title="Lamebel"
                            width={248}
                            height={48}
                            className="lg:w-[248px] md:w-[200px] w-[160px] h-auto"
                        />
                    </Link>
                    <div className="2xl:block hidden">
                        <HeaderMenu />
                    </div>

                    <HeaderList />
                </div>
                <div className="flex items-center xl:gap-6 sm:gap-4 gap-2">
                    <Link
                        href={"/"}
                        className="group bg-blue py-3 2xl:px-5 px-3 lg:flex-center hidden gap-3 text-white hover:text-blue hover:bg-transparent border-2 border-blue rounded-[30px] font-semibold text-sm">
                        <Icon
                            name="telegram"
                            className="block fill-white group-hover:fill-blue"
                        />
                        <span className="2xl:inline-block hidden">
                            Наш канал в телеграм
                        </span>
                    </Link>

                    <Link
                        href={"tel:+998 99 123 45 67"}
                        className="lg:block hidden font-semibold hover:text-main py-2">
                        +998 99 123 45 67
                    </Link>

                    <HeaderIcons />
                    <div className="2xl:hidden">
                        <HeaderMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}
