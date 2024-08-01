export interface IContactsForm {
    name: string;
    phone_number: string;
    message: string;
}
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
