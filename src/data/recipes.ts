import { RecipeData } from "@/types/recipeData.types";
import aeropressRecipe from "./aeropress.recipe";
import chemexRecipe from "./chemex.recipe";
import frenchPressRecipe from "./frechpress.recipe";
import pouroverRecipe from "./pourover.recipe";
import dripRecipe from "./drip.recipe";

const recipesData: RecipeData = [
  aeropressRecipe,
  dripRecipe,
  chemexRecipe,
  frenchPressRecipe,
  pouroverRecipe,
];

export default recipesData;
