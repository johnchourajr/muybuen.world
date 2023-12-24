// "use client";

import { chemexMath } from "@/lib/buen-func/chemexMath"
import { Recipe } from "@/types/recipeData.types"

const chemexRecipe: Recipe = {
  title: "Chemex",
  slug: "chemex",
  type: "recipe",
  background: "/images/chemex.png",
  primaryFactor: ["coffeeGrams", "ratio"],
  ratio: 11.1,
  func: chemexMath,
  ingredients: [
    {
      id: "coffeeGrams", // 'id' is required for the hook to work
      label: "Choose amount of coffee",
      value: 45,
      min: 25,
      max: 100,
      step: 1,
      suffix: "g",
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
      id: "grind", // 'id' is required for the hook to work
      label: "Coffee Grind",
      value: "Med-Coarse",
      type: "text",
      locked: true,
    },
    {
      id: "water", // 'id' is required for the hook to work
      label: "Water Grams/ml",
      value: 630,
      type: "number",
      locked: true,
    },
    {
      id: "temp", // 'id' is required for the hook to work
      label: "Water Temp",
      value: "190°F",
      type: "text",
      locked: true,
    },
  ],
  equipment: [
    {
      name: "Chemex carafe",
      link: "https://www.amazon.com/dp/B002NLF9D2/ref=twister_B00ERVN5BO?_encoding=UTF8&psc=1",
    },
    {
      name: "Chemex filters",
      link: "https://www.amazon.com/Chemex-Natural-Filters-Seamless-FSU-100/dp/B017OFOP68/ref=sr_1_1?s=home-garden&dd=9EHnhMNmA3xY1_hZICv78A%2C%2C&ddc_refnmnt=pfod&ie=UTF8&qid=1516332985&sr=1-1&keywords=chemex+filters&refinements=p_97%3A11292772011",
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
      text: "Pour Pre-infusion",
      number: 0,
      class: ["chemex-preinfuse"],
    },
    {
      label: "Zero Scale",
      text: "",
      number: "",
    },
    {
      label: "Step 2",
      text: "First Pour",
      number: 0,
      class: ["chemex-pour1"],
    },
    {
      label: "Step 3",
      text: "Second Pour",
      number: 0,
      class: ["chemex-pour2"],
    },
    {
      label: "Discard Filter",
      text: "",
      number: "",
    },
    {
      label: "Step 4",
      text: "Bypass Pour",
      number: 0,
      class: ["chemex-bypass"],
    },
  ],
  long_steps:
    "Measure **0**{:.chemex-coffeegrams}g of coffee, and grind **medium-coarse**. Bring **0**{:.chemex-water}g of water to a boil (or 190°f). Rinse filter, place grounds in top of chemex and pour a preinfusion of **0**{:.chemex-water}g. Wait 15-30 seconds. Zero the scale, and pour water over grounds to **0**{:.chemex-pour1}g in a circlular motion. Once the previous pour has drained, continue pouring to **0**{:.chemex-pour2}g. Lastly, once the final pour has drained, discard the coffee filter and add a **0**{:.chemex-bypass}g bypass pour directly into the brewed coffee.",
}

export default chemexRecipe
