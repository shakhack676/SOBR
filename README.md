# СОБР — Site institucional

Site institucional do **СОБР** (SOBR), clã de operações táticas em **Arma Reforger**. O projeto reproduz a estrutura visual de referência do site da Delta Strategic com identidade própria: preto/grafite, verde-oliva, cinza militar e tipografia condensada.

> **Conteúdo provisório.** Nomes de membros, efetivo, patentes, operações, resultados e estatísticas não são inventados. Os campos aparecem como `—`, "Modelo" ou "Provisório" até homologação do comando.

## Stack

- **Next.js 16.4.5** — App Router, React Server Components
- **TypeScript**
- **CSS global próprio** — sem Tailwind, controle total de layout e responsividade
- **next/font** — Oswald (display), Inter (texto), JetBrains Mono (labels), com suporte a cirílico
- **lucide-react** — ícones
- **next/image** — otimização de imagens WebP

## Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home: hero, banner de doutrina, unidades, alianças, missão/números, comunidade, recrutamento |
| `/sobre` | Apresentação institucional, identidade, ficha, história, princípios |
| `/doutrina` | Doutrina filtrável por categoria, código de conduta, símbolos |
| `/hierarquia` | Organograma, patentes, insígnias e progressão |
| `/unidades` | Unidades filtráveis, especializações e status |
| `/operacoes` | Exercícios modelo, ciclo operacional e registro pós-missão |
| `/recrutamento` | Etapas, requisitos, ficha local, FAQ |
| `/comunidade` | Discord, contato, parcerias e FAQ |
| `/privacidade` | Política de privacidade provisória |
| 404 | Página personalizada |

Também são gerados `sitemap.xml`, `robots.txt` e os ícones PNG (`public/images/logo-sobr-*.png`) usados como favicon/touch icon.

## Identidade visual

O emblema do clã é a imagem em `public/images/logo-sobr.png` (e variantes otimizadas), usada no cabeçalho, rodapé, painel de missão e página 404. Não há logo externo.


## Desenvolvimento local

Requisitos: **Node.js 20.9+** (testado com Node 24) e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # build de produção
npm start          # servir o build
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha conforme necessário:

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública canônica (metadata, sitemap, robots) |
| `NEXT_PUBLIC_DISCORD_INVITE` | Convite do servidor oficial do clã no Discord |
| `NEXT_PUBLIC_DISCORD_GAME_INVITE` | Convite do servidor de jogo (South America Server) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail institucional exibido no rodapé e no contato |

Todas são opcionais. O site funciona sem backend e sem variáveis; se não definidas, usa os links oficiais padrão embutidos no código.

## Formulários

As fichas de alistamento e contato são processadas **inteiramente no navegador**. O usuário gera um texto formatado, copia ou baixa um `.txt` e envia manualmente pelo canal oficial. Nenhum dado é transmitido a servidores.

## Deploy na Vercel

### Via GitHub (recomendado)

1. Crie um repositório no GitHub e envie o projeto:

   ```bash
   git init
   git add .
   git commit -m "feat: site institucional do СОБР"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```

2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. Framework preset: **Next.js** (detectado automaticamente). Build command: `npm run build`. Output: padrão.
4. Em **Settings → Environment Variables**, adicione as variáveis desejadas para Production/Preview.
5. Clique em **Deploy**.

### Via CLI

```bash
npm i -g vercel@latest
vercel
vercel --prod
```

### Observações de deploy

- Não há backend, banco de dados ou dependência de Docker.
- O projeto usa apenas caminhos relativos e assets em `public/`.
- Node.js 24 LTS é o runtime recomendado na Vercel; `engines` exige `>=20.9.0`.

## Estrutura

```
src/
  app/            rotas, layout, metadata, sitemap, robots, 404, CSS global
  components/     header/drawer, footer, heróis, cards, formulários, SVGs
  data/           conteúdo institucional tipado (site, unidades, patentes, doutrina, operações, FAQ)
  lib/            helpers de formulário/download
public/
  images/         imagens WebP ilustrativas e o emblema do clã (logo-sobr.png/webp + variantes PNG)
```

## Personalização de conteúdo

- **Links e contatos:** `src/data/site.ts`
- **Unidades:** `src/data/units.ts`
- **Patentes e organograma:** `src/data/ranks.ts`
- **Doutrina, história e símbolos:** `src/data/doctrine.ts`
- **Operações modelo:** `src/data/operations.ts`
- **FAQ:** `src/data/faq.ts`
- **Cores, tipografia e layout:** `src/app/globals.css`

Ao substituir conteúdo provisório, remova os avisos "Provisório"/"Modelo" correspondentes e atualize os textos de status.

## Imagens

Todas as imagens são **ilustrativas** e não representam membros, operações ou equipamentos reais do clã. As fontes e licenças estão documentadas em [`IMAGE_CREDITS.md`](./IMAGE_CREDITS.md). Verifique a licença antes de reutilizar comercialmente.

## Privacidade

O site não usa cookies de rastreamento, analytics ou publicidade. Consulte `/privacidade` para o texto completo (provisório).
