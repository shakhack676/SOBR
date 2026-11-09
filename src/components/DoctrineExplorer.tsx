"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Crosshair,
  Flag,
  Globe,
  Radio,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import { doctrine, type DoctrineItem } from "@/data/doctrine";

const icons: Record<DoctrineItem["icon"], typeof Shield> = {
  shield: Shield,
  users: Users,
  radio: Radio,
  crosshair: Crosshair,
  flag: Flag,
  scale: Scale,
  book: BookOpen,
  globe: Globe,
};

const categories = ["Todos", "Conduta", "Comando", "Comunicação", "Imersão", "Ética", "Treinamento"] as const;

export function DoctrineExplorer() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todos");

  const visible = useMemo(
    () =>
      active === "Todos"
        ? doctrine
        : doctrine.filter((item) => item.category === active),
    [active],
  );

  return (
    <div>
      <div className="filters" role="group" aria-label="Filtrar doutrina">
        {categories.map((category) => {
          const count =
            category === "Todos"
              ? doctrine.length
              : doctrine.filter((item) => item.category === category).length;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              className="filter"
              data-active={active === category}
              onClick={() => setActive(category)}
            >
              {category}
              <span className="filter__count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid--4">
        {visible.map((item) => {
          const Icon = icons[item.icon];
          return (
            <article className="card card--doctrine" key={item.id}>
              <div className="card__top">
                <span className="card__num">{item.number}</span>
                <span className="card__icon">
                  <Icon size={18} />
                </span>
              </div>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.description}</p>
              <span className="card__cat">{item.category}</span>
            </article>
          );
        })}
      </div>
    </div>
  );
}
