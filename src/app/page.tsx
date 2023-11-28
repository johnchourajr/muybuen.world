import PageHeader from "@/components/page-header";
import { RecipesList } from "@/components/recipes-list";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageHeader>
        Welcome to <br />
        Muy Buen Coffee
      </PageHeader>
      <div className="grid-container">
        <div className="col-span-full pt-0 pb-6">
          <p className="!leading-[1.65]">
            This space is still under construction, but in the mean time check
            out the coffee brewing <Link href={"/recipes"}>recipes</Link>,
            they're pretty great.
            <br />
            <br />
            ✌️ John
          </p>
        </div>
      </div>
      <RecipesList />
    </>
  );
}
