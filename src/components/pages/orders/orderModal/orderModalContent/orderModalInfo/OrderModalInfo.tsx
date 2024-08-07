import { useText } from "@/context/text.context";
import { IOrderModalInfoProps } from "@/types/props.types";
import { numberWithSpaces } from "@/utils/numberWithSpaces";

export default function OrderModalInfo({ order }: IOrderModalInfoProps) {
    const { text } = useText();
    const orderInfos = [
        { id: 0, title: text("Адрес"), info: order.address_line_1 },
        { id: 1, title: text("Дата заказа"), info: order.created_at },
        { id: 2, title: text("Ваше имя"), info: order.name },
        {
            id: 3,
            title: text("Номер телефона"),
            info: `+${numberWithSpaces(
                order.phone_number,
                "### ## ### ## ##",
            )}`,
        },

        {
            id: 4,
            title: text("Способ оплаты"),
            info: order.payment_method_title,
        },
        {
            id: 5,
            title: text("Метод доставки"),
            info: order.shipping_method_title,
        },
    ];
    return (
        <div className="flex flex-col gap-2 text-sm">
            {orderInfos.map((item) => {
                return (
                    <div
                        className="flex items-center justify-between gap-5"
                        key={item.id}>
                        <h4 className="font-semibold">{item.title}:</h4>
                        {item.info}
                    </div>
                );
            })}
        </div>
    );
}
