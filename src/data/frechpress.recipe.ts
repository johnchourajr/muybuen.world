// "use client";

import { frenchPressMath } from "@/lib/buen-func/frenchPressMath";
import { Recipe } from "@/types/recipeData.types";

const frenchPressRecipe: Recipe = {
  title: "French Press",
  slug: "frenchpress",
  type: "recipe",
  background: "/images/french.png",
  ratio: 13,
  func: frenchPressMath,
  primaryFactor: ["pressContainer", "ratio"],
  ingredients: [
    {
      id: "pressContainer",
      label: "Choose a size",
      value: 3,
      min: 1,
      max: 4,
      step: 1,
      type: "range",
      labelOverride: true,
    },
    {
      id: "ratio",
      label: "Change strength",
      value: 13,
      min: 13,
      max: 17,
      step: 0.1,
      prefix: "1:",
      type: "range",
    },
    {
      id: "coffeeGramsCalc",
      label: "Coffee Grams",
      value: 30,
      type: "number",
      locked: true,
    },
    {
      id: "grind",
      label: "Coffee Grind",
      value: "Coarse",
      type: "text",
      locked: true,
    },
    {
      id: "water",
      label: "Water Grams/ml",
      value: 0,
      type: "number",
      locked: true,
    },
    {
      id: "temp",
      label: "Water Temp",
      value: "210°F",
      type: "text",
      locked: true,
    },
  ],
  equipment: [
    {
      name: "French Press carafe",
      link: "https://www.amazon.com/Stainless-Heat-Resistant-Borosilicate-Glass-2-Package/dp/B00DUHACEE/ref=sr_1_1_sspa?s=home-garden&ie=UTF8&qid=1516333361&sr=1-1-spons&keywords=french+press&psc=1",
    },
    {
      name: "Burr Grinder",
      link: "https://www.amazon.com/Baratza-Encore-Conical-Coffee-Grinder/dp/B007F183LK/ref=sr_1_2_sspa?s=home-garden&ie=UTF8&qid=1516333031&sr=1-2-spons&keywords=baratza+burr+grinder&psc=1",
    },
    {
      name: "Digital Scale",
      link: "https://www.amazon.com/Hario-Coffee-Drip-Scale-Timer/dp/B009GPJMOU/ref=pd_sim_79_7?_encoding=UTF8&pd_rd_i=B009GPJMOU&pd_rd_r=6EDS0M09SHYCMHZG0VKS&pd_rd_w=ZjxhR&pd_rd_wg=rMMrE&psc=1&refRID=6EDS0M09SHYCMHZG0VKS",
    },
    {
      name: "Kettle",
      link: "https://www.amazon.com/Bonavita-1-0L-Electric-Kettle-BV3825B/dp/B005YR0GDA/ref=sr_1_3?s=home-garden&ie=UTF8&qid=1516333092&sr=1-3&keywords=bona+vita+kettle",
    },
  ],
  short_steps: [
    {
      label: "Step 1",
      text: "Add Coffee into<br/>French Press",
      number: 0,
      class: ["frenchpress-coffee"],
    },
    {
      label: "Step 2",
      text: "Pour Pre-infusion",
      number: 0,
      class: ["frenchpress-preinfuse"],
    },
    {
      label: "Wait 30 Seconds",
      text: "",
      number: "",
    },
    {
      label: "Step 3",
      text: "Stir with a<br/>wooden spoon",
      number: "",
    },
    {
      label: "Step 4",
      text: "Final Pour",
      number: 0,
      class: ["frenchpress-pour1"],
    },
    {
      label: "Wait 4 Minutes",
      text: "",
      number: "",
    },
    {
      label: "Step 5",
      text: "Press Gently",
      number: "",
    },
  ],
  long_steps: "...",
};

export default frenchPressRecipe;
