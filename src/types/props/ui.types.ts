import { FormEventHandler, SVGProps } from "react";
import {
    FulfillAfterOtpType,
    InputNames,
    SetState,
    SpritesName,
} from "../types";
import { IMeta, Lang } from "../api/api.types";
import { IProduct, IProducts } from "../api/products.types";
import { IAddress } from "../api/address.types";
import { FormikErrors, FormikState } from "formik";
import { IAddressForm, ICheckoutForm, IReviewsForm } from "../form.types";
import { ICategoriesTree, ICategoryTree } from "../api/categories.types";
import { ISettings } from "../api/settings.types";
import { IPublicationsPublication } from "../api/publications.types";
import { IReview } from "../api/reviews.types";
import { OtpTarget } from "../api/auth.types";

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
export interface IHideFilterProps {
    setIsOpen: SetState<boolean>;
    isOpen: boolean;
    title: string;
}
export interface ICheckboxProps {
    label: string;
    isChecked: boolean;
    handleChecked: () => void;
    isDisabled?: boolean;
}

export interface IMenuWrapperProps {
    menuBtn: React.ReactNode;
    menuContent: React.ReactNode;
    isOpen: boolean;
    closeModal: () => void;
}
export interface IOtpModalProps<T> {
    isOpen: boolean;
    formPhone: string;
    fulfillAfterOtp: FulfillAfterOtpType;
    setIsOpen: SetState<boolean>;
    lang: Lang;
    otpTarget: OtpTarget;
    resetForm: (nextState?: Partial<FormikState<T>> | undefined) => void;
}
export interface IOtpFormProps {
    handleSubmit: FormEventHandler<HTMLFormElement>;
    otp: string;
    setOtp: SetState<string>;
    formPhone: string;
    lang: Lang;
    otpTarget: OtpTarget;
}
export interface IWishlistButtonProps {
    product: IProduct;
    className?: string;
}
export interface ICartButtonProps {
    className?: string;
    product: IProduct;
    quantity?: number;
    type?: "text" | "icon";
}
export interface IQuantityProps {
    productQuantity: number;
    product: IProduct;
    setQuantity?: SetState<number>;
}
export interface IRadioInputProps {
    name: string;
    value: string;
    title: string;
}
export interface IAddressCardProps {
    address: IAddress;
    lang: Lang;
}
export interface IRatingProps {
    strokeColor?: string;
    fillColor?: string;
    activeStrokeColor?: string;
    activeFillColor?: string;
    count?: number;
    wrapperClassName?: string;
    iconClassname?: string;

    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<IReviewsForm>>;
    values: IReviewsForm;
}

export interface IPageHeaderProps {
    title: string;
    breadcrumbs: BreadcrumbsType;
}
export interface ICartWrapperProps {
    content: React.ReactNode;
    sidebar: React.ReactNode;
}
export interface ICartProductCardProps {
    product: IProduct;
    quantity?: number;
}
export interface IRemoveFromCartProps {
    product: IProduct;
}
export interface ISectionWrapperProps {
    children: React.ReactNode;
    className?: string;
}
export interface IProductsGridProps {
    products: IProducts;
    lang: Lang;
}
export interface IProductCardProps {
    product: IProduct;
    lang: Lang;
}
export interface IProductDiscountProps {
    product: IProduct;
    type?: "card" | "product";
}
export interface IPaginationProps {
    meta: IMeta;
}
export interface IProductsSwiperProps {
    title: string;
    subtitle: string;
    products: IProduct[];
    lang: Lang;
}
export interface ISectionHeaderProps {
    title: string;
    subtitle: string;
}
export interface ICategoryCardProps {
    category: ICategoryTree;
}
export interface ICheckoutProductCardProps {
    product: IProduct;
    quantity?: number;
}
export interface IAddressModalProps<Form> {
    type: "create" | "update";
    lang: Lang;
    btnClassname?: string;
    currentAddress?: IAddress;
    setFieldValue?: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<Form>>;
}
export interface IDialogWrapperProps {
    button: React.ReactNode;
    content: React.ReactNode;
    title: string;
    setIsOpen: SetState<boolean>;
    isOpen: boolean;
    dialogClassname?: string;
    titleClassname?: string;
}
export interface IMapSectionProps {
    settings: ISettings;
}
export interface IStaticMapProps {
    iframe: string;
}
export interface ILogoutButtonProps {
    lang: Lang;
}
export interface INewsCardProps {
    singleNews: IPublicationsPublication;
}
export interface IBlockForScrollProps {
    id: string;
}
export interface IReviewCardProps {
    review: IReview;
}
export interface IStaticRatingProps {
    rating: number;
}
export interface ICategoriesSwiperProps {
    categories: ICategoriesTree;
}
export interface IContactsSectionProps {
    lang: Lang;
}
export interface INotFoundTextProps {
    lang: Lang;
}
export interface IBuyModalFormProps {
    product: IProduct;
    lang: Lang;
}
export interface IBuyModalProps {
    product: IProduct;
    lang: Lang;
    className?: string;
}

export interface ISearchFormProps {
    keyword?: string;
    className?: string;
    inputClassName?: string;
    setIsFocused?: SetState<boolean>;
}
export interface IViewedSwiperProps {
    productId: number;
    lang: Lang;
}
