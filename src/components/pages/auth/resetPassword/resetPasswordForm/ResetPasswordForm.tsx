import OvalSpinner from "@/components/ui/OvalSpinner";
import OverlapInput from "@/components/ui/OverlapInput";
import { useText } from "@/context/text.context";
import { IResetPasswordFormProps } from "@/types/props/pages.types";
import { Form } from "formik";

export default function ResetPasswordForm({
    isSubmitting,
    setAuthTab,
}: IResetPasswordFormProps) {
    const { text } = useText();
    return (
        <Form>
            <fieldset>
                <OverlapInput
                    disabled={isSubmitting}
                    id="reset-psw-phone"
                    name="phone_number"
                    placeholder={text("Номер телефона")}
                />
                <OverlapInput
                    disabled={isSubmitting}
                    id="reset-psw-new-psw"
                    name="new_password"
                    placeholder={text("Новый пароль")}
                />
                <OverlapInput
                    disabled={isSubmitting}
                    id="reset-psw-conf-psw"
                    name="confrim_password"
                    placeholder={text("Подтвердите пароль")}
                />
            </fieldset>
            <div className="btns-wrapper">
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
                    Сбросить пароль
                </button>
            </div>
        </Form>
    );
}
