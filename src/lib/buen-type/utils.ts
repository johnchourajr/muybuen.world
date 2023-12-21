/**
 * Builds a CSS clamp function based on viewport widths and font sizes.
 *
 * @param minWidthPx - The minimum viewport width in pixels.
 * @param maxWidthPx - The maximum viewport width in pixels.
 * @param minFontSize - The minimum font size in pixels.
 * @param maxFontSize - The maximum font size in pixels.
 * @returns A string representing the CSS clamp function.
 */
export function clampBuilder(
  minWidthPx: number,
  maxWidthPx: number,
  minFontSize: number,
  maxFontSize: number,
): string {
  if (minWidthPx < 0 || maxWidthPx < 0 || minFontSize < 0 || maxFontSize < 0) {
    throw new Error("All parameters must be non-negative numbers.")
  }

  const minWidth = minWidthPx / 16
  const maxWidth = maxWidthPx / 16

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem)`
}

/**
 * Calculates the modular scale of a base value, given a ratio and the number of iterations.
 *
 * @param base - A base value for the calculation.
 * @param ratio - A ratio multiplier.
 * @param n - The number of iterations or steps in the modular scale.
 * @returns The result of the modular scale calculation.
 */
export function ms(base: number, ratio: number, n: number): number {
  if (base < 0 || ratio < 0) {
    throw new Error("Base and ratio must be non-negative numbers.")
  }

  return base * Math.pow(ratio, n)
}
