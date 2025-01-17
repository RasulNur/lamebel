import { loginCheck, register, sendOtp } from "@/api/authApi";
import OtpModal from "@/components/ui/headless/otpModal/OtpModal";
import { useText } from "@/context/text.context";
import useFormValidation from "@/hooks/useFormValidation";
import { IRegisterForm } from "@/types/form.types";
import { ISubmitFormFuncParams } from "@/types/types";
import { formatPhone } from "@/utils/formatPhone";
import { Formik } from "formik";
import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import toast from "react-hot-toast";
import RegisterForm from "./registerForm/RegisterForm";
import { IRegisterProps } from "@/types/props/pages.types";

const initialValues: IRegisterForm = {
    name: "",
    phone_number: "",
    password: "",
};

export default function Register({
    setAuthTab,
    locale,
    closeModal,
}: IRegisterProps) {
    const { registerValidationSchema } = useFormValidation();
    const [isOtpModalOpen, setIsOtpModalOpen] = useState<boolean>(false);
    const [otpData, setOtpData] = useState<IRegisterForm>();
    const { push, refresh } = useRouter();
    const { text } = useText();
    const handleSubmit = ({
        values,
        resetForm,
    }: ISubmitFormFuncParams<IRegisterForm>) => {
        const { phone_number } = values;
        const formattedPhone = formatPhone(phone_number);

        try {
            loginCheck({ body: { phone_number: formattedPhone }, locale }).then(
                (res) => {
                    if (res.user_exists) {
                        resetForm();
                        toast.error(
                            text(
                                "Пользователь с таким номером уже существует!",
                            ),
                        );

                        return;
                    }
                    sendOtp({
                        body: {
                            phone_number: formattedPhone,
                            target: "registration",
                        },
                        locale,
                    }).then(() => {
                        setIsOtpModalOpen(true);
                        setOtpData(values);
                    });
                },
            );
        } catch (err) {
            throw err;
        }
    };

    const fulfillAfterOtp = ({ otp }: { otp: string }) => {
        if (otpData) {
            try {
                const { name, password, phone_number } = otpData;
                register({
                    locale,
                    body: {
                        name,
                        otp: Number(otp),
                        password,
                        phone_number: formatPhone(phone_number),
                    },
                }).then(() => {
                    push("/");
                    refresh();
                    setIsOtpModalOpen(false);
                    closeModal();
                });
            } catch (err) {
                throw err;
            }
        }
    };
    return (
        <div className="auth-form-wrapper">
            <h3 className="auth-title">{text("Регистрация")}</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={registerValidationSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit({ values, resetForm });
                }}>
                {({ isSubmitting, values, resetForm }) => {
                    return (
                        <>
                            <RegisterForm
                                isSubmitting={isSubmitting}
                                setAuthTab={setAuthTab}
                            />
                            <OtpModal<IRegisterForm>
                                locale={locale}
                                setIsOpen={setIsOtpModalOpen}
                                isOpen={isOtpModalOpen}
                                formPhone={values.phone_number}
                                fulfillAfterOtp={fulfillAfterOtp}
                                otpTarget="registration"
                                resetForm={resetForm}
                            />
                        </>
                    );
                }}
            </Formik>
        </div>
    );
}
