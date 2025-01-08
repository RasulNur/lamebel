import { FormEventHandler, SVGProps } from "react";
import { FulfillAfterOtpType, InputNames, SetState, SpritesName } from "../types";
import { ILocalization, IMeta, Locale } from "../api/api.types";
import { IProduct, IProducts } from "../api/products.types";
import { IAddress } from "../api/address.types";
import { FormikErrors, FormikState } from "formik";
import { IAddressForm, ICheckoutForm, IReviewsForm } from "../form.types";
import { ICategoriesTree, ICategoryTree } from "../api/categories.types";
import { ISettings } from "../api/settings.types";
import { IPublicationsPublication } from "../api/publications.types";
import { IReview } from "../api/reviews.types";
import { OtpTarget } from "../api/auth.types";
import { SingleBrand } from "../api/brand.types";

export interface IIconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
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
    locale: Locale;
    otpTarget: OtpTarget;
    resetForm: (nextState?: Partial<FormikState<T>> | undefined) => void;
}
export interface IOtpFormProps {
    handleSubmit: FormEventHandler<HTMLFormElement>;
    otp: string;
    setOtp: SetState<string>;
    formPhone: string;
    locale: Locale;
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
    locale: Locale;
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
    locale: Locale;
}
export interface IProductCardProps {
    product: IProduct;
    locale: Locale;
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
    locale: Locale;
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
    locale: Locale;
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
    locale: Locale;
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
    locale: Locale;
}
export interface INotFoundTextProps {
    locale: Locale;
}
export interface IBuyModalFormProps {
    product: IProduct;
    locale: Locale;
}
export interface IBuyModalProps {
    product: IProduct;
    locale: Locale;
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
    locale: Locale;
}
export interface IBrandCardProps {
    brand: SingleBrand;
}
export interface ILocalizationComponentProps {
    startPath: string;
    localization: ILocalization;
    id: number;
}
