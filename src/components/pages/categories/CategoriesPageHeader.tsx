import { getCategory, getParentCategory } from "@/api/categoriesApi";
import { getTexts } from "@/api/textsApi";
import PageHeader from "@/components/ui/PageHeader";
import { ICategoriesPageHeaderProps } from "@/types/props/pages.types";

export default async function CategoriesPageHeader({ category, locale }: ICategoriesPageHeaderProps) {
    const { text } = await getTexts({ locale });

    const parentCategory = await getParentCategory({ categoryId: category.data.id, locale });
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
    return <PageHeader breadcrumbs={breadcrumbs} title={category.data.h1_name} />;
}
