import { getTexts } from "@/api/textsApi";
import { IHomeAboutProps } from "@/types/props/pages.types";

export default async function HomeAbout({ lang }: IHomeAboutProps) {
    const { text } = await getTexts({ lang });
    return (
        <div className="xl:grid flex flex-col-reverse grid-cols-[1.5fr,1fr] sm:gap-10 gap-8">
            <div className="flex flex-col gap-7">
                <h3 className="font-extrabold xl:text-[42px] lg:text-[36px] md:text-[28px] text-2xl leading-130 uppercase">
                    О компании
                </h3>

                <div className="text-section">
                    <p>
                        Lamebel - это компания известная по всему Узбекистану,
                        которая изготавливает современную и классическую мебель
                        на заказ в Ташкенте. Каждое наше изделие уникально и
                        эксклюзивно по цене, таким образом, мы делаем роскошь
                        доступной. Занимаясь производством мебели в Ташкенте,
                        Lamebel быстро стала любимым местом для тех, кто ищет
                        оригинальную мягкую или корпусную мебель. Начиная с
                        самого начала нашего основания и до сегодняшнего дня,
                        нашей главной целью является изготовление качественной и
                        необычной мебели, которая была бы доступной для всех.
                    </p>

                    <h4>Кто мы ?</h4>
                    <p>
                        Справедливая ценовая политика и высококачественные
                        предметы мебели – наши главные преимущества. Здесь вы
                        можете заказать мебель, не выходя из дома. Lamebel
                        разрабатывает и изготавливает предметы мебели, новейшие
                        в дизайне интерьера. Выбирайте из множества
                        привлекательных моделей или создайте свой уникальный
                        концепт. Таким образом, вы можете, наконец, осуществить
                        свои мечты относительно идеальной комнаты и превратить
                        это в реальность.
                    </p>
                    <p>
                        Мы приносим уют и удобство в каждый дом. Предоставляя
                        широкий выбор мебели, который пополняется ежедневно, мы
                        надеемся, что наши изделия найдут свое применение в
                        вашей жизни и станут неотъемлемой частью вашего быта.
                    </p>
                </div>

                <button className="main-btn">{text("Подробнее")}</button>
            </div>
            <div>
                <iframe
                    className="size-full lg:min-h-[500px] md:min-h-[450px] sm:min-h-[400px] min-[560px]:min-h-[350px] min-h-[300px] "
                    src="https://www.youtube.com/embed/-A6C6AlTE1I?si=SaBKR_ZgdadLqmIp"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            </div>
        </div>
    );
}
