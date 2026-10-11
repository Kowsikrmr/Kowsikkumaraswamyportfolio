type BrandMarkProps = {
  className?: string;
  size?: number;
};

/** Custom KN monogram — no third-party / template logos. */
export function BrandMark({ className = "", size = 32 }: BrandMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Kowsik Naraayanan K"
    >
      <defs>
        <linearGradient id="kn-mark" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="oklch(0.78 0.12 210)" />
          <stop offset="0.55" stopColor="oklch(0.62 0.14 285)" />
          <stop offset="1" stopColor="oklch(0.82 0.14 78)" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#kn-mark)" opacity={0.16} />
      <path
        d="M18 15v34M18 32l15-17M18 32l15 17M40 15v34"
        stroke="url(#kn-mark)"
        strokeWidth={4.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
