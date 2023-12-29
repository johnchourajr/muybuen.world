"use client"

import type { Ingredient, Recipe } from "@/types/recipeData.types"
import { debounce } from "@/utils/debounce"
import { useEffect, useState } from "react"

const checkIsPrimaryFactor = (primaryFactor: any, id: any) => {
  return Array.isArray(primaryFactor)
    ? primaryFactor.includes(id)
    : primaryFactor === id
}

interface RecipeListProps {
  ingredients: Ingredient[]
  calcState: any
  handleInputChange?: any
  primaryFactor: Recipe["primaryFactor"]
}

const RecipeList: React.FC<RecipeListProps> = ({
  ingredients,
  calcState,
  primaryFactor,
}) => {
  return (
    <div className="grid-container my-8">
      {ingredients.map(
        ({ id, label, type, value, prefix, suffix }: Ingredient) => {
          const isPrimaryFactor = checkIsPrimaryFactor(primaryFactor, id)
          if (isPrimaryFactor) return null

          return (
            <div key={label} className="col-span-full my-4">
              <label htmlFor={id} className={"text-buen-sm flex mb-2"}>
                {label} {isPrimaryFactor && <span>*</span>}
              </label>
              <output id={id} className={"text-buen-2xl"} data-id={id}>
                {prefix}
                {calcState[id] || value || 0}
                {suffix}
              </output>
            </div>
          )
        },
      )}
    </div>
  )
}

const RecipesInputs: React.FC<RecipeListProps> = ({
  ingredients,
  calcState,
  handleInputChange,
  primaryFactor,
}) => {
  return (
    <div>
      {ingredients.map(
        ({
          id,
          label,
          type,
          value,
          locked,
          prefix,
          suffix,
          labelOverride,
          ...rest
        }: Ingredient) => {
          const isPrimaryFactor = checkIsPrimaryFactor(primaryFactor, id)
          if (!isPrimaryFactor) return null

          const labelString = `${prefix || ""}${calcState[id] || value || 0}${
            suffix || ""
          }`

          const output = labelOverride
            ? calcState.outputOverride || 0
            : labelString

          return (
            <div
              key={label}
              className="grid-container glass-card glass-card--light-blue py-6 mb-2"
            >
              <div className="col-span-full flex flex-col gap-y-4">
                <label htmlFor={id} className={"text-buen-sm flex"}>
                  {label}
                </label>

                <input
                  type={type}
                  id={id}
                  className={"text-buen-md"}
                  data-id={id}
                  data-edittable={locked ? "false" : "true"}
                  readOnly={locked}
                  disabled={locked}
                  value={
                    calcState[id] !== undefined ? calcState[id] : value || 0
                  }
                  onChange={handleInputChange}
                  min={type === "range" ? rest.min : undefined}
                  max={type === "range" ? rest.max : undefined}
                  step={type === "range" ? rest.step : undefined}
                />
                {type === "range" && (
                  <output className="text-buen-xl flex">{output}</output>
                )}
              </div>
            </div>
          )
        },
      )}
    </div>
  )
}

interface RecipeFormProps {
  ingredients: Ingredient[]
  func: Recipe["func"]
  primaryFactor: Recipe["primaryFactor"]
}

const RecipeForm: React.FC<RecipeFormProps> = ({
  ingredients,
  func,
  primaryFactor,
}: any) => {
  const [editableState, setEditableState] = useState({} as any)
  const [calcState, setCalcState] = useState({
    ...func({ coffeeGrams: 0 }),
  })

  const getInputs = () => {
    return ingredients.find((ingredient: Ingredient) => !ingredient.locked)
  }

  const updateUrlParams = (newState: any) => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams()

    Object.keys(newState).forEach((key) => {
      params.set(key, newState[key])
    })

    window.history.replaceState({}, "", `${url.pathname}?${params}`)
  }

  const handleNewState = (newState: any) => {
    setEditableState({
      ...editableState,
      ...newState,
    })
    setCalcState({
      ...func(editableState),
    })
    // console.log("handleNewState", newState);
  }

  useEffect(() => {
    const inputs = getInputs()

    if (!inputs) return
    const { id, value } = inputs
    const newValue = Number(value)

    handleNewState({
      [id]: newValue,
    })
  }, [ingredients])

  useEffect(() => {
    updateUrlParams({
      ...editableState,
    })

    setCalcState({
      ...func(editableState),
    })
  }, [editableState, func])

  const handleInputChange = (e: any) => {
    e.preventDefault()
    const { id, value } = e.target

    const newEditableState = {
      [id]: Number(value),
    }

    debounce(handleNewState(newEditableState), 1000, false)
    debounce(updateUrlParams(newEditableState), 1000, false)
  }

  return (
    <>
      <RecipesInputs
        {...{ ingredients, calcState, handleInputChange, primaryFactor }}
      />
      <RecipeList
        {...{ ingredients, calcState, handleInputChange, primaryFactor }}
      />
    </>
  )
}

export interface RecipeTemplateProps {
  recipe: Recipe
}

export const RecipeTemplate: React.FC<RecipeTemplateProps> = ({ recipe }) => {
  const { title, ingredients, func, primaryFactor } = recipe

  return (
    <>
      <div className="my-8 grid-container">
        <div className="col-span-full">
          <h1 className="text-buen-2xl leading-none mb-4">
            {title} <span className=" flex">Recipe</span>
          </h1>
        </div>
      </div>

      <RecipeForm {...{ ingredients, func, primaryFactor }} />
    </>
  )
}
