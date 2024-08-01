import Image from "next/image";
import Link from "next/link";
import { numberWithSpaces } from "@/utils/numberWithSpaces";
import HeaderMenu from "../headerMenu/HeaderMenu";
import HeaderList from "../headerList/HeaderList";
import HeaderIcons from "../headerIcons/HeaderIcons";
import { ISettings } from "@/types/api/settings.types";
import { Lang } from "@/types/api/api.types";

export default function HeaderTop({
    lang,
    settings,
}: {
    lang: Lang;
    settings: ISettings;
}) {
    return (
        <div className="py-6">
            <div className="container flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <Link href={"/"}>
                        <Image
                            src="/images/logo.svg"
                            alt="Lamebel"
                            title="Lamebel"
                            width={248}
                            height={48}
                            className="lg:w-[248px] md:w-[200px] sm:w-[160px] w-[120px] h-auto"
                        />
                    </Link>
                    <div className="2xl:block hidden">
                        <HeaderMenu />
                    </div>

                    <HeaderList lang={lang} />
                </div>
                <div className="flex items-center xl:gap-6 sm:gap-4 gap-2">
                    {settings.phone && (
                        <Link
                            href={`tel:${settings.phone}`}
                            className="lg:block hidden font-semibold hover:text-main py-2">
                            {numberWithSpaces(
                                settings.phone,
                                "#### ## ### ## ##",
                            )}
                        </Link>
                    )}

                    <HeaderIcons lang={lang} />

                    <div className="2xl:hidden">
                        <HeaderMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}
