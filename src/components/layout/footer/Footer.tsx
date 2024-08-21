import Link from "next/link";
import Image from "next/image";
import FooterMenus from "./footerMenus/FooterMenus";
import FooterBottom from "./footerBottom/FooterBottom";
import { IFooterProps } from "@/types/props/types";

export default async function Footer({ lang }: IFooterProps) {
    return (
        <footer className="bg-main-light">
            <div className="container">
                <div className="xl:py-20 md:py-[60px] py-10 flex flex-col sm:items-start items-center gap-20">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/images/logo.svg"
                            alt="Lamebel"
                            title="Lamebel"
                            width={248}
                            height={48}
                            className="w-[248px] h-auto"
                        />
                    </Link>

                    <FooterMenus lang={lang} />
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
}
