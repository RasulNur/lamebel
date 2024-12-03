import { Locale } from "./api.types";

export interface IAddresses {
    data: IAddress[];
}

export interface IAddress {
    id: number;
    address_line_1: string;
    address_line_2: string;
    latitude: number;
    longitude: number;
    location_accuracy: number;
    is_default: number;
}

export interface ISingleAddress {
    data: IAddress;
}

export interface IMutateAddress {
    address_line_1: string;
    address_line_2?: string;
    latitude?: number;
    longitude?: number;
    location_accuracy?: number;
}

export interface IGetAddressesParams {
    token?: string;
    locale: Locale;
}

export interface IGetAddressParams {
    token?: string;
    addressId: number;
    locale: Locale;
}
export interface ICreateAddressParams {
    token: string;
    body: IMutateAddress;
    locale: Locale;
}
export interface IUpdateAddressParams {
    token: string;
    body: IMutateAddress;
    addressId: number;
    locale: Locale;
}
export interface ISetDefaultAddressParams {
    token: string;
    addressId: number;
    locale: Locale;
}
export interface IDeleteAddressParams {
    token: string;
    addressId: number;
    locale: Locale;
}
