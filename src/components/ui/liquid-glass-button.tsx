import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[transform,box-shadow] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background no-underline",
  {
    variants: {
      variant: {
        default: "text-ink hover:scale-[1.03]",
        solid: "text-[#080809] hover:scale-[1.03]",
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

  const glass = (
    <>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full",
          isSolid ? "bg-[#f3f0ea]/[0.94]" : "bg-white/[0.08]",
        )}
        style={{
          backdropFilter: isSolid
            ? "blur(12px) saturate(1.2)"
            : "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: isSolid
            ? "blur(12px) saturate(1.2)"
            : "blur(20px) saturate(1.5)",
        }}
      />

      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-[10%] top-0 h-[48%] rounded-full",
          isSolid
            ? "bg-gradient-to-b from-white/70 via-white/25 to-transparent"
            : "bg-gradient-to-b from-white/40 via-white/10 to-transparent",
        )}
      />

      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full",
          isSolid
            ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_0_rgba(0,0,0,0.12),0_6px_20px_rgba(0,0,0,0.35)] ring-1 ring-white/40"
            : "shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.4),0_6px_24px_rgba(0,0,0,0.4)] ring-1 ring-white/20",
        )}
      />

      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-[8%] bottom-0 h-[38%] rounded-full",
          isSolid
            ? "bg-gradient-to-t from-black/10 to-transparent"
            : "bg-gradient-to-t from-black/30 to-transparent",
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
