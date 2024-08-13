import { Lang } from "./api.types";

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
    lang: Lang;
}

export interface IGetAddressParams {
    token?: string;
    addressId: number;
    lang: Lang;
}
export interface ICreateAddressParams {
    token: string;
    body: IMutateAddress;
    lang: Lang;
}
export interface IUpdateAddressParams {
    token: string;
    body: IMutateAddress;
    addressId: number;
    lang: Lang;
}
export interface ISetDefaultAddressParams {
    token: string;
    addressId: number;
    lang: Lang;
}
export interface IDeleteAddressParams {
    token: string;
    addressId: number;
    lang: Lang;
}
