"use client"

export const frenchPressMath = ({
  pressContainer,
  ratio,
}: {
  pressContainer: number
  ratio?: number
}): any => {
  if (!pressContainer) return null

  ratio = ratio || 15

  const volInterpret = (pressContainer: number): number => {
    switch (pressContainer) {
      case 1:
        return 12
      case 2:
        return 17
      case 3:
        return 34
      case 4:
        return 51
      default:
        return 17
    }
  }
  const vol = volInterpret(pressContainer)
  const cups = vol / 4
  const volStr = `${vol} oz (${cups} cups)`
  const mlConvert = 29.5757
  const w = Math.round(vol * mlConvert)
  const coffeeGramsCalc = Math.round((w / ratio) * 10) / 10
  const preinfuse = coffeeGramsCalc * 2
  const pour1 = w - preinfuse

  const result = {
    pressContainer,
    ratio,
    vol,
    outputOverride: volStr,
    coffeeGramsCalc,
    water: w,
    preinfuse,
    pour1,
  }
  return result
}
