import { FormEventHandler, SVGProps } from "react";
import {
    AuthTab,
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
    ISingleProduct,
    ProductsFilter,
} from "./api/products.types";
import {
    ICategories,
    ICategoriesTree,
    ICategoryAttribute,
    ICategoryAttributes,
    ICategoryBrand,
    ICategoryBrands,
    ICategoryTree,
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
import {
    IPublications,
    IPublicationsPublication,
    ISinglePublication,
} from "./api/publications.types";
import { IOrder, IOrders } from "./api/orders.types";
import { IReview, IReviews } from "./api/reviews.types";
import { ISingleMenu } from "./api/menus.types";

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

export interface IProductsFiltersProps {
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

export interface ISectionWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export interface IParentCategory {
    parentCategory: ISingleCategory | string;
}

export interface IFilterCategoriesProps {
    categories: ICategories;
}
export interface IBrandCheckboxProps {
    brand: ICategoryBrand;
}
export interface IFilterAttributesProps {
    attributes: ICategoryAttributes;
}
export interface IAttributeProps {
    attribute: ICategoryAttribute;
}
export interface IFilterPriceProps {
    price: IPrices;
}
export interface IClearFiltersProps {
    price: IPrices;
}
export interface IProductsGridProps {
    products: IProducts;
}
export interface IProductCardProps {
    product: IProduct;
}

export interface IProductDiscountProps {
    product: IProduct;
    type?: "card" | "product";
}
export interface IProductFiltersMenuBtnProps {
    openModal: () => void;
}
export interface IPaginationProps {
    meta: IMeta;
}
export interface IProductsSwiperProps {
    title: string;
    subtitle: string;
    products: IProducts;
}
export interface ISectionHeaderProps {
    title: string;
    subtitle: string;
}
export interface ICatalogProps {
    categoriesTree: ICategoriesTree;
}

export interface ICategoryCardProps {
    category: ICategoryTree;
}
export interface ICheckoutTotalProps {
    isSubmitting: boolean;
}
export interface ICheckoutProductCardProps {
    product: IProduct;
    quantity?: number;
}
export interface ICheckoutAddressesProps {
    addresses: IAddresses;
    lang: Lang;
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<ICheckoutForm>>;
}
export interface IAddressModalProps {
    type: "create" | "update";
    lang: Lang;
    btnClassname?: string;
    currentAddress?: IAddress;
    setFieldValue?: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<ICheckoutForm>>;
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
export interface ICheckoutShippingProps {
    shippingMethods: IShippingMethods;
}
export interface ICheckoutPaymentProps {
    paymentMethods: IPaymentMethods;
}
export interface ICreateAddressProps {
    lang: Lang;
    setIsOpen: SetState<boolean>;
    setFieldValue?: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<ICheckoutForm>>;
}
export interface IUpdateAddressProps {
    lang: Lang;
    setIsOpen: SetState<boolean>;
    currentAddress?: IAddress;
}
export interface IContactsProps {
    settings: ISettings;
    lang: Lang;
}
export interface IContactsLinksProps {
    settings: ISettings;
}
export interface IContactsFormProps {
    lang: Lang;
}
export interface IMapSectionProps {
    settings: ISettings;
}
export interface IStaticMapProps {
    iframe: string;
}
export interface IDashboardTabsProps {
    children: React.ReactNode;
    activeRoute: DashboardRoutes;
    lang: Lang;
}
export interface ILogoutButtonProps {
    lang: Lang;
}
export interface IOrdersProps {
    orders: IOrders;
}
export interface IOrderModalProps {
    order: IOrder;
}
export interface IOrderModalContentProps {
    order: IOrder;
}
export interface IOrderModalProductsProps {
    order: IOrder;
}
export interface IOrderModalInfoProps {
    order: IOrder;
}
export interface IProfileProps {
    lang: Lang;
}
export interface IUpdatePasswordProps {
    lang: Lang;
}
export interface IUpdatePasswordFormProps {
    isSubmitting: boolean;
}
export interface ISingleNewsProps {
    publication: ISinglePublication;
}
export interface INewsProps {
    news: IPublications;
}
export interface INewsCardProps {
    singleNews: IPublicationsPublication;
}

export interface IProductProps {
    product: ISingleProduct;
    productAttributes: IProductAttributes;
    lang: Lang;
    reviews: IReviews;
    productGroup: IProductGroup | "Not exist";
}
export interface IProductGalleryProps {
    product: ISingleProduct;
}
export interface IGalleryGridProps {
    product: ISingleProduct;
}
export interface IGallerySwiperProps {
    product: ISingleProduct;
}
export interface IProductTabsProps {
    tabIndex: number;
    setTabIndex: SetState<number>;
    productAttributes: IProductAttributes;
    product: ISingleProduct;
    lang: Lang;
    reviews: IReviews;
}
export interface IBlockForScrollProps {
    id: string;
}
export interface IProductСharacteristicsProps {
    productAttributes: IProductAttributes;
}
export interface IProductDescriptionProps {
    product: ISingleProduct;
}
export interface IProductReviewsProps {
    product: ISingleProduct;
    lang: Lang;
    reviews: IReviews;
}
export interface IReviewsListProps {
    reviews: IReviews;
}
export interface IReviewCardProps {
    review: IReview;
}
export interface IStaticRatingProps {
    rating: number;
}
export interface IReviewsFormProps {
    product: ISingleProduct;
    lang: Lang;
}
export interface IProductSidebarProps {
    product: ISingleProduct;
    setTabIndex: SetState<number>;
    attributes: IProductAttributes;
    productGroup: IProductGroup | "Not exist";
}
export interface IProductLinksProps {
    setTabIndex: SetState<number>;
}
export interface ISearchProps {
    products: IProducts;
    keyword: string;
}
export interface ISearchFormProps {
    keyword?: string;
}
export interface IErrorProps {
    reset: () => void;
}

export interface IHeaderProps {
    lang: Lang;
}
export interface IHeaderTopProps {
    lang: Lang;
    settings: ISettings;
    menu: ISingleMenu;
}
export interface IHeaderMenuProps {
    menu?: ISingleMenu;
}
export interface IHeaderMenuContentProps {
    closeModal: () => void;
    menu?: ISingleMenu;
}
export interface IHeaderListProps {
    menu: ISingleMenu;
}
export interface IHeaderIconsProps {
    lang: Lang;
    setIsSearchOpen: SetState<boolean>;
}
export interface IAuthMenuProps {
    lang: Lang;
}
export interface IAuthMenuContentProps {
    closeModal: () => void;
    lang: Lang;
}
export interface ILoginProps {
    setAuthTab: SetState<AuthTab>;
    lang: Lang;
    closeModal: () => void;
}
export interface ILoginFormProps {
    isSubmitting: boolean;
    setAuthTab: SetState<AuthTab>;
}
export interface IRegisterProps {
    setAuthTab: SetState<AuthTab>;
    lang: Lang;
    closeModal: () => void;
}
export interface IRegisterFormProps {
    isSubmitting: boolean;
    setAuthTab: SetState<AuthTab>;
}
export interface IResetPasswordProps {
    setAuthTab: SetState<AuthTab>;
    lang: Lang;
}
export interface IResetPasswordFormProps {
    isSubmitting: boolean;
    setAuthTab: SetState<AuthTab>;
}
export interface IHeaderCategoriesProps {
    settings: ISettings;
}
export interface IFooterProps {
    lang: Lang;
}
export interface IFooterMenusProps {
    lang: Lang;
}
export interface IFooterListProps {
    menu: ISingleMenu;
}
export interface ICategoriesSwiperProps {
    categories: ICategoriesTree;
}
export interface IHomeAboutProps {
    lang: Lang;
}
export interface INewsSwiperProps {
    news: IPublications;
}
export interface IContactsSectionProps {
    lang: Lang;
}
export interface INotFoundTextProps {
    lang: Lang;
}
