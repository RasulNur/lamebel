import Link from "next/link";

const headerLinks = [
    { id: 0, title: "Наши работы" },
    { id: 1, title: "Контакты" },
];

export default function HeaderList() {
    return (
        <ul className="2xl:flex hidden items-center gap-6">
            {headerLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <Link
                            href="/"
                            className="inline-block py-2 hover:text-main text-sm font-medium">
                            Наши работы
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
