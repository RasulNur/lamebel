import { PaymentMethodType, ShippingMethodType } from "./types";

export interface ILoginForm {
    phone_number: string;
    password: string;
}

export interface IRegisterForm {
    name: string;
    phone_number: string;
    password: string;
}

export interface IResetPasswordForm {
    phone_number: string;
    new_password: string;
    confrim_password: string;
}

export interface ICheckoutForm {
    name: string;
    phone_number: string;
    pin: string;
    expiry: string;
    payment_method: PaymentMethodType;
    shipping_method: ShippingMethodType;
    message: string;
    address_id: string;
}

export interface IUpdateProfileForm {
    name: string;
}
export interface IUpdatePhoneForm {
    phone_number: string;
}

export interface IContactsForm {
    name: string;
    phone_number: string;
    message: string;
}
