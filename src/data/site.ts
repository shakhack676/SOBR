const defaultDiscordClan = "https://discord.gg/nkjWdzHru";
const defaultDiscordGame = "https://discord.gg/3UCSsbPBu";

const discordClan =
  process.env.NEXT_PUBLIC_DISCORD_INVITE?.trim() || defaultDiscordClan;
const discordGame =
  process.env.NEXT_PUBLIC_DISCORD_GAME_INVITE?.trim() || defaultDiscordGame;

export const site = {
  name: "СОБР",
  nameLatin: "SOBR",
  fullName: "СОБР — Clã de Operações Táticas",
  tagline: "ДИСЦИПЛИНА • ЧЕСТЬ • БРАТСТВО",
  taglinePt: "Disciplina • Honra • Irmandade",
  description:
    "Clã de operações táticas do Arma Reforger. Organização, disciplina, hierarquia e treinamento contínuo em um ambiente MilSim.",
  shortDescription:
    "Clã de operações táticas em Arma Reforger. Estrutura, disciplina e treinamento.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://sobr.vercel.app").replace(
    /\/$/,
    "",
  ),
  discordInvite: discordClan,
  discordClan,
  discordGame,
  discordLabel: "Discord do clã",
  discordGameLabel: "South America Server",
  discordGameDescription:
    "Servidor de jogo oficial do СОБР no Arma Reforger.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  provisionalNotice:
    "Conteúdo provisório. Informações institucionais, efetivo, patentes e operações serão homologados pelo comando.",
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Doutrina", href: "/doutrina" },
  { label: "Hierarquia", href: "/hierarquia" },
  { label: "Unidades", href: "/unidades" },
  { label: "Operações", href: "/operacoes" },
];

export const footerLinks = [
  { label: "Apresentação", href: "/sobre" },
  { label: "Doutrina & Identidade", href: "/doutrina" },
  { label: "Hierarquia & Patentes", href: "/hierarquia" },
  { label: "Unidades & Especializações", href: "/unidades" },
  { label: "Operações", href: "/operacoes" },
  { label: "Recrutamento", href: "/recrutamento" },
  { label: "Comunidade & Contato", href: "/comunidade" },
  { label: "Privacidade", href: "/privacidade" },
];

export const communityHref = site.discordInvite || "/comunidade#discord";
