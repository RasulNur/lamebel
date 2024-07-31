import { getCategory, getParentCategory } from "@/api/categoriesApi";
import { getTexts } from "@/api/textsApi";
import PageHeader from "@/components/ui/PageHeader";
import { IPageHeaderProps } from "@/types/props.types";
import React from "react";

export default async function CategoriesPageHeader({
    categoryId,
    lang,
}: IPageHeaderProps) {
    const { text } = await getTexts({ lang });
    const category = await getCategory({ categoryId, lang });
    const parentCategory = await getParentCategory({ categoryId, lang });
    const breadcrumbs =
        typeof parentCategory !== "string"
            ? {
                  links: [
                      { href: "/", title: text("Главная") },
                      {
                          href: `/categories/${parentCategory.data.id}-${parentCategory.data.slug}`,
                          title: parentCategory.data.name,
                      },
                  ],
                  current: category.data.name,
              }
            : {
                  links: [{ href: "/", title: text("Главная") }],
                  current: category.data.name,
              };
    return (
        <PageHeader breadcrumbs={breadcrumbs} title={category.data.h1_name} />
    );
}
