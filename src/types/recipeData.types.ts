export type Ingredient = {
  id:
    | "coffeeGrams"
    | "coffeeGramsCalc"
    | "water"
    | "temp"
    | "grind"
    | "pressContainer"
    | "ratio"
  label: string
  value: string | number
  type: "text" | "number" | "range"
  locked?: boolean
  min?: number
  max?: number
  step?: number
  prefix?: string
  suffix?: string
  labelOverride?: boolean
  show_images?: boolean
}

type Equipment = {
  name: string
  link: string
}

type ShortStep = {
  label: string
  text: string
  number?: number | null | ""
  class?: string | string[]
}

export type Recipe = {
  title: string
  slug: string
  type: string
  background: string
  ratio: number
  func: any
  primaryFactor: string | string[]
  ingredients: Ingredient[]
  equipment: Equipment[]
  short_steps: ShortStep[]
  long_steps: string
}

export type RecipeData = Recipe[]
