import { sendFeedback } from "@/api/contactsApi";
import { useText } from "@/context/text.context";
import useFormValidation from "@/hooks/useFormValidation";
import { IBuyForm } from "@/types/form.types";
import { ISubmitFormFuncParams } from "@/types/types";
import { formatPhone } from "@/utils/formatPhone";
import { Form, Formik } from "formik";
import OverlapInput from "../../OverlapInput";
import OvalSpinner from "../../OvalSpinner";
import { IBuyModalFormProps } from "@/types/props/ui.types";

const initialValues: IBuyForm = {
    name: "",
    phone_number: "",
    message: "",
};

export default function BuyModalForm({ product, lang }: IBuyModalFormProps) {
    const { contactsValidationSchema } = useFormValidation();
    const { text } = useText();

    const handleSubmit = ({
        values,
        resetForm,
    }: ISubmitFormFuncParams<IBuyForm>) => {
        const { name, phone_number, message } = values;
        try {
            const formattedPhone = formatPhone(phone_number);
            if (product.id) {
                sendFeedback({
                    lang,
                    body: {
                        message,
                        name,
                        phone: formattedPhone,
                        product_id: product.id,
                    },
                }).then(() => {
                    resetForm();
                });
            }
        } catch (err) {
            throw err;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={contactsValidationSchema}
            onSubmit={(values, { resetForm }) =>
                handleSubmit({ values, resetForm })
            }>
            {({ isSubmitting }) => (
                <Form className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4 w-full">
                        <OverlapInput
                            id="buy-name"
                            name="name"
                            placeholder={text("Ваше имя")}
                            inputClass=""
                            disabled={isSubmitting}
                        />
                        <OverlapInput
                            id="buy-phone"
                            name="phone_number"
                            placeholder={text("Номер телефона")}
                            disabled={isSubmitting}
                        />

                        <OverlapInput
                            id="buy-message"
                            name="message"
                            inputClass="h-full"
                            placeholder={text("Сообщение")}
                            disabled={isSubmitting}
                        />
                    </div>
                    <button
                        className="main-btn w-full"
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
    );
}
