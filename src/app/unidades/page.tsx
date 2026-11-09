import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Cross,
  Crosshair,
  Hammer,
  Plane,
  Radio,
  ShieldAlert,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { UnitsExplorer } from "@/components/UnitsExplorer";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { specialties } from "@/data/units";

export const metadata: Metadata = {
  title: "Unidades",
  description:
    "Unidades e especializações do СОБР: assalto, reconhecimento, precisão, apoio, blindados e aeronáutica em Arma Reforger.",
  alternates: { canonical: "/unidades" },
};

const specialtyIcons = {
  target: Crosshair,
  hammer: Hammer,
  cross: Cross,
  radio: Radio,
  drone: Plane,
  wrench: Wrench,
} as const;

export default function UnidadesPage() {
  return (
    <>
      <PageHero
        tagline="Unidades & especializações"
        title="Funções distintas. Um único padrão."
        description="A estrutura do СОБР é dividida em seis unidades com funções complementares. A designação considera preferência, necessidade da estrutura e desempenho na instrução."
        actions={
          <div className="btn-row">
            <Link href="/recrutamento#ficha" className="btn btn--primary">
              Solicitar designação
              <ArrowRight size={16} />
            </Link>
            <Link href="/hierarquia" className="btn btn--ghost">
              Ver hierarquia
            </Link>
          </div>
        }
        stats={[
          { value: "06", label: "Unidades" },
          { value: "06", label: "Especializações" },
          { value: "—", label: "Efetivo por unidade" },
        ]}
      />

      <section className="section" aria-labelledby="catalogo">
        <Reveal>
          <div className="notice">
            <span className="notice__icon" aria-hidden="true">
              <ShieldAlert size={18} />
            </span>
            <div className="notice__body">
              <strong>Estrutura provisória</strong>
              <p>
                As unidades abaixo representam a organização planejada. Códigos,
                efetivo e equipamento serão confirmados pelo comando.
              </p>
            </div>
            <span className="notice__tag">Modelo</span>
          </div>

          <div className="mt-32">
            <SectionHead
              eyebrow="Catálogo"
              title="Unidades operacionais"
              description="Cada unidade possui especialidades, equipamento de referência e status próprio de ativação."
              id="catalogo"
            />
            <UnitsExplorer />
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="especialidades">
        <Reveal>
          <SectionHead
            eyebrow="Especializações"
            title="Capacidades transversais"
            description="Especializações podem ser exercidas dentro das unidades. A certificação é concedida por instrutores após avaliação prática."
            id="especialidades"
          />
          <div className="grid grid--3">
            {specialties.map((specialty) => {
              const Icon =
                specialtyIcons[specialty.icon as keyof typeof specialtyIcons] ??
                Crosshair;
              return (
                <article className="card" key={specialty.name}>
                  <span className="card__icon">
                    <Icon size={18} />
                  </span>
                  <h3 className="card__title">{specialty.name}</h3>
                  <p className="card__text">{specialty.description}</p>
                </article>
              );
            })}
          </div>
          <p className="stats-note">
            Certificações e critérios sujeitos a homologação
          </p>
        </Reveal>
      </section>

      <section className="section section--tight">
        <Reveal>
          <CTABand
            title="A unidade certa depende do seu perfil"
            text="Registre sua preferência na ficha. A designação final é feita após a instrução básica."
          />
        </Reveal>
      </section>
    </>
  );
}
