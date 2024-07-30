import AdvantageCard from "@/components/ui/AdvantageCard";
import SectionHeader from "@/components/ui/SectionHeader";

const advantages = [
    {
        id: 0,
        title: "Профессиональный эксперт",
        descr: "Мы строго придерживаемся международных стандартов безопасности пищевых продуктов, гарантируя вам продукцию, которую можно доверять.",
        img: "/images/home-advantages/01.svg",
    },
    {
        id: 1,
        title: "Обязательство",
        descr: "Мы строго придерживаемся международных стандартов безопасности пищевых продуктов, гарантируя вам продукцию, которую можно доверять.",
        img: "/images/home-advantages/02.svg",
    },
    {
        id: 2,
        title: "Проверенный",
        descr: "Мы строго придерживаемся международных стандартов безопасности пищевых продуктов, гарантируя вам продукцию, которую можно доверять.",
        img: "/images/home-advantages/03.svg",
    },
    {
        id: 3,
        title: "Круглосуточная поддержка",
        descr: "Мы строго придерживаемся международных стандартов безопасности пищевых продуктов, гарантируя вам продукцию, которую можно доверять.",
        img: "/images/home-advantages/04.svg",
    },
];

export default function HomeAdvantages() {
    return (
        <div className="section-header-wrapper">
            <SectionHeader title="Наши преимущества" subtitle="О компании" />

            <div className="grid lg:grid-cols-2 gap-6 sm-margin">
                {advantages.map((item) => {
                    return <AdvantageCard key={item.id} advantage={item} />;
                })}
            </div>
        </div>
    );
}
