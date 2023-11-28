// "use client";

import { dripMath } from "@/lib/buen-func/dripMath";
import { Recipe } from "@/types/recipeData.types";

const dripRecipe: Recipe = {
  title: "Automatic Drip",
  slug: "drip",
  type: "recipe",
  background: "/images/drip.png",
  ratio: 16,
  primaryFactor: ["water", "ratio"],
  func: dripMath,
  ingredients: [
    {
      id: "water",
      label: "Choose yeild (ml)",
      value: 750,
      min: 250,
      max: 1250,
      step: 250,
      suffix: "ml",
      type: "range",
    },
    {
      id: "ratio",
      label: "Choose strength",
      value: 16,
      min: 13,
      max: 17,
      step: 0.1,
      prefix: "1:",
      type: "range",
    },
    {
      id: "coffeeGrams",
      label: "Coffee Grams",
      value: 15.6,
      suffix: "g",
      type: "number",
      locked: true,
    },
    {
      id: "grind",
      label: "Coffee Grind",
      value: "Medium",
      type: "text",
      locked: true,
    },
  ],
  equipment: [
    // to be written
  ],
  short_steps: [
    // to be written
    {
      label: "Step 1",
      text: "Wash Filter",
      number: "",
      class: [],
    },
    {
      label: "Step 2",
      text: "Add Coffee",
      number: "",
      class: [],
    },
  ],
  long_steps: "...",
};

export default dripRecipe;
