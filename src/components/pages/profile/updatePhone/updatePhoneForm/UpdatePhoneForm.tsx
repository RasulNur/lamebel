"use client";

import OvalSpinner from "@/components/ui/OvalSpinner";
import OverlapInput from "@/components/ui/OverlapInput";
import OtpModal from "@/components/ui/headless/otpModal/OtpModal";
import { useText } from "@/context/text.context";
import { IUpdatePhoneForm } from "@/types/form.types";
import { IUpdatePhoneFormProps } from "@/types/props/pages.types";
import { Form } from "formik";

export default function UpdatePhoneForm({
    fulfillAfterOtp,
    isOtpModalOpen,
    setIsOtpModalOpen,
    values,
    lang,
    isSubmitting,
    resetForm,
}: IUpdatePhoneFormProps) {
    const { text } = useText();
    return (
        <>
            <Form>
                <div className="grid xl:grid-cols-2 gap-8 w-full">
                    <OverlapInput
                        disabled={isSubmitting}
                        name="phone_number"
                        id="update-phone"
                        placeholder={text("Номер телефона")}
                    />
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="main-btn mt-[18px]">
                    {isSubmitting && <OvalSpinner size={16} type="second" />}
                    {text("Изменить")}
                </button>
            </Form>
            <OtpModal<IUpdatePhoneForm>
                lang={lang}
                setIsOpen={setIsOtpModalOpen}
                isOpen={isOtpModalOpen}
                formPhone={values.phone_number}
                fulfillAfterOtp={fulfillAfterOtp}
                otpTarget="verification"
                resetForm={resetForm}
            />
        </>
    );
}
