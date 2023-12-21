import React from "react"
import recipes from "@/data/recipes" // Import your recipe data
import { RecipeTemplate } from "@/components/recipe.template"

const getRecipeData = async (slug: string) => {
  return recipes.find((recipe) => recipe.slug === slug)
}

export default async function Page({ params, ...rest }: { params: any }) {
  const recipe = await getRecipeData(params.slug)

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return <RecipeTemplate recipe={recipe} />
}

export async function generateStaticParams() {
  return recipes.map((post) => ({
    slug: post.slug,
  }))
}
