import { FormEventHandler, SVGProps } from "react";
import {
    DashboardRoutes,
    FulfillAfterOtpType,
    IDashboardTab,
    InputNames,
    SetState,
    SpritesName,
} from "./types";
import { IMeta, Lang } from "./api/api.types";
import { IProducts } from "./api/products.types";
import {
    ICategories,
    ICategoryAttributes,
    ICategoryBrands,
    IPrices,
    ISingleCategory,
} from "./api/categories.types";

export interface IIconProps
    extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
    name: SpritesName;
    className?: string;
}

export interface IOverlapInputProps {
    id: string;
    placeholder: string;
    name: InputNames;
    inputClass?: string;
    disabled?: boolean;
    minLength?: number;
    maxLength?: number;
}

export interface IBreadcrumbsProps {
    breadcrumbs: BreadcrumbsType;
}

export type BreadcrumbsType = {
    links: {
        href: string;
        title: string;
    }[];
    current: string;
};
export interface IContextProvidersProps {
    children: React.ReactNode;
    lang: Lang;
}

export interface IOvalSpinnerProps {
    size: number;
    type?: "main" | "second";
}

export interface IPaginationButtonProps {
    handleClick: ({ page }: { page: number }) => void;
    meta: IMeta;
    type: "prev" | "next";
}

export interface IPaginationNumbersProps {
    meta: IMeta;
    visibleNumbers: number[];
    handleClick: ({ page }: { page: number }) => void;
}
export interface IPageHeaderProps {
    categoryId: number;
    lang: Lang;
}
export interface ICategoriesProps {
    products: IProducts;
    categoryId: number;
    lang: Lang;
}
export interface ICategoriesFiltersProps {
    subCategories: ICategories;
    categoryBrands: ICategoryBrands;
    price: IPrices;
    attributes: ICategoryAttributes;
    parentCategory: ISingleCategory | string;
}
export interface IHideFilterProps {
    setIsOpen: SetState<boolean>;
    isOpen: boolean;
    title: string;
}
export interface ICheckboxProps {
    label: string;
    isChecked: boolean;
    handleChecked: () => void;
}
export interface IAttributeCheckboxProps {
    label: string;
    attrId: number;
    attrValId: number;
    attrSlug: string;
    attrValSlug: string;
}

export interface IProductsFiltersMenuProps {
    subCategories: ICategories;
    categoryBrands: ICategoryBrands;
    price: IPrices;
    attributes: ICategoryAttributes;
    parentCategory: ISingleCategory | string;
}

export interface IMenuWrapperProps {
    menuBtn: React.ReactNode;
    menuContent: React.ReactNode;
    isOpen: boolean;
    closeModal: () => void;
}
export interface IOtpModalProps {
    isOpen: boolean;
    formPhone: string;
    fulfillAfterOtp: FulfillAfterOtpType;
    setIsOpen: SetState<boolean>;
    lang: Lang;
}
export interface IOtpFormProps {
    handleSubmit: FormEventHandler<HTMLFormElement>;
    otp: string;
    setOtp: SetState<string>;
    formPhone: string;
    lang: Lang;
}

export interface IDashboardLinkProps {
    tab: IDashboardTab;
    activeRoute: DashboardRoutes;
}
