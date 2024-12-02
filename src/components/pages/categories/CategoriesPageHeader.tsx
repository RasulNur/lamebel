import { getCategory, getParentCategory } from "@/api/categoriesApi";
import { getTexts } from "@/api/textsApi";
import PageHeader from "@/components/ui/PageHeader";
import { ICategoriesPageHeaderProps } from "@/types/props/pages.types";

export default async function CategoriesPageHeader({
    categoryId,
    locale,
}: ICategoriesPageHeaderProps) {
    const { text } = await getTexts({ locale });
    const category = await getCategory({ categoryId, locale });
    const parentCategory = await getParentCategory({ categoryId, locale });
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
