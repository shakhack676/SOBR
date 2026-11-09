import type { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  description,
  action,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="section-head">
      <div className="section-head__left">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title" id={id}>
          {title}
        </h2>
        {description ? <p className="section-head__desc">{description}</p> : null}
      </div>
      {action ? <div className="section-head__action">{action}</div> : null}
    </div>
  );
}
