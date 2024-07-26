import { useText } from "@/context/text.context";
import { formatPhone } from "@/utils/formatPhone";
import * as Yup from "yup";

export default function useValidation() {
    const MIN_LENGTH = 3;
    const MAX_LENGTH = 25;

    const { text } = useText();

    const requiredText = text("Поле обязательно для заполнения");
    const isPhoneText = text("Неправильный формат номера телефона");
    const passwordMatchText = text("Пароли должны совпадать друг с другом");
    const maxLength255Text = text("Нужно ввести не более 255 символов");
    const maxLength25Text = "Максимум 25 символа";
    const minLengthText = "Минимум 3 символа";

    const nameValidation = Yup.string()
        .required(requiredText)
        .min(MIN_LENGTH, minLengthText)
        .max(MAX_LENGTH, maxLength25Text);

    const messageValidation = Yup.string()
        .required(requiredText)
        .min(MIN_LENGTH, minLengthText)
        .max(255, maxLength255Text);

    const phoneValidation = Yup.string()
        .required(requiredText)
        .transform((value) => formatPhone(value))
        .test("is-phone", isPhoneText, (value) => {
            if (value && value.length === 12 && /^998\d{9}/.test(value)) {
                return true;
            } else return false;
        });

    const passwordValidaiton = Yup.string()
        .required(requiredText)
        .min(MIN_LENGTH, minLengthText)
        .max(MAX_LENGTH, maxLength25Text);

    const confirmPasswordValidaiton = Yup.string()
        .required(requiredText)
        .min(MIN_LENGTH, "Минимум 3 символа")
        .max(MAX_LENGTH, maxLength25Text)
        .oneOf([Yup.ref("new_password")], passwordMatchText);

    const pinValidation = Yup.string().required(requiredText);

    const expiryValidation = Yup.string().required(requiredText);

    const paymentRadioValidation = Yup.string().required(requiredText);
    const shippingRadioValidation = Yup.string().required(requiredText);
    const addressRadioValidation = Yup.string().required(requiredText);

    const checkoutValidationSchema = Yup.object({
        name: nameValidation,
        phone_number: phoneValidation,
        pin: pinValidation,
        expiry: expiryValidation,
        message: messageValidation,
        payment_method: paymentRadioValidation,
        shipping_method: shippingRadioValidation,
        address_id: addressRadioValidation,
    });
    const registerValidationSchema = Yup.object({
        name: nameValidation,
        phone_number: phoneValidation,
        password: passwordValidaiton,
    });
    const loginValidationSchema = Yup.object({
        phone_number: phoneValidation,
        password: passwordValidaiton,
    });
    const resetPasswordValidationSchema = Yup.object({
        phone_number: phoneValidation,
        new_password: passwordValidaiton,
        confrim_password: confirmPasswordValidaiton,
    });
    const updatePasswordValidationSchema = Yup.object({
        password: passwordValidaiton,
        new_password: passwordValidaiton,
        confrim_password: confirmPasswordValidaiton,
    });
    const updateProfileValidationSchema = Yup.object({
        name: nameValidation,
    });
    const updatePhoneValidationSchema = Yup.object({
        phone_number: phoneValidation,
    });
    const contactsValidationSchema = Yup.object({
        name: nameValidation,
        phone_number: phoneValidation,
        message: messageValidation,
    });

    return {
        checkoutValidationSchema,
        registerValidationSchema,
        loginValidationSchema,
        resetPasswordValidationSchema,
        updatePasswordValidationSchema,
        updateProfileValidationSchema,
        updatePhoneValidationSchema,
        contactsValidationSchema,
    };
}
