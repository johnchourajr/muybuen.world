import { ms, clampBuilder } from "./utils";

/**
 * Types
 */
export interface BuenTypeOptions {
  minWidth?: number;
  maxWidth?: number;
  minRatio?: number;
  maxRatio?: number;
  floor?: number;
  levels?: string[];
}
export type BuenType = Record<string, string>;

/**
 * Defaults
 */
export const DEFAULTS = {
  minWidth: 375,
  maxWidth: 1024,
  minRatio: 1.125,
  maxRatio: 1.275,
  floor: 1,
  levels: ["1", "2", "3", "4", "5", "6"],
};

/**
 * Generates a fluid type mapping based on viewport widths and font size ratios.
 *
 * @param {BuenTypeOptions} [options={}] - Configuration options for generating fluid types.
 *   @param {number} [options.minWidth=375] - Minimum viewport width.
 *   @param {number} [options.maxWidth=1024] - Maximum viewport width.
 *   @param {number} [options.minRatio=1.125] - Minimum font size ratio.
 *   @param {number} [options.maxRatio=1.275] - Maximum font size ratio.
 *   @param {number} [options.floor=1] - The floor value for calculations.
 *   @param {string[]} [options.levels=['1', '2', '3', '4', '5', '6']] - Array of level identifiers.
 * @returns {BuenType} An object mapping levels to corresponding CSS clamp functions.
 */
export const generateBuenType = ({
  minWidth = DEFAULTS.minWidth,
  maxWidth = DEFAULTS.maxWidth,
  minRatio = DEFAULTS.minRatio,
  maxRatio = DEFAULTS.maxRatio,
  floor = DEFAULTS.floor,
  levels = DEFAULTS.levels,
}: BuenTypeOptions = {}): BuenType => {
  // Construct the buenType object based on the provided options.
  const buenType: BuenType = levels.reduce((acc, level, index) => {
    // Calculate minimum and maximum font sizes for the level.
    const min = ms(floor, minRatio, index);
    const max = ms(floor, maxRatio, index);

    // Build the CSS clamp function for this level.
    acc[level] = clampBuilder(minWidth, maxWidth, min, max);
    return acc;
  }, {} as BuenType);

  return buenType;
};

// Function to convert fluid type styles to CSS custom properties
export function generateBuenTypeCustomProperties(
  typeStyles: BuenType
): Record<string, string> {
  const customProperties: Record<string, string> = {};

  // Convert BuenType styles to custom properties
  for (const [level, clampFunction] of Object.entries(typeStyles)) {
    customProperties[`--buen-font-size-${level}`] = clampFunction;
  }

  return customProperties;
}
