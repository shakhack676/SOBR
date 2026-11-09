"use client";

import { useMemo, useState } from "react";
import { units } from "@/data/units";
import { UnitCard } from "./UnitCard";

const filters = [
  { id: "todas", label: "Todas as unidades" },
  { id: "combate", label: "Combate" },
  { id: "reconhecimento", label: "Reconhecimento" },
  { id: "apoio", label: "Apoio" },
  { id: "especial", label: "Especial" },
] as const;

export function UnitsExplorer() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("todas");

  const visible = useMemo(
    () => (active === "todas" ? units : units.filter((unit) => unit.filter === active)),
    [active],
  );

  return (
    <div>
      <div className="filters" role="group" aria-label="Filtrar unidades">
        {filters.map((filter) => {
          const count =
            filter.id === "todas"
              ? units.length
              : units.filter((unit) => unit.filter === filter.id).length;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active === filter.id}
              className="filter"
              data-active={active === filter.id}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
              <span className="filter__count">{count}</span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="empty-state">Nenhuma unidade nesta categoria.</div>
      ) : (
        <div className="grid grid--3">
          {visible.map((unit) => (
            <UnitCard unit={unit} key={unit.slug} />
          ))}
        </div>
      )}
    </div>
  );
}
