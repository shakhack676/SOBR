type Pt = [number, number];

function smoothClosedPath(points: Pt[]): string {
  const n = points.length;
  const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const start = mid(points[n - 1], points[0]);
  let d = `M${start[0].toFixed(1)} ${start[1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const current = points[i];
    const next = points[(i + 1) % n];
    const m = mid(current, next);
    d += ` Q${current[0].toFixed(1)} ${current[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`;
  }
  return `${d} Z`;
}

function contour(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  seed: number,
  wobble = 0.14,
): string {
  const points: Pt[] = [];
  const count = 16;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const variation =
      1 +
      wobble * Math.sin(angle * 3 + seed) +
      wobble * 0.45 * Math.cos(angle * 5 - seed * 1.7) +
      wobble * 0.2 * Math.sin(angle * 7 + seed * 0.6);
    points.push([
      cx + Math.cos(angle) * rx * variation,
      cy + Math.sin(angle) * ry * variation,
    ]);
  }
  return smoothClosedPath(points);
}

function ringGroup(
  cx: number,
  cy: number,
  baseRx: number,
  baseRy: number,
  count: number,
  seed: number,
) {
  return Array.from({ length: count }, (_, i) => {
    const k = 1 + i * 0.19;
    return contour(cx, cy, baseRx * k, baseRy * k, seed + i * 0.7, 0.13);
  });
}

export function TopoBackground() {
  const groups = [
    ...ringGroup(280, 220, 150, 105, 6, 0.4),
    ...ringGroup(1180, 560, 190, 130, 7, 2.1),
    ...ringGroup(720, 1180, 230, 140, 5, 4.2),
    ...ringGroup(1340, 140, 120, 90, 5, 1.3),
    ...ringGroup(120, 900, 130, 100, 4, 3.4),
  ];

  return (
    <div className="topo-layer" aria-hidden="true">
      <svg viewBox="0 0 1600 1200" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.16">
          {groups.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <g fill="none" stroke="#a9b878" strokeWidth="0.8" opacity="0.13">
          <path d={contour(1180, 560, 190, 130, 2.1, 0.13)} />
          <path d={contour(280, 220, 150, 105, 0.4, 0.13)} />
          <path d={contour(720, 1180, 230, 140, 4.2, 0.13)} />
        </g>
        <g fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.08">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={i} x1={i * 200} y1="0" x2={i * 200 - 160} y2="1200" />
          ))}
        </g>
      </svg>
    </div>
  );
}
