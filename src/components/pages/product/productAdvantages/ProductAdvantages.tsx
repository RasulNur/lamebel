import Image from "next/image";

const advantages = [
    {
        id: 0,
        src: "/images/product-advantages/01.svg",
        text: "Мы уверены в качестве материалов. Гарантия на мебель от 10 месяцев.",
    },
    {
        id: 1,
        src: "/images/product-advantages/02.svg",
        text: "Выбирайте способ оплаты: банковской картой или наличными при получении.",
    },
    {
        id: 2,
        src: "/images/product-advantages/03.svg",
        text: "Вы легко сможете вернуть или обменять товар в течение двух недель.",
    },
    {
        id: 3,
        src: "/images/product-advantages/04.svg",
        text: "Привезем товар в удобное время, поднимем до квартиры и поможем собрать*",
    },
];

export default function ProductAdvantages() {
    return (
        <div className="flex flex-wrap gap-[60px] justify-around">
            {advantages.map((el) => {
                return (
                    <div
                        key={el.id}
                        className="flex flex-col items-center gap-6 max-w-[320px]">
                        <Image
                            src={el.src}
                            alt={el.text}
                            width={300}
                            height={130}
                            className="h-[130px] w-auto object-contain object-center"
                        />
                        <p className="text-center leading-130">{el.text}</p>
                    </div>
                );
            })}
        </div>
    );
}
