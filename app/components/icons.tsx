import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export function IconStar({ className = "", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2.5l2.91 6.18 6.59.57-4.99 4.33 1.5 6.44L12 16.98 6 20.02l1.5-6.44L2.5 9.25l6.59-.57L12 2.5z" />
    </svg>
  );
}

