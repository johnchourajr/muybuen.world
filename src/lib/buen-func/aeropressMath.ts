"use client"

export const aeropressMath = ({ ratio }: { ratio?: number }): any => {
  ratio = ratio || 13 // Default ratio if none is provided

  // Calculate coffee and water based on the ratio and total brew weight.
  // The total weight is divided by (1 part coffee + ratio parts water).
  const w = 630
  const coffeeGrams = Math.round((w / (1 + ratio)) * 10) / 10
  const water = Math.round(coffeeGrams * ratio * 10) / 10

  // Here, pour could be the same as water or a different calculation if needed.
  const aeropressPour = water

  const result = {
    coffeeGrams,
    ratio,
    water,
    aeropressPour,
  }
  return result
}
