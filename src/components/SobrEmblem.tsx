type Props = {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
};

export function SobrEmblem({ className, title = "Emblema СОБР", style }: Props) {
  return (
    <svg
      viewBox="0 0 64 76"
      className={className}
      style={style}
      role="img"
      aria-label={title}
      fill="none"
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
        strokeWidth="0.8"
        opacity="0.55"
      />
      <path
        d="M32 17.5 34.5 24.1 41.6 24.4 36.1 28.9 38 35.8 32 32 26 35.8 27.9 28.9 22.4 24.4 29.5 24.1 32 17.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 43.5 46.5 59" />
        <path d="M47 43.5 17.5 59" />
      </g>
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.85">
        <path d="M14.5 46.5 20.5 43" />
        <path d="M49.5 46.5 43.5 43" />
        <path d="M18.5 43.2 15.6 46.6" />
        <path d="M45.5 43.2 48.4 46.6" />
      </g>
      <circle cx="16" cy="43" r="1.1" fill="currentColor" />
      <circle cx="48" cy="43" r="1.1" fill="currentColor" />
      <circle cx="47.2" cy="59.4" r="1.1" fill="currentColor" />
      <circle cx="16.8" cy="59.4" r="1.1" fill="currentColor" />
    </svg>
  );
}
