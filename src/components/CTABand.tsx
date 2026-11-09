import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, UsersRound } from "lucide-react";
import { communityHref, site } from "@/data/site";
import { DiscordIcon } from "./DiscordIcon";

export function CTABand({
  title,
  text,
  icon,
  primary = { href: "/recrutamento", label: "Alistar-se" },
  secondary,
}: {
  title: string;
  text: string;
  icon?: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string; external?: boolean };
}) {
  const discordConfigured = Boolean(site.discordInvite);
  const secondaryLink = secondary ?? {
    href: communityHref,
    label: discordConfigured ? "Discord" : "Comunidade",
    external: discordConfigured,
  };

  return (
    <div className="cta-band">
      <span className="cta-band__icon" aria-hidden="true">
        {icon ?? <UsersRound size={20} />}
      </span>
      <div className="cta-band__body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="cta-band__actions">
        <Link href={primary.href} className="btn btn--primary">
          {primary.label}
          <ArrowRight size={16} />
        </Link>
        {secondaryLink.external ? (
          <a
            href={secondaryLink.href}
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon size={16} />
            {secondaryLink.label}
          </a>
        ) : (
          <Link href={secondaryLink.href} className="btn btn--ghost">
            <DiscordIcon size={16} />
            {secondaryLink.label}
          </Link>
        )}
      </div>
    </div>
  );
}
