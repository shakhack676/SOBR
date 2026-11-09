type Icon =
  | "assault"
  | "recon"
  | "sniper"
  | "support"
  | "armor"
  | "air"
  | "drone";

const glyphs: Record<Icon, React.ReactNode> = {
  assault: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 42 32 30l12 12" />
      <path d="M20 50 32 38l12 12" />
      <path d="M20 58 32 46l12 12" />
    </g>
  ),
  recon: (
    <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 45c5-8 11-12 18-12s13 4 18 12c-5 8-11 12-18 12s-13-4-18-12Z" />
      <circle cx="32" cy="45" r="5" />
      <path d="M32 33v-4M32 61v-4M19 32l-3-3M45 32l3-3" />
    </g>
  ),
  sniper: (
    <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="32" cy="45" r="12" />
      <circle cx="32" cy="45" r="5" />
      <path d="M32 29v-6M32 67v-6M16 45h-6M54 45h-6" />
    </g>
  ),
  support: (
    <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="32" cy="45" r="13" />
      <path d="M32 38v14M25 45h14" />
      <path d="M18 26c8-6 20-6 28 0" opacity="0.6" />
    </g>
  ),
  armor: (
    <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 50h36v9H14z" />
      <path d="M22 50v-6h16v6" />
      <path d="M38 44h13" />
      <path d="M17 59v4M28 59v4M39 59v4M47 59v4" />
    </g>
  ),
  air: (
    <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 30c7 0 12 5 12 11H20c0-6 5-11 12-11Z" />
      <path d="M20 41 14 58M44 41l6 17M26 41l-2 17M38 41l2 17" />
      <circle cx="32" cy="27" r="2" />
    </g>
  ),
  drone: (
    <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="45" r="4" fill="currentColor" fillOpacity="0.25" />
      <path d="M25 38l14 14M39 38L25 52" />
      <circle cx="23" cy="36" r="3.5" />
      <circle cx="41" cy="36" r="3.5" />
      <circle cx="23" cy="54" r="3.5" />
      <circle cx="41" cy="54" r="3.5" />
      <path d="M32 37v-4" />
    </g>
  ),
};

export function UnitShield({
  icon,
  className,
  title,
}: {
  icon: Icon;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 76"
      className={className}
      fill="none"
      role="img"
      aria-label={title ?? `Escudo da unidade`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 2.5 60.5 11.4v25.4c0 16.6-12.6 28.7-28.5 36.2C16.1 65.5 3.5 53.4 3.5 36.8V11.4L32 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M32 8 55 15.5v21.2c0 13.6-10.2 23.8-23 30.4-12.8-6.6-23-16.8-23-30.4V15.5L32 8Z"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.45"
      />
      <path
        d="M32 13.5 33.32 16.64 36.75 16.79 34.14 19.04 34.99 22.36 32 20.5 29.01 22.36 29.86 19.04 27.25 16.79 30.68 16.64 32 13.5Z"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {glyphs[icon]}
    </svg>
  );
}
