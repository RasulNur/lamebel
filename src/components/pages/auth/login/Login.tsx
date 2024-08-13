import { login } from "@/api/authApi";
import useValidation from "@/hooks/useValidation";
import { ILoginForm } from "@/types/form.types";
import { ISubmitFormFuncParams } from "@/types/types";
import { formatPhone } from "@/utils/formatPhone";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import LoginForm from "./loginForm/LoginForm";
import { useText } from "@/context/text.context";
import { ILoginProps } from "@/types/props.types";

const initialValues: ILoginForm = {
    phone_number: "",
    password: "",
};

export default function Login({ setAuthTab, lang, closeModal }: ILoginProps) {
    const { push, refresh } = useRouter();
    const { loginValidationSchema } = useValidation();
    const { text } = useText();
    const handleSubmit = ({
        values,
        resetForm,
    }: ISubmitFormFuncParams<ILoginForm>) => {
        const { password, phone_number } = values;
        const formattedPhone = formatPhone(phone_number);

        try {
            login({
                body: { password, phone_number: formattedPhone },
                lang,
            }).then((data) => {
                if (data) {
                    push("/");
                    refresh();
                    closeModal();
                } else resetForm();
            });
        } catch (err) {
            throw err;
        }
    };
    return (
        <div className="auth-form-wrapper">
            <h3 className="auth-title">{text("Войти")}</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={(values, { resetForm }) =>
                    handleSubmit({ values, resetForm })
                }>
                {({ isSubmitting }) => (
                    <LoginForm
                        isSubmitting={isSubmitting}
                        setAuthTab={setAuthTab}
                    />
                )}
            </Formik>
        </div>
    );
}