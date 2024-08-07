import SectionHeader from "@/components/ui/SectionHeader";
import StaticMap from "../../../ui/StaticMap";
import { IMapSectionProps } from "@/types/props.types";

export default function MapSection({ settings }: IMapSectionProps) {
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

                <StaticMap iframe={settings.map} />
            </div>
        </div>
    );
}
