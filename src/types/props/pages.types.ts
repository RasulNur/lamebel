import { FormikErrors, FormikState } from "formik";
import { IAddress, IAddresses } from "../api/address.types";
import { Lang } from "../api/api.types";
import {
    ICategories,
    ICategoriesTree,
    ICategoryAttribute,
    ICategoryAttributes,
    ICategoryBrand,
    ICategoryBrands,
    IPrices,
    ISingleCategory,
} from "../api/categories.types";
import {
    IPaymentMethods,
    IShippingMethods,
} from "../api/checkoutMethods.types";
import {
    IProduct,
    IProductAttributes,
    IProducts,
    ISingleProduct,
    ProductsFilter,
} from "../api/products.types";
import { IProfile } from "../api/profile.types";
import { IAddressForm, ICheckoutForm, IUpdatePhoneForm } from "../form.types";
import {
    AuthTab,
    DashboardRoutes,
    IDashboardTab,
    IGroupAttribute,
    SetState,
} from "../types";
import {
    IProductGroup,
    IProductGroupAttribute,
    IProductGroupAttributeValue,
} from "../api/productGroup.types";
import { ISettings } from "../api/settings.types";
import { IPublications, ISinglePublication } from "../api/publications.types";
import { IOrder, IOrders } from "../api/orders.types";
import { IReviews } from "../api/reviews.types";

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
export interface IAttributeCheckboxProps {
    label: string;
    attrId: number;
    attrValId: number;
    attrSlug: string;
    attrValSlug: string;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
}

export interface IProductsFiltersMenuProps {
    subCategories: ICategories;
    categoryBrands: ICategoryBrands;
    price: IPrices;
    attributes: ICategoryAttributes;
    parentCategory: ISingleCategory | string;
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
    resetForm: (
        nextState?: Partial<FormikState<IUpdatePhoneForm>> | undefined,
    ) => void;
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
export interface IFilteredProductsProps {
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

export interface IParentCategory {
    parentCategory: ISingleCategory | string;
}

export interface IFilterCategoriesProps {
    categories: ICategories;
}
export interface IFilterBrandsProps {
    brands: ICategoryBrands;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
}
export interface IBrandCheckboxProps {
    brand: ICategoryBrand;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
}
export interface IFilterAttributesProps {
    attributes: ICategoryAttributes;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
}
export interface IAttributeProps {
    attribute: ICategoryAttribute;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
}
export interface IFilterPriceProps {
    price: IPrices;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
}
export interface IClearFiltersProps {
    price: IPrices;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
}
export interface IProductFiltersMenuBtnProps {
    openModal: () => void;
}

export interface ICatalogProps {
    categoriesTree: ICategoriesTree;
}

export interface ICheckoutTotalProps {
    isSubmitting: boolean;
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
    ) => Promise<void | FormikErrors<IAddressForm>>;
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
export interface IDashboardTabsProps {
    children: React.ReactNode;
    activeRoute: DashboardRoutes;
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

export interface IReviewsFormProps {
    product: ISingleProduct;
    lang: Lang;
}
export interface IProductSidebarProps {
    product: IProduct;
    setTabIndex: SetState<number>;
    attributes: IProductAttributes;
    productGroup: IProductGroup | "Not exist";
    lang: Lang;
}
export interface IProductLinksProps {
    setTabIndex: SetState<number>;
}
export interface ISearchProps {
    products: IProducts;
    keyword: string;
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
export interface IHomeAboutProps {
    lang: Lang;
}
export interface INewsSwiperProps {
    news: IPublications;
}
export interface IProductPageWrapperProps {
    product: ISingleProduct;
    productAttributes: IProductAttributes;
    lang: Lang;
    reviews: IReviews;
    productGroup: IProductGroup | "Not exist";
    bestsellerProducts: IProduct[];
    similarProducts: IProduct[];
}
export interface IWishlistProps {
    lang: Lang;
}

export interface IAddressesProps {
    lang: Lang;
}
export interface IBrandsProps {
    page?: string;
    lang: Lang;
}
export interface IBrandProps {
    brandId: number;
    page?: string;
    lang: Lang;
}
export interface IBrandCategoriesProps {
    brandId: number;
    lang: Lang;
}
