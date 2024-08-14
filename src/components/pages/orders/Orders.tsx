"use client";

import Empty from "@/components/ui/Empty";
import { useText } from "@/context/text.context";
import { numberWithSpaces } from "@/utils/numberWithSpaces";
import OrderModal from "./orderModal/OrderModal";
import classNames from "classnames";
import { IOrdersProps } from "@/types/props/pages.types";

export default function Orders({ orders }: IOrdersProps) {
    const tdClassname = "p-4 border border-gray3 leading-150";
    const { text } = useText();
    const thead = [
        "id",
        text("Имя и Фамилия"),
        text("Телефон"),
        text("Метод доставки"),
        text("Метод оплаты"),
        text("Итого"),
        "",
    ];
    return (
        <div className="w-full overflow-auto">
            {(!orders.data || (orders.data && orders.data.length == 0)) && (
                <Empty />
            )}
            {orders.data && orders.data.length > 0 && (
                <table className="w-full">
                    <thead>
                        <tr>
                            {thead.map((el) => {
                                return (
                                    <th
                                        className="text-sm font-normal leading-160 text-start text-secondary px-2 py-4 border border-gray3 whitespace-nowrap"
                                        key={el}>
                                        {el}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.data.map((order, id) => {
                            return (
                                <tr key={id}>
                                    <td className={tdClassname}>{order.id}</td>
                                    <td className={tdClassname}>
                                        {order.name}
                                    </td>
                                    <td
                                        className={classNames(
                                            tdClassname,
                                            "whitespace-nowrap",
                                        )}>
                                        +
                                        {numberWithSpaces(
                                            order.phone_number,
                                            "### ## ### ## ##",
                                        )}
                                    </td>
                                    <td className={tdClassname}>
                                        {order.shipping_method_title}
                                    </td>
                                    <td className={tdClassname}>
                                        {order.payment_method_title}
                                    </td>
                                    <td className={tdClassname}>
                                        {new Intl.NumberFormat("fr-FR").format(
                                            order.total,
                                        )}{" "}
                                        {text("сум")}
                                    </td>
                                    <td className={tdClassname}>
                                        <OrderModal order={order} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}
