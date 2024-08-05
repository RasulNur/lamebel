"use client";

import { useText } from "@/context/text.context";
import { IOrder } from "@/types/api/orders.types";
import OrderModalProducts from "./orderModalProducts/OrderModalProducts";
import OrderModalInfo from "./orderModalInfo/OrderModalInfo";

export default function OrderModalContent({ order }: { order: IOrder }) {
    const { text } = useText();

    return (
        <div className="flex flex-col gap-5">
            <OrderModalProducts order={order} />

            <div>
                <div className="flex flex-col gap-5">
                    <OrderModalInfo order={order} />
                    <div className="flex flex-col gap-2">
                        <div className="text-secondary2 flex items-center justify-between gap-4">
                            <h4 className="font-bold">Товары:</h4>
                            <p>
                                {order.orderItems.reduce(
                                    (prev, curr) => (prev += curr.quantity),
                                    0,
                                )}{" "}
                                шт.
                            </p>
                        </div>
                        <div className="md:text-xl sm:text-lg text-base flex items-center justify-between gap-4">
                            <h4 className="font-bold">Итого:</h4>

                            <p className="font-bold text-main">
                                {`${new Intl.NumberFormat("fr-FR").format(
                                    order.total,
                                )} сум`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
