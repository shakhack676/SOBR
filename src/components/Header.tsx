"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, UserRound, X } from "lucide-react";
import { navItems, site, communityHref } from "@/data/site";
import { SobrEmblem } from "./SobrEmblem";
import { DiscordIcon } from "./DiscordIcon";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header" data-scrolled={scrolled}>
        <div className="header-inner">
          <Link href="/" className="brand" aria-label={`${site.name} — página inicial`}>
            <SobrEmblem className="brand__emblem" />
            <span className="brand__text">
              <span className="brand__name">{site.name}</span>
              <span className="brand__tag">MilSim · Disciplina · Propósito</span>
            </span>
          </Link>

          <nav className="header-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header-nav__link"
                data-active={isActive(pathname, item.href)}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/comunidade" className="header-community">
              Comunidade
            </Link>
            <Link href="/recrutamento" className="btn btn--primary header-cta">
              Alistar-se
            </Link>
            <button
              type="button"
              className="hamburger"
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div
        className="drawer-backdrop"
        data-open={open}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-drawer"
        className="drawer"
        data-open={open}
        aria-hidden={!open}
        inert={!open}
        aria-label="Menu de navegação"
      >
        <div className="drawer__head">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <SobrEmblem className="brand__emblem" />
            <span className="brand__text">
              <span className="brand__name">{site.name}</span>
            </span>
          </Link>
          <button
            type="button"
            className="drawer__close"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <div className="drawer__guest">
          <span className="drawer__guest-icon">
            <UserRound size={17} />
          </span>
          <div>
            <strong>Visitante</strong>
            <span>Acesso público</span>
          </div>
        </div>

        <nav className="drawer__nav" aria-label="Navegação móvel">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="drawer__link"
              data-active={isActive(pathname, item.href)}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
          <Link
            href="/comunidade"
            className="drawer__link"
            data-active={isActive(pathname, "/comunidade")}
            onClick={() => setOpen(false)}
          >
            Comunidade
            <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <div className="drawer__foot">
          <Link
            href="/recrutamento"
            className="btn btn--primary btn--block"
            onClick={() => setOpen(false)}
          >
            Alistar-se
          </Link>
          <a
            href={communityHref}
            className="btn btn--ghost btn--block"
            target={site.discordInvite ? "_blank" : undefined}
            rel={site.discordInvite ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
          >
            <DiscordIcon size={17} />
            {site.discordInvite ? "Discord Oficial" : "Comunidade"}
          </a>
          <p className="drawer__note">Conteúdo institucional provisório</p>
        </div>
      </aside>
    </>
  );
}
