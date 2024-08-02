"use client";

import { useText } from "@/context/text.context";
import { useState } from "react";
import DialogWrapper from "./DialogWrapper";

export default function AddressModal({ type }: { type: "create" | "update" }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { text } = useText();

    return (
        <>
            <DialogWrapper
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={type === "create" ? "Создать адрес" : "Изменить адрес"}
                button={
                    <button
                        onClick={() => setIsOpen(true)}
                        className="main-btn">
                        {type === "create" ? "Создать" : text("Изменить")}
                    </button>
                }
                content={<div></div>}
            />
        </>
    );
}
