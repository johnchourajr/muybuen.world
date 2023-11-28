import clsx from "clsx";
import { NavLink } from "../nav-link";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({ ...extra }) => {
  return (
    <>
      <footer className="grid-container py-11 items-center pb-32">
        <p className={clsx("auto-cols-auto md:col-span-2")}>
          Buenos dias, © {new Date().getFullYear()} Muy Buen Coffee
        </p>
        <div
          className={clsx(
            " auto-cols-auto col-end-[end] text-end inline-flex gap-2 uppercase font-futura text-xs tracking-widest font-bold w-full justify-end"
          )}
        >
          <NavLink href="/about" className="">
            About
          </NavLink>
        </div>
      </footer>
    </>
  );
};
