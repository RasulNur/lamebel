"use client";

import { sendFeedback } from "@/api/contactsApi";
import OvalSpinner from "@/components/ui/OvalSpinner";
import OverlapInput from "@/components/ui/OverlapInput";
import { useText } from "@/context/text.context";
import useValidation from "@/hooks/useValidation";
import { Lang } from "@/types/api/api.types";
import { IContactsForm } from "@/types/form.types";
import { ISubmitFormFuncParams } from "@/types/types";
import { formatPhone } from "@/utils/formatPhone";
import { Form, Formik } from "formik";

const initialValues: IContactsForm = {
    name: "",
    phone_number: "",
    message: "",
};

export default function ContactsForm({ lang }: { lang: Lang }) {
    const { contactsValidationSchema } = useValidation();
    const { text } = useText();

    const handleSubmit = ({
        values,
        resetForm,
    }: ISubmitFormFuncParams<IContactsForm>) => {
        const { name, phone_number, message } = values;
        try {
            const formattedPhone = formatPhone(phone_number);
            sendFeedback({
                lang,
                body: { message, name, phone: formattedPhone },
            }).then(() => {
                resetForm();
            });
        } catch (err) {
            throw err;
        }
    };

    return (
        <div>
            <h3 className="lg:text-2xl md:text-xl text-lg leading-110 font-semibold mb-8">
                Напишите нам
            </h3>
            <Formik
                initialValues={initialValues}
                validationSchema={contactsValidationSchema}
                onSubmit={(values, { resetForm }) =>
                    handleSubmit({ values, resetForm })
                }>
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4 w-full">
                            <fieldset className="grid lg:grid-cols-2 gap-4 w-full">
                                <OverlapInput
                                    id="contacts-name"
                                    name="name"
                                    placeholder={text("Ваше имя")}
                                    inputClass=""
                                    disabled={isSubmitting}
                                />
                                <OverlapInput
                                    id="contacts-phone"
                                    name="phone_number"
                                    placeholder={text("Номер телефона")}
                                    disabled={isSubmitting}
                                />
                            </fieldset>
                            <OverlapInput
                                id="contacts-message"
                                name="message"
                                inputClass="min-h-[170px]"
                                placeholder={text("Сообщение")}
                                disabled={isSubmitting}
                            />
                        </div>
                        <button
                            className="main-btn"
                            disabled={isSubmitting}
                            type="submit">
                            {isSubmitting && (
                                <OvalSpinner size={16} type="second" />
                            )}
                            {text("Отправить")}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
