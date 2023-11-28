import clsx from "clsx";
import Link from "next/link";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  ...extra
}) => {
  return (
    <Link
      href={href}
      className={clsx("hover:underline whitespace-nowrap p-2", className)}
      {...extra}
    >
      {children}
    </Link>
  );
};
