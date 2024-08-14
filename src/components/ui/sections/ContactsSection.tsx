"use client";

import { Form, Formik } from "formik";
import OverlapInput from "../OverlapInput";
import { IContactsForm } from "@/types/form.types";
import useValidation from "@/hooks/useValidation";
import { formatPhone } from "@/utils/formatPhone";
import { ISubmitFormFuncParams } from "@/types/types";
import { sendFeedback } from "@/api/contactsApi";
import { useText } from "@/context/text.context";
import OvalSpinner from "../OvalSpinner";
import { IContactsSectionProps } from "@/types/props/ui.types";

const initialValues: IContactsForm = {
    name: "",
    phone_number: "",
    message: "",
};

export default function ContactsSection({ lang }: IContactsSectionProps) {
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
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-[660px]">
                <h3 className="font-extrabold xl:text-[42px] lg:text-[36px] md:text-[28px] text-2xl leading-130 uppercase text-white">
                    Оставить заявку
                </h3>

                <p className="font-medium text-white-80 leading-140">
                    Позвоните нам или оставьте заявку, наши менеджеры свяжутся с
                    вами и проконсультируют по всем интересующим вопросам
                </p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={contactsValidationSchema}
                onSubmit={(values, { resetForm }) =>
                    handleSubmit({ values, resetForm })
                }>
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-10 light-form">
                        <div className="grid lg:grid-cols-2 gap-4 w-full">
                            <fieldset className="flex flex-col gap-4 w-full">
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
                                inputClass="h-full"
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
