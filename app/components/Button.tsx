import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const base =
  "cursor-pointer group relative isolate overflow-hidden inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold uppercase tracking-wide no-underline select-none " +
  "transition-all duration-200 ease-out md:hover:scale-[1.02] " +
  "will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/45 focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)] " +
    "hover:text-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)]",
  secondary:
    "bg-white text-[var(--color-primary)] border border-black/10 shadow-[0_10px_22px_rgba(0,0,0,0.08)] " +
    "hover:text-[var(--color-on-primary)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)]",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props as ButtonProps;
  const classes = `${base} ${variants[variant]} ${className}`;
  const hoverBgClass = "bg-[var(--color-primary)]";

  const content = (
    <>
      <span
        aria-hidden="true"
        className={[
          "absolute inset-0 rounded-xl",
          hoverBgClass,
          "-translate-x-full group-hover:translate-x-0",
          "transition-transform duration-200 ease-out",
        ].join(" ")}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if ("href" in props) {
    const { href, ...linkRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...(linkRest as any)}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...linkRest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

