import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Handshake,
  Mail,
  MessageSquare,
  Radio,
  ShieldAlert,
  UsersRound,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/Accordion";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { DiscordIcon } from "@/components/DiscordIcon";
import { Logo } from "@/components/Logo";
import { SasLogo } from "@/components/SasLogo";
import { CopyButton } from "@/components/CopyButton";
import { communityFaq } from "@/data/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Comunidade",
  description:
    "Canais oficiais, contato e parcerias do СОБР. Comunidade de Arma Reforger com foco em MilSim tático.",
  alternates: { canonical: "/comunidade" },
};

export default function ComunidadePage() {
  const discordCopyValue = site.discordInvite;
  const gameCopyValue = site.discordGame;
  const contactText = [
    "Contato — СОБР",
    "Assunto: (descreva o motivo)",
    "Nome / indicativo:",
    "Canal para retorno:",
    "",
    "Mensagem:",
  ].join("\n");

  return (
    <>
      <PageHero
        tagline="Canais oficiais"
        title="Comunidade & contato."
        description="O СОБР mantém um canal central para avisos, treinamentos, operações e contato institucional. Todos os links oficiais são publicados nesta página."
        actions={
          <div className="btn-row">
            <Link href="/recrutamento#ficha" className="btn btn--primary">
              Alistar-se
              <ArrowRight size={16} />
            </Link>
            <Link href="#contato" className="btn btn--ghost">
              Formulário de contato
            </Link>
          </div>
        }
      />

      <section className="section" id="discord" aria-labelledby="discord-titulo">
        <Reveal>
          <div className="grid grid--2">
            <div className="discord-panel">
              <span className="discord-panel__icon" aria-hidden="true">
                <Logo size={36} alt="СОБР" />
              </span>
              <div className="discord-panel__body">
                <h2 id="discord-titulo">СОБР</h2>
                <p>
                  Servidor do clã onde fazemos operações, etc.
                </p>
              </div>
              <div className="discord-panel__actions">
                <a
                  href={site.discordInvite}
                  className="btn btn--discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiscordIcon size={17} />
                  Entrar no Discord do clã
                </a>
                <CopyButton text={discordCopyValue} label="Copiar link" />
              </div>
            </div>

            <div className="discord-panel">
              <span className="discord-panel__icon" aria-hidden="true">
                <SasLogo width={42} alt="South America Server" />
              </span>
              <div className="discord-panel__body">
                <h2 id="discord-titulo-sas">South America Server</h2>
                <p>
                  Servidor do Arma Reforger onde operamos e fazemos parte.
                </p>
              </div>
              <div className="discord-panel__actions">
                <a
                  href={site.discordGame}
                  className="btn btn--discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiscordIcon size={17} />
                  Entrar no servidor de jogo
                </a>
                <CopyButton text={gameCopyValue} label="Copiar link" />
              </div>
            </div>
          </div>

          <div className="notice mt-24">
            <span className="notice__icon" aria-hidden="true">
              <ShieldAlert size={18} />
            </span>
            <div className="notice__body">
              <strong>Verifique o canal oficial</strong>
              <p>
                Links de Discord, servidores e eventos só são oficiais quando
                publicados nesta página ou confirmados pelo comando.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="contato" aria-labelledby="contato-titulo">
        <Reveal>
          <SectionHead
            eyebrow="Contato"
            title="Fale com o comando"
            description="Use o formulário para gerar uma mensagem padronizada. O envio é manual, pelo Discord ou e-mail oficial."
            id="contato-titulo"
          />
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <DiscordIcon size={17} />
                  </span>
                  <div className="contact-item__body">
                    <strong>Discord do clã</strong>
                    <span>Canal oficial de recrutamento e avisos</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <Mail size={17} />
                  </span>
                  <div className="contact-item__body">
                    <strong>E-mail institucional</strong>
                    <span>{site.email || "Endereço em configuração"}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <UsersRound size={17} />
                  </span>
                  <div className="contact-item__body">
                    <strong>Parcerias</strong>
                    <span>Propostas avaliadas pelo comando</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <Radio size={17} />
                  </span>
                  <div className="contact-item__body">
                    <strong>Imprensa & eventos</strong>
                    <span>Contato pelo formulário ao lado</span>
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <p className="mono">Mensagem rápida</p>
                <div className="btn-row mt-24">
                  <CopyButton text={contactText} label="Copiar modelo" />
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="btn btn--ghost btn--sm">
                      <Mail size={15} />
                      Enviar e-mail
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </section>

      <section className="section" id="parcerias" aria-labelledby="parcerias-titulo">
        <Reveal>
          <SectionHead
            eyebrow="Parcerias"
            title="Comunidades & servidores"
            description="O South America Server é o servidor de jogo oficial do clã. Outras parcerias são avaliadas caso a caso pelo comando."
            id="parcerias-titulo"
          />
          <div className="grid grid--2">
            <article className="card">
              <span className="card__icon">
                <Handshake size={19} />
              </span>
              <h3 className="card__title">Propor uma parceria</h3>
              <p className="card__text">
                Apresente propósito, estrutura, regras e horários do servidor ou
                comunidade. Propostas genéricas não são avaliadas.
              </p>
              <Link href="#contato" className="link-arrow mt-24">
                Enviar proposta
                <ArrowRight size={14} />
              </Link>
            </article>
            <article className="card">
              <span className="card__icon">
                <MessageSquare size={19} />
              </span>
              <h3 className="card__title">South America Server</h3>
              <p className="card__text">
                Servidor de jogo oficial do СОБР no Arma Reforger, região
                América do Sul.
              </p>
              <a
                href={site.discordGame}
                className="btn btn--ghost btn--sm mt-24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon size={15} />
                Entrar no servidor de jogo
              </a>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="faq-comunidade">
        <Reveal>
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 className="section-title" id="faq-comunidade">
                Comunidade
              </h2>
              <p className="section-lead mt-24">
                Informações sobre servidor, contato e parcerias institucionais.
              </p>
            </div>
            <Accordion items={communityFaq} />
          </div>
        </Reveal>
      </section>

      <section className="section section--tight">
        <Reveal>
          <CTABand
            title="O canal oficial é o ponto de partida"
            text="Acompanhe avisos e converse com o comando antes de enviar sua candidatura."
            primary={{ href: "/recrutamento#ficha", label: "Ficha de alistamento" }}
          />
        </Reveal>
      </section>
    </>
  );
}
