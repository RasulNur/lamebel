import OvalSpinner from "@/components/ui/OvalSpinner";
import OverlapInput from "@/components/ui/OverlapInput";
import { useText } from "@/context/text.context";
import { IUpdatePasswordFormProps } from "@/types/props/pages.types";
import { Form } from "formik";

export default function UpdatePasswordForm({
    isSubmitting,
}: IUpdatePasswordFormProps) {
    const { text } = useText();

    return (
        <Form>
            <h3 className="font-medium text-lg text-center leading-130 mb-4 w-max">
                {text("Изменение пароля")}
            </h3>

            <div className="flex flex-col gap-6">
                <fieldset className="grid xl:grid-cols-2 gap-8 w-full">
                    <OverlapInput
                        disabled={isSubmitting}
                        name="password"
                        id="update-password"
                        placeholder={text("Старый пароль")}
                    />
                    <OverlapInput
                        disabled={isSubmitting}
                        name="new_password"
                        id="update-password-new"
                        placeholder={text("Новый пароль")}
                    />
                    <OverlapInput
                        disabled={isSubmitting}
                        name="confrim_password"
                        id="update-password-confirm"
                        placeholder={text("Подтвердите пароль")}
                    />
                </fieldset>
            </div>

            <button
                disabled={isSubmitting}
                type="submit"
                className="main-btn mt-[18px]">
                {isSubmitting && <OvalSpinner size={16} type="second" />}
                {text("Изменить пароль")}
            </button>
        </Form>
    );
}
