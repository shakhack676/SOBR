import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ClipboardList, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { operations, afterAction } from "@/data/operations";

export const metadata: Metadata = {
  title: "Operações",
  description:
    "Ciclo operacional do СОБР: planejamento, briefing, execução e debriefing. Exercícios modelo em Arma Reforger.",
  alternates: { canonical: "/operacoes" },
};

export default function OperacoesPage() {
  return (
    <>
      <PageHero
        tagline="Ciclo operacional"
        title="Operações & exercícios."
        description="Toda operação segue o mesmo ciclo: planejamento, briefing, execução e debriefing. O registro abaixo é um modelo público — não representa missões realizadas."
        actions={
          <div className="btn-row">
            <Link href="/doutrina" className="btn btn--primary">
              Revisar a doutrina
              <ArrowRight size={16} />
            </Link>
            <Link href="/comunidade#contato" className="btn btn--ghost">
              Falar com o comando
            </Link>
          </div>
        }
        stats={[
          { value: "04", label: "Exercícios modelo" },
          { value: "04", label: "Etapas do ciclo" },
          { value: "—", label: "Operações homologadas" },
        ]}
      />

      <section className="section" aria-labelledby="registro">
        <Reveal>
          <div className="notice notice--warn">
            <span className="notice__icon" aria-hidden="true">
              <ShieldAlert size={18} />
            </span>
            <div className="notice__body">
              <strong>Operações modelo</strong>
              <p>
                Os exercícios desta página são cenários ilustrativos de
                treinamento. Não há registro de operações reais, resultados ou
                participantes nesta versão.
              </p>
            </div>
            <span className="notice__tag">Provisório</span>
          </div>

          <div className="mt-32">
            <SectionHead
              eyebrow="Registro público"
              title="Exercícios de referência"
              description="Cada cenário descreve um objetivo de treinamento. Duração, participantes e resultados serão registrados após execução oficial."
              id="registro"
            />
            <div className="grid" style={{ gap: 14 }}>
              {operations.map((operation) => (
                <article className="op-card" key={operation.code}>
                  <div className="op-card__media">
                    <Image
                      src={operation.image}
                      alt={operation.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <div className="op-card__body">
                    <div className="op-card__top">
                      <span className="op-card__code">{operation.code}</span>
                      <span className="op-card__type">{operation.type}</span>
                      <span
                        className="op-card__status"
                        data-tone={operation.statusTone}
                      >
                        {operation.status}
                      </span>
                    </div>
                    <h3 className="op-card__title">{operation.title}</h3>
                    <p className="op-card__text">{operation.description}</p>
                    <dl className="op-card__meta">
                      <div>
                        <dt>Objetivo</dt>
                        <dd>{operation.objective}</dd>
                      </div>
                      <div>
                        <dt>Duração</dt>
                        <dd>{operation.duration}</dd>
                      </div>
                      <div>
                        <dt>Participantes</dt>
                        <dd>{operation.participants}</dd>
                      </div>
                      <div>
                        <dt>Resultado</dt>
                        <dd>{operation.result}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="ciclo">
        <Reveal>
          <SectionHead
            eyebrow="Procedimento"
            title="O ciclo não é opcional"
            description="O debriefing é tão importante quanto a execução. Sem análise, o erro se repete — e o custo é sempre coletivo."
            id="ciclo"
          />
          <div className="steps">
            {afterAction.map((step) => (
              <article className="step" key={step.step}>
                <span className="step__num">{step.step}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="notice mt-32">
            <span className="notice__icon" aria-hidden="true">
              <ClipboardList size={18} />
            </span>
            <div className="notice__body">
              <strong>Registro pós-missão</strong>
              <p>
                O relatório de operação registra objetivo, execução, baixas
                simuladas e lições aprendidas. O modelo oficial será publicado
                junto ao regulamento.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section section--tight">
        <Reveal>
          <CTABand
            title="Treinar é a operação mais importante"
            text="Participe da instrução básica e conheça o ciclo completo antes de assumir uma função."
          />
        </Reveal>
      </section>
    </>
  );
}
