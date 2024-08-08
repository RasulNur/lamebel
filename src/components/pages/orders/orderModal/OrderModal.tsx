"use client";

import DialogWrapper from "@/components/ui/headless/DialogWrapper";
import { useText } from "@/context/text.context";
import { useState } from "react";
import OrderModalContent from "./orderModalContent/OrderModalContent";
import { IOrderModalProps } from "@/types/props.types";

export default function OrderModal({ order }: IOrderModalProps) {
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
