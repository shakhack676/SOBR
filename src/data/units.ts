export type Unit = {
  slug: string;
  code: string;
  name: string;
  nameRu: string;
  role: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  specialties: string[];
  equipment: string[];
  status: string;
  icon: "assault" | "recon" | "sniper" | "support" | "armor" | "air" | "drone";
  filter: "combate" | "reconhecimento" | "apoio" | "especial";
};

export const units: Unit[] = [
  {
    slug: "assalto",
    code: "СБР-01",
    name: "Штурм",
    nameRu: "Штурм",
    role: "Assalto",
    short: "Primeira linha de entrada e domínio de ambiente.",
    description:
      "Unidade de choque responsável por abertura de brechas, entrada em ambientes confinados e consolidação de objetivos. Treina movimentação em coluna, CQB e proteção de pontos críticos.",
    image: "/images/unit-assault.webp",
    imageAlt: "Operadores em deslocamento tático sobre terreno nevado",
    specialties: ["Breaching", "CQB", "Proteção aproximada", "Assalto a objetivo"],
    equipment: ["Fuzil de assalto", "Granadas de luz e fumaça", "Proteção balística"],
    status: "Estrutura provisória",
    icon: "assault",
    filter: "combate",
  },
  {
    slug: "reconhecimento",
    code: "СБР-02",
    name: "Разведка",
    nameRu: "Разведка",
    role: "Reconhecimento",
    short: "Olhos da unidade antes, durante e depois do contato.",
    description:
      "Unidade de reconhecimento e observação. Opera à frente da força principal para identificar rotas, ameaças e pontos de interesse, produzindo relatórios curtos e acionáveis.",
    image: "/images/unit-recon.webp",
    imageAlt: "Operador em patrulha de reconhecimento em área de floresta",
    specialties: ["Patrulha", "Observação", "Aquisição de alvos", "Relatório de inteligência"],
    equipment: ["Binóculos", "Rádio tático", "Equipamento leve de campanha"],
    status: "Estrutura provisória",
    icon: "recon",
    filter: "reconhecimento",
  },
  {
    slug: "precisao",
    code: "СБР-03",
    name: "Снайпер",
    nameRu: "Снайпер",
    role: "Precisão",
    short: "Controle de distância e negação de área.",
    description:
      "Célula de tiro de precisão empregada em apoio à manobra, vigilância de corredores e neutralização de alvos prioritários. Exige disciplina de ocultação e paciência operacional.",
    image: "/images/unit-sniper.webp",
    imageAlt: "Silhueta de atirador de precisão ao pôr do sol",
    specialties: ["Tiro de precisão", "Ocultação", "Reconhecimento avançado", "Comunicação"],
    equipment: ["Fuzil de precisão", "Máscara de ocultação", "Telêmetro"],
    status: "Estrutura provisória",
    icon: "sniper",
    filter: "especial",
  },
  {
    slug: "apoio",
    code: "СБР-04",
    name: "Поддержка",
    nameRu: "Поддержка",
    role: "Apoio",
    short: "Sustentação logística, médica e de comunicações.",
    description:
      "Unidade responsável por manter a força em condições de combate: evacuação, suprimento, comunicações e coordenação com o posto de comando. Sem apoio, não há operação.",
    image: "/images/unit-support.webp",
    imageAlt: "Helicóptero militar em operação de reabastecimento",
    specialties: ["Evacuação", "Logística", "Comunicações", "Coordenação"],
    equipment: ["Rádio de longo alcance", "Kit médico", "Carga logística"],
    status: "Estrutura provisória",
    icon: "support",
    filter: "apoio",
  },
  {
    slug: "blindados",
    code: "СБР-05",
    name: "Бронетехника",
    nameRu: "Бронетехника",
    role: "Blindados",
    short: "Mobilidade protegida e apoio de fogo.",
    description:
      "Componente de veículos blindados empregado em transporte, escolta e apoio de fogo. Atua em coordenação direta com a infantaria para criar superioridade local.",
    image: "/images/unit-armor.webp",
    imageAlt: "Veículo blindado durante exercício militar",
    specialties: ["Transporte blindado", "Apoio de fogo", "Escolta", "Mobilidade"],
    equipment: ["Veículo blindado", "Metralhadora de apoio", "Comunicações veiculares"],
    status: "Estrutura provisória",
    icon: "armor",
    filter: "apoio",
  },
  {
    slug: "aeronautica",
    code: "СБР-06",
    name: "Авиация",
    nameRu: "Авиация",
    role: "Aeronáutica",
    short: "Inserção, extração e reconhecimento aéreo.",
    description:
      "Célula aérea dedicada a inserção e extração de equipes, reconhecimento e ligação entre pontos distantes do teatro. Requer coordenação rígida com o controle de operações.",
    image: "/images/unit-air.webp",
    imageAlt: "Paraquedistas em salto noturno",
    specialties: ["Inserção aérea", "Extração", "Reconhecimento aéreo", "Ligação"],
    equipment: ["Aeronave de transporte", "Rádio aeronáutico", "Equipamento de navegação"],
    status: "Estrutura provisória",
    icon: "air",
    filter: "especial",
  },
  {
    slug: "drone",
    code: "СБР-07",
    name: "БПЛА",
    nameRu: "БПЛА",
    role: "Operador de Drone",
    short: "Reconhecimento aéreo, vigilância tática e aquisição de alvos.",
    description:
      "Célula especializada no emprego de sistemas aéreos não tripulados (VANT / FPV). Realiza monitoramento em tempo real do terreno, rastreamento de movimentação hostil, correção de tiro de precisão e apoio tático direto às equipes de assalto.",
    image: "/images/unit-drone.webp",
    imageAlt: "Operador tático controlando drone de reconhecimento em campo",
    specialties: ["Pilotagem FPV", "Vigilância de área", "Designação de alvos", "Inteligência tática"],
    equipment: ["Drone de reconhecimento / FPV", "Óculos táticos FPV", "Estação de controle e telemetria", "Rádio digital de dados"],
    status: "Estrutura provisória",
    icon: "drone",
    filter: "reconhecimento",
  },
];

export const specialties = [
  {
    name: "Atirador de precisão",
    description: "Controle de longa distância, ocultação e leitura de vento.",
    icon: "target",
  },
  {
    name: "Breacher",
    description: "Abertura de brechas, explosivos e entrada em ambientes fechados.",
    icon: "hammer",
  },
  {
    name: "Médico tático",
    description: "Atendimento sob fogo, triagem e evacuação de baixas.",
    icon: "cross",
  },
  {
    name: "Operador de rádio",
    description: "Gestão de redes, protocolos e comunicação em tempo real.",
    icon: "radio",
  },
  {
    name: "Piloto de drone",
    description: "Reconhecimento aéreo e apoio à decisão tática.",
    icon: "drone",
  },
  {
    name: "Engenheiro de combate",
    description: "Fortificação, obstáculos e apoio técnico à manobra.",
    icon: "wrench",
  },
];
