"use client";

import { useText } from "@/context/text.context";
import { useState } from "react";
import DialogWrapper from "./DialogWrapper";
import CreateAddress from "../../pages/addresses/createAddress/CreateAddress";
import UpdateAddress from "../../pages/addresses/updateAddress/UpdateAddress";
import { IAddressModalProps } from "@/types/props/ui.types";

export default function AddressModal<Form>({
    type,
    locale,
    btnClassname = "main-btn",
    currentAddress,
    setFieldValue,
}: IAddressModalProps<Form>) {
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
                            locale={locale}
                            setIsOpen={setIsOpen}
                            setFieldValue={setFieldValue}
                        />
                    ) : (
                        <UpdateAddress
                            locale={locale}
                            setIsOpen={setIsOpen}
                            currentAddress={currentAddress}
                        />
                    )
                }
            />
        </>
    );
}
