"use client"

export const chemexMath = ({
  coffeeGrams,
  ratio,
  bypass,
}: {
  coffeeGrams: number
  ratio?: number
  bypass?: number
}): any => {
  if (!coffeeGrams) return null

  ratio = ratio || 16
  bypass = bypass || 3

  const w = coffeeGrams * ratio
  const bypassCalc = Math.round(w / bypass)
  const water = Math.round((w + bypassCalc) * 10) / 10
  const preinfuse = coffeeGrams * 2
  const goal = water - bypassCalc - preinfuse
  const pour = goal / 4
  const pour1 = Math.round(pour * 2)
  const pour2 = Math.round(pour * 4)
  const result = {
    coffeeGrams,
    water,
    ratio,
    bypass,
    bypassCalc,
    preinfuse,
    pour1,
    pour2,
  }
  return result
}
