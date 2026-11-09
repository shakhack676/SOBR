import Link from "next/link";
import { communityHref, footerLinks, site } from "@/data/site";
import { Logo } from "./Logo";
import { DiscordIcon } from "./DiscordIcon";
import { Mail } from "lucide-react";

export function Footer() {
  const year = 2026;

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand__head">
            <Logo className="footer-brand__emblem" size={44} alt="" />
            <strong>{site.name}</strong>
          </div>
          <p>
            Clã de operações táticas em Arma Reforger. Disciplina, hierarquia e
            treinamento contínuo em ambiente MilSim.
          </p>
          <p className="footer-brand__tag">{site.tagline}</p>
        </div>

        <div className="footer-col">
          <h3>Institucional</h3>
          <ul>
            {footerLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Comunidade</h3>
          <ul>
            {footerLinks.slice(4).map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a
                href={communityHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord do clã
              </a>
            </li>
            <li>
              <a
                href={site.discordGame}
                target="_blank"
                rel="noopener noreferrer"
              >
                South America Server
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-col--contact">
          <h3>Contato</h3>
          <ul>
            <li>
              <a href="/comunidade#contato">Canal de contato</a>
            </li>
            <li>
              <a href="/recrutamento#ficha">Ficha de alistamento</a>
            </li>
            {site.email ? (
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            ) : (
              <li>
                <Link href="/comunidade#contato">E-mail em configuração</Link>
              </li>
            )}
          </ul>
          <div className="btn-row mt-24">
            <a
              href={communityHref}
              className="btn btn--ghost btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon size={15} />
              Discord do clã
            </a>
            {site.email ? (
              <a href={`mailto:${site.email}`} className="btn btn--ghost btn--sm">
                <Mail size={15} />
                E-mail
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom__inner">
          <p>
            © {year} {site.name} — {site.nameLatin}. Todos os direitos reservados.
          </p>
          <div className="footer-bottom__links">
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/comunidade">Contato</Link>
            <Link href="/recrutamento">Alistamento</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
