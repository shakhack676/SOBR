import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { DoctrineExplorer } from "@/components/DoctrineExplorer";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { identitySymbols } from "@/data/doctrine";

export const metadata: Metadata = {
  title: "Doutrina",
  description:
    "Doutrina operacional do СОБР: disciplina, hierarquia, comunicação tática, imersão, integridade e treinamento contínuo.",
  alternates: { canonical: "/doutrina" },
};

const conduct = [
  "Ordens seguem a cadeia de comando. Dúvidas técnicas são tratadas no planejamento.",
  "Rádio objetivo e breve. Conversas paralelas durante o contato são proibidas.",
  "Proibido cheat, macro, exploit ou qualquer vantagem indevida.",
  "Ausência planejada deve ser comunicada antes da operação.",
  "O operador representa o СОБР em qualquer servidor em que atue.",
];

export default function DoutrinaPage() {
  return (
    <>
      <PageHero
        tagline="Código operacional & conduta"
        title="Doutrina, disciplina e padrão."
        description="A doutrina do СОБР define como planejamos, comunicamos, executamos e avaliamos. Ela existe para reduzir improviso e proteger a equipe — dentro e fora do jogo."
        actions={
          <div className="btn-row">
            <Link href="/recrutamento#ficha" className="btn btn--primary">
              Aceitar a doutrina
              <ArrowRight size={16} />
            </Link>
            <Link href="/hierarquia" className="btn btn--ghost">
              Ver hierarquia
            </Link>
          </div>
        }
      />

      <section className="section" aria-labelledby="principios-doutrina">
        <Reveal>
          <div className="notice">
            <span className="notice__icon" aria-hidden="true">
              <ShieldAlert size={18} />
            </span>
            <div className="notice__body">
              <strong>Documento provisório</strong>
              <p>
                Os artigos abaixo são a base pública da doutrina. O regulamento
                completo, com penalidades e critérios de promoção, será
                homologado pelo comando.
              </p>
            </div>
            <span className="notice__tag">Em revisão</span>
          </div>

          <div className="mt-32">
            <DoctrineExplorer />
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="conduta">
        <Reveal>
          <div className="split">
            <div className="split__body">
              <p className="eyebrow">Código de conduta</p>
              <h2 id="conduta">Cinco regras que sustentam a operação</h2>
              <p>
                A doutrina não substitui julgamento. Ela define o mínimo
                esperado para que o julgamento coletivo funcione sob pressão.
              </p>
              <ol className="conduct-list">
                {conduct.map((rule, index) => (
                  <li key={rule}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{rule}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="doctrine-aside">
              <span className="doctrine-aside__icon">
                <BookOpen size={22} />
              </span>
              <h3>Leitura obrigatória</h3>
              <p>
                Todo candidato deve ler a doutrina antes da conversa inicial. O
                período de instrução pressupõe conhecimento dos princípios
                básicos aqui publicados.
              </p>
              <div className="doctrine-aside__divider" />
              <h3>Atualizações</h3>
              <p>
                Alterações de doutrina são comunicadas no canal oficial. A versão
                publicada nesta página é a referência pública vigente.
              </p>
              <Link href="/comunidade#discord" className="btn btn--ghost btn--block mt-24">
                Acompanhar comunicados
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="simbolos">
        <Reveal>
          <SectionHead
            eyebrow="Identidade"
            title="A doutrina também é visual"
            description="Cada elemento do emblema carrega uma função. A identidade visual reforça o padrão de conduta esperado."
            id="simbolos"
          />
          <div className="grid grid--3">
            {identitySymbols.map((symbol) => (
              <article className="card" key={symbol.title}>
                <span className="card__num">{symbol.title}</span>
                <p className="card__text mt-24">{symbol.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section section--tight">
        <Reveal>
          <CTABand
            title="Doutrina aceita. Próximo passo: instrução."
            text="Inicie sua ficha e aguarde o contato do comando para a etapa de avaliação."
          />
        </Reveal>
      </section>
    </>
  );
}
