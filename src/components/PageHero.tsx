import type { ReactNode } from "react";

export function PageHero({
  tagline,
  title,
  description,
  actions,
  stats,
  center = false,
  children,
}: {
  tagline: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  stats?: { value: string; label: string }[];
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero${center ? " page-hero--center" : ""}`}>
      <span className="page-hero__glow" aria-hidden="true" />
      <p className="eyebrow page-hero__tag">{tagline}</p>
      <h1 className="page-hero__title">{title}</h1>
      {description ? <div className="page-hero__desc">{description}</div> : null}
      {actions ? <div className="page-hero__actions">{actions}</div> : null}
      {stats && stats.length > 0 ? (
        <div className="page-hero__stats">
          {stats.map((stat) => (
            <div className="page-hero__stat" key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      ) : null}
      {children}
    </section>
  );
}
