"use client";

import { useText } from "@/context/text.context";
import { useState } from "react";
import DialogWrapper from "./DialogWrapper";
import CreateAddress from "../../pages/addresses/createAddress/CreateAddress";
import UpdateAddress from "../../pages/addresses/updateAddress/UpdateAddress";
import { IAddressModalProps } from "@/types/props.types";

export default function AddressModal({
    type,
    lang,
    btnClassname = "main-btn",
    currentAddress,
    setFieldValue,
}: IAddressModalProps) {
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
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className={btnClassname}>
                        {type === "create" ? "Создать" : text("Изменить")}
                    </button>
                }
                content={
                    type === "create" ? (
                        <CreateAddress
                            lang={lang}
                            setIsOpen={setIsOpen}
                            setFieldValue={setFieldValue}
                        />
                    ) : (
                        <UpdateAddress
                            lang={lang}
                            setIsOpen={setIsOpen}
                            currentAddress={currentAddress}
                        />
                    )
                }
            />
        </>
    );
}
