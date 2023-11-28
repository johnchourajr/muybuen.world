"use client";
import recipesData from "@/data/recipes";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useRef } from "react";
import { ScrollXBar } from "@/components/scroll-x-bar";
import Image from "next/image";

export interface RecipesListProps {}

export const RecipesList: React.FC<RecipesListProps> = ({ ...extra }) => {
  const ref = useRef<any>(null);

  const MotionLink = motion(Link);
  return (
    <>
      <div
        ref={ref}
        className={clsx(
          "mask-overflow",
          "scrollbar-hide",
          "w-full flex items overflow-x-scroll",
          "py-6",
          "pl-4 md:pl-[var(--inset-x)]",
          "pr-4 md:pr-[var(--inset-x)]"
        )}
      >
        <div className="inline-flex gap-2">
          {recipesData.map((recipe) => {
            return (
              <MotionLink
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className={clsx(
                  "glass-card glass-card--light-blue",
                  "min-h-[13rem] md:min-h-[18rem] w-[13rem] md:w-[18rem]",
                  "relative flex h-full  bg-primaryLight md:py-7 py-5 md:px-9 px-6 rounded-3xl"
                )}
                style={{
                  willChange: "transform",
                }}
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.5,
                  ease: "circOut",
                }}
              >
                <h3 className="text-buen-lg">{recipe.title}</h3>
                <Image
                  src={recipe.background}
                  alt={recipe.title}
                  className="absolute object-contain w-full h-full"
                  fill={true}
                  sizes="18rem"
                />
              </MotionLink>
            );
          })}
        </div>
      </div>
      <ScrollXBar forwardRef={ref} />
    </>
  );
};
