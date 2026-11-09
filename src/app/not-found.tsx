import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { SobrEmblem } from "@/components/SobrEmblem";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__inner">
        <SobrEmblem className="not-found__emblem" />
        <p className="eyebrow">Erro 404 · setor não localizado</p>
        <h1 className="not-found__code">404</h1>
        <h2 className="not-found__title">Posição fora do mapa.</h2>
        <p className="not-found__text">
          A página solicitada não existe, foi movida ou ainda não faz parte da
          estrutura pública do СОБР. Retorne ao ponto de entrada ou consulte os
          canais oficiais.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn--primary">
            <ArrowLeft size={16} />
            Voltar ao início
          </Link>
          <Link href="/comunidade" className="btn btn--ghost">
            <Compass size={16} />
            Comunidade
          </Link>
        </div>
      </div>
    </section>
  );
}
