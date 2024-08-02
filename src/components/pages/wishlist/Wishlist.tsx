"use client";

import Empty from "@/components/ui/Empty";
import OvalSpinner from "@/components/ui/OvalSpinner";
import ProductCard from "@/components/ui/ProductCard";
import ProductsGrid from "@/components/ui/ProductsGrid";
import { useText } from "@/context/text.context";
import { useWishlist } from "@/context/wishlist.context";
import { useCookies } from "next-client-cookies";
import { useState } from "react";

export default function Wishlist() {
    const { apiWishlist, wishlist, clearWishlist } = useWishlist();
    const cookies = useCookies();
    const token = cookies.get("token");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { text } = useText();

    return (
        <>
            {((token && apiWishlist.quantity == 0) ||
                (!token && wishlist.length == 0)) && <Empty />}
            {((token && apiWishlist.quantity > 0) ||
                (!token && wishlist.length > 0)) && (
                <div className="flex flex-col gap-10">
                    <div className="flex justify-end">
                        <button
                            disabled={isLoading}
                            className="main-btn"
                            onClick={() => clearWishlist({ setIsLoading })}>
                            {isLoading && (
                                <OvalSpinner size={16} type="second" />
                            )}
                            {text("Очистить корзину")}
                        </button>
                    </div>
                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 common-products-grid">
                        {token
                            ? apiWishlist.items &&
                              apiWishlist.items.map((item) => {
                                  return (
                                      <ProductCard
                                          key={item.id}
                                          product={item.product}
                                      />
                                  );
                              })
                            : wishlist.map((item) => {
                                  return (
                                      <ProductCard
                                          key={item.id}
                                          product={item}
                                      />
                                  );
                              })}
                    </div>
                </div>
            )}
        </>
    );
}
