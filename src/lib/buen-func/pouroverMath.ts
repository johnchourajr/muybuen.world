"use client";

export const pouroverMath = ({
  coffeeGrams,
  ratio,
}: {
  coffeeGrams: number;
  ratio?: number;
}): any => {
  if (!coffeeGrams) return null;

  ratio = ratio || 15;

  const w = coffeeGrams * ratio;
  const preinfuse = Math.round(coffeeGrams * 2);
  const pour1 = Math.round(coffeeGrams * 5);
  const pour2 = Math.round(coffeeGrams * 8.3333333333);
  const pour3 = Math.round(coffeeGrams * 11.6666666667);

  const result = {
    coffeeGrams,
    ratio,
    water: w,
    pouroverPreinfuse: preinfuse,
    pouroverPour1: pour1,
    pouroverPour2: pour2,
    pouroverPour3: pour3,
  };
  return result;
};
