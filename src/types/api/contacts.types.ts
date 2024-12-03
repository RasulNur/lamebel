import { Locale } from "./api.types";

export interface IContactsBody {
    name: string;
    phone: string;
    message: string;
    product_id?: number;
    category_id?: number;
}
export interface ISendFeedbackParams {
    body: IContactsBody;
    locale: Locale;
}
