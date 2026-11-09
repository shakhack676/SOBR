export type Rank = {
  level: string;
  nameRu: string;
  name: string;
  insignia: "star3" | "star2" | "star1" | "chevron3" | "chevron2" | "chevron1";
  scope: string;
  description: string;
  requirements: string[];
};

export const ranks: Rank[] = [
  {
    level: "NÍVEL 01",
    nameRu: "Командир",
    name: "Comandante",
    insignia: "star3",
    scope: "Comando geral",
    description:
      "Autoridade máxima do clã. Define a doutrina, aprova a estrutura e responde pela direção estratégica do СОБР.",
    requirements: [
      "Designação do comando",
      "Histórico de liderança",
      "Aprovação interna",
    ],
  },
  {
    level: "NÍVEL 02",
    nameRu: "Заместитель",
    name: "Subcomandante",
    insignia: "star2",
    scope: "Estado-maior",
    description:
      "Coordena as unidades e substitui o comando quando necessário. Supervisiona planejamento, disciplina e prontidão.",
    requirements: [
      "Experiência em operações",
      "Formação de liderança",
      "Confiança do comando",
    ],
  },
  {
    level: "NÍVEL 03",
    nameRu: "Офицер",
    name: "Oficial",
    insignia: "star1",
    scope: "Comando de unidade",
    description:
      "Responde por uma unidade ou célula. Conduz briefings, distribui tarefas e avalia o desempenho dos operadores.",
    requirements: [
      "Curso interno concluído",
      "Histórico operacional",
      "Avaliação de instrutor",
    ],
  },
  {
    level: "NÍVEL 04",
    nameRu: "Инструктор",
    name: "Instrutor",
    insignia: "chevron3",
    scope: "Instrução e avaliação",
    description:
      "Padroniza o treinamento, conduz instruções e certifica operadores. Guardião da doutrina e dos procedimentos.",
    requirements: [
      "Domínio técnico comprovado",
      "Didática e conduta",
      "Certificação interna",
    ],
  },
  {
    level: "NÍVEL 05",
    nameRu: "Оператор",
    name: "Operador",
    insignia: "chevron2",
    scope: "Execução",
    description:
      "Operador efetivo, apto a integrar equipes e cumprir missões. Mantém treinamento e presença operacional.",
    requirements: [
      "Recrutamento aprovado",
      "Treinamento básico",
      "Presença mínima",
    ],
  },
  {
    level: "NÍVEL 06",
    nameRu: "Рекрут",
    name: "Recruta",
    insignia: "chevron1",
    scope: "Formação",
    description:
      "Novo integrante em período de adaptação. Recebe instrução básica e é avaliado antes de ser efetivado.",
    requirements: [
      "Ficha aprovada",
      "Período de avaliação",
      "Conduta compatível",
    ],
  },
];

export const commandNodes = [
  {
    title: "Comando",
    nameRu: "Командование",
    code: "СБР-К",
    description: "Direção estratégica, doutrina e representação.",
  },
  {
    title: "Estado-maior",
    nameRu: "Штаб",
    code: "СБР-Ш",
    description: "Planejamento, pessoal, inteligência e logística.",
  },
  {
    title: "Operações",
    nameRu: "Оперативный отдел",
    code: "СБР-О",
    description: "Execução, coordenação e análise pós-missão.",
  },
  {
    title: "Instrução",
    nameRu: "Учебный отдел",
    code: "СБР-У",
    description: "Treinamento, avaliação e padronização.",
  },
];
