import { useText } from "@/context/text.context";
import { IOrder } from "@/types/api/orders.types";
import { numberWithSpaces } from "@/utils/numberWithSpaces";

export default function OrderModalInfo({ order }: { order: IOrder }) {
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
            {/* <div className="flex items-center justify-between gap-5">
                <h4>{text("Адрес")}</h4>
                {order.address_line_1}
            </div>
            <div className="flex items-center justify-between gap-5">
                <h4>{text("Дата заказа")}</h4>
                {order.created_at}
            </div>
            <div className="flex items-center justify-between gap-5">
                <h4>{text("Ваше имя")}</h4>
                {order.name}
            </div>
            <div className="flex items-center justify-between gap-5">
                <h4>{text("Номер телефона")}</h4>
                {order.phone_number}
            </div>
            <div className="flex items-center justify-between gap-5">
                <h4>{text("Способ оплаты")}</h4>
                {order.payment_method_title}
            </div>
            <div className="flex items-center justify-between gap-5">
                <h4>{text("Метод доставки")}</h4>
                {order.shipping_method_title}
            </div> */}
        </div>
    );
}
