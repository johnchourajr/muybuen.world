import clsx from "clsx"
import { NavLink } from "../nav-link"

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({ ...extra }) => {
  return (
    <footer className="relative flex flex-row justify-between w-full md:fixed bottom-0 mx-auto py-2 px-4 items-center text-xs pb-24 md:pb-2">
      <p className={clsx("")}>
        Buenos dias, © {new Date().getFullYear()} Muy Buen Coffee
      </p>
      <div
        className={clsx(
          "text-end inline-flex gap-2 uppercase font-futura text-xs tracking-widest font-bold justify-end",
        )}
      >
        <NavLink href="/about" className="">
          About
        </NavLink>
      </div>
    </footer>
  )
}
