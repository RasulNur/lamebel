import OvalSpinner from "@/components/ui/OvalSpinner";
import OverlapInput from "@/components/ui/OverlapInput";
import { useText } from "@/context/text.context";
import { AuthTab, SetState } from "@/types/types";
import { Form } from "formik";

export default function RegisterForm({
    isSubmitting,
    setAuthTab,
}: {
    isSubmitting: boolean;
    setAuthTab: SetState<AuthTab>;
}) {
    const { text } = useText();
    return (
        <Form>
            <fieldset>
                <OverlapInput
                    disabled={isSubmitting}
                    id="register-name"
                    name="name"
                    placeholder={text("Имя и Фамилия")}
                />
                <OverlapInput
                    disabled={isSubmitting}
                    id="register-phone"
                    name="phone_number"
                    placeholder={text("Номер телефона")}
                />
                <OverlapInput
                    disabled={isSubmitting}
                    id="register-password"
                    name="password"
                    placeholder={text("Пароль")}
                />
            </fieldset>
            <div className="btns-wrapper">
                <div className="flex items-center gap-1 text-sm">
                    {text("Уже есть аккаунт?")}
                    <button
                        type="button"
                        className="text-main underline hover:opacity-70 py-1 w-fit"
                        onClick={() => setAuthTab("login")}>
                        {text("Войти")}
                    </button>
                </div>

                <button disabled={isSubmitting} className="main-btn w-full">
                    {isSubmitting && <OvalSpinner size={16} type="second" />}
                    {text("Зарегистрироваться")}
                </button>
            </div>
        </Form>
    );
}
