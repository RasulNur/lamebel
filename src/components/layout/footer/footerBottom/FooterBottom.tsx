import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function FooterBottom() {
    return (
        <div className="flex sm:flex-row flex-col items-center justify-between gap-10 py-4 text-sm">
            <p className="text-center">
                © {new Date().getFullYear()} lamebel.uz | Все права защищены
            </p>

            <Link
                href="https://inweb.uz/"
                className="flex items-center gap-2 hover:text-main py-2">
                Разработано -
                <Image
                    src={"/images/inweb.svg"}
                    alt="Inweb"
                    width={13}
                    height={16}
                />
            </Link>
        </div>
    );
}
