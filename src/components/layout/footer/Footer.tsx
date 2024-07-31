import { Lang } from "@/types/api/api.types";
import Link from "next/link";
import Image from "next/image";
import FooterList from "./footerList/FooterList";

const menus = [
    {
        id: 0,
        name: "Свяжитесь с нами",
        items: [
            { id: 0, link: "/", name: "Телефон: +998 (91) 123-45-67 " },
            { id: 1, name: "Режим работы: 9:00–21:00, Пн-Сб" },
            { id: 2, link: "/", name: "E-mail: info@lamebel.uz" },
            { id: 3, name: "Адрес: г. Ташкент, ул. А.Навои 342" },
        ],
    },
    {
        id: 1,
        name: "Компания",
        items: [
            { id: 0, link: "/", name: "О компании" },
            { id: 1, link: "/", name: "История успеха" },
            { id: 2, link: "/", name: "Ценности и мировоззрение" },
        ],
    },
    {
        id: 2,
        name: "Покупателям",
        items: [
            { id: 0, link: "/", name: "Публичная оферта " },
            { id: 1, link: "/", name: "Правила пользования" },
            { id: 2, link: "/", name: "Проверка сертификата" },
        ],
    },
    {
        id: 3,
        name: "Информация",
        items: [
            { id: 0, link: "/", name: "Каталог" },
            { id: 1, link: "/", name: "Популярные товары" },
            { id: 2, link: "/", name: "Большие скидки" },
            { id: 3, link: "/", name: "Карта сайта" },
        ],
    },
];

function Footer({ lang }: { lang: Lang }) {
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
                    <div className="grid xl:grid-cols-4 sm:grid-cols-2 2xl:gap-[100px] gap-10 w-full">
                        {menus.map((menu) => {
                            return <FooterList key={menu.id} menu={menu} />;
                        })}
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col items-center justify-between gap-10 py-4 text-sm">
                    <p className="text-center">
                        © 2024 lamebel.uz | Все права защищены
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
            </div>
        </footer>
    );
}

export default Footer;
