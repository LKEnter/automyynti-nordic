import { createElement } from "react";
import type { LucideIcon } from "lucide-react";

function maskFromSvgUrl(url: string) {
  return {
    maskImage: `url("${url}")`,
    WebkitMaskImage: `url("${url}")`,
    maskRepeat: "no-repeat" as const,
    WebkitMaskRepeat: "no-repeat" as const,
    maskPosition: "center" as const,
    WebkitMaskPosition: "center" as const,
    maskSize: "contain" as const,
    WebkitMaskSize: "contain" as const,
  };
}

export function ServiceMark({ icon }: { icon: LucideIcon | string }) {
  const box =
    "relative shrink-0 size-11 md:size-12 lg:size-14 drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)]";

  if (typeof icon === "string") {
    const m = maskFromSvgUrl(icon);
    return (
      <div className={box} aria-hidden>
        <div
          className="absolute inset-0 bg-white"
          style={{
            ...m,
            transform: "scale(1.0)",
            transformOrigin: "center center",
          }}
        />
        <div
          className="absolute inset-0 bg-[var(--color-accent)]"
          style={{
            ...m,
            transform: "scale(1)",
            transformOrigin: "center center",
          }}
        />
      </div>
    );
  }

  const strokeProps = {
    stroke: "currentColor" as const,
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div className={box} aria-hidden>
      {createElement(icon, {
        className: "absolute inset-0 size-full text-white",
        strokeWidth: 1.65,
        ...strokeProps,
      })}
      {createElement(icon, {
        className: "relative size-full text-[var(--color-accent)]",
        strokeWidth: 1.65,
        ...strokeProps,
      })}
    </div>
  );
}

