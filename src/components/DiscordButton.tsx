import { communityHref, site } from "@/data/site";
import { DiscordIcon } from "./DiscordIcon";

export function DiscordButton({
  label,
  className = "btn btn--ghost",
}: {
  label?: string;
  className?: string;
}) {
  const configured = Boolean(site.discordInvite);
  return (
    <a
      href={communityHref}
      className={className}
      target={configured ? "_blank" : undefined}
      rel={configured ? "noopener noreferrer" : undefined}
    >
      <DiscordIcon size={17} />
      {label ?? (configured ? "Discord Oficial" : "Comunidade")}
    </a>
  );
}
