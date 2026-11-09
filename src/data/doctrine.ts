export type DoctrineItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  category: "Conduta" | "Comando" | "Comunicação" | "Imersão" | "Ética" | "Treinamento";
  icon: "shield" | "users" | "radio" | "crosshair" | "flag" | "scale" | "book" | "globe";
};

export const doctrine: DoctrineItem[] = [
  {
    id: "disciplina",
    number: "01",
    title: "Disciplina operacional",
    description:
      "Pontualidade, preparação e cumprimento de ordens. A disciplina não é obediência cega: é a capacidade de manter o padrão quando ninguém está observando.",
    category: "Conduta",
    icon: "shield",
  },
  {
    id: "hierarquia",
    number: "02",
    title: "Hierarquia e cadeia de comando",
    description:
      "Toda ordem segue a cadeia. Questionamentos técnicos são bem-vindos no planejamento; em execução, a decisão do comandante prevalece e é cumprida.",
    category: "Comando",
    icon: "users",
  },
  {
    id: "comunicacao",
    number: "03",
    title: "Comunicação tática",
    description:
      "Rádio objetivo, claro e breve. Clear comms durante o contato. Conversas paralelas, ruído e improviso desnecessário comprometem a unidade.",
    category: "Comunicação",
    icon: "radio",
  },
  {
    id: "imersao",
    number: "04",
    title: "Imersão e conduta em jogo",
    description:
      "O СОБР existe dentro do Arma Reforger. Mantemos postura compatível com o ambiente MilSim, sem quebrar a imersão da equipe ou do servidor.",
    category: "Imersão",
    icon: "crosshair",
  },
  {
    id: "lealdade",
    number: "05",
    title: "Lealdade ao grupo",
    description:
      "O indivíduo não compete com a equipe. Compartilhamos informação, protegemos o companheiro e assumimos responsabilidade coletiva pelo resultado.",
    category: "Ética",
    icon: "flag",
  },
  {
    id: "integridade",
    number: "06",
    title: "Integridade e fair play",
    description:
      "Proibido o uso de cheats, macros, exploits ou qualquer vantagem indevida. A vitória sem integridade não é vitória: é ruído.",
    category: "Ética",
    icon: "scale",
  },
  {
    id: "treinamento",
    number: "07",
    title: "Treinamento contínuo",
    description:
      "Operador que não treina, regride. Instruções, avaliações e exercícios são obrigatórios e fazem parte da rotina permanente da unidade.",
    category: "Treinamento",
    icon: "book",
  },
  {
    id: "representacao",
    number: "08",
    title: "Representação externa",
    description:
      "Em servidores parceiros, o operador representa o СОБР. Conduta, linguagem e fair play seguem as regras locais e o padrão institucional do clã.",
    category: "Conduta",
    icon: "globe",
  },
];

export const historyPhases = [
  {
    phase: "FASE 01",
    title: "Fundação",
    description:
      "Formação do núcleo inicial de operadores e definição do propósito do clã: operar com disciplina, hierarquia e identidade própria.",
    status: "Marco provisório",
  },
  {
    phase: "FASE 02",
    title: "Estruturação",
    description:
      "Criação das unidades, definição de cargos e organização da cadeia de comando. O clã deixa de ser um grupo e passa a ser uma estrutura.",
    status: "Marco provisório",
  },
  {
    phase: "FASE 03",
    title: "Doutrina",
    description:
      "Padronização de táticas, técnicas e procedimentos. Elaboração do código de conduta, do treinamento básico e dos critérios de promoção.",
    status: "Marco provisório",
  },
  {
    phase: "FASE 04",
    title: "Operações",
    description:
      "Ciclo permanente de briefings, exercícios e debriefings. A estrutura é testada em campo e ajustada com base no desempenho real.",
    status: "Marco provisório",
  },
];

export const identitySymbols = [
  {
    title: "O emblema",
    description:
      "Escudo, estrela e lâminas cruzadas. O escudo representa proteção; a estrela, o objetivo comum; as lâminas, a disposição para o combate.",
    icon: "shield",
  },
  {
    title: "As cores",
    description:
      "Preto e grafite para o ambiente operacional. Verde-oliva para a doutrina e o terreno. Branco para a clareza da informação.",
    icon: "palette",
  },
  {
    title: "O lema",
    description:
      "Дисциплина. Честь. Братство. Disciplina para agir, honra para permanecer e irmandade para nunca operar sozinho.",
    icon: "flag",
  },
];
