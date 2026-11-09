import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  MessageSquare,
  ShieldCheck,
  Target,
  UserCheck,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { RecruitmentForm } from "@/components/RecruitmentForm";
import { Accordion } from "@/components/Accordion";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { recruitmentFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Recrutamento",
  description:
    "Alistamento no СОБР: requisitos, etapas de seleção, instrução básica e ficha de candidatura para Arma Reforger.",
  alternates: { canonical: "/recrutamento" },
};

const process = [
  {
    icon: ClipboardCheck,
    title: "Ficha de alistamento",
    text: "Preencha os dados e gere o documento. O envio é feito pelo canal oficial de recrutamento.",
  },
  {
    icon: MessageSquare,
    title: "Conversa inicial",
    text: "O comando confirma disponibilidade, alinha expectativas e apresenta a estrutura.",
  },
  {
    icon: Target,
    title: "Instrução básica",
    text: "Doutrina, comunicação, movimentação e procedimentos. Presença e conduta são avaliadas.",
  },
  {
    icon: UserCheck,
    title: "Designação",
    text: "Aprovado o período de formação, o recruta é efetivado e designado a uma unidade.",
  },
];

const requirements = [
  "Possuir Arma Reforger em plataforma compatível com o servidor.",
  "Microfone funcional e disposição para comunicação por voz.",
  "Disponibilidade para treinamentos e operações combinadas.",
  "Leitura prévia da doutrina e aceitação do código de conduta.",
  "Conduta compatível com ambiente MilSim e fair play.",
  "Idade e demais critérios definidos no regulamento oficial.",
];

export default function RecrutamentoPage() {
  return (
    <>
      <PageHero
        center
        tagline="Recrutamento aberto"
        title="Alistamento"
        description="O СОБР busca operadores comprometidos com disciplina, comunicação e trabalho em equipe. Experiência prévia em MilSim não é obrigatória — compromisso é."
        actions={
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="#ficha" className="btn btn--primary">
              Ir para a ficha
              <ArrowRight size={16} />
            </Link>
            <Link href="/doutrina" className="btn btn--ghost">
              Ler a doutrina
            </Link>
          </div>
        }
      >
        <div className="mt-32">
          <div className="notice" style={{ textAlign: "left" }}>
            <span className="notice__icon" aria-hidden="true">
              <ShieldCheck size={18} />
            </span>
            <div className="notice__body">
              <strong>Processo provisório</strong>
              <p>
                Etapas, prazos e critérios de aprovação serão homologados pelo
                comando. A ficha abaixo é gerada localmente e não envia dados a
                servidores.
              </p>
            </div>
            <span className="notice__tag">Em definição</span>
          </div>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="processo">
        <Reveal>
          <SectionHead
            eyebrow="Etapas"
            title="Como funciona a seleção"
            description="O processo é simples, mas não é automático. Cada etapa existe para confirmar alinhamento entre candidato e estrutura."
            id="processo"
          />
          <div className="process-grid">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="process-card" key={item.title}>
                  <span className="process-card__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="process-card__icon">
                    <Icon size={19} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="split mt-40" style={{ alignItems: "start" }}>
            <div className="requirements-panel">
              <p className="eyebrow">Requisitos</p>
              <h3>Antes de se alistar</h3>
              <ul className="requirements-list">
                {requirements.map((requirement) => (
                  <li key={requirement}>
                    <Check size={15} />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="requirements-panel requirements-panel--muted">
              <p className="eyebrow">Observação</p>
              <h3>O que não exigimos</h3>
              <p>
                Não exigimos experiência anterior em MilSim, patente, histórico
                em outros clãs ou disponibilidade integral. Exigimos postura,
                presença combinada e respeito à cadeia de comando.
              </p>
              <p>
                Candidatos sem experiência passam pelo mesmo período de formação
                e são avaliados pelos mesmos critérios.
              </p>
              <p className="stats-note">Critérios provisórios</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="ficha" aria-labelledby="ficha-titulo">
        <Reveal>
          <SectionHead
            eyebrow="Candidatura"
            title="Ficha de alistamento"
            description="Preencha os campos, gere o documento e envie pelo canal oficial. Nenhum dado sai do seu navegador."
            id="ficha-titulo"
          />
          <RecruitmentForm />
        </Reveal>
      </section>

      <section className="section" aria-labelledby="faq-recrutamento">
        <Reveal>
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 className="section-title" id="faq-recrutamento">
                Perguntas de recrutamento
              </h2>
              <p className="section-lead mt-24">
                Se a sua dúvida não estiver aqui, use o canal de contato da
                comunidade.
              </p>
              <Link href="/comunidade#contato" className="btn btn--ghost mt-24">
                Falar com o comando
                <ArrowRight size={16} />
              </Link>
            </div>
            <Accordion items={recruitmentFaq} />
          </div>
        </Reveal>
      </section>

      <section className="section section--tight">
        <Reveal>
          <CTABand
            title="Ainda com dúvida sobre o alistamento?"
            text="Acompanhe os canais oficiais e converse com a comunidade antes de enviar sua ficha."
            primary={{ href: "/comunidade", label: "Ir para comunidade" }}
          />
        </Reveal>
      </section>
    </>
  );
}
