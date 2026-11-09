type Insignia = "star3" | "star2" | "star1" | "chevron3" | "chevron2" | "chevron1";

function Star({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? r : r * 0.42;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    points.push(
      `${(cx + Math.cos(angle) * radius).toFixed(2)},${(
        cy +
        Math.sin(angle) * radius
      ).toFixed(2)}`,
    );
  }
  return <polygon points={points.join(" ")} fill="currentColor" />;
}

export function RankInsignia({
  insignia,
  className,
}: {
  insignia: Insignia;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Insígnia de patente"
      xmlns="http://www.w3.org/2000/svg"
    >
      {insignia === "star3" && (
        <>
          <Star cx={24} cy={14} r={6.4} />
          <Star cx={14} cy={31} r={6.4} />
          <Star cx={34} cy={31} r={6.4} />
        </>
      )}
      {insignia === "star2" && (
        <>
          <Star cx={17} cy={22} r={7} />
          <Star cx={31} cy={22} r={7} />
          <path d="M12 36h24" stroke="currentColor" strokeWidth="1.6" />
        </>
      )}
      {insignia === "star1" && (
        <>
          <Star cx={24} cy={20} r={9} />
          <path d="M11 35h26M15 40h18" stroke="currentColor" strokeWidth="1.6" />
        </>
      )}
      {insignia === "chevron3" && (
        <g
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 16 24 26l12-10" />
          <path d="M12 26 24 36l12-10" />
          <path d="M12 36 24 46l12-10" />
        </g>
      )}
      {insignia === "chevron2" && (
        <g
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20 24 31l12-11" />
          <path d="M12 32 24 43l12-11" />
        </g>
      )}
      {insignia === "chevron1" && (
        <path
          d="M12 26 24 38l12-12"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
