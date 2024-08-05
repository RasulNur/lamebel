"use client";

import { useText } from "@/context/text.context";
import { useState } from "react";
import DialogWrapper from "./DialogWrapper";
import CreateAddress from "../pages/addresses/createAddress/CreateAddress";
import UpdateAddress from "../pages/addresses/updateAddress/UpdateAddress";
import { Lang } from "@/types/api/api.types";
import { IAddress } from "@/types/api/address.types";
import { FormikErrors } from "formik";
import { ICheckoutForm } from "@/types/form.types";

export default function AddressModal({
    type,
    lang,
    btnClassname = "main-btn",
    currentAddress,
    setFieldValue,
}: {
    type: "create" | "update";
    lang: Lang;
    btnClassname?: string;
    currentAddress?: IAddress;
    setFieldValue?: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<ICheckoutForm>>;
}) {
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
