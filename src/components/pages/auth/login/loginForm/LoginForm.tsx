import OvalSpinner from "@/components/ui/OvalSpinner";
import OverlapInput from "@/components/ui/OverlapInput";
import { useText } from "@/context/text.context";
import { ILoginFormProps } from "@/types/props.types";
import { Form } from "formik";

export default function LoginForm({
    isSubmitting,
    setAuthTab,
}: ILoginFormProps) {
    const { text } = useText();

    return (
        <Form>
            <fieldset>
                <OverlapInput
                    disabled={isSubmitting}
                    id="login-phone"
                    name="phone_number"
                    placeholder={text("Номер телефона")}
                />
                <OverlapInput
                    disabled={isSubmitting}
                    id="login-password"
                    name="password"
                    placeholder={text("Пароль")}
                />
            </fieldset>
            <div className="btns-wrapper">
                <button
                    type="button"
                    onClick={() => setAuthTab("reset-password")}
                    className="text-main hover:opacity-70 text-sm py-1 w-fit">
                    {text("Забыли пароль?")}
                </button>

                <div className="flex items-center gap-1 text-sm">
                    {text("Нет аккаунта?")}
                    <button
                        type="button"
                        className="text-main underline hover:opacity-70 py-1 w-fit"
                        onClick={() => setAuthTab("register")}>
                        {text("Зарегистрироваться")}
                    </button>
                </div>

                <button
                    disabled={isSubmitting}
                    className="main-btn w-full"
                    type="submit">
                    {isSubmitting && <OvalSpinner size={16} type="second" />}
                    {text("Войти")}
                </button>
            </div>
        </Form>
    );
}
