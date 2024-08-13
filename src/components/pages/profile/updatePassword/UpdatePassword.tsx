"use client";

import { Formik } from "formik";
import { ISubmitFormFuncParams } from "@/types/types";
import { useRouter } from "next/navigation";
import { updatePassword } from "@/api/profileApi";
import { useCookies } from "next-client-cookies";
import toast from "react-hot-toast";
import { IUpdatePasswordForm, IUpdatePasswordProps } from "@/types/props.types";
import UpdatePasswordForm from "./updatePasswordForm/UpdatePasswordForm";
import useValidation from "@/hooks/useValidation";

const initialValues: IUpdatePasswordForm = {
    password: "",
    new_password: "",
    confrim_password: "",
};

export default function UpdatePassword({ lang }: IUpdatePasswordProps) {
    const { refresh } = useRouter();
    const cookies = useCookies();
    const token = cookies.get("token");
    const { updatePasswordValidationSchema } = useValidation();
    const handleSubmit = ({
        values,
        resetForm,
    }: ISubmitFormFuncParams<IUpdatePasswordForm>) => {
        const { confrim_password, new_password, password } = values;
        try {
            updatePassword({
                body: {
                    current_password: password,
                    new_password,
                },
                token: token,
                lang,
            }).then(() => {
                toast.success("Пароль успешно изменен");
                refresh();
                resetForm();
            });
        } catch (err) {
            throw err;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={updatePasswordValidationSchema}
            onSubmit={(values, { resetForm }) =>
                handleSubmit({ values, resetForm })
            }>
            {({ isSubmitting }) => (
                <UpdatePasswordForm isSubmitting={isSubmitting} />
            )}
        </Formik>
    );
}