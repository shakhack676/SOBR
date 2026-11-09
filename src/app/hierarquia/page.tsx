import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShieldAlert, UserRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { RankInsignia } from "@/components/RankInsignia";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { ranks, commandNodes } from "@/data/ranks";

export const metadata: Metadata = {
  title: "Hierarquia",
  description:
    "Cadeia de comando, patentes e critérios de progressão do СОБР. Estrutura provisória sujeita a homologação.",
  alternates: { canonical: "/hierarquia" },
};

const progression = [
  {
    step: "01",
    title: "Recruta",
    text: "Ficha aprovada, período de adaptação e instrução básica.",
  },
  {
    step: "02",
    title: "Operador",
    text: "Avaliação de conduta e presença. Integração efetiva a uma unidade.",
  },
  {
    step: "03",
    title: "Instrutor",
    text: "Domínio técnico, didática e certificação interna.",
  },
  {
    step: "04",
    title: "Oficial",
    text: "Comando de unidade, planejamento e avaliação de desempenho.",
  },
];

export default function HierarquiaPage() {
  return (
    <>
      <PageHero
        tagline="Roster & cadeia de comando"
        title="Hierarquia e patentes."
        description="A cadeia de comando existe para dar clareza às decisões. Cada nível tem escopo, responsabilidade e critérios de progressão definidos."
        actions={
          <div className="btn-row">
            <Link href="/recrutamento#ficha" className="btn btn--primary">
              Ingressar na estrutura
              <ArrowRight size={16} />
            </Link>
            <Link href="/doutrina" className="btn btn--ghost">
              Ler a doutrina
            </Link>
          </div>
        }
        stats={[
          { value: "06", label: "Níveis de patente" },
          { value: "04", label: "Nós de comando" },
          { value: "—", label: "Efetivo homologado" },
        ]}
      />

      <section className="section" aria-labelledby="estrutura">
        <Reveal>
          <div className="notice">
            <span className="notice__icon" aria-hidden="true">
              <ShieldAlert size={18} />
            </span>
            <div className="notice__body">
              <strong>Quadro provisório</strong>
              <p>
                Patentes, nomes e critérios são um modelo institucional. O quadro
                nominal de efetivo não é publicado nesta versão para não expor
                dados não homologados.
              </p>
            </div>
            <span className="notice__tag">Modelo</span>
          </div>

          <div className="mt-32">
            <SectionHead
              eyebrow="Organograma"
              title="Nós de comando"
              description="A estrutura se divide em quatro funções permanentes. Os códigos são referências internas de organização."
              id="estrutura"
            />
            <div className="command-grid">
              {commandNodes.map((node) => (
                <article className="command-node" key={node.code}>
                  <span className="command-node__code">{node.code}</span>
                  <h3 className="command-node__title">{node.title}</h3>
                  <p className="command-node__ru">{node.nameRu}</p>
                  <p className="command-node__desc">{node.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="patentes">
        <Reveal>
          <SectionHead
            eyebrow="Patentes"
            title="Escala de progressão"
            description="A progressão combina tempo de casa, presença, desempenho em instrução e avaliação de conduta. Nenhum critério isolado garante promoção."
            id="patentes"
          />
          <div className="rank-list">
            {ranks.map((rank) => (
              <article className="rank-row" key={rank.level}>
                <span className="rank-row__insignia">
                  <RankInsignia insignia={rank.insignia} />
                </span>
                <div>
                  <span className="rank-row__level">{rank.level}</span>
                  <h3 className="rank-row__name">
                    {rank.name}
                    <span>{rank.nameRu}</span>
                  </h3>
                </div>
                <p className="rank-row__desc">{rank.description}</p>
                <div className="rank-row__req">
                  {rank.requirements.map((requirement) => (
                    <span className="chip" key={requirement}>
                      {requirement}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="stats-note">
            Insígnias ilustrativas · nomenclatura e critérios provisórios
          </p>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="progressao">
        <Reveal>
          <SectionHead
            eyebrow="Progressão"
            title="Do recrutamento ao comando"
            description="O caminho de progressão é público para que o candidato saiba o que esperar e o que será avaliado."
            id="progressao"
          />
          <div className="steps">
            {progression.map((item) => (
              <article className="step" key={item.step}>
                <span className="step__num">{item.step}</span>
                <h3 className="step__title">{item.title}</h3>
                <p className="step__text">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="notice mt-32">
            <span className="notice__icon" aria-hidden="true">
              <UserRound size={18} />
            </span>
            <div className="notice__body">
              <strong>Efetivo nominal</strong>
              <p>
                Nomes de membros, históricos individuais e condecorações não são
                divulgados sem autorização. O quadro oficial será publicado
                apenas após homologação.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section section--tight">
        <Reveal>
          <CTABand
            title="Comece pelo nível 06"
            text="Todo operador ingressa como recruta. A progressão é construída em treinamento e confiança."
          />
        </Reveal>
      </section>
    </>
  );
}
