import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Unit } from "@/data/units";
import { UnitShield } from "./UnitShield";

export function UnitCard({ unit }: { unit: Unit }) {
  return (
    <article className="unit-card" id={unit.slug}>
      <div className="unit-card__media">
        <Image
          src={unit.image}
          alt={unit.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="unit-card__badge unit-card__badge--olive">{unit.code}</span>
        <UnitShield
          icon={unit.icon}
          className="unit-card__shield"
          title={`Escudo — ${unit.role}`}
        />
      </div>
      <div className="unit-card__body">
        <span className="unit-card__code">{unit.name}</span>
        <h3 className="unit-card__title">{unit.role}</h3>
        <p className="unit-card__role">{unit.short}</p>
        <p className="unit-card__text">{unit.description}</p>
        <div className="unit-card__specs">
          {unit.specialties.map((specialty) => (
            <span className="chip" key={specialty}>
              {specialty}
            </span>
          ))}
        </div>
        <div className="unit-card__foot">
          <span className="unit-card__status">{unit.status}</span>
          <Link href="/recrutamento#ficha" className="link-arrow">
            Solicitar designação
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
