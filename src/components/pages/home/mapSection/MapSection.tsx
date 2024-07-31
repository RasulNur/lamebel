import SectionHeader from "@/components/ui/SectionHeader";

export default function MapSection() {
    return (
        <div className="section-header-wrapper">
            <SectionHeader
                title="Лучше один раз увидеть!"
                subtitle="О компании"
            />

            <div className="flex flex-col gap-6">
                <p className="leading-150 font-medium">
                    Мы предлагаем самый актуальный ассортимент на сегодня и
                    предоставляем клиентам все возможности быть уверенными в
                    покупке. Приглашаем посетить фирменные шоурумы и лично
                    оценить качество используемых тканей и материалов, проверить
                    комфортность наполнения и работы механизмов, убедиться в
                    удобстве и надежности нашей мебели!
                </p>

                <div className="w-full">
                    <iframe
                        className="w-full h-[400px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987277746!2d69.11456002809605!3d41.282737945809956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1722320322376!5m2!1sru!2s"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}
