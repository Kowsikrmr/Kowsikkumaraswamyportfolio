import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[transform,box-shadow,background-color] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 no-underline",
  {
    variants: {
      variant: {
        default: "text-ink hover:scale-[1.03]",
        solid: "text-white hover:scale-[1.03]",
        outline: "text-ink hover:scale-[1.03]",
        ghost: "text-ink hover:scale-[1.02]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 text-xs gap-1.5 px-3.5",
        lg: "h-10 px-6",
        xl: "h-12 px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  },
);

type LiquidButtonProps = VariantProps<typeof liquidbuttonVariants> & {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement>;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  disabled?: boolean;
};

export function LiquidButton({
  className,
  variant,
  size,
  children,
  href,
  target,
  rel,
  type = "button",
  onClick,
  disabled,
  ...rest
}: LiquidButtonProps) {
  const isSolid = variant === "solid";

  const classes = cn(
    "relative isolate overflow-hidden",
    liquidbuttonVariants({ variant, size, className }),
  );

  /*
   * Visible liquid glass stack:
   * 1) Frosted translucent fill + real backdrop-blur
   * 2) Specular top rim + deep inset edge
   * 3) Soft outer glow / depth shadow
   */
  const glass = (
    <>
      {/* Frosted body */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full",
          isSolid
            ? "bg-ink/92"
            : "bg-white/55",
        )}
        style={{
          backdropFilter: isSolid
            ? "blur(14px) saturate(1.35)"
            : "blur(18px) saturate(1.6)",
          WebkitBackdropFilter: isSolid
            ? "blur(14px) saturate(1.35)"
            : "blur(18px) saturate(1.6)",
        }}
      />

      {/* Specular highlight (top glass rim) */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-[10%] top-0 h-[45%] rounded-full",
          isSolid
            ? "bg-gradient-to-b from-white/35 via-white/10 to-transparent"
            : "bg-gradient-to-b from-white/90 via-white/35 to-transparent",
        )}
      />

      {/* Edge rim + depth */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full",
          isSolid
            ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.45),inset_1px_1px_0_rgba(255,255,255,0.12),0_4px_16px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.12)] ring-1 ring-white/15"
            : "shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(0,0,0,0.12),inset_1px_1px_2px_rgba(255,255,255,0.6),inset_-1px_-1px_2px_rgba(0,0,0,0.06),0_4px_18px_rgba(17,19,24,0.1),0_1px_3px_rgba(17,19,24,0.06)] ring-1 ring-white/70",
        )}
      />

      {/* Bottom refraction tint */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-[8%] bottom-0 h-[40%] rounded-full",
          isSolid
            ? "bg-gradient-to-t from-black/25 to-transparent"
            : "bg-gradient-to-t from-black/[0.06] to-transparent",
        )}
      />

      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        data-slot="liquid-button"
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
        {...rest}
      >
        {glass}
      </a>
    );
  }

  return (
    <button
      data-slot="liquid-button"
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {glass}
    </button>
  );
}
