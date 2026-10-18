import React, { memo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion, useReducedMotion } from "motion/react";
import useMeasure from "react-use-measure";

export type Logo = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
};

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const reduceMotion = useReducedMotion();
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      translation.set(0);
      return;
    }

    const size = direction === "horizontal" ? width : height;
    if (!size) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    let controls: ReturnType<typeof animate> | undefined;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prev) => prev + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
    reduceMotion,
  ]);

  const hoverProps =
    durationOnHover && !reduceMotion
      ? {
          onHoverStart: () => {
            setIsTransitioning(true);
            setCurrentDuration(durationOnHover);
          },
          onHoverEnd: () => {
            setIsTransitioning(true);
            setCurrentDuration(duration);
          },
        }
      : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
});

const LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {
  const [failed, setFailed] = useState(false);
  if (!logo.src || failed) return null;
  return (
    <img
      alt=""
      aria-hidden
      src={logo.src}
      width={logo.width ?? 20}
      height={logo.height ?? 20}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="pointer-events-none h-4 w-4 select-none opacity-80 brightness-0 invert md:h-[18px] md:w-[18px]"
    />
  );
});

export const LogoMarquee = memo(function LogoMarquee({
  logos,
  className,
}: {
  logos: Logo[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-5xl overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
      role="region"
      aria-label="Technologies and platforms"
    >
      <InfiniteSlider gap={40} reverse duration={60} durationOnHover={28}>
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
          >
            <LogoImage logo={logo} />
            <span className="whitespace-nowrap text-xs font-medium tracking-wide text-muted-foreground md:text-[13px]">
              {logo.alt}
            </span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
});

LogoMarquee.displayName = "LogoMarquee";

export default LogoMarquee;
