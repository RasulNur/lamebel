"use client";

import OverlapInput from "@/components/ui/OverlapInput";
import { Form, Formik } from "formik";
import { useRouter } from "@/i18n/routing";
import { updateProfile } from "@/api/profileApi";
import { useCookies } from "next-client-cookies";
import toast from "react-hot-toast";
import { ISubmitFormFuncParams } from "@/types/types";
import OvalSpinner from "@/components/ui/OvalSpinner";
import { IUpdateProfileForm } from "@/types/form.types";
import { useText } from "@/context/text.context";
import useFormValidation from "@/hooks/useFormValidation";
import { IUpdateProfileProps } from "@/types/props/pages.types";

export default function UpdateProfile({
    profile,
    locale,
}: IUpdateProfileProps) {
    const { refresh } = useRouter();
    const cookies = useCookies();
    const token = cookies.get("token");
    const { text } = useText();
    const { updateProfileValidationSchema } = useFormValidation();
    const initialValues: IUpdateProfileForm = {
        name: profile.data.name,
    };

    const handleSubmit = ({
        values,
        setSubmitting,
    }: ISubmitFormFuncParams<IUpdateProfileForm>) => {
        const { name } = values;
        try {
            updateProfile({
                body: { name },
                token: token,
                locale,
            }).then(() => {
                toast.success("Информация профиля изменена!");
                refresh();
                setSubmitting && setSubmitting(false);
            });
        } catch (err) {
            throw err;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={updateProfileValidationSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                handleSubmit({ values, setSubmitting, resetForm });
            }}>
            {({ isSubmitting }) => (
                <Form>
                    <div className="grid xl:grid-cols-2 gap-8 w-full">
                        <OverlapInput
                            disabled={isSubmitting}
                            name="name"
                            id="update-name"
                            placeholder={text("Имя и Фамилия")}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="main-btn mt-[18px]">
                        {isSubmitting && (
                            <OvalSpinner size={16} type="second" />
                        )}
                        {text("Изменить")}
                    </button>
                </Form>
            )}
        </Formik>
    );
}
