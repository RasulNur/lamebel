"use client";

import DialogWrapper from "@/components/ui/DialogWrapper";
import { useText } from "@/context/text.context";
import { IOrder } from "@/types/api/orders.types";
import { useState } from "react";
import OrderModalContent from "./orderModalContent/OrderModalContent";

export default function OrderModal({ order }: { order: IOrder }) {
    const { text } = useText();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <DialogWrapper
            button={
                <button
                    className="hover:text-main py-3"
                    type="button"
                    onClick={() => setIsOpen(true)}>
                    {text("Подробнее")}
                </button>
            }
            content={<OrderModalContent order={order} />}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={`Заказ №${order.id}`}
            titleClassname="text-start"
            dialogClassname="sm:w-[500px] min-h-[450px] max-h-screen"
        />
    );
}
