export type Operation = {
  code: string;
  title: string;
  type: "Reconhecimento" | "Assalto" | "Apoio" | "Interdição";
  status: string;
  statusTone: "olive" | "amber" | "muted";
  image: string;
  imageAlt: string;
  scenario: string;
  description: string;
  objective: string;
  duration: string;
  participants: string;
  result: string;
};

export const operations: Operation[] = [
  {
    code: "EX-01",
    title: "Exercício de Reconhecimento",
    type: "Reconhecimento",
    status: "Modelo",
    statusTone: "olive",
    image: "/images/op-night.webp",
    imageAlt: "Operadores em visão noturna durante exercício",
    scenario: "Cenário provisório",
    description:
      "Infiltração noturna, observação de rota e produção de relatório de inteligência. Exercício destinado a validar protocolos de comunicação e discrição.",
    objective: "Validar infiltração, observação e relatório.",
    duration: "A definir",
    participants: "A definir",
    result: "Registro provisório",
  },
  {
    code: "EX-02",
    title: "Exercício de Assalto Urbano",
    type: "Assalto",
    status: "Modelo",
    statusTone: "olive",
    image: "/images/op-urban.webp",
    imageAlt: "Equipe tática em entrada de ambiente urbano",
    scenario: "Cenário provisório",
    description:
      "Entrada coordenada em edificação, limpeza de cômodos e consolidação de objetivo. Foco em sequência de comando e segurança de equipe.",
    objective: "Validar CQB, breaching e consolidação.",
    duration: "A definir",
    participants: "A definir",
    result: "Registro provisório",
  },
  {
    code: "EX-03",
    title: "Exercício de Apoio e Evacuação",
    type: "Apoio",
    status: "Modelo",
    statusTone: "amber",
    image: "/images/op-smoke.webp",
    imageAlt: "Veículo blindado sob cortina de fumaça",
    scenario: "Cenário provisório",
    description:
      "Estabelecimento de perímetro, atendimento de baixa simulada e extração sob fumaça. Integração entre unidade de apoio e força de assalto.",
    objective: "Validar evacuação e coordenação logística.",
    duration: "A definir",
    participants: "A definir",
    result: "Registro provisório",
  },
  {
    code: "EX-04",
    title: "Exercício de Interdição Noturna",
    type: "Interdição",
    status: "Modelo",
    statusTone: "amber",
    image: "/images/op-flares.webp",
    imageAlt: "Veículo blindado disparando sinalizadores em exercício",
    scenario: "Cenário provisório",
    description:
      "Controle de via, negação de área e resposta a contato noturno. Exercício de leitura de terreno e emprego coordenado de apoio de fogo.",
    objective: "Validar controle de área e resposta noturna.",
    duration: "A definir",
    participants: "A definir",
    result: "Registro provisório",
  },
];

export const afterAction = [
  {
    step: "01",
    title: "Planejamento",
    description: "Objetivo, terreno, meios e riscos. Nada começa sem um plano claro.",
  },
  {
    step: "02",
    title: "Briefing",
    description: "Ordens, funções, comunicações e critérios de sucesso.",
  },
  {
    step: "03",
    title: "Execução",
    description: "Disciplina, adaptação e comunicação constante durante a missão.",
  },
  {
    step: "04",
    title: "Debriefing",
    description: "O que funcionou, o que falhou e o que será corrigido.",
  },
];
