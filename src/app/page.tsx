import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Crosshair,
  ExternalLink,
  Radio,
  Server,
  ShieldCheck,
} from "lucide-react";
import { units } from "@/data/units";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { UnitShield } from "@/components/UnitShield";
import { DiscordButton } from "@/components/DiscordButton";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Início",
  description:
    "СОБР é um clã de operações táticas em Arma Reforger. Disciplina, hierarquia, unidades especializadas e treinamento contínuo em ambiente MilSim.",
  alternates: { canonical: "/" },
};

const recruitSteps = [
  {
    num: "01",
    title: "Ficha de alistamento",
    text: "Preencha seus dados, disponibilidade e motivação.",
  },
  {
    num: "02",
    title: "Contato inicial",
    text: "Conversa com o comando para alinhar expectativas.",
  },
  {
    num: "03",
    title: "Instrução básica",
    text: "Doutrina, comunicação, movimentação e conduta.",
  },
  {
    num: "04",
    title: "Designação",
    text: "Avaliação final e integração a uma unidade.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/recruit.webp"
            alt="Operador equipado em ambiente de neve durante instrução"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 82vw"
          />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">
            Clã de operações táticas · Arma Reforger
          </p>
          <h1 className="hero__title">
            O que é o <span>СОБР?</span>
          </h1>
          <div className="hero__lead">
            <p>
              O <strong>СОБР</strong> é uma organização de operações táticas
              criada para reunir operadores em torno de uma estrutura baseada em
              disciplina, hierarquia, treinamento e trabalho em equipe.
            </p>
            <p>
              Atuamos em <strong>Arma Reforger</strong> com unidades, funções e
              especializações definidas. Cada operador tem um papel claro dentro
              da missão — e responde por ele.
            </p>
            <p>
              Do treinamento básico às operações de maior complexidade, buscamos
              uma experiência <strong>MilSim organizada e estratégica</strong>,
              sem atalhos e sem improviso permanente.
            </p>
          </div>
          <div className="btn-row hero__actions">
            <Link href="/recrutamento" className="btn btn--primary">
              Alistar-se
              <ArrowRight size={17} />
            </Link>
            <DiscordButton />
          </div>
          <div className="hero__meta">
            <span className="hero__meta-item">
              <ShieldCheck size={14} />
              Disciplina & hierarquia
            </span>
            <span className="hero__meta-item">
              <Crosshair size={14} />
              Treinamento contínuo
            </span>
            <span className="hero__meta-item">
              <Radio size={14} />
              Comunicação tática
            </span>
          </div>
        </div>
      </section>

      <section className="quote-banner">
        <Image
          src="/images/unit-assault.webp"
          alt="Operador em posição de tiro em ambiente nevado"
          fill
          sizes="100vw"
          className="quote-banner__img"
        />
        <div className="quote-banner__scrim" aria-hidden="true" />
        <div className="quote-banner__content">
          <span className="eyebrow quote-banner__label">Doutrina & princípio</span>
          <blockquote className="quote-banner__text">
            “Forjados pelo desafio, guiados pela disciplina, unidos por um
            propósito.”
          </blockquote>
          <span className="quote-banner__cite">{site.name} — Comando</span>
        </div>
      </section>

      <section className="units-section" aria-labelledby="unidades-home">
        <div className="units-section__head">
          <h2 id="unidades-home">Unidades</h2>
        </div>
        <div className="units-strip">
          {units.map((unit) => (
            <Link
              key={unit.slug}
              href={`/unidades#${unit.slug}`}
              className="unit-tile"
            >
              <UnitShield
                icon={unit.icon}
                className="unit-tile__shield"
                title={`Escudo — ${unit.role}`}
              />
              <span className="unit-tile__name">{unit.role}</span>
              <span className="unit-tile__sub">{unit.name}</span>
              <span className="unit-tile__code">{unit.code}</span>
            </Link>
          ))}
        </div>
      </section>

      <div style={{ paddingBlock: "44px" }}>
        <div className="divider-label">
          <span>
            <i aria-hidden="true" />
            Estrutura & alianças
            <i aria-hidden="true" />
          </span>
        </div>
      </div>

      <section className="section section--tight" aria-labelledby="parceiros">
        <Reveal>
          <div className="partners-head">
            <h2 id="parceiros">Plataforma & servidores</h2>
            <p>Canais oficiais do clã e servidor de jogo</p>
          </div>

          <div className="grid grid--2">
            <a
              href="https://reforger.armaplatform.com/"
              className="partner-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="partner-card__logo" aria-hidden="true">
                <Logo size={52} alt="" />
              </span>
              <span className="partner-card__body">
                <span className="partner-card__tags">
                  <span className="partner-card__tag">Arma Reforger</span>
                  <span className="partner-card__tag partner-card__tag--accent">
                    PC · Console
                  </span>
                </span>
                <span className="partner-card__title">Ambiente de operações</span>
                <span className="partner-card__desc">
                  Plataforma oficial onde o clã conduz treinamentos e operações.
                </span>
              </span>
              <span className="partner-card__go" aria-hidden="true">
                <ExternalLink size={17} />
              </span>
            </a>

            <a
              href={site.discordGame}
              className="partner-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="partner-card__logo" aria-hidden="true">
                <Server size={28} />
              </span>
              <span className="partner-card__body">
                <span className="partner-card__tags">
                  <span className="partner-card__tag">Servidor do jogo</span>
                  <span className="partner-card__tag partner-card__tag--accent">
                    Arma Reforger
                  </span>
                </span>
                <span className="partner-card__title">South America Server</span>
                <span className="partner-card__desc">
                  Servidor oficial do СОБР para treinamentos, operações e comunidade.
                </span>
              </span>
              <span className="partner-card__go" aria-hidden="true">
                <ExternalLink size={17} />
              </span>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="missao">
        <Reveal>
          <div className="mission-panel">
            <div>
              <h2 id="missao">Nossa missão</h2>
              <p className="mission-panel__text">
                Preparar operadores para atuar em ambientes hostis e incertos,
                aplicando táticas, técnicas e procedimentos com disciplina,
                lealdade e espírito de corpo. O objetivo não é apenas vencer a
                partida: é manter o padrão quando a situação sai do previsto.
              </p>
              <div className="mission-panel__quote">
                <Logo className="mission-panel__emblem" size={44} alt="" />
                <p>
                  “Não é sobre ser o melhor.
                  <br />É sobre ser preparado.”
                </p>
              </div>
            </div>
            <div>
              <h2>СОБР em números</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-card__value">—</span>
                  <span className="stat-card__label">Operadores ativos</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__value">—</span>
                  <span className="stat-card__label">Unidades estruturadas</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__value">—</span>
                  <span className="stat-card__label">Operações registradas</span>
                </div>
              </div>
              <p className="stats-note">
                Dados provisórios · aguardando homologação do comando
              </p>
              <div className="stats-status">
                <span className="stats-status__label">Status da estrutura</span>
                <span className="stats-status__value">
                  <i aria-hidden="true" />
                  Em homologação
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section section--tight" aria-label="Comunidade">
        <Reveal>
          <CTABand
            title="Faça parte da nossa comunidade"
            text="Aliste-se na organização e acompanhe treinamentos, avisos e operações no canal oficial."
          />
        </Reveal>
      </section>

      <section className="section" aria-labelledby="alistamento-home">
        <Reveal>
          <div className="recruit-panel">
            <Image
              src="/images/banner-operator.webp"
              alt="Equipe em entrada tática de ambiente urbano"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="recruit-panel__media"
            />
            <div className="recruit-panel__scrim" aria-hidden="true" />
            <div className="recruit-panel__inner">
              <div>
                <p className="eyebrow">Recrutamento</p>
                <h2 id="alistamento-home">
                  O processo é seletivo.
                  <br />
                  <span>A preparação é permanente.</span>
                </h2>
                <p>
                  Não exigimos experiência prévia em MilSim, mas exigimos
                  compromisso com horários, comunicação e doutrina. O período de
                  formação é a etapa em que ambos os lados avaliam a adaptação.
                </p>
                <div className="recruit-steps">
                  {recruitSteps.map((step) => (
                    <div className="recruit-step" key={step.num}>
                      <span className="recruit-step__num">{step.num}</span>
                      <div>
                        <strong>{step.title}</strong>
                        <span>{step.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="recruit-panel__aside">
                <h3>Requisitos mínimos</h3>
                <ul className="recruit-panel__list">
                  <li>
                    <BadgeCheck size={15} />
                    Arma Reforger em plataforma compatível com o servidor.
                  </li>
                  <li>
                    <BadgeCheck size={15} />
                    Microfone funcional e disposição para comunicação por voz.
                  </li>
                  <li>
                    <BadgeCheck size={15} />
                    Presença nos treinamentos e leitura da doutrina.
                  </li>
                  <li>
                    <BadgeCheck size={15} />
                    Conduta compatível com o ambiente MilSim e fair play.
                  </li>
                </ul>
                <Link href="/recrutamento#ficha" className="btn btn--primary btn--block">
                  Preencher ficha
                  <ArrowRight size={16} />
                </Link>
                <p className="form-hint" style={{ textAlign: "center" }}>
                  Conteúdo e critérios provisórios
                </p>
              </aside>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
