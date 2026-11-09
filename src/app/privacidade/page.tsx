import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidade",
  description:
    "Política de privacidade do site institucional do СОБР: dados, formulários locais, links externos e direitos do usuário.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        tagline="Transparência & dados"
        title="Política de privacidade."
        description="Esta página explica como o site institucional do СОБР trata informações. O documento é provisório e será revisado junto ao regulamento oficial."
      />

      <section className="section">
        <div className="prose">
          <h2>1. Escopo</h2>
          <p>
            Esta política se aplica ao site institucional do <strong>{site.name}</strong>{" "}
            ({site.nameLatin}), clã de operações táticas em Arma Reforger. O site
            tem finalidade informativa e não oferece cadastro, login ou área
            restrita.
          </p>

          <h2>2. Dados coletados</h2>
          <p>
            O site não possui backend próprio e não armazena dados em servidor. Os
            formulários de alistamento e contato são processados integralmente no
            navegador do usuário: as informações digitadas não são transmitidas
            ao clã nem a terceiros por meio do site.
          </p>
          <p>
            Ao gerar uma ficha ou mensagem, o conteúdo permanece apenas no
            dispositivo até que o próprio usuário decida copiá-lo ou baixá-lo.
          </p>

          <h2>3. Links externos</h2>
          <p>
            O site pode direcionar para plataformas externas, como Discord ou o
            site oficial de Arma Reforger. Esses serviços possuem políticas de
            privacidade próprias. O СОБР não controla a coleta de dados realizada
            por terceiros.
          </p>

          <h2>4. Cookies e tecnologias similares</h2>
          <p>
            O site não utiliza cookies de rastreamento, publicidade ou analytics
            nesta versão. Eventuais recursos técnicos de hospedagem podem gerar
            registros operacionais mínimos, conforme a infraestrutura utilizada.
          </p>

          <h2>5. Imagens e conteúdo</h2>
          <p>
            As imagens são ilustrativas e não representam necessariamente
            operações, membros ou equipamentos reais do clã. Créditos e licenças
            de imagens de domínio público serão registrados no repositório do
            projeto.
          </p>

          <h2>6. Direitos do usuário</h2>
          <p>
            Como o site não armazena dados pessoais, não há base de dados a
            consultar, corrigir ou excluir. Caso o usuário envie informações
            voluntariamente por canais externos, poderá solicitar esclarecimentos
            ao comando pelo canal oficial.
          </p>

          <h2>7. Contato</h2>
          <p>
            Dúvidas sobre esta política podem ser encaminhadas pelo formulário de
            contato da comunidade ou pelo e-mail institucional, quando publicado.
          </p>

          <h2>8. Atualizações</h2>
          <p>
            Esta política é provisória e poderá ser atualizada após homologação
            do regulamento oficial. A versão publicada nesta página é a
            referência vigente.
          </p>

          <div className="btn-row mt-32">
            <Link href="/comunidade#contato" className="btn btn--primary">
              <Mail size={16} />
              Canal de contato
            </Link>
            <Link href="/" className="btn btn--ghost">
              <ArrowLeft size={16} />
              Voltar ao início
            </Link>
          </div>

          <p className="stats-note mt-32">Documento provisório · revisão pendente</p>
        </div>
      </section>
    </>
  );
}
