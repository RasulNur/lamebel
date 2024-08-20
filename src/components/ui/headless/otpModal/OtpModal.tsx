"use client";

import React, { FormEventHandler } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { otpCheck } from "@/api/authApi";
import OtpForm from "./OtpForm";
import { formatPhone } from "@/utils/formatPhone";
import { useText } from "@/context/text.context";
import { IOtpModalProps } from "@/types/props/ui.types";
import { useRouter } from "next/navigation";

function OtpModal<T>({
    isOpen,
    formPhone,
    fulfillAfterOtp,
    setIsOpen,
    lang,
    otpTarget,
    resetForm,
}: IOtpModalProps<T>) {
    const [otp, setOtp] = useState<string>("");
    const { text } = useText();
    const { refresh } = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        const formattedPhone = formatPhone(formPhone);
        try {
            e.preventDefault();
            if (!/^998\d{9}/.test(formattedPhone)) {
                toast.error(text("Неправильный формат номера телефона"));
                return;
            }
            if (!isOpen) return;

            otpCheck({
                lang,
                body: {
                    otp: Number(otp),
                    phone_number: formattedPhone,
                    target: otpTarget,
                },
            }).then(() => {
                fulfillAfterOtp({ otp });
            });
        } catch (err) {
            throw err;
        }
    };

    return (
        <Dialog
            open={isOpen}
            className="fixed inset-0 flex-center w-screen z-[99]"
            onClose={() => {
                resetForm();
                setIsOpen(false);
            }}>
            <DialogBackdrop className="fixed inset-0 bg-black" />

            <DialogPanel
                transition
                className="flex flex-col gap-8 bg-white shadow-lg sm:w-[400px] h-max w-full z-[1] transition-300 ease-out data-[closed]:opacity-0 data-[closed]:translate-x-1/2 py-6 px-4 overflow-y-auto">
                <h3 className="font-bold text-xl text-center">
                    {text("Код подтверждения отправлен на {number}").replace(
                        "{number}",
                        "",
                    )}
                    <span className="text-main">{formPhone}</span>
                </h3>
                <OtpForm
                    lang={lang}
                    handleSubmit={handleSubmit}
                    formPhone={formPhone}
                    otp={otp}
                    setOtp={setOtp}
                    otpTarget={otpTarget}
                />
            </DialogPanel>
        </Dialog>
    );
}

export default OtpModal;
