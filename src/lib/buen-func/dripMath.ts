"use client";

export const dripMath = ({
  water,
  ratio,
}: {
  water: number;
  ratio?: number;
}): any => {
  if (!water) return null;

  ratio = ratio || 16;

  const volInterpret = (water: number): number => {
    switch (water) {
      case 2:
        return 250;
      case 4:
        return 500;
      case 6:
        return 750;
      case 8:
        return 1000;
      case 10:
        return 1250;
      default:
        return 250;
    }
  };

  // const w = volInterpret(water);
  const coffeeGrams = Math.round((water / ratio) * 10) / 10;

  const result = {
    water,
    coffeeGrams,
    ratio,
  };
  return result;
};
