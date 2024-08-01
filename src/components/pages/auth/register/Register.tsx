import { loginCheck, register, sendOtp } from "@/api/authApi";
import OtpModal from "@/components/ui/otpModal/OtpModal";
import { useText } from "@/context/text.context";
import useValidation from "@/hooks/useValidation";
import { Lang } from "@/types/api/api.types";
import { IRegisterForm } from "@/types/form.types";
import { AuthTab, ISubmitFormFuncParams, SetState } from "@/types/types";
import { formatPhone } from "@/utils/formatPhone";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import RegisterForm from "./registerForm/RegisterForm";

const initialValues: IRegisterForm = {
    name: "",
    phone_number: "",
    password: "",
};

export default function Register({
    setAuthTab,
    lang,
    closeModal,
}: {
    setAuthTab: SetState<AuthTab>;
    lang: Lang;
    closeModal: () => void;
}) {
    const { registerValidationSchema } = useValidation();
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
            loginCheck({ body: { phone_number: formattedPhone }, lang }).then(
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
                        },
                        lang,
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
                    lang,
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
                {({ isSubmitting, values }) => {
                    return (
                        <>
                            <RegisterForm
                                isSubmitting={isSubmitting}
                                setAuthTab={setAuthTab}
                            />
                            <OtpModal
                                lang={lang}
                                setIsOpen={setIsOtpModalOpen}
                                isOpen={isOtpModalOpen}
                                formPhone={values.phone_number}
                                fulfillAfterOtp={fulfillAfterOtp}
                            />
                        </>
                    );
                }}
            </Formik>
        </div>
    );
}
