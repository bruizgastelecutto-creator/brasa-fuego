import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gradient-to-r from-copper via-ember to-gold text-black shadow-[0_8px_30px_rgba(203,162,96,0.25)] hover:shadow-[0_8px_40px_rgba(203,162,96,0.45)] hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "border border-gold/40 text-foreground hover:border-gold hover:bg-gold/10 active:scale-[0.98]",
  ghost: "text-foreground hover:text-gold",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className, icon } = props;
  const classes = clsx(base, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} onClick={props.onClick} className={classes}>
        <span className="relative z-10">{children}</span>
        {icon && <span className="relative z-10">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonAsButton).type ?? "button"}
      onClick={(props as ButtonAsButton).onClick}
      className={classes}
    >
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10">{icon}</span>}
    </button>
  );
}
