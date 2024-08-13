import { ReactNode } from "react";
import { Lang } from "../api/api.types";
import { IProduct } from "../api/products.types";

export interface IViewedContextProps {
    viewed: IProduct[];
    addProduct: ({ product }: { product: IProduct }) => void | null;
}

export interface IViewedProviderParams {
    children: ReactNode;
}
