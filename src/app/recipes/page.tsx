import { RecipesList } from "@/components/recipes-list";
import PageHeader from "@/components/page-header";

export default function RecipesPage() {
  return (
    <>
      <PageHeader>
        Brew Buen <br />
        Coffee
      </PageHeader>
      <RecipesList />
    </>
  );
}
