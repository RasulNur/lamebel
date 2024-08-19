import { loginCheck, resetPassword, sendOtp } from "@/api/authApi";
import OtpModal from "@/components/ui/headless/otpModal/OtpModal";
import { useText } from "@/context/text.context";
import useFormValidation from "@/hooks/useFormValidation";
import { IResetPasswordForm } from "@/types/form.types";
import { ISubmitFormFuncParams } from "@/types/types";
import { formatPhone } from "@/utils/formatPhone";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import ResetPasswordForm from "./resetPasswordForm/ResetPasswordForm";
import { IResetPasswordProps } from "@/types/props/pages.types";

const initialValues: IResetPasswordForm = {
    phone_number: "",
    confrim_password: "",
    new_password: "",
};

export default function ResetPassword({
    setAuthTab,
    lang,
}: IResetPasswordProps) {
    const { resetPasswordValidationSchema } = useFormValidation();
    const [isOtpModalOpen, setIsOtpModalOpen] = useState<boolean>(false);
    const [otpData, setOtpData] = useState<IResetPasswordForm>();
    const { push, refresh } = useRouter();
    const { text } = useText();
    const handleSubmit = ({
        values,
        resetForm,
    }: ISubmitFormFuncParams<IResetPasswordForm>) => {
        const { phone_number } = values;
        const formattedPhone = formatPhone(phone_number);
        try {
            loginCheck({ lang, body: { phone_number: formattedPhone } }).then(
                (res: { user_exists: boolean }) => {
                    if (!res.user_exists) {
                        resetForm();
                        toast.error("Такого аккаунта не существует");

                        return;
                    } else {
                        sendOtp({
                            lang,
                            body: {
                                phone_number: formattedPhone,
                            },
                        }).then(() => {
                            setIsOtpModalOpen(true);
                            setOtpData(values);
                        });
                    }
                },
            );
        } catch (err) {
            throw err;
        }
    };

    const fulfillAfterOtp = ({ otp }: { otp: string }) => {
        if (otpData) {
            try {
                const { phone_number, new_password } = otpData;
                const formattedPhone = formatPhone(phone_number);
                resetPassword({
                    lang,
                    body: {
                        new_password,
                        phone_number: formattedPhone,
                        otp: Number(otp),
                    },
                }).then(() => {
                    refresh();
                    setIsOtpModalOpen(false);
                    setAuthTab("login");
                });
            } catch (err) {
                throw err;
            }
        }
    };

    return (
        <div className="auth-form-wrapper">
            <h3 className="auth-title">{text("Забыли пароль?")}</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={resetPasswordValidationSchema}
                onSubmit={(values, { resetForm }) =>
                    handleSubmit({ values, resetForm })
                }>
                {({ isSubmitting, values }) => (
                    <>
                        <ResetPasswordForm
                            isSubmitting={isSubmitting}
                            setAuthTab={setAuthTab}
                        />

                        <OtpModal
                            lang={lang}
                            isOpen={isOtpModalOpen}
                            setIsOpen={setIsOtpModalOpen}
                            formPhone={values.phone_number}
                            fulfillAfterOtp={fulfillAfterOtp}
                        />
                    </>
                )}
            </Formik>
        </div>
    );
}
