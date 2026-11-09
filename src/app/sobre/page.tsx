import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Flag,
  Palette,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { identitySymbols, historyPhases } from "@/data/doctrine";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o СОБР: apresentação institucional, identidade, princípios e a estrutura de um clã de operações táticas em Arma Reforger.",
  alternates: { canonical: "/sobre" },
};

const symbolIcons = {
  shield: Shield,
  palette: Palette,
  flag: Flag,
} as const;

const principles = [
  {
    title: "Disciplina",
    text: "Cumprir o padrão mesmo quando ninguém está observando. Pontualidade, preparação e execução.",
  },
  {
    title: "Hierarquia",
    text: "Cadeia de comando clara. Planejamento aberto, execução disciplinada, responsabilidade pelo resultado.",
  },
  {
    title: "Lealdade",
    text: "O indivíduo não compete com a equipe. Informação compartilhada, companheiro protegido.",
  },
  {
    title: "Integridade",
    text: "Fair play absoluto. Sem cheats, macros ou exploits. A vitória sem integridade é ruído.",
  },
];

const dossier = [
  { label: "Designação", value: site.name },
  { label: "Plataforma", value: "Arma Reforger" },
  { label: "Ambiente", value: "MilSim tático" },
  { label: "Idioma", value: "Português (BR)" },
  { label: "Estrutura", value: "7 unidades" },
  { label: "Status", value: "Provisório" },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        tagline="Apresentação institucional"
        title="Uma organização, não apenas um grupo."
        description="O СОБР nasce da necessidade de organizar operadores em torno de um propósito comum: operar com disciplina, hierarquia e identidade própria dentro do Arma Reforger."
        actions={
          <div className="btn-row">
            <Link href="/doutrina" className="btn btn--primary">
              Conhecer a doutrina
              <ArrowRight size={16} />
            </Link>
            <Link href="/recrutamento" className="btn btn--ghost">
              Alistar-se
            </Link>
          </div>
        }
      />

      <section className="section" aria-labelledby="quem-somos">
        <Reveal>
          <div className="split split--media-left">
            <div className="split__media">
              <Image
                src="/images/about.webp"
                alt="Operador em equipamento tático em ambiente de campo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="split__caption">Imagem ilustrativa · Arma Reforger</span>
            </div>
            <div className="split__body">
              <p className="eyebrow">Quem somos</p>
              <h2 id="quem-somos">
                Estrutura antes de ação.
                <br />
                Preparação antes de resultado.
              </h2>
              <p>
                Somos um clã de operações táticas que trata o jogo como ambiente
                sério de treinamento coletivo. Não buscamos apenas partidas
                rápidas: buscamos repetibilidade, padronização e confiança entre
                operadores.
              </p>
              <p>
                O clã é dividido em unidades, funções e especializações. Cada
                operador tem um papel definido, um canal de comunicação e uma
                cadeia de comando. Essa estrutura é o que permite manter
                coerência quando a operação muda de ritmo.
              </p>
              <ul className="split__list">
                <li>
                  <Check size={16} />
                  Doutrina escrita, treinamento básico e avaliação contínua.
                </li>
                <li>
                  <Check size={16} />
                  Unidades com funções distintas e integração obrigatória.
                </li>
                <li>
                  <Check size={16} />
                  Briefing antes, comunicação durante, debriefing depois.
                </li>
                <li>
                  <Check size={16} />
                  Conduta pública compatível com a identidade institucional.
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="identidade">
        <Reveal>
          <SectionHead
            eyebrow="Identidade"
            title="Símbolos que sustentam a conduta"
            description="O emblema, as cores e o lema não são decoração. São referências de comportamento para dentro e para fora do jogo."
            id="identidade"
          />
          <div className="grid grid--3">
            {identitySymbols.map((symbol) => {
              const Icon = symbolIcons[symbol.icon as keyof typeof symbolIcons] ?? Shield;
              return (
                <article className="card" key={symbol.title}>
                  <span className="card__icon">
                    <Icon size={19} />
                  </span>
                  <h3 className="card__title">{symbol.title}</h3>
                  <p className="card__text">{symbol.description}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="ficha">
        <Reveal>
          <div className="split">
            <div className="split__body">
              <p className="eyebrow">Ficha institucional</p>
              <h2 id="ficha">Dados de referência</h2>
              <p>
                As informações abaixo resumem a estrutura pública do clã. Itens
                marcados como provisórios dependem de homologação do comando e
                serão atualizados nos canais oficiais.
              </p>
              <dl className="dossier">
                {dossier.map((item) => (
                  <div className="dossier__row" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="stats-note">Documento público provisório</p>
            </div>
            <div className="split__media">
              <Image
                src="/images/history.webp"
                alt="Registro histórico ilustrativo de operação militar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="split__caption">Arquivo ilustrativo</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="historia">
        <Reveal>
          <SectionHead
            eyebrow="História & identidade"
            title="Fases de construção"
            description="A trajetória abaixo é um modelo institucional. Marcos e datas serão registrados oficialmente após homologação."
            id="historia"
          />
          <div className="timeline">
            {historyPhases.map((phase) => (
              <div className="timeline__item" key={phase.phase}>
                <span className="timeline__phase">{phase.phase}</span>
                <h3 className="timeline__title">{phase.title}</h3>
                <p className="timeline__text">{phase.description}</p>
                <span className="timeline__status">{phase.status}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="principios">
        <Reveal>
          <SectionHead
            eyebrow="Princípios"
            title="O que não é negociável"
            description="Quatro referências de conduta que atravessam treinamento, operação e representação externa."
            id="principios"
          />
          <div className="grid grid--4">
            {principles.map((principle, index) => (
              <article className="card" key={principle.title}>
                <div className="card__top">
                  <span className="card__num">0{index + 1}</span>
                  <span className="card__icon">
                    <ShieldCheck size={18} />
                  </span>
                </div>
                <h3 className="card__title">{principle.title}</h3>
                <p className="card__text">{principle.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section section--tight">
        <Reveal>
          <CTABand
            title="A estrutura está aberta a novos operadores"
            text="Leia a doutrina, verifique os requisitos e inicie sua ficha de alistamento."
          />
        </Reveal>
      </section>
    </>
  );
}
