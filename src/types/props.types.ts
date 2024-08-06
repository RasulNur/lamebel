import { FormEventHandler, SVGProps } from "react";
import {
    DashboardRoutes,
    FulfillAfterOtpType,
    IDashboardTab,
    IGroupAttribute,
    InputNames,
    SetState,
    SpritesName,
} from "./types";
import { IMeta, Lang } from "./api/api.types";
import {
    IProduct,
    IProductAttributes,
    IProducts,
    ProductsFilter,
} from "./api/products.types";
import {
    ICategories,
    ICategoriesTree,
    ICategoryAttributes,
    ICategoryBrands,
    IPrices,
    ISingleCategory,
} from "./api/categories.types";
import { IProfile } from "./api/profile.types";
import { ICheckoutForm, IReviewsForm, IUpdatePhoneForm } from "./form.types";
import { FormikErrors } from "formik";
import { IPaymentMethods, IShippingMethods } from "./api/checkoutMethods.types";
import { IAddress, IAddresses } from "./api/address.types";
import {
    IProductGroup,
    IProductGroupAttribute,
    IProductGroupAttributeValue,
} from "./api/productGroup.types";
import { ISettings } from "./api/settings.types";
import { IPublications } from "./api/publications.types";

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
export interface ICategoriesPageHeaderProps {
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
export interface IUpdateProfileProps {
    profile: IProfile;
    lang: Lang;
}

export interface IUpdatePhoneProps {
    profile: IProfile;
    lang: Lang;
}
export interface IUpdatePhoneFormProps {
    setIsOtpModalOpen: SetState<boolean>;
    isOtpModalOpen: boolean;
    values: IUpdatePhoneForm;
    fulfillAfterOtp: ({ otp }: { otp: string }) => void;
    lang: Lang;
    isSubmitting: boolean;
}
export interface IUpdatePasswordForm {
    password: string;
    new_password: string;
    confrim_password: string;
}
export interface IWishlistButtonProps {
    product: IProduct;
    className?: string;
}
export interface ICartButtonProps {
    className?: string;
    product: IProduct;
    quantity?: number;
}

export interface IQuantityProps {
    productQuantity: number;
    product: IProduct;
    setQuantity?: SetState<number>;
}

export interface ICheckoutProps {
    paymentMethods: IPaymentMethods;
    shippingMethods: IShippingMethods;
    addresses: IAddresses;
    lang: Lang;
}

export interface ICheckoutFormProps {
    paymentMethods: IPaymentMethods;
    shippingMethods: IShippingMethods;
    addresses: IAddresses;
    lang: Lang;
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<ICheckoutForm>>;
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
export interface ICategoriesPagesProductsProps {
    filterName: ProductsFilter;
    swiperName: ProductsFilter;
    page?: string;
    lang: Lang;
}

export interface IProductGroupsProps {
    attributes: IProductAttributes;
    productGroup: IProductGroup | "Not exist";
}

export interface IProductGroupsButtonProps {
    productGroup: IProductGroup;
    activeAttributes: IGroupAttribute[];
    groupAttrVal: IProductGroupAttributeValue;
    groupAttr: IProductGroupAttribute;
}

export interface IHomeSectionWrapperProps {
    settings: ISettings;
    categories: ICategoriesTree;
    bestsellerProducts: IProducts;
    newProducts: IProducts;
    news: IPublications;
    lang: Lang;
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
