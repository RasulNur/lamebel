import { createReview } from "@/api/reviewsApi";
import OvalSpinner from "@/components/ui/OvalSpinner";
import OverlapInput from "@/components/ui/OverlapInput";
import Rating from "@/components/ui/formElements/Rating";
import { useText } from "@/context/text.context";
import useValidation from "@/hooks/useValidation";
import { IReviewsForm } from "@/types/form.types";
import { IReviewsFormProps } from "@/types/props/pages.types";
import { ISubmitFormFuncParams } from "@/types/types";
import { Form, Formik } from "formik";

export default function ReviewsForm({ product, lang }: IReviewsFormProps) {
    const { reviewsValidationSchema } = useValidation();
    const { text } = useText();

    const initialValues: IReviewsForm = {
        name: "",
        email: "",
        message: "",
        rating: 0,
    };

    const handleSubmit = ({
        values,
        resetForm,
        setFieldValue,
    }: ISubmitFormFuncParams<IReviewsForm>) => {
        const { name, email, message, rating } = values;

        try {
            createReview({
                lang,
                body: {
                    name,
                    email,
                    body: message,
                    product_id: product.data.id,
                    rating,
                },
            }).then(() => {
                resetForm();
                setFieldValue && setFieldValue("rating", 0);
            });
        } catch (err) {
            throw err;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={reviewsValidationSchema}
            onSubmit={(values, { resetForm, setFieldValue }) =>
                handleSubmit({ values, resetForm, setFieldValue })
            }>
            {({ isSubmitting, values, setFieldValue }) => (
                <Form className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 w-full">
                        <fieldset className="grid lg:grid-cols-2 gap-4 w-full">
                            <OverlapInput
                                id="review-name"
                                name="name"
                                placeholder={text("Ваше имя")}
                                disabled={isSubmitting}
                            />
                            <OverlapInput
                                id="review-email"
                                name="email"
                                placeholder={text("E-mail")}
                                disabled={isSubmitting}
                            />
                        </fieldset>
                        <OverlapInput
                            id="review-message"
                            name="message"
                            placeholder={text("Сообщение")}
                            disabled={isSubmitting}
                        />

                        <Rating setFieldValue={setFieldValue} values={values} />
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
    );
}
