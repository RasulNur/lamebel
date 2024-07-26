import { SVGProps, FormEventHandler } from "react";
import {
    DashboardRoutes,
    FulfillAfterOtpType,
    IDashboardTab,
    InputNames,
    SetState,
    SpritesName,
} from "./types";
import {
    IProduct,
    IProductAttributes,
    IProducts,
    ISingleProduct,
} from "./api/products.types";
import {
    ICategories,
    ICategoriesTree,
    ICategoryAttributes,
    ICategoryBrands,
    IPrices,
    ISingleCategory,
} from "./api/categories.types";
import { IPaymentMethods, IShippingMethods } from "./api/checkoutMethods.types";
import { IAddress, IAddresses, ISingleAddress } from "./api/address.types";
import { IUpdatePhoneForm } from "./form.types";
import { IPublications } from "./api/publications.types";
import { ISettings } from "./api/settings.types";
import { ISingleMenu } from "./api/menus.types";
import { IMeta, Lang } from "./api/api.types";
import { IProfile } from "./api/profile.types";

export interface IIconProps
    extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
    name: SpritesName;
    className?: string;
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

export interface IBreadcrumbsProps {
    breadcrumbs: {
        links: {
            href: string;
            title: string;
        }[];
        current: string;
    };
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

export interface IBrandProps {
    brandId: number;
    page: string | undefined;
    lang: Lang;
}

export interface IWishlistButtonProps {
    product: IProduct;
    className?: string;
}

export interface ICartButtonProps {
    type: "icon" | "text";
    className?: string;
    product: IProduct;
    quantity?: number;
}

export interface ICartTotalProps {
    page: "checkout" | "cart";
    isLoading?: boolean;
}

export interface IProductCard2Props {
    product: IProduct;
    page: "wishlist" | "cart" | "checkout";
    quantity?: number;
}

export interface IQuantityProps {
    productQuantity: number;
    product: IProduct;
    setQuantity?: SetState<number>;
}

export interface IRemoveButtonProps {
    product: IProduct;
    page: "wishlist" | "cart";
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

export interface ICategoriesFiltersMenuProps {
    subCategories: ICategories;
    categoryBrands: ICategoryBrands;
    price: IPrices;
    attributes: ICategoryAttributes;
    parentCategory: ISingleCategory | string;
}

export interface ICheckoutProps {
    paymentMethods: IPaymentMethods;
    shippingMethods: IShippingMethods;
    addresses: IAddresses;
}
export interface ICheckoutFormProps {
    paymentMethods: IPaymentMethods;
    shippingMethods: IShippingMethods;
    addresses: IAddresses;
}

export interface IRadioInputProps {
    name: string;
    value: string;
    title: string;
}

export interface IMapCreateProps {
    positionParams: {
        lat: string | undefined;
        lng: string | undefined;
    };
    lang: Lang;
}

export interface IMapUpdateProps {
    address: ISingleAddress;
    positionParams: {
        lat: string;
        lng: string;
    };
    lang: Lang;
}

export interface IUpdatePhoneFormProps {
    isLoading: boolean;
    setIsOtpModalOpen: SetState<boolean>;
    isOtpModalOpen: boolean;
    values: IUpdatePhoneForm;
    fulfillAfterOtp: ({ otp }: { otp: string }) => void;
    lang: Lang;
}

export interface IUpdatePasswordForm {
    password: string;
    new_password: string;
    confrim_password: string;
}

export interface IProductsSwiperProps {
    classname: string;
    title: string;
    products: IProducts;
}
export interface IProductTabsProps {
    product: ISingleProduct;
    productAttributes: IProductAttributes;
}
export interface ICategoriesSwiperProps {
    categories: ICategoriesTree;
    title: string;
}

export interface IHomeProductsProps {
    products: IProducts;
    title: string;
}

export interface INewsSwiperProps {
    title: string;
    news: IPublications;
}
export interface IHeaderMenuProps {
    categoriesTree: ICategoriesTree;
    settings: ISettings;
    menu: ISingleMenu;
}
export interface IDashboardLinkProps {
    tab: IDashboardTab;
    activeRoute: DashboardRoutes;
}

export interface IContextProvidersProps {
    children: React.ReactNode;
    lang: Lang;
}

export interface ILangDropdownProps {
    btnClassname: string;
    commonIconClassname: string;
    isMobile?: boolean;
}

export interface IAddressCardProps {
    address: IAddress;
    lang: Lang;
}

export interface IDashboardTabsProps {
    activeRoute: DashboardRoutes;
    lang: Lang;
}

export interface IOvalSpinnerProps {
    size: number;
    type?: "main" | "second";
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

export interface IPageHeaderProps {
    categoryId: number;
    lang: Lang;
}

export interface IProductProps {
    product: ISingleProduct;
    lang: Lang;
}

export interface INewsProps {
    page: string | undefined;
    lang: Lang;
}

export interface IUpdateProfileProps {
    profile: IProfile;
    lang: Lang;
}

export interface IUpdatePhoneProps {
    profile: IProfile;
    lang: Lang;
}

export interface IContactsProps {
    settings: ISettings;
    lang: Lang;
}

export interface IBrandsProps {
    page: string | undefined;
    lang: Lang;
}

export interface IBrandCategoriesProps {
    brandId: number;
    lang: Lang;
}

export interface IOrderInfoCardProps {
    title: string;
    info: string;
}

export interface IHeaderTopProps {
    settings: ISettings;
    menu: ISingleMenu;
}

export interface IHeaderBottomProps {
    settings: ISettings;
    menu: ISingleMenu;
    categoriesTree: ICategoriesTree;
}
