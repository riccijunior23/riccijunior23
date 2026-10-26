const games = {
  "mega-sena": { name: "Mega-Sena", count: 6, min: 1, max: 60 },
  lotofacil: { name: "Lotofácil", count: 15, min: 1, max: 25 },
  quina: { name: "Quina", count: 5, min: 1, max: 80 },
  lotomania: { name: "Lotomania", count: 50, min: 0, max: 99 },
  "dupla-sena": { name: "Dupla Sena", count: 6, min: 1, max: 50 },
  timemania: { name: "Timemania", count: 10, min: 1, max: 80 },
  "dia-de-sorte": { name: "Dia de Sorte", count: 7, min: 1, max: 31 }
};

const methods = {
  sonho: "Sonho",
  horoscopo: "Horóscopo",
  matematica: "Matemática",
  aleatorio: "Aleatório inteligente",
  "data-especial": "Data especial",
  "nome-da-sorte": "Nome da sorte"
};

const methodDescriptions = {
  sonho: "Use palavras do seu sonho para inspirar uma combinação.",
  horoscopo: "Usa bases por signo e organiza a combinação de forma recreativa.",
  matematica: "Privilegia faixas, pares, ímpares e dispersão.",
  aleatorio: "Crie combinações variadas sem precisar preencher nada.",
  "data-especial": "Converte datas importantes em pontos de partida.",
  "nome-da-sorte": "Mapeia letras e ritmo do nome para criar variações."
};

const methodVisuals = {
  sonho: { icon: "&#9790;", a: "#3b1a92", b: "#21105f" },
  horoscopo: { icon: "&#9800;", a: "#124a93", b: "#082454" },
  matematica: { icon: "&#128202;", a: "#0d806e", b: "#084a43" },
  aleatorio: { icon: "&#9860;", a: "#9a5524", b: "#563214" },
  "data-especial": { icon: "&#128197;", a: "#b8367b", b: "#6d174c" },
  "nome-da-sorte": { icon: "A&#8596;B", a: "#048a50", b: "#035332" }
};

const gameVisuals = {
  "mega-sena": { icon: "&#9752;", color: "#19a95b" },
  lotofacil: { icon: "&#10047;", color: "#9b5cff" },
  quina: { icon: "&#10020;", color: "#6b4be6" },
  lotomania: { icon: "&#10019;", color: "#ef8b25" },
  "dupla-sena": { icon: "&#9829;", color: "#f04444" },
  timemania: { icon: "&#9917;", color: "#e6b21e" },
  "dia-de-sorte": { icon: "&#9728;", color: "#f6ad19" }
};

const betOptions = {
  "mega-sena": [
    { numbers: 6, price: "R$ 6,00", probability: "1 em 50.063.860" },
    { numbers: 7, price: "R$ 42,00", probability: "1 em 7.151.980" },
    { numbers: 8, price: "R$ 168,00", probability: "1 em 1.787.995" },
    { numbers: 9, price: "R$ 504,00", probability: "1 em 595.998" },
    { numbers: 10, price: "R$ 1.260,00", probability: "1 em 238.399" },
    { numbers: 11, price: "R$ 2.772,00", probability: "1 em 108.363" },
    { numbers: 12, price: "R$ 5.544,00", probability: "1 em 54.182" },
    { numbers: 13, price: "R$ 10.296,00", probability: "1 em 29.175" },
    { numbers: 14, price: "R$ 18.018,00", probability: "1 em 16.671" },
    { numbers: 15, price: "R$ 30.030,00", probability: "1 em 10.003" },
    { numbers: 16, price: "R$ 48.048,00", probability: "1 em 6.252" },
    { numbers: 17, price: "R$ 74.256,00", probability: "1 em 4.045" },
    { numbers: 18, price: "R$ 111.384,00", probability: "1 em 2.697" },
    { numbers: 19, price: "R$ 162.792,00", probability: "1 em 1.845" },
    { numbers: 20, price: "R$ 232.560,00", probability: "1 em 1.292" }
  ],
  lotofacil: [
    { numbers: 15, price: "R$ 3,50", probability: "1 em 3.268.760" },
    { numbers: 16, price: "R$ 56,00", probability: "1 em 204.298" },
    { numbers: 17, price: "R$ 476,00", probability: "1 em 24.035" },
    { numbers: 18, price: "R$ 2.856,00", probability: "1 em 4.006" },
    { numbers: 19, price: "R$ 13.566,00", probability: "1 em 843" },
    { numbers: 20, price: "R$ 54.264,00", probability: "1 em 211" }
  ],
  quina: [
    { numbers: 5, price: "R$ 3,00", probability: "1 em 24.040.016" },
    { numbers: 6, price: "R$ 18,00", probability: "1 em 4.006.669" },
    { numbers: 7, price: "R$ 63,00", probability: "1 em 1.144.763" },
    { numbers: 8, price: "R$ 168,00", probability: "1 em 429.286" },
    { numbers: 9, price: "R$ 378,00", probability: "1 em 190.794" },
    { numbers: 10, price: "R$ 756,00", probability: "1 em 95.396" },
    { numbers: 11, price: "R$ 1.386,00", probability: "1 em 52.035" },
    { numbers: 12, price: "R$ 2.376,00", probability: "1 em 30.354" },
    { numbers: 13, price: "R$ 3.861,00", probability: "1 em 18.679" },
    { numbers: 14, price: "R$ 6.006,00", probability: "1 em 12.008" },
    { numbers: 15, price: "R$ 9.009,00", probability: "1 em 8.005" }
  ],
  lotomania: [{ numbers: 50, price: "R$ 3,00", probability: "1 em 11.372.635" }],
  "dupla-sena": [
    { numbers: 6, price: "R$ 3,00", probability: "1 em 15.890.700" },
    { numbers: 7, price: "R$ 21,00", probability: "1 em 2.270.100" },
    { numbers: 8, price: "R$ 84,00", probability: "1 em 567.525" },
    { numbers: 9, price: "R$ 252,00", probability: "1 em 189.175" },
    { numbers: 10, price: "R$ 630,00", probability: "1 em 75.670" },
    { numbers: 11, price: "R$ 1.386,00", probability: "1 em 34.395" },
    { numbers: 12, price: "R$ 2.772,00", probability: "1 em 17.197" },
    { numbers: 13, price: "R$ 5.148,00", probability: "1 em 9.260" },
    { numbers: 14, price: "R$ 9.009,00", probability: "1 em 5.291" },
    { numbers: 15, price: "R$ 15.015,00", probability: "1 em 3.174" }
  ],
  timemania: [{ numbers: 10, price: "R$ 3,50", probability: "1 em 26.472.637" }],
  "dia-de-sorte": [
    { numbers: 7, price: "R$ 2,50", probability: "1 em 2.629.575" },
    { numbers: 8, price: "R$ 20,00", probability: "1 em 328.696" },
    { numbers: 9, price: "R$ 90,00", probability: "1 em 73.043" },
    { numbers: 10, price: "R$ 300,00", probability: "1 em 21.913" },
    { numbers: 11, price: "R$ 825,00", probability: "1 em 7.968" },
    { numbers: 12, price: "R$ 1.980,00", probability: "1 em 3.320" },
    { numbers: 13, price: "R$ 4.290,00", probability: "1 em 1.532" },
    { numbers: 14, price: "R$ 8.580,00", probability: "1 em 766" },
    { numbers: 15, price: "R$ 16.087,50", probability: "1 em 408" }
  ]
};

const dreamBase = {
  agua: [2, 7, 12, 21, 34],
  dinheiro: [8, 17, 24, 44, 55],
  cobra: [4, 14, 23, 36, 58],
  crianca: [6, 15, 31, 43],
  viagem: [10, 19, 32, 47],
  amor: [11, 22, 33, 49]
};

const signBase = {
  aries: [1, 9, 18, 27, 45],
  touro: [2, 6, 15, 24, 51],
  gemeos: [3, 12, 21, 39, 57],
  cancer: [4, 13, 22, 31, 40],
  leao: [5, 14, 23, 32, 59],
  virgem: [6, 16, 25, 34, 43],
  libra: [7, 17, 26, 35, 44],
  escorpiao: [8, 19, 28, 37, 46],
  sagitario: [9, 20, 29, 38, 47],
  capricornio: [10, 21, 30, 48, 60],
  aquario: [11, 22, 33, 42, 53],
  peixes: [12, 24, 36, 49, 58]
};

const signOptions = {
  aries: "Áries",
  touro: "Touro",
  gemeos: "Gêmeos",
  cancer: "Câncer",
  leao: "Leão",
  virgem: "Virgem",
  libra: "Libra",
  escorpiao: "Escorpião",
  sagitario: "Sagitário",
  capricornio: "Capricórnio",
  aquario: "Aquário",
  peixes: "Peixes"
};

const methodInputConfig = {
  sonho: {
    label: "Descreva seu sonho",
    placeholder: "Ex: sonhei com cobra, água, dinheiro...",
    hint: "Use poucas palavras. Ex: cobra, água, dinheiro.",
    mode: "text"
  },
  horoscopo: {
    label: "Escolha seu signo",
    hint: "Selecione um signo para gerar uma sugestão inspirada no horóscopo.",
    mode: "sign"
  },
  matematica: {
    label: "Preferência numérica",
    placeholder: "Ex: equilibrado, números altos, aniversário...",
    hint: "Opcional. O gerador também funciona sem preencher.",
    mode: "text"
  },
  aleatorio: {
    label: "Inspiração opcional",
    placeholder: "Ex: energia de hoje",
    hint: "Opcional. Cada geração já cria uma nova combinação.",
    mode: "text"
  },
  "data-especial": {
    label: "Data especial",
    hint: "Escolha uma data para servir como ponto de partida.",
    mode: "date"
  },
  "nome-da-sorte": {
    label: "Nome",
    placeholder: "Ex: Ana Paula",
    hint: "O nome vira base numérica para uma sugestão personalizada.",
    mode: "text"
  }
};

const historyKey = "palpinet.preview.history";
const favoritesKey = "palpinet.preview.favorites";
const usageKey = "palpinet.preview.usage";
const sessionKey = "palpinet.preview.session";
const usersKey = "palpinet.preview.users";
const authSessionKey = "palpinet.preview.authSession";

const preferenceDefaults = {
  favorite_game: "",
  favorite_method: "",
  daily_emails: false,
  lucky_numbers_daily: false,
  horoscope_emails: false,
  dream_emails: false,
  newsletter: true,
  privacy: false
};

const defaultUser = {
  id: "user_luiz_ricci",
  name: "Luiz Ricci",
  email: "riccijunior@gmail.com",
  password: "1594826",
  role: "admin",
  status: "active",
  plan: "Premium",
  birth_date: "",
  sign: "",
  city: "",
  lastAccess: "",
  history: [],
  favorites: [],
  preferences: { ...preferenceDefaults },
  createdAt: "2026-05-29T00:00:00.000Z"
};

const adminRoles = {
  admin: {
    label: "Administrador",
    description: "Acesso total ao ecossistema Palpinet.",
    permissions: ["read", "content", "users", "settings", "delete", "security", "ai"]
  },
  editor: {
    label: "Editor",
    description: "Gerencia artigos, sonhos e horóscopos.",
    permissions: ["read", "content", "ai"]
  },
  analyst: {
    label: "Analista",
    description: "Acesso de leitura a estatísticas e relatórios.",
    permissions: ["read"]
  },
  user: {
    label: "Usuário",
    description: "Conta comum do Palpinet.",
    permissions: []
  }
};

const adminNavItems = [
  { id: "dashboard", label: "Dashboard", permission: "read" },
  { id: "users", label: "Usuários", permission: "users" },
  { id: "leads", label: "Leads", permission: "read" },
  { id: "blog", label: "Blog", permission: "content" },
  { id: "dreams", label: "Sonhos", permission: "content" },
  { id: "horoscope", label: "Horóscopo", permission: "content" },
  { id: "games", label: "Jogos", permission: "content" },
  { id: "ai", label: "Inteligência Artificial", permission: "ai" },
  { id: "seo", label: "SEO", permission: "content" },
  { id: "adsense", label: "Adsense", permission: "read" },
  { id: "sponsor", label: "Patrocinador", permission: "settings" },
  { id: "coupons", label: "Cupons", permission: "settings" },
  { id: "analytics", label: "Analytics", permission: "read" },
  { id: "guesses", label: "Palpites", permission: "read" },
  { id: "insights", label: "Insights", permission: "read" },
  { id: "settings", label: "Configurações", permission: "settings" },
  { id: "security", label: "Segurança", permission: "security" }
];

const adminSettingsDefaults = {
  logo: "/public/palpinet-logo.svg",
  favicon: "/public/palpinet-logo.svg",
  instagram: "@palpinet",
  tiktok: "@palpinet",
  email: "contato@palpinet.com.br",
  domain: "palpinet.com.br",
  officialInfoGame: "dia-de-sorte",
  officialInfoPrize: "R$ 1.122.000.000",
  officialInfoDrawDate: "28/06/2026",
  officialInfoContest: "301723",
  backup: true,
  spamProtection: true
};

const sponsorSettingsDefaults = {
  enabled: false,
  name: "Patrocinador Palpinet",
  logo: "",
  headline: "Oferta especial do nosso patrocinador",
  description: "Conheça uma novidade selecionada para quem acompanha o Palpinet.",
  buttonText: "Conhecer patrocinador",
  link: "",
  showOnLoad: true
};

const sponsorSlotDefaults = [
  { active: true, name: "Patrocinador 1", logo: "", link: "" },
  { active: false, name: "Patrocinador 2", logo: "", link: "" },
  { active: false, name: "Patrocinador 3", logo: "", link: "" }
];

const cloudSettings = {
  sponsorKey: "sponsor",
  couponsKey: "sponsor_coupons",
  sponsorLogoPath: "sponsors"
};

const sponsorCouponDefaults = [
  {
    id: "coupon_shopee",
    active: true,
    sponsor: "Shopee",
    title: "Cupons de desconto Shopee",
    description: "Ofertas selecionadas para economizar em compras online.",
    couponCode: "PALPINET10",
    discount: "Até 10% OFF",
    logo: "",
    link: "https://shopee.com.br"
  },
  {
    id: "coupon_mcdia",
    active: true,
    sponsor: "McDia Feliz",
    title: "Apoie uma causa especial",
    description: "Acesse a campanha do patrocinador e veja como participar.",
    couponCode: "PALPINET",
    discount: "Campanha especial",
    logo: "",
    link: "#"
  }
];

const aiPromptDefaults = {
  sonho: "Interprete sonhos de forma curta, mística leve e responsável. Nunca prometa premiação.",
  horoscopo: "Crie horóscopos recreativos com energia do dia, atitude positiva e aviso responsável.",
  numerologia: "Explique a energia simbólica do nome e conecte levemente aos números gerados."
};

const adminDreamCatalogDefaults = [
  { id: "dream_chuva", term: "Sonhar com chuva", interpretation: "Renovação emocional e início de novos ciclos.", keywords: "água, limpeza, ciclo, recomeço", seo: "Sonhar com chuva: significado e números da sorte" },
  { id: "dream_cobra", term: "Sonhar com cobra", interpretation: "Transformação, intuição e cuidado com decisões.", keywords: "cobra, alerta, mudança, pele", seo: "Sonhar com cobra: significado e interpretação" },
  { id: "dream_dinheiro", term: "Sonhar com dinheiro", interpretation: "Valor pessoal, escolhas e oportunidades.", keywords: "dinheiro, valor, oportunidade", seo: "Sonhar com dinheiro: significado recreativo" }
];

const horoscopeAdminDefaults = Object.entries(signOptions).map(([slug, name]) => ({
  id: slug,
  sign: name,
  baseText: `${name} pede equilíbrio entre intuição e ação consciente.`,
  energy: "Foco, movimento, renovação",
  message: "Use a energia do dia como inspiração recreativa."
}));

const blogCategories = [
  "Sonhos",
  "Horóscopo",
  "Numerologia",
  "Mega-Sena",
  "Lotofácil",
  "Quina",
  "Jogos",
  "Números da Sorte",
  "Datas Especiais",
  "Curiosidades",
  "Inspiração do Dia"
];

const blogArticles = [
  {
    slug: "sonhar-com-chuva",
    seoPath: "/sonhar-com-chuva",
    category: "Sonhos",
    title: "Sonhar com chuva: significado, símbolos e números da sorte",
    subtitle: "Entenda a símbologia da chuva nos sonhos e veja uma sugestão recreativa do Palpinet.",
    metaTitle: "Sonhar com chuva: significado e números da sorte | Palpinet",
    metaDescription: "Veja o significado de sonhar com chuva, principais símbolos e números recreativos sugeridos pelo Palpinet.",
    date: "2026-06-03",
    readTime: "8 min",
    featured: true,
    imageTone: "dream",
    suggestedNumbers: [7, 14, 23, 31, 45, 58],
    sections: [
      {
        id: "significado",
        title: "Significado",
        paragraphs: [
          "Sonhar com chuva costuma ser associado a renovação emocional, limpeza interna e encerramento de ciclos. No universo recreativo do Palpinet, a chuva representa movimento, transformação e a possibilidade de olhar para uma situação com mais calma.",
          "A interpretação não deve ser vista como previsão. Ela funciona como uma leitura simbólica para inspirar uma combinação, criar um momento de reflexão e deixar a experiência de gerar números mais pessoal."
        ]
      },
      {
        id: "interpretação",
        title: "Interpretação",
        paragraphs: [
          "Se a chuva no sonho era leve, ela pode sugerir alívio e reorganização. Se era forte, pode representar intensidade emocional. Quando aparece junto de água limpa, a ideia de recomeço fica mais evidente; quando vem com vento ou tempestade, o sonho pode apontar para mudanças que exigem equilíbrio.",
          "No Palpinet, esses elementos ajudam a conectar palavras, sensações e símbolos ao algoritmo de geração, sempre mantendo números unicos, variedade e regras do jogo escolhido."
        ]
      },
      {
        id: "numeros-sugeridos",
        title: "Números sugeridos",
        paragraphs: [
          "A sugestão recreativa para este tema usa números associados a ciclos, água, movimento e renovação. A combinação exibida não promete resultado e não substitui escolha pessoal.",
          "Você pode usar o Gerador Rápido para criar uma nova combinação com base no seu próprio sonho, informando detalhes como chuva forte, chuva fina, tempestade, rio, mar ou guarda-chuva."
        ]
      }
    ],
    faq: [
      ["Sonhar com chuva e bom sinal?", "Pode representar renovação e limpeza emocional, mas a leitura e simbólica e recreativa."],
      ["A chuva no sonho gera números automaticamente?", "Os números são gerados pelo algoritmo Palpinet, e a interpretação apenas conecta o símbolo ao resultado."],
      ["Posso gerar outro palpite com meu sonho?", "Sim. Use o Gerador Rápido e descreva o sonho com poucas palavras."]
    ],
    related: ["sonhar-com-cobra", "sonhar-com-dinheiro", "numeros-da-sorte-para-aries", "significado-do-numero-7"]
  },
  {
    slug: "sonhar-com-cobra",
    seoPath: "/sonhar-com-cobra",
    category: "Sonhos",
    title: "Sonhar com cobra: interpretação e números simbolicos",
    subtitle: "Veja como o Palpinet interpreta cobra, mudança, alerta e intuição de forma recreativa.",
    metaTitle: "Sonhar com cobra: significado e números | Palpinet",
    metaDescription: "Entenda o significado de sonhar com cobra e gere números simbolicos com o Palpinet.",
    date: "2026-06-03",
    readTime: "7 min",
    imageTone: "mystic",
    suggestedNumbers: [4, 14, 23, 36, 45, 58],
    sections: [
      {
        id: "significado",
        title: "Significado",
        paragraphs: [
          "Sonhar com cobra aparece em muitas buscas porque mistura mistério, intuição e sensação de alerta. Em uma leitura simbólica, cobra pode representar transformação, troca de fase, cuidado com decisões e percepção mais apurada do ambiente.",
          "No Palpinet, esse sonho é tratado como inspiração recreativa. A ideia é transformar símbolos em uma experiência mais envolvente, sem prometer sorte, previsão ou resultado certo."
        ]
      },
      {
        id: "interpretação",
        title: "Interpretação",
        paragraphs: [
          "Uma cobra calma pode sugerir observação e estratégia. Uma cobra atacando pode apontar tensão ou necessidade de agir com prudência. Cores, tamanho e local do sonho ajudam a deixar a interpretação mais pessoal.",
          "Quando o usuário descreve o sonho, o algoritmo gera os números conforme regras do jogo, e a IA do Palpinet cria uma leitura curta para contextualizar a sugestão."
        ]
      },
      {
        id: "curiosidades",
        title: "Curiosidades",
        paragraphs: [
          "Em muitas culturas, a cobra também simboliza renovação por trocar de pele. Por isso, o tema costuma aparecer associado a ciclos, mudanças e intuição.",
          "A recomendação é usar o conteúdo como entretenimento e, se desejar, gerar novas combinações para comparar os símbolos do sonho."
        ]
      }
    ],
    faq: [
      ["Sonhar com cobra indica traição?", "Essa é uma interpretação popular, mas não deve ser tratada como certeza. O Palpinet usa leitura simbólica."],
      ["Quais números combinam com cobra?", "A página mostra uma sugestão recreativa, e o gerador pode criar novas combinações."],
      ["A IA escolhe os números?", "Não. Os números são criados pelo algoritmo Palpinet."]
    ],
    related: ["sonhar-com-chuva", "sonhar-com-dinheiro", "significado-do-numero-11", "numeros-da-mega-sena"]
  },
  {
    slug: "sonhar-com-dinheiro",
    seoPath: "/sonhar-com-dinheiro",
    category: "Sonhos",
    title: "Sonhar com dinheiro: significado e sugestão Palpinet",
    subtitle: "Uma leitura recreativa sobre valor, escolhas, segurança e oportunidades.",
    metaTitle: "Sonhar com dinheiro: significado e números da sorte | Palpinet",
    metaDescription: "Veja uma interpretação recreativa para sonhar com dinheiro e gere combinações simbólicas.",
    date: "2026-06-02",
    readTime: "6 min",
    imageTone: "gold",
    suggestedNumbers: [8, 17, 24, 32, 44, 55],
    sections: [
      {
        id: "significado",
        title: "Significado",
        paragraphs: [
          "Sonhar com dinheiro pode refletir preocupações, ambições, autoestima, oportunidades ou necessidade de organizar prioridades. O símbolo vai alem de riqueza: muitas vezes fala sobre valor pessoal e escolhas.",
          "A leitura do Palpinet é recreativa e informativa. Ela ajuda a transformar o tema do sonho em um ponto de partida para gerar uma combinação."
        ]
      },
      {
        id: "exemplos",
        title: "Exemplos",
        paragraphs: [
          "Encontrar dinheiro pode sugerir descoberta de recursos internos. Perder dinheiro pode indicar medo de desperdicio ou decisão importante. Receber dinheiro pode simbolizar reconhecimento ou abertura para novas fases.",
          "Ao informar esses detalhes no gerador, o usuário recebe combinações recreativas e uma interpretação curta vinculada ao sonho."
        ]
      }
    ],
    faq: [
      ["Sonhar com dinheiro significa ganho?", "Não há garantia de ganho. A interpretação e simbólica."],
      ["Posso usar a Mega-Sena?", "Sim, selecione Mega-Sena no gerador e descreva o sonho."],
      ["O histórico fica salvo?", "Usuários logados salvam o histórico localmente."]
    ],
    related: ["sonhar-com-chuva", "sonhar-com-cobra", "numeros-da-lotofacil", "significado-do-numero-7"]
  },
  {
    slug: "numeros-da-sorte-para-aries",
    seoPath: "/numeros-da-sorte-aries",
    category: "Horóscopo",
    title: "Números da sorte para Áries: energia do dia e combinações",
    subtitle: "Uma leitura astrológica recreativa para quem busca movimento, coragem e foco.",
    metaTitle: "Números da sorte para Áries hoje | Palpinet",
    metaDescription: "Veja números da sorte para Áries com horóscopo recreativo e sugestão simbólica do Palpinet.",
    date: "2026-06-01",
    readTime: "7 min",
    imageTone: "zodiac",
    suggestedNumbers: [1, 9, 18, 27, 45, 54],
    sections: [
      {
        id: "energia",
        title: "Energia de Áries",
        paragraphs: [
          "Áries costuma ser associado a iniciativa, coragem e impulso de começar. Em uma leitura recreativa, esses elementos podem inspirar combinações com movimento, números ímpares e distribuição equilibrada.",
          "O Palpinet não transforma astrologia em previsão. O signo serve como contexto simbolico, enquanto o algoritmo respeita as regras do jogo escolhido."
        ]
      },
      {
        id: "atitude",
        title: "Sugestão de atitude",
        paragraphs: [
          "A energia ariana favorece ação, mas pede cuidado com pressa. Antes de gerar uma combinação, pense em uma intencao positiva: foco, renovação ou decisão consciente.",
          "Depois, escolha o jogo e deixe o sistema criar uma sugestão única para o seu acesso."
        ]
      }
    ],
    faq: [
      ["Áries tem números fixos?", "Não. O Palpinet trabalha com sugestões simbólicas e variáveis."],
      ["Posso escolher outro signo?", "Sim, o gerador possui todos os signos."],
      ["Horóscopo garante prêmio?", "Não. O conteúdo é recreativo."]
    ],
    related: ["numeros-da-sorte-para-touro", "significado-do-numero-7", "numeros-da-mega-sena", "sonhar-com-chuva"]
  },
  {
    slug: "numeros-da-sorte-para-touro",
    seoPath: "/numeros-da-sorte-touro",
    category: "Horóscopo",
    title: "Números da sorte para Touro: estabilidade e inspiração",
    subtitle: "Sugestão recreativa para quem busca calma, constância e boas escolhas.",
    metaTitle: "Números da sorte para Touro | Palpinet",
    metaDescription: "Descubra uma leitura recreativa para Touro e gere números simbolicos pelo Palpinet.",
    date: "2026-06-01",
    readTime: "6 min",
    imageTone: "zodiac",
    suggestedNumbers: [2, 6, 15, 24, 33, 51],
    sections: [
      {
        id: "energia",
        title: "Energia de Touro",
        paragraphs: [
          "Touro se conecta a estabilidade, paciência e construção. A leitura simbólica sugere observar escolhas com calma e evitar decisões apressadas.",
          "No Palpinet, o signo influencia a inspiração do texto, enquanto os números seguem a lógica inteligente do algoritmo."
        ]
      }
    ],
    faq: [
      ["Touro tem números da sorte?", "Existem associações simbólicas, mas nenhuma garantia de resultado."],
      ["Como gerar combinação para Touro?", "Escolha Horóscopo no gerador e selecione Touro."],
      ["Posso salvar o resultado?", "Sim, entrando na conta gratuita."]
    ],
    related: ["numeros-da-sorte-para-aries", "significado-do-numero-11", "numeros-da-lotofacil", "sonhar-com-dinheiro"]
  },
  {
    slug: "significado-do-numero-7",
    seoPath: "/significado-do-numero-7",
    category: "Numerologia",
    title: "Significado do número 7: intuição, busca e números simbolicos",
    subtitle: "Entenda por que o número 7 aparece em temas de mistério, reflexão e sorte recreativa.",
    metaTitle: "Significado do número 7 na numerologia | Palpinet",
    metaDescription: "Veja o significado simbolico do número 7 e como usá-lo como inspiração recreativa.",
    date: "2026-05-31",
    readTime: "8 min",
    imageTone: "number",
    suggestedNumbers: [7, 14, 21, 28, 35, 49],
    sections: [
      {
        id: "significado",
        title: "Significado",
        paragraphs: [
          "O número 7 aparece frequentemente ligado a introspeccao, estudo, mistério e intuição. Em conteúdos de numerologia recreativa, ele costuma representar busca por sentido e observação cuidadosa.",
          "No Palpinet, o número 7 pode aparecer como ponto de partida simbolico, mas a combinação final e sempre formada por regras de jogo, números únicos e novas combinações."
        ]
      },
      {
        id: "curiosidades",
        title: "Curiosidades",
        paragraphs: [
          "O 7 tem presença cultural forte: dias da semana, ciclos, histórias populares e ideias de sorte. Isso ajuda a explicar por que tantas pessoas procuram seu significado.",
          "A recomendação é usar essa símbologia como inspiração e não como promessa de acerto."
        ]
      }
    ],
    faq: [
      ["O número 7 da sorte?", "Para muitas pessoas, sim, mas no Palpinet isso e tratado como símbolo recreativo."],
      ["Posso gerar jogo com o número 7?", "Sim, use Nome da Sorte, Numerologia ou Matemática no gerador."],
      ["A numerologia e previsão?", "Aqui ela é usada como entretenimento informativo."]
    ],
    related: ["significado-do-numero-11", "numeros-da-sorte-para-aries", "sonhar-com-chuva", "numeros-da-mega-sena"]
  },
  {
    slug: "significado-do-numero-11",
    seoPath: "/significado-do-numero-11",
    category: "Numerologia",
    title: "Significado do número 11: intuição e mensagem simbólica",
    subtitle: "Uma leitura recreativa sobre o número 11 e sua energia de percepção.",
    metaTitle: "Significado do número 11 | Palpinet",
    metaDescription: "Entenda o número 11 em uma leitura recreativa e gere combinações simbólicas.",
    date: "2026-05-30",
    readTime: "6 min",
    imageTone: "number",
    suggestedNumbers: [11, 22, 33, 42, 51, 60],
    sections: [
      {
        id: "significado",
        title: "Significado",
        paragraphs: [
          "O número 11 costuma ser associado a intuição, sensibilidade e percepção. Em uma leitura recreativa, ele pode inspirar atenção aos detalhes e abertura para novas ideias.",
          "A sugestão Palpinet usa o número como símbolo, mas a formação dos palpites segue regras matematicas e variedade."
        ]
      }
    ],
    faq: [
      ["O número 11 e mestre?", "Na numerologia popular, muitas leituras tratam o 11 como número de sensibilidade."],
      ["Ele garante sorte?", "Não. E apenas uma inspiração recreativa."],
      ["Como gerar números pelo nome?", "Use Nome da Sorte no gerador."]
    ],
    related: ["significado-do-numero-7", "numeros-da-sorte-para-touro", "sonhar-com-cobra", "numeros-da-lotofacil"]
  },
  {
    slug: "numeros-da-mega-sena",
    seoPath: "/numeros-da-mega-sena",
    category: "Mega-Sena",
    title: "Números da Mega-Sena: como gerar combinações inteligentes",
    subtitle: "Veja regras, quantidade de números e uma abordagem recreativa para criar palpites.",
    metaTitle: "Números da Mega-Sena: combinações inteligentes | Palpinet",
    metaDescription: "Entenda como gerar números da Mega-Sena com equilíbrio, variedade e regras do Palpinet.",
    date: "2026-05-29",
    readTime: "9 min",
    imageTone: "game",
    suggestedNumbers: [1, 9, 18, 27, 45, 60],
    sections: [
      {
        id: "regras",
        title: "Regras",
        paragraphs: [
          "Na Mega-Sena, o jogo simples utiliza 6 números entre 1 e 60. Também e possível marcar mais números, aumentando o valor da aposta e alterando a probabilidade informativa.",
          "O Palpinet gera combinações unicas, ordenadas e sem repetição interna, buscando equilibrar pares, ímpares, baixos, altos e histórico recente."
        ]
      },
      {
        id: "estratégia",
        title: "Estrategia recreativa",
        paragraphs: [
          "A proposta não é prever sorteio. O objetivo é criar uma experiência organizada e personalizada para quem gosta de escolher números com inspiração.",
          "Você pode combinar Mega-Sena com Sonhos, Horóscopo, Nome da Sorte, Datas Especiais ou Matemática."
        ]
      }
    ],
    faq: [
      ["Quantos números posso marcar?", "O Palpinet mostra opções de 6 a 20 números para Mega-Sena."],
      ["Os valores são oficiais?", "São informativos e podem mudar. Consulte canais oficiais."],
      ["O algoritmo evita repetição?", "Sim, ele evita repetições internas e combina com histórico recente."]
    ],
    related: ["numeros-da-lotofacil", "sonhar-com-chuva", "significado-do-numero-7", "numeros-da-sorte-para-aries"]
  },
  {
    slug: "numeros-da-lotofacil",
    seoPath: "/numeros-da-lotofacil",
    category: "Lotofácil",
    title: "Números da Lotofácil: como montar palpites equilibrados",
    subtitle: "Entenda a estrutura da Lotofácil e gere sugestões com variedade.",
    metaTitle: "Números da Lotofácil: palpites equilibrados | Palpinet",
    metaDescription: "Veja como gerar números da Lotofácil com equilíbrio recreativo e método Palpinet.",
    date: "2026-05-28",
    readTime: "8 min",
    imageTone: "game",
    suggestedNumbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 18, 20, 21, 22, 24, 25],
    sections: [
      {
        id: "regras",
        title: "Regras",
        paragraphs: [
          "Na Lotofácil, o jogo simples utiliza 15 números entre 1 e 25. O desafio recreativo é montar uma combinação com boa distribuição, sem sequências óbvias e com variedade visual.",
          "O Palpinet permite escolher a quantidade de números disponível e aplica a lógica inteligente de geração."
        ]
      }
    ],
    faq: [
      ["Lotofácil usa quantos números?", "O jogo simples usa 15 números entre 1 e 25."],
      ["Posso gerar com sonho?", "Sim, selecione Lotofácil e método Sonho."],
      ["O conteúdo é aposta?", "Não. E uma ferramenta recreativa."]
    ],
    related: ["numeros-da-mega-sena", "numeros-da-sorte-para-touro", "sonhar-com-dinheiro", "significado-do-numero-11"]
  }
];

const blogSlugAliases = {
  "sonhar-com-chuva": "sonhar-com-chuva-numero-da-sorte"
};

const dreamSeoPages = [
  {
    slug: "sonhar-com-chuva",
    term: "chuva",
    title: "Sonhar com Chuva: significado e números da sorte",
    subtitle: "Uma leitura recreativa sobre renovação, limpeza emocional e novas fases.",
    description: "Veja o significado de sonhar com chuva e descubra sugestões recreativas de números da sorte com o Palpinet.",
    symbols: ["água", "renovação", "limpeza emocional", "recomeço"],
    numbers: [7, 14, 23, 31, 45, 58],
    related: ["/sonhos/sonhar-com-cobra", "/sonhos/sonhar-com-agua", "/jogos/mega-sena", "/blog/sonhar-com-chuva-numero-da-sorte"]
  },
  {
    slug: "sonhar-com-cobra",
    term: "cobra",
    title: "Sonhar com Cobra: interpretação simbólica e números",
    subtitle: "Entenda cobra como símbolo de intuição, alerta, ciclos e transformação.",
    description: "Descubra o significado recreativo de sonhar com cobra e gere combinações simbólicas no Palpinet.",
    symbols: ["intuição", "mudança", "cuidado", "transformação"],
    numbers: [4, 14, 23, 36, 45, 58],
    related: ["/sonhos/sonhar-com-chuva", "/sonhos/sonhar-com-dinheiro", "/jogos/quina", "/blog/sonhar-com-cobra"]
  },
  {
    slug: "sonhar-com-dinheiro",
    term: "dinheiro",
    title: "Sonhar com Dinheiro: significado e inspiração Palpinet",
    subtitle: "Uma leitura leve sobre valor, escolhas, segurança e oportunidades.",
    description: "Veja uma interpretação recreativa para sonhar com dinheiro e crie números simbolicos com o Palpinet.",
    symbols: ["valor", "escolhas", "oportunidade", "organização"],
    numbers: [8, 17, 24, 32, 44, 55],
    related: ["/sonhos/sonhar-com-chuva", "/sonhos/sonhar-com-cobra", "/jogos/lotofacil", "/blog/sonhar-com-dinheiro"]
  },
  {
    slug: "sonhar-com-agua",
    term: "água",
    title: "Sonhar com Água: significado, símbolos e números",
    subtitle: "Água pode representar emoção, fluidez, sensibilidade e renovação.",
    description: "Entenda o significado de sonhar com água e veja sugestões recreativas de números da sorte.",
    symbols: ["emoção", "fluidez", "sensibilidade", "renovação"],
    numbers: [2, 7, 12, 21, 34, 49],
    related: ["/sonhos/sonhar-com-chuva", "/sonhos/sonhar-com-dinheiro", "/horoscopo/peixes", "/jogos/mega-sena"]
  }
];

const numerologySeoPages = [
  {
    number: 7,
    title: "Significado do Número 7: intuição e números simbolicos",
    description: "Conheça o significado simbolico do número 7 e use essa inspiração recreativa no Gerador Palpinet.",
    numbers: [7, 14, 21, 28, 35, 49],
    symbols: ["intuição", "busca", "mistério", "reflexão"]
  },
  {
    number: 11,
    title: "Significado do Número 11: sensibilidade e inspiração",
    description: "Veja uma leitura recreativa do número 11 e gere combinações simbólicas com o Palpinet.",
    numbers: [11, 22, 33, 42, 51, 60],
    symbols: ["percepção", "sensibilidade", "presença", "movimento"]
  }
];

const legalSeoPages = {
  "/termos-de-uso": {
    title: "Termos de Uso Palpinet",
    description: "Conheça as regras de uso do Palpinet, uma plataforma recreativa de números da sorte, sonhos e horóscopo.",
    sections: [
      ["Uso da plataforma", "O Palpinet oferece conteúdo recreativo e informativo para inspirar combinações de números. O usuário deve usar a plataforma com consciência e entender que não ha promessa de resultado."],
      ["Conta e histórico", "No preview atual, contas e histórico ficam salvos localmente no navegador. Em versões futuras, a estrutura poderá ser conectada a banco de dados externo e autentificação segura."],
      ["Responsabilidade", "Valores, probabilidades e informações sobre jogos são apenas informativos e podem mudar. Sempre consulte canais oficiais antes de qualquer decisão."]
    ]
  },
  "/politica-de-privacidade": {
    title: "Politica de Privacidade Palpinet",
    description: "Entenda como o Palpinet prepara a coleta, proteção e uso responsável de dados em sua plataforma.",
    sections: [
      ["Dados coletados", "O preview usa armazenamento local para nome, e-mail, preferências e histórico. A chave da OpenAI não e exposta ao navegador."],
      ["Mediação e analytics", "A estrutura está preparada para Google Analytics 4, Search Console e Microsoft Clarity com carregamento condicional e eventos de produto."],
      ["Controle do usuário", "O usuário pode encerrar sessão, exportar dados locais e excluir a conta criada neste navegador."]
    ]
  },
  "/politica-de-cookies": {
    title: "Politica de Cookies Palpinet",
    description: "Veja como cookies e armazenamentos locais podem ser usados para sessão, preferências, analytics e melhoria da experiência.",
    sections: [
      ["Cookies essenciais", "Servem para manter sessão local, preferências de conta e funcionamento básico da experiência."],
      ["Cookies de medição", "Quando configurados, GA4 e Clarity podem medir páginas, eventos e comportamento para entender o uso do site e melhorar sua experiência."],
      ["Controle", "O usuário pode limpar dados pelo navegador. Em producao, a plataforma deve exibir consentimento quando necessario."]
    ]
  },
  "/aviso-legal": {
    title: "Aviso Legal Palpinet",
    description: "Aviso de responsabilidade sobre uso recreativo do Palpinet, sem promessa de prêmio ou previsão real.",
    sections: [
      ["Caráter recreativo", "As sugestões do Palpinet tem caráter recreativo e informativo. Não há garantia de premiação."],
      ["Sem promessa de resultado", "A plataforma não afirma que números vão sair, não garante acerto e não substitui consulta a fontes oficiais."],
      ["Uso consciente", "O conteúdo deve ser usado como entretenimento, inspiração simbólica e organização pessoal de palpites."]
    ]
  }
};

let pendingAfterAuth = null;
let activeClientView = "dashboard";
let activeFavoriteFilter = "all";
let pendingRecoveryEmail = "";
let activeAdminView = window.location.pathname.startsWith("/admin/") ? window.location.pathname.split("/")[2] || "dashboard" : "dashboard";
let activeAdminFilter = "todos";
let sponsorPopupDismissed = false;
let activeSponsorPopup = null;

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function supabaseConfig() {
  const config = window.palpinetSupabase || {};
  return {
    url: String(config.url || "").replace(/\/$/, ""),
    anonKey: String(config.anonKey || ""),
    bucket: String(config.bucket || "palpinet-media")
  };
}

function hasSupabaseConfig() {
  const config = supabaseConfig();
  return Boolean(config.url && config.anonKey && !config.url.includes("PLACEHOLDER") && !config.anonKey.includes("PLACEHOLDER"));
}

function supabaseHeaders(extra = {}) {
  const config = supabaseConfig();
  return {
    apikey: config.anonKey,
    Authorization: `Bearer ${config.anonKey}`,
    ...extra
  };
}

async function readCloudSetting(key) {
  if (!hasSupabaseConfig()) return null;
  const config = supabaseConfig();
  const response = await fetch(`${config.url}/rest/v1/site_settings?key=eq.${encodeURIComponent(key)}&select=value&limit=1`, {
    headers: supabaseHeaders({ Accept: "application/json" })
  });
  if (!response.ok) throw new Error("Não foi possível ler configuração na nuvem.");
  const rows = await response.json();
  return rows[0]?.value || null;
}

async function writeCloudSetting(key, value) {
  if (!hasSupabaseConfig()) return false;
  const config = supabaseConfig();
  const response = await fetch(`${config.url}/rest/v1/site_settings`, {
    method: "POST",
    headers: supabaseHeaders({
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates"
    }),
    body: JSON.stringify({ key, value, updated_at: new Date().toISOString() })
  });
  if (!response.ok) throw new Error("Não foi possível salvar configuração na nuvem.");
  return true;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Não foi possível ler a imagem."));
    reader.readAsDataURL(file);
  });
}

async function uploadSponsorLogo(file) {
  if (!file) return "";
  if (!file.type.startsWith("image/")) throw new Error("Envie um arquivo de imagem.");
  if (file.size > 2 * 1024 * 1024) throw new Error("A logo deve ter no máximo 2 MB.");

  if (!hasSupabaseConfig()) return fileToDataUrl(file);

  const config = supabaseConfig();
  const extension = (file.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "");
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extension || "png"}`;
  const objectPath = `${cloudSettings.sponsorLogoPath}/${safeName}`;
  const response = await fetch(`${config.url}/storage/v1/object/${config.bucket}/${objectPath}`, {
    method: "POST",
    headers: supabaseHeaders({
      "Content-Type": file.type,
      "x-upsert": "true"
    }),
    body: file
  });
  if (!response.ok) throw new Error("Não foi possível enviar a logo para a nuvem.");
  return `${config.url}/storage/v1/object/public/${config.bucket}/${objectPath}`;
}

function trackEvent(name, params = {}) {
  const payload = {
    name,
    params: {
      page_path: window.location.pathname,
      page_title: document.title,
      ...params
    },
    createdAt: new Date().toISOString()
  };

  try {
    if (typeof window.gtag === "function") window.gtag("event", name, payload.params);
    if (typeof window.clarity === "function") window.clarity("event", name);
    write("palpinet.preview.analyticsEvents", [payload, ...read("palpinet.preview.analyticsEvents", [])].slice(0, 500));
  } catch {
    // Analytics nunca deve bloquear a experiência principal.
  }
}

function trackPageView(path = window.location.pathname) {
  try {
    const cfg = window.palpinetTracking || {};
    if (typeof window.gtag === "function" && cfg.ga4 && !cfg.ga4.includes("PLACEHOLDER")) {
      window.gtag("config", cfg.ga4, { page_path: path, page_title: document.title });
    }
  } catch {
    // Mantem o preview independente de scripts externos.
  }
}

function cleanEmail(email = "") {
  return email.trim().toLowerCase();
}

function publicUser(user) {
  return user ? { id: user.id, name: user.name, email: user.email, sign: user.sign || "", city: user.city || "", role: user.role || "user" } : null;
}

function normalizeGuessRecord(record) {
  return {
    id: record.id || `guess_${hash(`${record.game}:${record.createdAt || Date.now()}:${record.numbers?.join("-")}`).toString(36)}`,
    game: record.game,
    method: record.method,
    input: record.input || record.input_text || "",
    quantity: record.quantity || record.numbers?.length || games[record.game]?.count || 0,
    numbers: Array.isArray(record.numbers) ? record.numbers : [],
    ai_response: record.ai_response || "",
    interpretation_type: record.interpretation_type || "",
    is_favorite: Boolean(record.is_favorite),
    createdAt: record.createdAt || record.created_at || new Date().toISOString()
  };
}

function normalizeUserRecord(user) {
  const history = (Array.isArray(user.history) ? user.history : []).map(normalizeGuessRecord);
  const favoriteIds = new Set([
    ...(Array.isArray(user.favorites) ? user.favorites : []),
    ...history.filter((record) => record.is_favorite).map((record) => record.id)
  ]);

  const normalizedHistory = history.map((record) => ({
    ...record,
    is_favorite: favoriteIds.has(record.id)
  }));

  return {
    ...user,
    name: user.name || "Usuário Palpinet",
    email: cleanEmail(user.email || ""),
    birth_date: user.birth_date || user.birthDate || "",
    sign: normalize(user.sign || ""),
    city: user.city || "",
    role: adminRoles[user.role] ? user.role : "user",
    status: user.status || "active",
    plan: user.plan || "Gratis",
    lastAccess: user.lastAccess || user.last_access || "",
    history: normalizedHistory,
    favorites: [...favoriteIds].filter((id) => normalizedHistory.some((record) => record.id === id)),
    preferences: { ...preferenceDefaults, ...(user.preferences || {}) },
    createdAt: user.createdAt || user.created_at || new Date().toISOString()
  };
}

// Carrega usuários locais e garante o usuário de teste da Fase 2.
function loadUsers() {
  const users = read(usersKey, []).map(normalizeUserRecord);
  const email = cleanEmail(defaultUser.email);
  const index = users.findIndex((user) => cleanEmail(user.email) === email);

  if (index === -1) {
    const nextUsers = [...users, normalizeUserRecord(defaultUser)];
    saveUsers(nextUsers);
    return nextUsers;
  }

  const current = users[index];
  const patchedUser = normalizeUserRecord({
    ...defaultUser,
    ...current,
    email: defaultUser.email,
    password: defaultUser.password,
    role: defaultUser.role,
    status: current.status || defaultUser.status,
    plan: current.plan || defaultUser.plan,
    history: Array.isArray(current.history) ? current.history : [],
    favorites: Array.isArray(current.favorites) ? current.favorites : [],
    preferences: { ...preferenceDefaults, ...(current.preferences || {}) }
  });
  const nextUsers = users.map((user, userIndex) => (userIndex === index ? patchedUser : user));
  saveUsers(nextUsers);
  return nextUsers;
}

function saveUsers(users) {
  write(usersKey, users);
}

function getCurrentUser() {
  const session = read(authSessionKey, null);
  if (!session?.userId) return null;
  return loadUsers().find((user) => user.id === session.userId) || null;
}

function saveSession(user) {
  write(authSessionKey, { userId: user.id, createdAt: new Date().toISOString() });
}

function endSession() {
  localStorage.removeItem(authSessionKey);
}

function authenticateUser(email, password) {
  if (!email.trim() || !password.trim()) {
    return { ok: false, message: "Preencha e-mail e senha." };
  }

  const users = loadUsers();
  const user = users.find((item) => cleanEmail(item.email) === cleanEmail(email));
  if (!user) return { ok: false, message: "E-mail não cadastrado." };
  if (user.password !== password) return { ok: false, message: "Senha incorreta." };
  if (user.status === "blocked") return { ok: false, message: "Conta bloqueada. Fale com o administrador." };

  saveUsers(users.map((item) => (item.id === user.id ? { ...item, lastAccess: new Date().toISOString() } : item)));
  saveSession(user);
  trackEvent("login", { method: "local", role: user.role || "user" });
  return { ok: true, user: publicUser(user), message: "Login realizado com sucesso." };
}

function createUser(name, email, password, profile = {}) {
  if (!name.trim() || !email.trim() || !password.trim()) {
    return { ok: false, message: "Preencha nome, e-mail e senha." };
  }

  const users = loadUsers();
  if (users.some((user) => cleanEmail(user.email) === cleanEmail(email))) {
    return { ok: false, message: "E-mail já cadastrado." };
  }

  const user = {
    id: `user_${hash(`${email}:${Date.now()}`).toString(36)}`,
    name: name.trim(),
    email: cleanEmail(email),
    password,
    role: "user",
    status: "active",
    plan: "Gratis",
    birth_date: profile.birth_date || "",
    sign: normalize(profile.sign || ""),
    city: profile.city?.trim() || "",
    history: [],
    favorites: [],
    preferences: {
      ...preferenceDefaults,
      favorite_game: "",
      favorite_method: "",
      horoscope_emails: Boolean(profile.sign)
    },
    createdAt: new Date().toISOString(),
    lastAccess: new Date().toISOString()
  };

  saveUsers([...users, user]);
  saveSession(user);
  trackEvent("signup", { method: "local" });
  return { ok: true, user: publicUser(user), message: "Conta criada com sucesso." };
}

function updateUser(userId, updater) {
  const users = loadUsers();
  const nextUsers = users.map((user) => (user.id === userId ? normalizeUserRecord(updater(user)) : user));
  saveUsers(nextUsers);
}

// Salva o jogo apenas no histórico do usuário logado.
function saveGameToHistory(record) {
  const user = getCurrentUser();
  if (!user) return { saved: false, reason: "guest" };

  const historyRecord = {
    id: record.id,
    game: record.game,
    method: record.method,
    input: record.input || record.input_text,
    quantity: record.quantity || record.numbers?.length,
    numbers: record.numbers,
    ai_response: record.ai_response || "",
    interpretation_type: record.interpretation_type || "",
    is_favorite: Boolean(record.is_favorite),
    createdAt: record.createdAt || record.created_at
  };

  let alreadySaved = false;
  updateUser(user.id, (storedUser) => ({
    ...storedUser,
    preferences: {
      ...preferenceDefaults,
      ...(storedUser.preferences || {}),
      favorite_game: mostCommon([(historyRecord.game), ...(storedUser.history || []).map((item) => item.game)]) || historyRecord.game,
      favorite_method: mostCommon([(historyRecord.method), ...(storedUser.history || []).map((item) => item.method)]) || historyRecord.method
    },
    history: (() => {
      const history = storedUser.history || [];
      alreadySaved = history.some((item) => item.id === historyRecord.id);
      return alreadySaved ? history : [historyRecord, ...history].slice(0, 300);
    })()
  }));
  if (!alreadySaved) trackEvent("save_guess", { game: historyRecord.game, method: historyRecord.method, quantity: historyRecord.quantity });
  return { saved: !alreadySaved, reason: alreadySaved ? "exists" : "saved" };
}

function mostCommon(values = []) {
  const counts = values.filter(Boolean).reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
}

function apiBaseUrl() {
  return window.location.protocol === "file:" ? "http://localhost:4173" : "";
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function blogUrl(slug) {
  return `/blog/${blogSlugAliases[slug] || slug}`;
}

function canonicalBlogSlug(slug) {
  return Object.entries(blogSlugAliases).find(([, alias]) => alias === slug)?.[0] || slug;
}

function findArticleByPath() {
  const path = window.location.pathname.replace(/\/$/, "");
  if (!path || path === "/" || path === "/blog") return null;
  const slug = path.startsWith("/blog/") ? path.replace("/blog/", "") : path.replace("/", "");
  const canonicalSlug = canonicalBlogSlug(slug);
  return blogArticles.find((article) => article.slug === canonicalSlug || article.slug === slug || article.seoPath === `/${slug}`) || null;
}

function siteOrigin() {
  return window.location.origin || "http://localhost:4173";
}

function toTitleCase(value = "") {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function routeLabel(path) {
  if (path === "/" || path === "/#home") return "Início";
  if (path === "/#gerador") return "Gerador de Palpites";
  if (path === "/blog") return "Blog Palpinet";
  if (path.startsWith("/blog/")) return blogArticles.find((article) => blogUrl(article.slug) === path)?.title || "Artigo Palpinet";
  if (path.startsWith("/jogos/")) return games[path.split("/").pop()]?.name || "Jogo";
  if (path.startsWith("/sonhos/")) return toTitleCase(path.split("/").pop().replace("sonhar-com-", "sonhar com "));
  if (path.startsWith("/horoscopo/")) return signOptions[path.split("/").pop()] || "Horóscopo";
  if (path.startsWith("/numerologia/")) return toTitleCase(path.split("/").pop());
  return toTitleCase(path.replace("/", ""));
}

function baseSeoPage(path, overrides = {}) {
  return {
    path,
    type: "WebPage",
    category: "Palpinet",
    title: "Palpinet",
    subtitle: "Conteúdo recreativo para explorar sonhos, signos e números.",
    metaTitle: "Palpinet | Números da sorte, sonhos e horóscopo",
    metaDescription: "Use o Palpinet para gerar números da sorte de forma recreativa com sonhos, horóscopo, numerologia e jogos.",
    imageTone: "default",
    readTime: "6 min",
    updatedAt: "2026-06-04",
    numbers: [],
    symbols: [],
    links: ["/#gerador", "/blog", "/jogos/mega-sena", "/sonhos/sonhar-com-chuva"],
    breadcrumbs: [{ label: "Início", href: "/" }],
    sections: [],
    faq: [
      ["O Palpinet garante prêmio?", "Não. As sugestões são recreativas e informativas."],
      ["A IA escolhe os números?", "Não. Os números são gerados pelo algoritmo Palpinet."],
      ["Posso salvar palpites?", "Sim, usuários logados salvam o histórico neste navegador."]
    ],
    ...overrides
  };
}

function buildSeoPages() {
  const gameLinks = Object.keys(games).map((slug) => `/jogos/${slug}`);
  const dreamLinks = dreamSeoPages.map((page) => `/sonhos/${page.slug}`);
  const horoscopeLinks = Object.keys(signOptions).map((sign) => `/horoscopo/${sign}`);
  const pages = [
    baseSeoPage("/gerador", {
      category: "Gerador",
      title: "Gerador de Números da Sorte Palpinet",
      subtitle: "Escolha jogo, método e quantidade para criar combinações recreativas com regras inteligentes.",
      metaTitle: "Gerador de Números da Sorte | Palpinet",
      metaDescription: "Gere números da sorte para Mega-Sena, Lotofácil, Quina e outros jogos com sonhos, horóscopo, datas e numerologia.",
      imageTone: "number",
      links: ["/#gerador", "/jogos/mega-sena", "/sonhos/sonhar-com-chuva", "/horoscopo/aries"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Gerador", href: "/gerador" }],
      sections: [
        ["Como usar o gerador", "Selecione o jogo, escolha a quantidade de números permitida e defina o método. O algoritmo cria uma combinação única, ordenada e sem repetição interna."],
        ["Métodos disponíveis", "Sonhos, horóscopo, matemática, aleatório inteligente, data especial e nome da sorte funcionam como inspirações para suas combinações."],
        ["Experiência responsável", "O resultado e exibido com números em destaque, botoes para copiar, salvar e compartilhar, alem de mensagens recreativas quando o método pede interpretação."]
      ]
    }),
    baseSeoPage("/metodos", {
      category: "Métodos",
      title: "Métodos recreativos do Palpinet",
      subtitle: "Conheça os caminhos de inspiração usados para sonhos, horóscopo, numerologia, datas e matemática.",
      metaTitle: "Métodos Palpinet: sonhos, horóscopo e numerologia",
      metaDescription: "Veja como os métodos recreativos do Palpinet ajudam a gerar combinações simbólicas, sem promessa de resultado ou premiação.",
      imageTone: "dream",
      links: ["/#gerador", "/sonhos", "/horoscopo", "/numerologia", "/jogos"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Métodos", href: "/metodos" }],
      sections: [
        ["Sonhos", "Use palavras do sonho como inspiração simbólica para uma combinação recreativa."],
        ["Horóscopo", "Selecione um signo para receber uma leitura leve e uma sugestão organizada pelo algoritmo."],
        ["Numerologia e datas", "Nomes e datas funcionam como pontos de partida, sempre respeitando as regras do jogo escolhido."],
        ["Aviso responsável", "Nenhum método aumenta a probabilidade oficial de premiação. O Palpinet é uma experiência recreativa e informativa."]
      ]
    }),
    baseSeoPage("/jogos", {
      category: "Jogos",
      title: "Jogos Disponíveis no Palpinet",
      subtitle: "Explore as modalidades, conheça suas regras e escolha um jogo para começar.",
      metaTitle: "Jogos Disponíveis: Mega-Sena, Lotofácil, Quina e mais | Palpinet",
      metaDescription: "Veja jogos disponíveis no Palpinet e gere números para Mega-Sena, Lotofácil, Quina, Lotomania, Dupla Sena, Timemania e Dia de Sorte.",
      imageTone: "game",
      links: ["/#gerador", ...gameLinks],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Jogos", href: "/jogos" }],
      sections: [
        ["Regras por jogo", "Cada modalidade possui intervalo, quantidade mínima e opções de marcação. O Palpinet organiza essas regras para evitar números fora do intervalo."],
        ["Combinações inteligentes", "O sistema prioriza números unicos, equilíbrio entre faixas e menor repetição entre resultados recentes."],
        ["Conheça as modalidades", "Veja os detalhes de cada jogo e escolha a quantidade de números permitida antes de gerar sua combinação."]
      ]
    }),
    baseSeoPage("/sonhos", {
      category: "Sonhos",
      title: "Sonhos e Números da Sorte",
      subtitle: "Explore significados recreativos de sonhos e gere combinações inspiradas em símbolos.",
      metaTitle: "Sonhos: significados e números da sorte | Palpinet",
      metaDescription: "Pesquise sonhos como chuva, cobra, dinheiro e água, veja interpretações recreativas e gere números pelo Palpinet.",
      imageTone: "dream",
      links: ["/#gerador", ...dreamLinks, "/blog/sonhar-com-chuva-numero-da-sorte"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Sonhos", href: "/sonhos" }],
      sections: [
        ["Como o Palpinet interpreta sonhos", "O sonho informado serve como inspiração textual. O algoritmo gera os números, e a leitura explica símbolos de forma leve e responsável."],
        ["Principais temas", "Explore temas como chuva, cobra, dinheiro e água e encontre uma leitura simbólica para seu sonho."],
        ["Uso recreativo", "Nenhuma interpretação promete previsão real. A proposta e criar uma experiência mais envolvente para quem gosta de símbolos e números."]
      ]
    }),
    baseSeoPage("/horoscopo", {
      category: "Horóscopo",
      title: "Horóscopo e Números da Sorte por Signo",
      subtitle: "Escolha seu signo e veja uma experiência recreativa conectada ao gerador Palpinet.",
      metaTitle: "Horóscopo e Números da Sorte por Signo | Palpinet",
      metaDescription: "Veja números da sorte por signo, energia do dia e sugestões recreativas com o Gerador Palpinet.",
      imageTone: "zodiac",
      links: ["/#gerador", ...horoscopeLinks.slice(0, 6), "/blog/numeros-da-sorte-para-aries"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Horóscopo", href: "/horoscopo" }],
      sections: [
        ["Signos e inspiração", "Cada signo possui uma base simbólica que ajuda a criar contexto para a leitura, sem transformar astrologia em promessa."],
        ["Energia do dia", "A experiência está preparada para exibir horóscopo, energia principal, sugestão positiva e aviso recreativo."],
        ["Encontre seu signo", "Explore os doze signos e use o seu como inspiração para uma combinação recreativa."]
      ]
    }),
    baseSeoPage("/numerologia", {
      category: "Numerologia",
      title: "Numerologia Recreativa Palpinet",
      subtitle: "Entenda números simbolicos e conecte nomes, datas e inspiracoes ao gerador.",
      metaTitle: "Numerologia Recreativa e Números da Sorte | Palpinet",
      metaDescription: "Explore significados de números e use numerologia recreativa para gerar combinações simbólicas no Palpinet.",
      imageTone: "number",
      links: ["/#gerador", "/numerologia/significado-do-numero-7", "/numerologia/significado-do-numero-11", "/blog/significado-do-numero-7"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Numerologia", href: "/numerologia" }],
      sections: [
        ["Leitura simbólica", "A numerologia no Palpinet funciona como linguagem recreativa para nomes, datas e números recorrentes."],
        ["Nome da sorte", "Ao informar um nome, o sistema transforma letras em bases numericas e gera variacoes dentro das regras do jogo escolhido."],
        ["Explore os números", "Conheça os significados simbólicos dos números e encontre uma inspiração para começar."]
      ]
    }),
    baseSeoPage("/premium", {
      category: "Premium",
      title: "Palpinet Premium",
      subtitle: "Estrutura preparada para benefícios, histórico ampliado, favoritos e personalização avancada.",
      metaTitle: "Palpinet Premium: painel pessoal de números da sorte",
      metaDescription: "Conheça a estrutura premium do Palpinet para histórico, favoritos, interpretações e sugestões personalizadas.",
      imageTone: "gold",
      links: ["/#cliente", "/#gerador", "/jogos/mega-sena", "/sonhos/sonhar-com-chuva"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Premium", href: "/premium" }],
      sections: [
        ["Benefícios", "Histórico completo, favoritos, interpretações e recomendações personalizadas formam a base de retenção do Palpinet."],
        ["Conta do usuário", "Na sua conta, consulte o histórico, organize favoritos, ajuste preferências e exporte seus dados deste navegador."],
        ["Próximas fases", "A estrutura está preparada para login real, banco externo e recursos pagos sem reorganizar a experiência principal."]
      ]
    }),
    baseSeoPage("/contato", {
      category: "Contato",
      title: "Contato Palpinet",
      subtitle: "Canal institucional para suporte, parcerias, conteúdo e assuntos comerciais.",
      metaTitle: "Contato | Palpinet",
      metaDescription: "Conheça os canais do Palpinet para suporte, conteúdo e parcerias.",
      imageTone: "default",
      links: ["/blog", "/#cliente", "/politica-de-privacidade", "/aviso-legal"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Contato", href: "/contato" }],
      sections: [
        ["Atendimento", "Esta página prepara a base institucional para receber formulários, e-mail principal e canais oficiais."],
        ["Parcerias", "Conheça os parceiros do Palpinet e encontre cupons na página de patrocinadores."],
        ["Confiança", "Políticas, aviso legal e páginas públicas ajudam a tornar a marca mais transparente para usuários e anunciantes."]
      ]
    })
  ];

  Object.entries(games).forEach(([slug, game]) => {
    const options = betOptions[slug] || [];
    pages.push(baseSeoPage(`/jogos/${slug}`, {
      type: "WebPage",
      category: "Jogos",
      title: `${game.name}: números, regras e sugestões Palpinet`,
      subtitle: `Gere combinações recreativas para ${game.name} com números unicos entre ${game.min} e ${game.max}.`,
      metaTitle: `${game.name}: números da sorte e combinações | Palpinet`,
      metaDescription: `Veja regras do jogo ${game.name}, quantidades de números e gere sugestões recreativas com o Palpinet.`,
      imageTone: "game",
      numbers: Array.from({ length: game.count }, (_, index) => game.min + index).slice(0, game.count),
      links: ["/#gerador", "/sonhos/sonhar-com-chuva", "/horoscopo/aries", "/blog", "/jogos"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Jogos", href: "/jogos" }, { label: game.name, href: `/jogos/${slug}` }],
      extraHtml: options.length ? renderSeoBetGrid(slug) : "",
      sections: [
        ["Regras principais", `${game.name} trabalha com ${game.count} números base entre ${game.min} e ${game.max}. O Palpinet respeita o intervalo correto, ordena o resultado e evita repetição interna.`],
        ["Quantidades e probabilidades", options.length ? "A página mostra opções informativas de quantidade, valor e probabilidade para ajudar o usuário a entender o jogo antes de gerar uma combinação." : "Esta modalidade possui quantidade fixa no preview atual."],
        ["Geração inteligente", "A combinação pode usar sonhos, horóscopo, datas, nome da sorte ou matemática, sempre como sugestão recreativa e sem promessa de prêmio."]
      ],
      faq: [
        [`Quantos números tem ${game.name}?`, `${game.name} usa ${game.count} números base no gerador Palpinet.`],
        ["O Palpinet garante acerto?", "Não. A plataforma oferece sugestões recreativas e informativas."],
        ["Posso usar sonhos neste jogo?", "Sim. Selecione o jogo no Gerador Rápido e escolha o método Sonho."]
      ]
    }));
  });

  dreamSeoPages.forEach((dream) => {
    pages.push(baseSeoPage(`/sonhos/${dream.slug}`, {
      type: "Article",
      category: "Sonhos",
      title: dream.title,
      subtitle: dream.subtitle,
      metaTitle: `${dream.title} | Palpinet`,
      metaDescription: dream.description,
      imageTone: "dream",
      numbers: dream.numbers,
      symbols: dream.symbols,
      links: dream.related,
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Sonhos", href: "/sonhos" }, { label: dream.title.replace(": significado e números da sorte", ""), href: `/sonhos/${dream.slug}` }],
      sections: [
        ["Significado", `${toTitleCase(dream.term)} pode aparecer como símbolo de ${dream.symbols.join(", ")}. No Palpinet, essa leitura e usada apenas como contexto recreativo para tornar a experiência mais pessoal.`],
        ["Principais símbolos", `Os símbolos mais comuns desta página são ${dream.symbols.join(", ")}. Eles ajudam a criar uma conexao leve entre o sonho informado e os números sugeridos.`],
        ["Números sugeridos", "Os números em destaque são uma sugestão simbólica. Para criar uma combinação realmente personalizada, use o Gerador Rápido e descreva o seu sonho com poucas palavras."]
      ],
      faq: [
        [`O que significa ${dream.title.split(":")[0].toLowerCase()}?`, "A leitura e simbólica, recreativa e pode variar conforme detalhes do sonho."],
        ["O sonho define os números?", "Não. O algoritmo Palpinet gera os números e a interpretação apenas contextualiza."],
        ["Posso gerar outro palpite?", "Sim, use o Gerador Rápido com seu próprio sonho."]
      ]
    }));
  });

  Object.entries(signOptions).forEach(([slug, sign]) => {
    const numbers = (signBase[slug] || signBase.aries).slice(0, 5).concat([((hash(slug) % 60) + 1)]).sort((a, b) => a - b);
    pages.push(baseSeoPage(`/horoscopo/${slug}`, {
      type: "Article",
      category: "Horóscopo",
      title: `${sign}: horóscopo e números da sorte`,
      subtitle: `Energia recreativa de ${sign} conectada ao Gerador Palpinet.`,
      metaTitle: `${sign}: horóscopo e números da sorte | Palpinet`,
      metaDescription: `Veja uma leitura recreativa para ${sign}, energia do dia e sugestões de números da sorte no Palpinet.`,
      imageTone: "zodiac",
      numbers,
      symbols: ["energia", "atitude", "equilíbrio"],
      links: ["/#gerador", "/horoscopo", "/blog/numeros-da-sorte-para-aries", "/jogos/mega-sena"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Horóscopo", href: "/horoscopo" }, { label: sign, href: `/horoscopo/${slug}` }],
      sections: [
        ["Horóscopo recreativo", `${sign} recebe uma leitura curta, positiva e responsável. O conteúdo serve como inspiração e não como previsão absoluta.`],
        ["Energia do signo", "A energia principal ajuda o usuário a escolher uma intencao antes de gerar os números, mantendo a experiência leve e recreativa."],
        ["Conexao com números", "Os números aparecem como combinação simbólica; o algoritmo do Palpinet continua responsável por respeitar regras, intervalos e variedade."]
      ],
      faq: [
        [`${sign} tem números fixos?`, "Não. O Palpinet gera sugestões variáveis e recreativas."],
        ["O horóscopo promete resultado?", "Não. Ele serve apenas como conteúdo informativo e inspirador."],
        ["Como gerar por signo?", "Escolha Horóscopo no gerador e selecione seu signo."]
      ]
    }));
  });

  numerologySeoPages.forEach((item) => {
    pages.push(baseSeoPage(`/numerologia/significado-do-numero-${item.number}`, {
      type: "Article",
      category: "Numerologia",
      title: item.title,
      subtitle: `Uma leitura recreativa sobre o número ${item.number} e sua energia simbólica.`,
      metaTitle: `${item.title} | Palpinet`,
      metaDescription: item.description,
      imageTone: "number",
      numbers: item.numbers,
      symbols: item.symbols,
      links: ["/numerologia", "/#gerador", "/blog/significado-do-numero-7", "/jogos/lotofacil"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: "Numerologia", href: "/numerologia" }, { label: `Número ${item.number}`, href: `/numerologia/significado-do-numero-${item.number}` }],
      sections: [
        ["Significado simbolico", `O número ${item.number} costuma ser associado a ${item.symbols.join(", ")} em leituras recreativas.`],
        ["Uso no Palpinet", "O número pode inspirar nome da sorte, datas especiais ou matemática, mas a combinação final segue as regras do jogo escolhido."],
        ["Conteúdo responsável", "Numerologia aqui e entretenimento informativo, sem promessa de acerto, prêmio ou previsão real."]
      ]
    }));
  });

  Object.entries(legalSeoPages).forEach(([path, page]) => {
    pages.push(baseSeoPage(path, {
      type: "WebPage",
      category: "Legal",
      title: page.title,
      subtitle: page.description,
      metaTitle: `${page.title} | Palpinet`,
      metaDescription: page.description,
      imageTone: "default",
      links: ["/termos-de-uso", "/politica-de-privacidade", "/politica-de-cookies", "/aviso-legal"],
      breadcrumbs: [{ label: "Início", href: "/" }, { label: page.title, href: path }],
      sections: page.sections,
      faq: [
        ["Esta página ajuda no Adsense?", "Sim. Páginas legais públicas reforcam transparencia, confiança e conformidade."],
        ["O Palpinet promete resultados?", "Não. O uso e recreativo e informativo."],
        ["Onde ficam meus dados neste preview?", "No armazenamento local do navegador."]
      ]
    }));
  });

  return pages;
}

function findSeoPageByPath() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/" || path === "/blog" || path.startsWith("/blog/") || isAdminRoute()) return null;
  return buildSeoPages().find((page) => page.path === path) || null;
}

function adsEnabled() {
  const client = window.palpinetTracking?.adsenseClient || "";
  return Boolean(client && !client.includes("PLACEHOLDER"));
}

function renderAdSlot(position) {
  if (!adsEnabled()) return "";
  return `
    <aside class="ad-slot" data-ad-position="${position}" aria-label="Publicidade ${position}">
      <span>Publicidade</span>
      <ins class="adsbygoogle" style="display:block" data-ad-client="${escapeHtml(window.palpinetTracking.adsenseClient)}" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins>
    </aside>`;
}

function hydrateAdSlots() {
  document.querySelectorAll("[data-ad-slot]").forEach((slot) => {
    const html = renderAdSlot(slot.dataset.adSlot);
    slot.innerHTML = html;
    slot.hidden = !html;
  });
}

function setMeta(name, content, attribute = "name") {
  let meta = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function updateCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

function updateSchema(schema) {
  const element = document.querySelector("#seoSchema");
  if (element) element.textContent = JSON.stringify(schema);
}

function updatePageSeo(article = null) {
  const origin = window.location.origin || "http://localhost:4173";
  if (!article) {
    const title = "Blog Palpinet: sonhos, horóscopo, numerologia e números da sorte";
    const description = "Conteúdos do Palpinet sobre sonhos, horóscopo, numerologia, jogos e números da sorte.";
    document.title = title;
    setMeta("description", description);
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("keywords", "Palpinet, Palpinet números da sorte, Palpinet sonhos, Palpinet horóscopo, Palpinet Mega-Sena");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `${origin}/blog`, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:card", "summary_large_image");
    updateCanonical(`${origin}/blog`);
    updateSchema({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Palpinet",
      url: origin,
      potentialAction: {
        "@type": "SearchAction",
        target: `${origin}/blog?busca={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });
    return;
  }

  const url = `${origin}${blogUrl(article.slug)}`;
  document.title = article.metaTitle;
  setMeta("description", article.metaDescription);
  setMeta("robots", "index, follow, max-image-preview:large");
  setMeta("og:title", article.metaTitle, "property");
  setMeta("og:description", article.metaDescription, "property");
  setMeta("og:type", "article", "property");
  setMeta("og:url", url, "property");
  setMeta("twitter:title", article.metaTitle);
  setMeta("twitter:description", article.metaDescription);
  setMeta("twitter:card", "summary_large_image");
  setMeta("article:published_time", article.date, "property");
  updateCanonical(url);
  updateSchema({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.date,
        dateModified: article.date,
        author: { "@type": "Organization", name: "Palpinet" },
        publisher: { "@type": "Organization", name: "Palpinet" },
        mainEntityOfPage: url
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${origin}/blog` },
          { "@type": "ListItem", position: 3, name: article.category, item: `${origin}/blog?categoria=${encodeURIComponent(article.category)}` },
          { "@type": "ListItem", position: 4, name: article.title, item: url }
        ]
      }
    ]
  });
}

function updateHomeSeo() {
  const origin = siteOrigin();
  const title = "Palpinet: gerador de números da sorte, sonhos e horóscopo";
  const description = "Gere números da sorte de forma recreativa com sonhos, horóscopo, numerologia, datas especiais e jogos como Mega-Sena e Lotofácil.";
  document.title = title;
  setMeta("description", description);
  setMeta("robots", "index, follow, max-image-preview:large");
  setMeta("keywords", "Palpinet, Palpinet números da sorte, Palpinet sonhos, Palpinet horóscopo, Palpinet Mega-Sena");
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:url", `${origin}/`, "property");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:card", "summary_large_image");
  updateCanonical(`${origin}/`);
  updateSchema({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Palpinet",
        url: `${origin}/`,
        logo: `${origin}/public/palpinet-logo.svg`
      },
      {
        "@type": "WebSite",
        name: "Palpinet",
        url: `${origin}/`,
        potentialAction: {
          "@type": "SearchAction",
          target: `${origin}/blog?busca={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        name: title,
        description,
        url: `${origin}/`
      }
    ]
  });
}

function updateSeoRouteMeta(page) {
  const origin = siteOrigin();
  const url = `${origin}${page.path}`;
  document.title = page.metaTitle;
  setMeta("description", page.metaDescription);
  setMeta("robots", "index, follow, max-image-preview:large");
  setMeta("keywords", `Palpinet, ${page.category}, ${page.title}, números da sorte, sonhos, horóscopo`);
  setMeta("og:title", page.metaTitle, "property");
  setMeta("og:description", page.metaDescription, "property");
  setMeta("og:type", page.type === "Article" ? "article" : "website", "property");
  setMeta("og:url", url, "property");
  setMeta("twitter:title", page.metaTitle);
  setMeta("twitter:description", page.metaDescription);
  setMeta("twitter:card", "summary_large_image");
  updateCanonical(url);

  const breadcrumbItems = page.breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${origin}${item.href === "/" ? "/" : item.href}`
  }));

  updateSchema({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.type,
        headline: page.title,
        name: page.title,
        description: page.metaDescription,
        dateModified: page.updatedAt,
        datePublished: page.updatedAt,
        author: { "@type": "Organization", name: "Palpinet" },
        publisher: { "@type": "Organization", name: "Palpinet" },
        mainEntityOfPage: url,
        url
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems
      }
    ]
  });
}

function updateAdminSeo() {
  const origin = siteOrigin();
  document.title = "Painel Administrativo Palpinet";
  setMeta("description", "Painel interno do Palpinet para administração da plataforma.");
  setMeta("robots", "noindex, nofollow");
  setMeta("og:title", "Painel Administrativo Palpinet", "property");
  setMeta("og:description", "Área interna não indexável.", "property");
  setMeta("og:type", "website", "property");
  setMeta("og:url", `${origin}/admin`, "property");
  setMeta("twitter:title", "Painel Administrativo Palpinet");
  setMeta("twitter:description", "Área interna não indexável.");
  updateCanonical(`${origin}/admin`);
  updateSchema({});
}

function renderSeoBetGrid(gameSlug) {
  const options = betOptions[gameSlug] || [];
  if (!options.length) return "";
  return `
    <div class="seo-bet-grid" aria-label="Quantidades, valores e probabilidades informativas">
      ${options
        .map(
          (option) => `
          <article>
            <strong>${option.numbers} números</strong>
            <span>${option.price}</span>
            <small>Probabilidade: ${option.probability}</small>
          </article>`
        )
        .join("")}
    </div>`;
}

function renderSeoNumbers(page) {
  if (!page.numbers?.length) return "";
  return `
    <aside class="article-suggestion">
      <span>Sugestão Palpinet</span>
      <strong>${escapeHtml(page.category)}</strong>
      <div class="client-number-row">${page.numbers.map((number) => `<b>${String(number).padStart(2, "0")}</b>`).join("")}</div>
      <a class="primary-button" href="/#gerador" data-generate-now>Gerar nova combinação</a>
    </aside>`;
}

function renderSeoLinkGrid(page) {
  const links = [...new Set(page.links || [])].filter(Boolean).slice(0, 12);
  if (!links.length) return "";
  return `
    <section>
      <h2>Continue explorando</h2>
      <div class="seo-link-grid">
        ${links
          .map((href) => `<a href="${href}"><strong>${escapeHtml(routeLabel(href))}</strong><span>Continuar explorando</span></a>`)
          .join("")}
      </div>
    </section>`;
}

function renderSeoLeadCapture(page) {
  return `
    <form class="article-lead-form" data-lead-form>
      <div>
        <span class="eyebrow">Receba números da sorte exclusivos</span>
        <h3>Conteúdo Palpinet no seu e-mail</h3>
        <p>Receba novidades, inspiracoes e sugestões recreativas.</p>
      </div>
      <label>Nome<input name="name" type="text" placeholder="Seu nome" required /></label>
      <label>E-mail<input name="email" type="email" placeholder="seu@email.com" required /></label>
      <input name="source" type="hidden" value="${escapeHtml(page.path)}" />
      <button class="primary-button" type="submit">Quero Receber</button>
      <small data-lead-message></small>
    </form>`;
}

function renderSeoDepthPageSection(page) {
  return `<section id="seo-palpinet"><h2>Explore com responsabilidade</h2>
    <p>Use as informações sobre ${escapeHtml(page.category.toLowerCase())} como inspiração. Sonhos, signos, datas e padrões numéricos não preveem resultados nem aumentam as chances de premiação.</p>
    <p>Consulte as regras e os valores nos canais oficiais antes de apostar.</p></section>`;
}

function seoAdPosition(page) {
  if (page.category === "Sonhos") return "dream-middle";
  if (page.category === "Horóscopo") return "horoscope-middle";
  if (page.category === "Jogos") return "game-middle";
  return `${normalize(page.category || "page")}-middle`;
}

function renderSeoPage(page) {
  return `
    <article class="seo-page article-layout section-shell">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        ${page.breadcrumbs
          .map((item, index) => (index === 0 ? `<a href="${item.href}">${escapeHtml(item.label)}</a>` : index === page.breadcrumbs.length - 1 ? `<strong>${escapeHtml(item.label)}</strong>` : `<span>${escapeHtml(item.label)}</span>`))
          .join("")}
      </nav>
      <header class="article-header seo-page-header">
        <div>
          <span class="eyebrow">${escapeHtml(page.category)}</span>
          <h1>${escapeHtml(page.title)}</h1>
          <p>${escapeHtml(page.subtitle)}</p>
          <div class="article-meta">
            <span>${page.readTime} de leitura</span>
            <span>Guia Palpinet</span>
            <span>Conteúdo recreativo</span>
          </div>
        </div>
        <div class="blog-image blog-image-${page.imageTone || "default"}" role="img" aria-label="${escapeHtml(page.title)}">
          <span>${escapeHtml(page.category)}</span>
          <strong>${escapeHtml(page.title.split(":")[0])}</strong>
        </div>
      </header>
      <div class="article-grid">
        <aside class="article-toc">
          <strong>Nesta página</strong>
          ${page.sections.map((section, index) => `<a href="#seo-section-${index}">${escapeHtml(section[0])}</a>`).join("")}
          <a href="#seo-palpinet">Experiência</a>
          <a href="#faq">FAQ</a>
        </aside>
        <div class="article-body">
          <p class="article-intro">${escapeHtml(page.metaDescription)}</p>
          ${renderAdSlot(seoAdPosition(page))}
          ${page.extraHtml || ""}
          ${page.sections
            .map(
              ([title, text], index) => `
              <section id="seo-section-${index}">
                <h2>${escapeHtml(title)}</h2>
                <p>${escapeHtml(text)}</p>
                ${index === 0 ? renderSeoNumbers(page) : ""}
              </section>`
            )
            .join("")}
          ${page.symbols?.length ? `<section><h2>Símbolos principais</h2><p>${page.symbols.map(escapeHtml).join(", ")}.</p></section>` : ""}
          ${renderSeoDepthPageSection(page)}
          <section id="faq" class="article-faq">
            <h2>FAQ</h2>
            ${page.faq.map(([question, answer]) => `<details open><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("")}
          </section>
          ${renderSeoLeadCapture(page)}
          ${renderSeoLinkGrid(page)}
        </div>
      </div>
    </article>`;
}

function articleExcerpt(article) {
  return article.sections.flatMap((section) => section.paragraphs).join(" ").slice(0, 180);
}

function renderArticleImage(article) {
  return `
    <div class="blog-image blog-image-${article.imageTone || "default"}" role="img" aria-label="${escapeHtml(article.title)}">
      <span>${escapeHtml(article.category)}</span>
      <strong>${escapeHtml(article.title.split(":")[0])}</strong>
    </div>`;
}

function renderArticleCard(article) {
  return `
    <article class="blog-card">
      <a href="${blogUrl(article.slug)}">${renderArticleImage(article)}</a>
      <div>
        <span>${escapeHtml(article.category)} - ${article.readTime}</span>
        <h3><a href="${blogUrl(article.slug)}">${escapeHtml(article.title)}</a></h3>
        <p>${escapeHtml(articleExcerpt(article))}...</p>
      </div>
    </article>`;
}

function renderBlogLanding() {
  const featured = blogArticles.find((article) => article.featured) || blogArticles[0];
  return `
    <div class="blog-hero section-shell">
      <div class="blog-hero-copy">
        <span class="eyebrow">Blog Palpinet</span>
        <h1>Uma pausa para explorar</h1>
        <p>Encontre leituras sobre sonhos, signos e números para explorar no seu ritmo.</p>
        <form class="blog-search" id="blogSearchForm">
          <label class="sr-only" for="blogSearchInput">Buscar artigos</label><input id="blogSearchInput" type="search" placeholder="O que você deseja descobrir hoje?" />
          <button class="primary-button" type="submit">Pesquisar</button>
        </form>
        <div class="search-examples">
          <button type="button" data-search-example="Sonhar com chuva">Sonhar com chuva</button>
          <button type="button" data-search-example="Número da sorte para Áries">Número da sorte para Áries</button>
          <button type="button" data-search-example="Significado do número 7">Significado do número 7</button>
        </div>
      </div>
      <article class="featured-article">
        <a href="${blogUrl(featured.slug)}">${renderArticleImage(featured)}</a>
        <div>
          <span>Destaque principal</span>
          <h3><a href="${blogUrl(featured.slug)}">${escapeHtml(featured.title)}</a></h3>
          <p>${escapeHtml(featured.subtitle)}</p>
          <a class="outline-link light" href="${blogUrl(featured.slug)}">Ler artigo completo</a>
        </div>
      </article>
    </div>
    <div class="section-shell blog-category-row" id="blogCategories">
      <button class="active" type="button" data-blog-category="Todos">Todos</button>
      ${blogCategories.map((category) => `<button type="button" data-blog-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}
    </div>
    <div class="blog-content-grid section-shell">
      <div class="blog-list-panel">
        <div class="blog-grid" id="blogGrid">${blogArticles.map(renderArticleCard).join("")}</div>
      </div>
    </div>`;
}

function renderLeadCapture(article) {
  return `
    <form class="article-lead-form" data-lead-form>
      <div>
        <span class="eyebrow">Receba números da sorte exclusivos</span>
        <h3>Continue sua jornada Palpinet</h3>
        <p>Receba conteúdos, inspiracoes e sugestões recreativas direto no seu e-mail.</p>
      </div>
      <label>Nome<input name="name" type="text" placeholder="Seu nome" required /></label>
      <label>E-mail<input name="email" type="email" placeholder="seu@email.com" required /></label>
      <input name="source" type="hidden" value="${escapeHtml(article.slug)}" />
      <button class="primary-button" type="submit">Quero Receber</button>
      <small data-lead-message></small>
    </form>`;
}

function renderPalpinetSuggestion(article) {
  return `
    <aside class="article-suggestion">
      <span>Sugestão Palpinet</span>
      <strong>${escapeHtml(article.category)}</strong>
      <div class="client-number-row">${article.suggestedNumbers.map((number) => `<b>${String(number).padStart(2, "0")}</b>`).join("")}</div>
      <a class="primary-button" href="/#gerador" data-generate-now>Gerar nova combinação</a>
    </aside>`;
}

function renderSeoDepthSection(article) {
  return `
    <section id="guia-palpinet">
      <h2>Guia Palpinet para usar este conteúdo</h2>
      <p>Este artigo faz parte de uma estrutura editorial criada para ajudar o usuário a entender símbolos, signos, jogos e números de forma simples. O objetivo é transformar uma busca comum em uma experiência mais util: primeiro a pessoa entende o tema, depois vê exemplos, consulta perguntas frequentes e, se quiser, usa o gerador para criar uma combinação recreativa.</p>
      <p>O Palpinet separa claramente conteúdo informativo de promessa de resultado. Quando o artigo fala sobre ${escapeHtml(article.category)}, ele trabalha com linguagem simbólica e acessível, sem afirmar que um sonho, signo, número ou data determina o futuro. Essa postura ajuda a manter a confiança do usuário e deixa a plataforma alinhada a uma experiência de entretenimento responsável.</p>
      <p>Nos artigos de sonhos, a descrição do usuário pode trazer palavras como água, chuva, cobra, dinheiro, viagem ou família. Nos artigos de horóscopo, o signo funciona como ponto de inspiração. Em numerologia, nomes e números são usados como símbolos. Em jogos, a estrutura oficial de quantidade e intervalo de números orienta a combinação. Em todos os casos, os números são gerados pelo algoritmo Palpinet, não pela interpretação textual.</p>
      <p>Essa estrutura também ajuda no retorno de usuários. Quem encontra uma página sobre ${escapeHtml(article.title)} pode salvar favoritos, visitar artigos relacionados, cadastrar o e-mail para receber novidades e voltar ao gerador em outro momento. Assim, o blog não fica isolado: ele se conecta ao produto, ao painel do cliente, ao histórico e aos métodos inteligentes.</p>
      <p>Use as sugestões como inspiração, compare diferentes métodos e mantenha sempre a leitura em caráter recreativo. As sugestões do Palpinet tem caráter recreativo e informativo. Não há garantia de premiação.</p>
    </section>`;
}

function renderArticle(article) {
  const related = article.related
    .map((slug) => blogArticles.find((item) => item.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  return `
    <article class="article-layout section-shell">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a><span>Blog</span><span>${escapeHtml(article.category)}</span><strong>${escapeHtml(article.title)}</strong>
      </nav>
      <header class="article-header">
        <div>
          <span class="eyebrow">${escapeHtml(article.category)}</span>
          <h1>${escapeHtml(article.title)}</h1>
          <p>${escapeHtml(article.subtitle)}</p>
          <div class="article-meta">
            <span>${new Date(article.date).toLocaleDateString("pt-BR")}</span>
            <span>${article.readTime} de leitura</span>
            <span>Conteúdo recreativo</span>
          </div>
        </div>
        ${renderArticleImage(article)}
      </header>
      <div class="article-grid">
        <aside class="article-toc">
          <strong>Neste artigo</strong>
          ${article.sections.map((section) => `<a href="#${section.id}">${escapeHtml(section.title)}</a>`).join("")}
          <a href="#guia-palpinet">Guia Palpinet</a>
          <a href="#faq">FAQ</a>
        </aside>
        <div class="article-body">
          <p class="article-intro">${escapeHtml(article.subtitle)} Explore os símbolos e use o gerador de forma recreativa.</p>
          ${renderAdSlot("article-top")}
          ${article.sections
            .map(
              (section, index) => `
              <section id="${section.id}">
                <h2>${escapeHtml(section.title)}</h2>
                ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
                ${index === 0 ? renderPalpinetSuggestion(article) : ""}
                ${index === 1 ? renderAdSlot("article-middle") : ""}
              </section>`
            )
            .join("")}
          <section>
            <h2>Exemplos de uso</h2>
            <p>Você pode pesquisar temas parecidos, comparar artigos relacionados e depois abrir o Gerador Rápido para criar uma sugestão com base no jogo escolhido.</p>
            <p>Para sonhos, informe poucas palavras. Para horóscopo, selecione o signo. Para numerologia, digite um nome. A interpretação é sempre recreativa.</p>
          </section>
          ${renderSeoDepthSection(article)}
          <section id="faq" class="article-faq">
            <h2>FAQ</h2>
            ${article.faq
              .map(([question, answer]) => `<details open><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`)
              .join("")}
          </section>
          ${renderLeadCapture(article)}
          ${renderAdSlot("article-bottom")}
          <section>
            <h2>Você também pode gostar</h2>
            <div class="related-grid">${related.map(renderArticleCard).join("")}</div>
          </section>
        </div>
      </div>
    </article>`;
}

function updateSponsorsSeo() {
  const origin = siteOrigin();
  setMeta("description", "Veja patrocinadores do Palpinet, ofertas especiais e cupons de desconto selecionados.");
  setMeta("og:title", "Patrocinadores e cupons de desconto | Palpinet", "property");
  setMeta("og:description", "Cupons, ofertas e parceiros selecionados para visitantes do Palpinet.", "property");
  setMeta("og:url", `${origin}/patrocinadores`, "property");
  setMeta("twitter:title", "Patrocinadores e cupons de desconto | Palpinet");
  setMeta("twitter:description", "Ofertas e cupons dos patrocinadores do Palpinet.");
  updateCanonical(`${origin}/patrocinadores`);
  updateSchema({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Patrocinadores e cupons de desconto",
    url: `${origin}/patrocinadores`
  });
}

function renderSponsorsPage() {
  const coupons = getSponsorCoupons().filter((coupon) => coupon.active);
  return `
    <section class="sponsors-page section-shell">
      <header class="sponsors-hero">
        <span class="eyebrow">Patrocinadores</span>
        <h1>Cupons e ofertas dos parceiros Palpinet</h1>
        <p>Confira benefícios, campanhas e códigos de desconto selecionados. Ao clicar, você será direcionado ao site do patrocinador.</p>
      </header>
      <div class="coupon-grid">
        ${coupons.length ? coupons.map(renderCouponCard).join("") : `<div class="client-empty-state"><strong>Nenhum cupom ativo</strong><p>Novos patrocinadores aparecerão aqui em breve.</p></div>`}
      </div>
    </section>`;
}

function renderCouponCard(coupon) {
  return `
    <article class="coupon-card">
      ${coupon.logo ? `<div class="coupon-media"><img src="${escapeHtml(coupon.logo)}" alt="${escapeHtml(coupon.sponsor)}" loading="lazy" /></div>` : `<div class="coupon-media coupon-placeholder"><strong>${escapeHtml(coupon.sponsor || "Parceiro")}</strong></div>`}
      <div class="coupon-copy">
        <span>${escapeHtml(coupon.sponsor || "Patrocinador")}</span>
        <h2>${escapeHtml(coupon.title || "Oferta especial")}</h2>
        <p>${escapeHtml(coupon.description || "")}</p>
      </div>
      <div class="coupon-deal">
        <strong>${escapeHtml(coupon.discount || "Oferta especial")}</strong>
        <button type="button" data-copy-coupon="${escapeHtml(coupon.couponCode || "")}">${escapeHtml(coupon.couponCode || "VER OFERTA")}</button>
      </div>
      <a class="primary-button" href="${escapeHtml(coupon.link || "#")}" target="_blank" rel="noopener" data-coupon-link="${escapeHtml(coupon.id)}">Ir para o patrocinador</a>
    </article>`;
}

const pageCatalogs = [document.querySelector("#catalogMethods"), document.querySelector("#catalogGames")];
function renderBlog() {
  // Detach reusable catalogs before replacing route content.
  pageCatalogs.forEach(catalog => {
    if (catalog.parentElement !== document.querySelector("main")) document.querySelector("main").append(catalog);
  });
  updatePublicRoute();
  const article = findArticleByPath();
  const seoPage = findSeoPageByPath();
  const isSponsorsRoute = window.location.pathname === "/patrocinadores";
  const isBlogRoute = window.location.pathname === "/blog" || window.location.pathname.startsWith("/blog/") || Boolean(article);
  const isSeoRoute = Boolean(seoPage);
  document.body.classList.toggle("blog-route", isBlogRoute);
  document.body.classList.toggle("seo-route", isSeoRoute || isSponsorsRoute);
  const blogApp = document.querySelector("#blogApp");
  if (!blogApp) return;

  if (isSponsorsRoute) {
    updateSponsorsSeo();
    blogApp.innerHTML = renderSponsorsPage();
    trackPageView("/patrocinadores");
    return;
  }

  if (article) {
    const views = read("palpinet.preview.contentViews", {});
    views[article.slug] = (views[article.slug] || 0) + 1;
    write("palpinet.preview.contentViews", views);
    updatePageSeo(article);
    blogApp.innerHTML = renderArticle(article);
    trackPageView(blogUrl(article.slug));
    return;
  }

  if (seoPage && window.location.pathname !== "/gerador") {
    const views = read("palpinet.preview.contentViews", {});
    views[seoPage.path] = (views[seoPage.path] || 0) + 1;
    write("palpinet.preview.contentViews", views);
    updateSeoRouteMeta(seoPage);
    blogApp.innerHTML = renderSeoPage(seoPage);
    const catalog = window.location.pathname === "/metodos" ? document.querySelector("#catalogMethods") : window.location.pathname === "/jogos" ? document.querySelector("#catalogGames") : null;
    if (catalog) blogApp.querySelector(".article-body").prepend(catalog);
    if (seoPage.path.startsWith("/horoscopo/")) trackEvent("horoscope_view", { sign: seoPage.path.split("/").pop(), source: "seo_page" });
    if (seoPage.path.startsWith("/sonhos/")) trackEvent("dream_search", { query: seoPage.title, source: "seo_page" });
    trackPageView(seoPage.path);
    return;
  }

  if (isBlogRoute) {
    updatePageSeo(null);
    trackPageView("/blog");
  } else if (!isAdminRoute()) {
    updateHomeSeo();
  }
  if (window.location.pathname === "/gerador") updateSeoRouteMeta(seoPage);
  blogApp.innerHTML = isBlogRoute ? renderBlogLanding() : renderHomeArticles();
}

function filterBlogArticles(query = "", category = "Todos") {
  const cleanQuery = normalize(query);
  const cleanCategory = category === "Todos" ? "" : category;
  return blogArticles.filter((article) => {
    const text = normalize(`${article.title} ${article.subtitle} ${article.category} ${article.sections.flatMap((section) => section.paragraphs).join(" ")}`);
    const matchesQuery = !cleanQuery || text.includes(cleanQuery);
    const matchesCategory = !cleanCategory || article.category === cleanCategory;
    return matchesQuery && matchesCategory;
  });
}

function renderBlogGrid(articles) {
  const grid = document.querySelector("#blogGrid");
  if (!grid) return;
  grid.innerHTML = articles.length
    ? articles.map(renderArticleCard).join("")
    : `<div class="client-empty-state"><strong>Nenhum artigo encontrado</strong><p>Tente buscar por sonho, signo, número ou jogo.</p></div>`;
}

function saveLead(form) {
  const formData = new FormData(form);
  const lead = {
    name: String(formData.get("name") || "").trim(),
    email: cleanEmail(String(formData.get("email") || "")),
    source: String(formData.get("source") || "blog"),
    createdAt: new Date().toISOString()
  };
  if (!lead.name || !lead.email) return { ok: false, message: "Preencha nome e e-mail." };
  const leads = read("palpinet.preview.leads", []);
  write("palpinet.preview.leads", [lead, ...leads].slice(0, 500));
  renderRevenueDashboard();
  return { ok: true, message: "Cadastro recebido. Conteúdo salvo neste navegador." };
}

async function requestEditorialDraft(topic, category) {
  const response = await fetch(`${apiBaseUrl()}/api/ai/content-assistant`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, category, goal: "sugestões de artigos, meta description, FAQs e resumo" })
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "Não foi possível gerar o rascunho.");
  return payload;
}

function renderRevenueDashboard() {
  const target = document.querySelector("#revenueDashboard");
  const section = document.querySelector("#receita");
  const user = getCurrentUser();
  const canSeeRevenue = user?.role === "admin";

  if (section) {
    section.classList.toggle("hidden", !canSeeRevenue);
    section.setAttribute("aria-hidden", String(!canSeeRevenue));
  }

  if (!target) return;
  if (!canSeeRevenue) {
    target.innerHTML = "";
    return;
  }

  const leads = read("palpinet.preview.leads", []);
  const users = loadUsers();
  const guesses = users.flatMap((user) => user.history || []);
  const views = read("palpinet.preview.contentViews", {});
  const topArticles = blogArticles
    .map((article) => ({ ...article, views: views[article.slug] || Math.max(8, article.title.length % 60) }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);
  const adPositions = ["home-top", "home-middle", "home-bottom", "article-top", "article-middle", "article-bottom", "dream-middle", "horoscope-middle", "game-middle", "result-after-reading"];

  target.innerHTML = `
    <div class="revenue-grid">
      <article><span>Visitas estimadas</span><strong>${Object.values(views).reduce((sum, value) => sum + value, 0) || 286}</strong></article>
      <article><span>Artigos publicados</span><strong>${blogArticles.length}</strong></article>
      <article><span>Leads capturados</span><strong>${leads.length}</strong></article>
      <article><span>Palpites gerados</span><strong>${guesses.length}</strong></article>
    </div>
    <div class="revenue-panels">
      <section>
        <h3>Artigos mais acessados</h3>
        ${topArticles.map((article) => `<p><b>${escapeHtml(article.title)}</b><span>${article.views} visitas</span></p>`).join("")}
      </section>
      <section>
        <h3>CTR dos anúncios</h3>
        ${adPositions.map((position, index) => `<p><b>${position}</b><span>${(1.2 + index * 0.18).toFixed(2)}%</span></p>`).join("")}
      </section>
      <section>
        <h3>Estrategia de crescimento</h3>
        <p><b>100 artigos</b><span>base editorial inicial</span></p>
        <p><b>500 artigos</b><span>clusters por sonhos e signos</span></p>
        <p><b>1.000 artigos</b><span>long tails por jogos e números</span></p>
        <p><b>5.000 páginas SEO</b><span>templates escalaveis e performance</span></p>
      </section>
    </div>`;
}

function isAdminUser(user = getCurrentUser()) {
  return Boolean(user && ["admin", "editor", "analyst"].includes(user.role) && user.status !== "blocked");
}

function adminCan(permission, user = getCurrentUser()) {
  if (!user) return false;
  return (adminRoles[user.role]?.permissions || []).includes(permission);
}

function isAdminRoute() {
  return window.location.pathname === "/admin" || window.location.pathname.startsWith("/admin/");
}

function isHomeRoute() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return path === "/" || path === "/index.html";
}

function adminStore(key, fallback) {
  return read(`palpinet.preview.admin.${key}`, fallback);
}

function writeAdminStore(key, value) {
  write(`palpinet.preview.admin.${key}`, value);
}

function getAdminSettings() {
  return { ...adminSettingsDefaults, ...adminStore("settings", {}) };
}

function getSponsorSettings() {
  return { ...sponsorSettingsDefaults, ...adminStore("sponsor", {}) };
}

function getSponsorSlots(settings = getSponsorSettings()) {
  const legacySlot = {
    active: Boolean(settings.logo),
    name: settings.name || sponsorSlotDefaults[0].name,
    logo: settings.logo || "",
    link: settings.link || ""
  };
  const slots = Array.isArray(settings.slots) && settings.slots.length ? settings.slots : [legacySlot];
  return sponsorSlotDefaults.map((fallback, index) => ({
    ...fallback,
    ...(slots[index] || {}),
    active: Boolean((slots[index] || fallback).active)
  }));
}

function getNextSponsorForPopup() {
  const activeSlots = getSponsorSlots().filter((slot) => slot.active && slot.logo);
  if (!activeSlots.length) return null;
  const currentIndex = read("palpinet.preview.sponsor.rotation", 0);
  const sponsor = activeSlots[currentIndex % activeSlots.length];
  write("palpinet.preview.sponsor.rotation", (currentIndex + 1) % activeSlots.length);
  return sponsor;
}

function getSponsorCoupons() {
  return adminStore("sponsorCoupons", sponsorCouponDefaults);
}

function saveSponsorCoupons(coupons) {
  writeAdminStore("sponsorCoupons", coupons);
}

function renderOfficialInfoCard() {
  const settings = getAdminSettings();
  const game = document.querySelector("#officialInfoGame");
  const prize = document.querySelector("#officialInfoPrize");
  const details = document.querySelector("#officialInfoDetails");
  const note = document.querySelector("#officialInfoNote");
  if (!game || !prize || !details || !note) return;

  const selectedGame = games[settings.officialInfoGame] ? settings.officialInfoGame : adminSettingsDefaults.officialInfoGame;
  const gameName = games[selectedGame].name;
  const gameVisual = gameVisuals[selectedGame] || gameVisuals["mega-sena"];
  const card = document.querySelector("#officialInfoCard");
  const contest = String(settings.officialInfoContest || "").trim();
  const drawDate = String(settings.officialInfoDrawDate || "").trim();
  const detailParts = [];
  if (contest) detailParts.push(`Concurso ${contest}`);
  if (drawDate) detailParts.push(`próximo sorteio ${drawDate}`);

  if (card) card.style.setProperty("--official-game-color", gameVisual.color);
  game.innerHTML = `${gameVisual.icon} ${escapeHtml(gameName.toUpperCase())} ACUMULADA`;
  prize.textContent = settings.officialInfoPrize || adminSettingsDefaults.officialInfoPrize;
  details.textContent = detailParts.join(" • ") || "Consulte concursos, horários e valores oficiais.";
  note.textContent = "Valores e datas são informativos. Confira sempre os canais oficiais das Loterias CAIXA antes de apostar.";
}

function renderSponsorPopup(sponsor = activeSponsorPopup || getSponsorSlots().find((slot) => slot.active && slot.logo) || getSponsorSettings()) {
  const modal = document.querySelector("#sponsorModal");
  const logo = document.querySelector("#sponsorLogo");
  const mediaLink = document.querySelector("#sponsorMediaLink");
  if (!modal || !logo || !mediaLink) return;

  mediaLink.href = sponsor.link || "#";
  mediaLink.classList.toggle("disabled", !sponsor.link);
  mediaLink.setAttribute("aria-disabled", sponsor.link ? "false" : "true");

  logo.classList.toggle("hidden", !sponsor.logo);
  if (sponsor.logo) {
    logo.src = sponsor.logo;
    logo.alt = sponsor.name || "Logo do patrocinador";
    logo.onerror = () => logo.classList.add("hidden");
  }
}

function openSponsorPopup() {
  const settings = getSponsorSettings();
  const modal = document.querySelector("#sponsorModal");
  if (!modal || sponsorPopupDismissed || !settings.enabled || !settings.showOnLoad || !isHomeRoute() || isAdminRoute()) return;
  if (!modal.classList.contains("hidden")) return;
  const sponsor = getNextSponsorForPopup();
  if (!sponsor) return;
  activeSponsorPopup = sponsor;
  renderSponsorPopup(sponsor);
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeSponsorPopup() {
  const modal = document.querySelector("#sponsorModal");
  if (!modal) return;
  sponsorPopupDismissed = true;
  activeSponsorPopup = null;
  modal.classList.add("hidden");
  if (document.querySelector("#authModal")?.classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

async function hydrateCloudSponsorSettings() {
  if (!hasSupabaseConfig()) return;
  try {
    const sponsor = await readCloudSetting(cloudSettings.sponsorKey);
    const coupons = await readCloudSetting(cloudSettings.couponsKey);
    if (sponsor) writeAdminStore("sponsor", { ...sponsorSettingsDefaults, ...sponsor });
    if (Array.isArray(coupons)) saveSponsorCoupons(coupons);
    renderSponsorPopup();
    window.setTimeout(openSponsorPopup, 120);
    renderBlog();
    renderAdmin();
  } catch (error) {
    console.warn("Não foi possível carregar patrocinador da nuvem:", error);
  }
}

function getAdminPrompts() {
  return { ...aiPromptDefaults, ...adminStore("prompts", {}) };
}

function getAdminDreams() {
  return adminStore("dreams", adminDreamCatalogDefaults);
}

function getAdminHoroscope() {
  return adminStore("horoscope", horoscopeAdminDefaults);
}

function getAdminGames() {
  const stored = adminStore("games", {});
  return Object.entries(games).map(([slug, game]) => ({
    slug,
    name: game.name,
    active: stored[slug]?.active ?? true,
    seo: stored[slug]?.seo || `Números da ${game.name}: regras, combinações e sugestões Palpinet`
  }));
}

function getAdminLogs() {
  return adminStore("logs", [
    { id: "log_seed", actor: "Sistema", action: "Backup automatico preparado", target: "settings", createdAt: new Date().toISOString() }
  ]);
}

function addAdminLog(action, target = "sistema") {
  const user = getCurrentUser();
  const logs = getAdminLogs();
  writeAdminStore("logs", [
    {
      id: `log_${Date.now()}`,
      actor: user?.email || "visitante",
      action,
      target,
      createdAt: new Date().toISOString()
    },
    ...logs
  ].slice(0, 120));
}

function getAdminArticles() {
  return adminStore("articles", blogArticles.map((article) => ({
    id: article.slug,
    title: article.title,
    slug: article.slug,
    category: article.category,
    status: article.featured ? "publicado" : "rascunho",
    scheduledAt: "",
    seo: article.metaDescription,
    updatedAt: article.date
  })));
}

function getAllGuesses() {
  return loadUsers().flatMap((user) => (user.history || []).map((record) => ({ ...record, userName: user.name, userEmail: user.email })));
}

function adminStats() {
  const users = loadUsers();
  const leads = read("palpinet.preview.leads", []);
  const guesses = getAllGuesses();
  const today = new Date().toDateString();
  const guessesToday = guesses.filter((record) => new Date(record.createdAt).toDateString() === today).length;
  const views = read("palpinet.preview.contentViews", {});
  return {
    users: users.length,
    guessesToday: guessesToday || Math.max(12, guesses.length),
    revenue: 248.9 + leads.length * 1.3,
    leadsToday: leads.filter((lead) => new Date(lead.createdAt).toDateString() === today).length || leads.length,
    visits: Object.values(views).reduce((sum, value) => sum + value, 0) || 15432,
    leads,
    guesses,
    usersList: users
  };
}

function renderAdminAccess() {
  const user = getCurrentUser();
  if (!user) {
    return `
      <section class="admin-access">
        <img src="/public/palpinet-logo.svg" alt="Palpinet" />
        <span class="eyebrow">Painel Administrativo</span>
        <h1>Entre para administrar o Palpinet</h1>
        <p>Use o usuário padrão Luiz Ricci para testar o acesso de administrador neste preview local.</p>
        <button class="primary-button" type="button" data-admin-login>Entrar como administrador</button>
      </section>`;
  }

  return `
    <section class="admin-access">
      <img src="/public/palpinet-logo.svg" alt="Palpinet" />
      <span class="eyebrow">Acesso restrito</span>
      <h1>Conta sem permissão administrativa</h1>
      <p>Seu perfil atual e ${escapeHtml(adminRoles[user.role]?.label || "Usuário")}. Solicite permissão a um administrador.</p>
      <a class="secondary-button" href="/">Voltar ao site</a>
    </section>`;
}

function renderAdminShell(user) {
  const role = adminRoles[user.role] || adminRoles.user;
  const availableNav = adminNavItems.filter((item) => adminCan(item.permission, user));
  if (!availableNav.some((item) => item.id === activeAdminView)) activeAdminView = availableNav[0]?.id || "dashboard";
  const renderer = adminRenderers[activeAdminView] || renderAdminDashboard;

  return `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <a class="admin-brand" href="/admin">
          <img src="/public/palpinet-logo.svg" alt="Palpinet" />
          <span>Admin</span>
        </a>
        <div class="admin-role-card">
          <strong>${escapeHtml(firstName(user.name))}</strong>
          <span>${escapeHtml(role.label)}</span>
          <small>${escapeHtml(role.description)}</small>
        </div>
        <nav>
          ${availableNav.map((item) => `<button class="${item.id === activeAdminView ? "active" : ""}" type="button" data-admin-view="${item.id}">${escapeHtml(item.label)}</button>`).join("")}
        </nav>
      </aside>
      <section class="admin-main">
        ${renderer(user)}
      </section>
    </div>`;
}

function renderAdminHeader(title, subtitle, action = "") {
  return `
    <header class="admin-header">
      <div>
        <span class="eyebrow">Painel Palpinet</span>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      ${action}
    </header>`;
}

function renderAdminDashboard() {
  const stats = adminStats();
  return `
    ${renderAdminHeader("Dashboard administrativo", "Visao central de crescimento, receita, usuários e operação.")}
    <div class="admin-stat-grid">
      <article><span>Total de usuários</span><strong>${stats.users.toLocaleString("pt-BR")}</strong><small>usuários cadastrados</small></article>
      <article><span>Palpites hoje</span><strong>${stats.guessesToday.toLocaleString("pt-BR")}</strong><small>geracoes estimadas</small></article>
      <article><span>Receita Adsense</span><strong>${stats.revenue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong><small>estimativa local</small></article>
      <article><span>Leads capturados</span><strong>${stats.leadsToday}</strong><small>novos leads</small></article>
    </div>
    <section class="admin-panel">
      <div class="admin-panel-head"><h2>Crescimento do trafego</h2><div><button>7 dias</button><button>30 dias</button><button>90 dias</button></div></div>
      <div class="admin-chart">${[42, 58, 51, 76, 83, 92, 114].map((value) => `<span style="--bar:${value}%"><b>${value}</b></span>`).join("")}</div>
    </section>
    <div class="admin-two-column">
      ${renderAdminMiniPanel("Operação", [["URLs indexadas", "8.742"], ["Erros SEO", "3"], ["Backups", "Ativo"], ["Spam", "Protegido"]])}
      ${renderAdminMiniPanel("Receita", [["CTR medio", "2,14%"], ["RPM", "R$ 18,40"], ["Cliques", "1.286"], ["Impressões", "60.120"]])}
    </div>`;
}

function renderAdminMiniPanel(title, rows) {
  return `
    <section class="admin-panel">
      <h2>${title}</h2>
      <div class="admin-kv-list">${rows.map(([label, value]) => `<p><span>${label}</span><strong>${value}</strong></p>`).join("")}</div>
    </section>`;
}

function renderAdminUsers() {
  const users = loadUsers().filter((user) => {
    if (activeAdminFilter === "ativos") return user.status === "active";
    if (activeAdminFilter === "inativos") return user.status !== "active";
    if (activeAdminFilter === "novos") return new Date(user.createdAt) > new Date(Date.now() - 7 * 86400000);
    return true;
  });
  return `
    ${renderAdminHeader("Usuários", "Gerencie contas, planos, status e níveis de acesso.", `<button class="primary-button" type="button" data-admin-action="seed-user">Criar usuário teste</button>`)}
    ${renderAdminFilters(["todos", "ativos", "inativos", "novos"])}
    <div class="admin-table-wrap"><table><thead><tr><th>Nome</th><th>Email</th><th>Cadastro</th><th>Último acesso</th><th>Plano</th><th>Status</th><th>Ações</th></tr></thead><tbody>
      ${users.map((user) => `
        <tr>
          <td>${escapeHtml(user.name)}<small>${escapeHtml(adminRoles[user.role]?.label || "Usuário")}</small></td>
          <td>${escapeHtml(user.email)}</td>
          <td>${formatDateOnly(user.createdAt)}</td>
          <td>${user.lastAccess ? formatDateTime(user.lastAccess) : "Sem acesso"}</td>
          <td>${escapeHtml(user.plan || "Gratis")}</td>
          <td><span class="admin-status ${user.status}">${user.status === "blocked" ? "Bloqueado" : "Ativo"}</span></td>
          <td>
            <button data-admin-action="view-user" data-user-id="${user.id}">ver</button>
            <button data-admin-action="edit-user" data-user-id="${user.id}">editar</button>
            <button data-admin-action="block-user" data-user-id="${user.id}">${user.status === "blocked" ? "ativar" : "bloquear"}</button>
            <button data-admin-action="delete-user" data-user-id="${user.id}">excluir</button>
          </td>
        </tr>`).join("")}
    </tbody></table></div>`;
}

function renderAdminFilters(filters) {
  return `<div class="admin-filter-row">${filters.map((filter) => `<button class="${activeAdminFilter === filter ? "active" : ""}" type="button" data-admin-filter="${filter}">${filter}</button>`).join("")}</div>`;
}

function renderAdminLeads() {
  const leads = read("palpinet.preview.leads", []);
  return `
    ${renderAdminHeader("Leads", "Contatos capturados em blog, sonhos, horóscopo e home.", `<div class="admin-actions"><button class="primary-button" data-admin-action="export-leads-csv" type="button">Exportar CSV</button><button class="secondary-button" data-admin-action="export-leads-excel" type="button">Exportar Excel</button></div>`)}
    <div class="admin-table-wrap"><table><thead><tr><th>Nome</th><th>Email</th><th>Origem</th><th>Data</th></tr></thead><tbody>
      ${(leads.length ? leads : [{ name: "Lead exemplo", email: "lead@palpinet.com", source: "Blog", createdAt: new Date().toISOString() }]).map((lead) => `<tr><td>${escapeHtml(lead.name)}</td><td>${escapeHtml(lead.email)}</td><td>${escapeHtml(lead.source || "Blog")}</td><td>${formatDateTime(lead.createdAt)}</td></tr>`).join("")}
    </tbody></table></div>`;
}

function renderAdminBlog() {
  const articles = getAdminArticles();
  return `
    ${renderAdminHeader("Blog", "Crie, edite, agende e acompanhe conteúdos SEO.", `<button class="primary-button" data-admin-action="save-article" type="button">Salvar artigo</button>`)}
    <form class="admin-form" id="adminArticleForm">
      <label>Titulo<input name="title" placeholder="Titulo SEO do artigo" /></label>
      <label>Slug<input name="slug" placeholder="sonhar-com-agua" /></label>
      <label>Categoria<select name="category">${blogCategories.map((category) => `<option>${category}</option>`).join("")}</select></label>
      <label>Imagem<input name="image" placeholder="/public/imagem.jpg" /></label>
      <label class="wide">Conteúdo<textarea name="content" placeholder="Introdução, desenvolvimento, FAQ e CTA"></textarea></label>
      <label class="wide">SEO<textarea name="seo" placeholder="Meta title, meta description e schema"></textarea></label>
    </form>
    <div class="admin-card-grid">${articles.map((article) => `<article><span>${escapeHtml(article.category)}</span><strong>${escapeHtml(article.title)}</strong><p>${escapeHtml(article.seo)}</p><div><button data-admin-action="edit-article" data-article-id="${article.id}">Editar</button><button data-admin-action="schedule-article" data-article-id="${article.id}">Agendar</button><button data-admin-action="delete-article" data-article-id="${article.id}">Excluir</button></div></article>`).join("")}</div>`;
}

function renderAdminDreams() {
  return `
    ${renderAdminHeader("Sonhos", "Cadastre termos, interpretações padrão, palavras relacionadas e SEO.")}
    <form class="admin-form" id="adminDreamForm">
      <label>Termo principal<input name="term" placeholder="Sonhar com água" /></label>
      <label>Palavras relacionadas<input name="keywords" placeholder="água, rio, chuva" /></label>
      <label class="wide">Interpretação padrão<textarea name="interpretation" placeholder="Interpretação curta"></textarea></label>
      <label class="wide">SEO<textarea name="seo" placeholder="Meta title e description"></textarea></label>
      <button class="primary-button" type="submit">Salvar sonho</button>
    </form>
    <div class="admin-card-grid">${getAdminDreams().map((dream) => `<article><span>${escapeHtml(dream.term)}</span><strong>${escapeHtml(dream.interpretation)}</strong><p>${escapeHtml(dream.keywords)}</p><div><button data-admin-action="edit-dream" data-dream-id="${dream.id}">Editar</button><button data-admin-action="delete-dream" data-dream-id="${dream.id}">Excluir</button></div></article>`).join("")}</div>`;
}

function renderAdminHoroscope() {
  return `
    ${renderAdminHeader("Horóscopo", "Edite textos base, energia diária e mensagens padrão dos signos.")}
    <div class="admin-card-grid signs">${getAdminHoroscope().map((item) => `<article><span>${escapeHtml(item.sign)}</span><strong>${escapeHtml(item.energy)}</strong><p>${escapeHtml(item.baseText)}</p><textarea data-horoscope-id="${item.id}">${escapeHtml(item.message)}</textarea><button data-admin-action="save-horoscope" data-horoscope-id="${item.id}">Salvar</button></article>`).join("")}</div>`;
}

function renderAdminGames() {
  return `
    ${renderAdminHeader("Jogos", "Ative/desative jogos e ajuste textos SEO.")}
    <div class="admin-card-grid games">${getAdminGames().map((game) => `<article><span>${game.active ? "Ativo" : "Inativo"}</span><strong>${escapeHtml(game.name)}</strong><p>${escapeHtml(game.seo)}</p><button data-admin-action="toggle-game" data-game="${game.slug}">${game.active ? "Desativar" : "Ativar"}</button></article>`).join("")}</div>`;
}

function renderAdminAI() {
  const prompts = getAdminPrompts();
  return `
    ${renderAdminHeader("Inteligência Artificial", "Monitore OpenAI, edite prompts e teste respostas.")}
    <div class="admin-status-row"><article><span>Status da OpenAI</span><strong id="adminAiStatus">Verificando...</strong><small id="adminAiModel">A chave nunca fica no navegador.</small></article><article><span>Rotas seguras</span><strong>/api/ai/*</strong><small>Sonhos, horóscopo, numerologia e conteúdo.</small></article></div>
    <form class="admin-form" id="adminPromptForm">
      <label class="wide">Prompt Sonhos<textarea name="sonho">${escapeHtml(prompts.sonho)}</textarea></label>
      <label class="wide">Prompt Horóscopo<textarea name="horoscopo">${escapeHtml(prompts.horoscopo)}</textarea></label>
      <label class="wide">Prompt Numerologia<textarea name="numerologia">${escapeHtml(prompts.numerologia)}</textarea></label>
      <button class="primary-button" type="submit">Salvar prompts</button>
    </form>
    <form class="admin-form compact" id="adminAITestForm"><label>Tema de teste<input name="topic" placeholder="Sonhar com chuva" /></label><button class="primary-button" type="submit">Testar resposta</button></form>
    <div class="editorial-output" id="adminAIOutput">Aguardando teste.</div>`;
}

function renderAdminSEO() {
  const seoRows = [
    ...blogArticles.map((article) => ({ url: blogUrl(article.slug), title: article.metaTitle, description: article.metaDescription, schema: "Article + FAQ + Breadcrumb" })),
    ...buildSeoPages().slice(0, 16).map((page) => ({ url: page.path, title: page.metaTitle, description: page.metaDescription, schema: `${page.type} + FAQ + Breadcrumb` }))
  ];
  return `
    ${renderAdminHeader("SEO", "URLs indexadas, erros, sitemap e metadados.")}
    <div class="admin-stat-grid compact"><article><span>URLs indexadas</span><strong>8.742</strong></article><article><span>Não indexadas</span><strong>126</strong></article><article><span>Erros</span><strong>3</strong></article><article><span>Sitemap</span><strong>Ativo</strong></article></div>
    <div class="admin-table-wrap"><table><thead><tr><th>URL</th><th>Meta title</th><th>Description</th><th>Schema</th></tr></thead><tbody>${seoRows.map((row) => `<tr><td>${row.url}</td><td><input value="${escapeHtml(row.title)}" /></td><td><input value="${escapeHtml(row.description)}" /></td><td>${row.schema}</td></tr>`).join("")}</tbody></table></div>`;
}

function renderAdminAdsense() {
  return `
    ${renderAdminHeader("Adsense", "Receita, impressões, cliques, CTR e RPM.")}
    <div class="admin-stat-grid"><article><span>Receita estimada</span><strong>R$ 248,90</strong></article><article><span>Impressões</span><strong>60.120</strong></article><article><span>Cliques</span><strong>1.286</strong></article><article><span>RPM</span><strong>R$ 18,40</strong></article></div>
    ${renderAdminMiniPanel("Páginas mais rentaveis", [["Sonhos", "R$ 91,40"], ["Horóscopo", "R$ 62,20"], ["Blog", "R$ 58,70"], ["Jogos", "R$ 36,60"]])}`;
}

function renderAdminSponsor() {
  const sponsor = getSponsorSettings();
  const sponsorSlots = getSponsorSlots(sponsor);
  const cloudReady = hasSupabaseConfig();
  return `
    ${renderAdminHeader("Patrocinador", "Configure o pop-up que aparece quando o visitante abre o site.")}
    <form class="admin-form" id="adminSponsorForm">
      <label class="toggle-row"><span>Ativar pop-up</span><input name="enabled" type="checkbox" ${sponsor.enabled ? "checked" : ""} /></label>
      <label class="toggle-row"><span>Abrir ao carregar o site</span><input name="showOnLoad" type="checkbox" ${sponsor.showOnLoad ? "checked" : ""} /></label>
      <div class="sponsor-slots wide">
        ${sponsorSlots.map((slot, index) => `
          <article class="sponsor-slot-card">
            <span>Patrocinador ${index + 1}</span>
            <label class="toggle-row"><span>Ativo no rodízio</span><input name="slotActive${index}" type="checkbox" ${slot.active ? "checked" : ""} /></label>
            <label>Nome<input name="slotName${index}" value="${escapeHtml(slot.name)}" placeholder="Ex: McDia Feliz" /></label>
            <label>URL da imagem<input name="slotLogo${index}" value="${escapeHtml(slot.logo)}" placeholder="https://site.com/banner.png" /></label>
            <label class="sponsor-upload-field">Enviar imagem<input name="slotLogoFile${index}" type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" /></label>
            <label>Link<input name="slotLink${index}" value="${escapeHtml(slot.link)}" placeholder="https://site-do-patrocinador.com" /></label>
          </article>
        `).join("")}
      </div>
      <p class="form-message wide" id="sponsorAdminMessage">${cloudReady ? "Supabase conectado: alterações podem ser salvas na nuvem." : "Supabase ainda não configurado: alterações ficam neste navegador."}</p>
      <button class="primary-button" type="submit">Salvar patrocinador</button>
    </form>
    <div class="admin-card-grid compact">
      <article>
        <span>Nuvem</span>
        <strong>${cloudReady ? "Supabase ativo" : "Modo local"}</strong>
        <p>${cloudReady ? "Upload e configurações usam armazenamento online." : "Configure URL e anon key do Supabase para sincronizar entre aparelhos."}</p>
      </article>
      <article>
        <span>Logo</span>
        <strong>${sponsorSlots.filter((slot) => slot.active && slot.logo).length} ativa(s)</strong>
        <p>Ative 1, 2 ou 3 patrocinadores para alternar automaticamente a cada entrada no site.</p>
      </article>
      <article>
        <span>Experiência</span>
        <strong>Entrada do site</strong>
        <p>O visitante pode fechar o pop-up e continuar navegando normalmente.</p>
      </article>
    </div>`;
}

function renderAdminCoupons() {
  const coupons = getSponsorCoupons();
  return `
    ${renderAdminHeader("Cupons de patrocinadores", "Cadastre ofertas, códigos e links que aparecem na página pública de patrocinadores.")}
    <form class="admin-form" id="adminCouponForm">
      <label>Patrocinador<input name="sponsor" placeholder="Ex: Shopee" /></label>
      <label>Desconto/oferta<input name="discount" placeholder="Ex: 10% OFF" /></label>
      <label class="wide">Título<input name="title" placeholder="Ex: Cupons de desconto Shopee" /></label>
      <label class="wide">Descrição<textarea name="description" placeholder="Texto curto sobre a oferta."></textarea></label>
      <label>Código do cupom<input name="couponCode" placeholder="Ex: PALPINET10" /></label>
      <label>Link do patrocinador<input name="link" placeholder="https://site-do-patrocinador.com" /></label>
      <label class="wide">URL da imagem/banner<input name="logo" placeholder="Opcional: https://site.com/banner.png" /></label>
      <label class="toggle-row"><span>Cupom ativo</span><input name="active" type="checkbox" checked /></label>
      <p class="form-message wide" id="couponAdminMessage">Depois de salvar, o cupom aparece em /patrocinadores.</p>
      <button class="primary-button" type="submit">Salvar cupom</button>
    </form>
    <div class="admin-table-wrap">
      <table>
        <thead><tr><th>Patrocinador</th><th>Oferta</th><th>Cupom</th><th>Status</th><th>Ações</th></tr></thead>
        <tbody>
          ${coupons.map((coupon) => `
            <tr>
              <td>${escapeHtml(coupon.sponsor)}</td>
              <td><strong>${escapeHtml(coupon.title)}</strong><small>${escapeHtml(coupon.discount || "")}</small></td>
              <td>${escapeHtml(coupon.couponCode || "Sem código")}</td>
              <td><span class="admin-status ${coupon.active ? "" : "blocked"}">${coupon.active ? "Ativo" : "Inativo"}</span></td>
              <td><button class="secondary-button compact-button" type="button" data-admin-coupon-delete="${escapeHtml(coupon.id)}">Remover</button></td>
            </tr>`)
            .join("") || `<tr><td colspan="5">Nenhum cupom cadastrado.</td></tr>`}
        </tbody>
      </table>
    </div>`;
}

function renderAdminAnalytics() {
  return `
    ${renderAdminHeader("Analytics", "Google Analytics, Search Console e Microsoft Clarity preparados.")}
    <div class="admin-stat-grid"><article><span>Usuários</span><strong>15.432</strong></article><article><span>Sessões</span><strong>28.940</strong></article><article><span>Tempo medio</span><strong>3m42s</strong></article><article><span>Rejeição</span><strong>38%</strong></article></div>
    ${renderAdminMiniPanel("Páginas mais acessadas", blogArticles.slice(0, 4).map((article, index) => [article.title, `${(3200 - index * 420).toLocaleString("pt-BR")} views`]))}`;
}

function renderAdminGuesses() {
  const guesses = getAllGuesses();
  return `
    ${renderAdminHeader("Palpites", "Relatorios por jogo, método, números e data.")}
    ${renderAdminFilters(["todos", "mega-sena", "sonho", "horoscopo"])}
    <div class="admin-table-wrap"><table><thead><tr><th>Jogo</th><th>Metodo</th><th>Números</th><th>Usuário</th><th>Data</th></tr></thead><tbody>${(guesses.length ? guesses : []).slice(0, 60).map((record) => `<tr><td>${escapeHtml(games[record.game]?.name || record.game)}</td><td>${escapeHtml(methods[record.method] || record.method)}</td><td>${formatGuessNumbers(record)}</td><td>${escapeHtml(record.userName || "")}</td><td>${formatDateTime(record.createdAt)}</td></tr>`).join("") || `<tr><td colspan="5">Nenhum palpite salvo ainda.</td></tr>`}</tbody></table></div>
    ${renderAdminMiniPanel("Relatorios", [["Métodos mais usados", clientStats({ history: guesses }).favoriteMethod], ["Jogos mais usados", clientStats({ history: guesses }).favoriteGame], ["Números mais gerados", topNumbers(guesses).join(", ") || "Aguardando dados"]])}`;
}

function topNumbers(guesses) {
  const counts = {};
  guesses.forEach((record) => (record.numbers || []).forEach((number) => {
    counts[number] = (counts[number] || 0) + 1;
  }));
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([number]) => String(number).padStart(2, "0"));
}

function renderAdminInsights() {
  const guesses = getAllGuesses();
  const dreamTerms = guesses.filter((record) => record.method === "sonho").map((record) => normalize(record.input).split(" ")[0] || "chuva");
  const signs = guesses.filter((record) => record.method === "horoscopo").map((record) => normalize(record.input) || "aries");
  return `
    ${renderAdminHeader("Inteligência de negócio", "Tendências da semana e oportunidades de crescimento.")}
    <div class="admin-two-column">
      ${renderAdminMiniPanel("Sonhos mais pesquisados", [["Chuva", dreamTerms.filter((item) => item === "chuva").length || 42], ["Cobra", dreamTerms.filter((item) => item === "cobra").length || 31], ["Dinheiro", dreamTerms.filter((item) => item === "dinheiro").length || 27]])}
      ${renderAdminMiniPanel("Signos mais acessados", [["Áries", signs.filter((item) => item === "aries").length || 39], ["Touro", signs.filter((item) => item === "touro").length || 33], ["Aquário", signs.filter((item) => item === "aquario").length || 28]])}
    </div>
    ${renderAdminMiniPanel("Tendências da semana", [["Jogos mais utilizados", clientStats({ history: guesses }).favoriteGame], ["Metodo em alta", clientStats({ history: guesses }).favoriteMethod], ["Conteúdo recomendado", "Criar cluster de sonhos com água"]])}`;
}

function renderAdminSettings() {
  const settings = getAdminSettings();
  const officialGameOptions = Object.entries(games)
    .map(([slug, game]) => `<option value="${slug}" ${settings.officialInfoGame === slug ? "selected" : ""}>${game.name}</option>`)
    .join("");
  return `
    ${renderAdminHeader("Configurações gerais", "Logo, favicon, redes sociais, email principal e domínio.")}
    <form class="admin-form" id="adminSettingsForm">
      <label>Logo<input name="logo" value="${escapeHtml(settings.logo)}" /></label>
      <label>Favicon<input name="favicon" value="${escapeHtml(settings.favicon)}" /></label>
      <label>Instagram<input name="instagram" value="${escapeHtml(settings.instagram)}" /></label>
      <label>TikTok<input name="tiktok" value="${escapeHtml(settings.tiktok)}" /></label>
      <label>Email principal<input name="email" value="${escapeHtml(settings.email)}" /></label>
      <label>Dominio<input name="domain" value="${escapeHtml(settings.domain)}" /></label>
      <label>Jogo acumulado<select name="officialInfoGame">${officialGameOptions}</select></label>
      <label>Valor estimado<input name="officialInfoPrize" value="${escapeHtml(settings.officialInfoPrize)}" placeholder="Ex: R$ 16.000.000" /></label>
      <label>Data do concurso<input name="officialInfoDrawDate" value="${escapeHtml(settings.officialInfoDrawDate)}" placeholder="Ex: terça-feira às 21h" /></label>
      <label>Número do concurso<input name="officialInfoContest" value="${escapeHtml(settings.officialInfoContest)}" placeholder="Ex: 3014" /></label>
      <label class="toggle-row"><span>Backup automatico</span><input name="backup" type="checkbox" ${settings.backup ? "checked" : ""} /></label>
      <label class="toggle-row"><span>Proteção contra spam</span><input name="spamProtection" type="checkbox" ${settings.spamProtection ? "checked" : ""} /></label>
      <button class="primary-button" type="submit">Salvar configurações</button>
    </form>`;
}

function renderAdminSecurity() {
  return `
    ${renderAdminHeader("Segurança", "Autenticação, proteção contra spam, logs e backups automáticos.")}
    <div class="admin-stat-grid compact"><article><span>Autenticação</span><strong>RBAC local</strong></article><article><span>Spam</span><strong>Protegido</strong></article><article><span>Backup</span><strong>Automatico</strong></article><article><span>Logs</span><strong>${getAdminLogs().length}</strong></article></div>
    <div class="admin-table-wrap"><table><thead><tr><th>Data</th><th>Ator</th><th>Acao</th><th>Alvo</th></tr></thead><tbody>${getAdminLogs().map((log) => `<tr><td>${formatDateTime(log.createdAt)}</td><td>${escapeHtml(log.actor)}</td><td>${escapeHtml(log.action)}</td><td>${escapeHtml(log.target)}</td></tr>`).join("")}</tbody></table></div>
    ${renderAdminMiniPanel("Tabelas administrativas", [["admins", "usuários com role"], ["roles", "permissoes"], ["logs", "auditoria"], ["settings", "configurações"], ["seo_pages", "metadados"], ["adsense_stats", "receita"], ["lead_exports", "exportações"]])}`;
}

const adminRenderers = {
  dashboard: renderAdminDashboard,
  users: renderAdminUsers,
  leads: renderAdminLeads,
  blog: renderAdminBlog,
  dreams: renderAdminDreams,
  horoscope: renderAdminHoroscope,
  games: renderAdminGames,
  ai: renderAdminAI,
  seo: renderAdminSEO,
  adsense: renderAdminAdsense,
  sponsor: renderAdminSponsor,
  coupons: renderAdminCoupons,
  analytics: renderAdminAnalytics,
  guesses: renderAdminGuesses,
  insights: renderAdminInsights,
  settings: renderAdminSettings,
  security: renderAdminSecurity
};

function renderAdmin() {
  const adminApp = document.querySelector("#adminApp");
  if (!adminApp) return;
  const route = isAdminRoute();
  document.body.classList.toggle("admin-route", route);
  if (!route) {
    adminApp.innerHTML = "";
    return;
  }
  updateAdminSeo();

  const pathView = window.location.pathname.startsWith("/admin/") ? window.location.pathname.split("/")[2] || "dashboard" : "dashboard";
  if (pathView) activeAdminView = pathView;
  const user = getCurrentUser();
  adminApp.innerHTML = isAdminUser(user) ? renderAdminShell(user) : renderAdminAccess();
  if (isAdminUser(user) && activeAdminView === "ai") refreshAdminAiStatus();
}

async function refreshAdminAiStatus() {
  const status = document.querySelector("#adminAiStatus");
  const model = document.querySelector("#adminAiModel");
  if (!status || !model) return;
  try {
    const response = await fetch(`${apiBaseUrl()}/api/ai/status`);
    const payload = await response.json();
    status.textContent = payload.connected ? "Sim" : "Não";
    model.textContent = `Modelo: ${payload.model}. Chave exposta: ${payload.key_exposed ? "sim" : "não"}.`;
  } catch {
    status.textContent = "Não";
    model.textContent = "Não foi possível verificar o backend.";
  }
}

function exportTextFile(filename, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function exportLeads(format) {
  const leads = read("palpinet.preview.leads", []);
  const rows = [["Nome", "Email", "Origem", "Data"], ...leads.map((lead) => [lead.name, lead.email, lead.source, lead.createdAt])];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`).join(",")).join("\n");
  addAdminLog(`Exportou leads em ${format.toUpperCase()}`, "leads");
  exportTextFile(format === "excel" ? "palpinet-leads.xls" : "palpinet-leads.csv", csv, format === "excel" ? "application/vnd.ms-excel" : "text/csv");
}

function handleAdminAction(button) {
  const action = button.dataset.adminAction;
  const current = getCurrentUser();
  if (!isAdminUser(current)) return;

  if (action === "seed-user" && adminCan("users")) {
    const users = loadUsers();
    const email = `editor${Date.now()}@palpinet.local`;
    saveUsers([...users, normalizeUserRecord({ id: `user_${Date.now()}`, name: "Editor Palpinet", email, password: "123456", role: "editor", status: "active", plan: "Equipe", history: [], favorites: [], createdAt: new Date().toISOString(), lastAccess: "" })]);
    addAdminLog("Criou usuário teste", email);
  }

  if (action === "block-user" && adminCan("users")) {
    updateUser(button.dataset.userId, (user) => ({ ...user, status: user.status === "blocked" ? "active" : "blocked" }));
    addAdminLog("Alterou status de usuário", button.dataset.userId);
  }

  if (action === "view-user" || action === "edit-user") {
    const target = loadUsers().find((user) => user.id === button.dataset.userId);
    addAdminLog(action === "view-user" ? "Visualizou usuário" : "Abriu edicao de usuário", target?.email || button.dataset.userId);
  }

  if (action === "delete-user" && adminCan("delete")) {
    const userId = button.dataset.userId;
    const target = loadUsers().find((user) => user.id === userId);
    if (target?.role === "admin" && target.id !== current.id) return;
    saveUsers(loadUsers().filter((user) => user.id !== userId));
    addAdminLog("Excluiu usuário", target?.email || userId);
  }

  if (action === "export-leads-csv") exportLeads("csv");
  if (action === "export-leads-excel") exportLeads("excel");

  if (action === "save-article" && adminCan("content")) {
    const form = document.querySelector("#adminArticleForm");
    const data = Object.fromEntries(new FormData(form).entries());
    const articles = getAdminArticles();
    const article = { id: data.slug || `artigo_${Date.now()}`, title: data.title || "Novo artigo Palpinet", slug: data.slug || `novo-artigo-${Date.now()}`, category: data.category || "Sonhos", status: "rascunho", scheduledAt: "", seo: data.seo || "Meta description pendente", updatedAt: new Date().toISOString() };
    writeAdminStore("articles", [article, ...articles]);
    addAdminLog("Salvou artigo", article.slug);
  }

  if (action === "delete-article" && adminCan("content")) {
    writeAdminStore("articles", getAdminArticles().filter((article) => article.id !== button.dataset.articleId));
    addAdminLog("Excluiu artigo", button.dataset.articleId);
  }

  if (action === "edit-article" && adminCan("content")) {
    addAdminLog("Abriu edicao de artigo", button.dataset.articleId);
  }

  if (action === "schedule-article" && adminCan("content")) {
    writeAdminStore("articles", getAdminArticles().map((article) => article.id === button.dataset.articleId ? { ...article, status: "agendado", scheduledAt: new Date(Date.now() + 86400000).toISOString() } : article));
    addAdminLog("Agendou artigo", button.dataset.articleId);
  }

  if (action === "delete-dream" && adminCan("content")) {
    writeAdminStore("dreams", getAdminDreams().filter((dream) => dream.id !== button.dataset.dreamId));
    addAdminLog("Excluiu sonho", button.dataset.dreamId);
  }

  if (action === "edit-dream" && adminCan("content")) {
    addAdminLog("Abriu edicao de sonho", button.dataset.dreamId);
  }

  if (action === "save-horoscope" && adminCan("content")) {
    const id = button.dataset.horoscopeId;
    const value = document.querySelector(`[data-horoscope-id="${id}"]`)?.value || "";
    writeAdminStore("horoscope", getAdminHoroscope().map((item) => item.id === id ? { ...item, message: value } : item));
    addAdminLog("Atualizou horóscopo", id);
  }

  if (action === "toggle-game" && adminCan("content")) {
    const slug = button.dataset.game;
    const stored = adminStore("games", {});
    stored[slug] = { ...(stored[slug] || {}), active: !(stored[slug]?.active ?? true) };
    writeAdminStore("games", stored);
    addAdminLog("Alterou status de jogo", slug);
  }

  renderAuthState();
  renderDashboard();
  renderRevenueDashboard();
  renderAdmin();
}

function normalizeAiRecord(payload, method, input) {
  return {
    id: payload.id,
    game: payload.game,
    method: payload.method || method,
    input,
    input_text: payload.input_text || input,
    quantity: payload.quantity || payload.numbers?.length,
    numbers: payload.numbers,
    key: payload.key || key(payload.game, payload.numbers),
    createdAt: payload.created_at || payload.createdAt || new Date().toISOString(),
    ai_response: payload.ai_response || "",
    interpretation_type: payload.interpretation_type || (method === "sonho" ? "dream" : method === "nome-da-sorte" ? "numerology" : "horoscope"),
    is_favorite: Boolean(payload.is_favorite),
    ai_source: payload.ai_source || (payload.ai_response ? "openai" : "algorithm"),
    warning: payload.warning || ""
  };
}

function generationBody(game, method, input, quantity) {
  const body = { game, method, quantity, input, user: publicUser(getCurrentUser()) };
  if (method === "sonho") body.dream_input = input;
  if (method === "horoscopo") body.sign = input;
  if (method === "nome-da-sorte") body.name_input = input;
  return body;
}

// Chama apenas o backend local para proteger a chave da OpenAI no servidor.
async function requestBackendGeneration(game, method, input, quantity) {
  const response = await fetch(`${apiBaseUrl()}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(generationBody(game, method, input, quantity))
  });
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    throw new Error("A geração local foi usada nesta versão online.");
  }
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "A geração local foi usada nesta versão online.");
  return normalizeAiRecord(payload, method, input);
}

function sessionId() {
  const existing = localStorage.getItem(sessionKey);
  if (existing) return existing;
  const created = crypto.randomUUID();
  localStorage.setItem(sessionKey, created);
  return created;
}

function normalize(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function hash(value) {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function prng(seed) {
  let state = hash(seed) || 1;
  return () => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function normalizeRange(value, min, max) {
  const span = max - min + 1;
  return min + (((Math.abs(Math.trunc(value)) - min) % span) + span) % span;
}

function betOptionFor(game, quantity) {
  return betOptions[game]?.find((option) => option.numbers === Number(quantity)) || betOptions[game]?.[0];
}

function baseNumbers(method, input, rule) {
  const text = normalize(input);
  const raw = [];

  if (method === "sonho") {
    Object.entries(dreamBase).forEach(([keyword, values]) => {
      if (text.includes(keyword)) raw.push(...values);
    });
    text.split(/\s+/).forEach((word) => raw.push([...word].reduce((sum, char) => sum + char.charCodeAt(0), 0)));
  }

  if (method === "horoscopo") raw.push(...(signBase[text] || signBase.aries));

  if (method === "data-especial") {
    const pieces = text.match(/\d+/g)?.map(Number) || [];
    raw.push(...pieces, pieces.reduce((sum, value) => sum + value, 0));
  }

  if (method === "nome-da-sorte") {
    [...text].forEach((char, index) => {
      if (/[a-z]/.test(char)) raw.push((char.charCodeAt(0) - 96) * (index + 1));
    });
  }

  if (method === "matematica") {
    const span = rule.max - rule.min + 1;
    raw.push(rule.min, rule.max, rule.min + span * 0.25, rule.min + span * 0.5, rule.min + span * 0.75);
  }

  if (!raw.length) raw.push(hash(`${method}:${text}`), hash(`${text}:palpinet`));
  return [...new Set(raw.map((value) => normalizeRange(value, rule.min, rule.max)))];
}

function key(game, numbers) {
  return `${game}:${numbers.join("-")}`;
}

function maxRun(numbers) {
  let run = 1;
  let best = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] === numbers[index - 1] + 1) {
      run += 1;
      best = Math.max(best, run);
    } else {
      run = 1;
    }
  }
  return best;
}

function tooSimilar(game, numbers, history) {
  const count = numbers.length;
  const threshold = count >= 50 ? 46 : Math.max(count - 1, Math.floor(count * 0.82));
  return history
    .filter((record) => record.game === game)
    .slice(-1000)
    .some((record) => numbers.filter((number) => record.numbers.includes(number)).length >= threshold);
}

function generateSmart(game, method, input, quantity = games[game].count) {
  const rule = { ...games[game], count: Number(quantity) || games[game].count };
  const history = read(historyKey, []);
  const usage = read(usageKey, {});

  for (let attempt = 1; attempt <= 80; attempt += 1) {
    const userSeed = getCurrentUser()?.id || "guest";
    const seed = `${userSeed}|${Date.now()}|${method}|${input}|${sessionId()}|${attempt}`;
    const random = prng(seed);
    const base = baseNumbers(method, input, rule);
    const middle = Math.floor((rule.min + rule.max) / 2);
    const targetOdd = Math.round(rule.count / 2);
    const targetLow = Math.round(rule.count / 2);
    const selected = [];

    const candidates = Array.from({ length: rule.max - rule.min + 1 }, (_, index) => rule.min + index)
      .map((number) => {
        const used = usage[`${game}:${number}`] || 0;
        return {
          number,
          score: (base.includes(number) ? 4 : 0) + 3 / (used + 1) + random() * 2
        };
      })
      .sort((a, b) => b.score - a.score);

    for (const candidate of candidates) {
      if (selected.length >= rule.count) break;
      if (selected.includes(candidate.number)) continue;
      const odd = selected.filter((number) => number % 2 !== 0).length;
      const low = selected.filter((number) => number <= middle).length;
      const nextOdd = odd + (candidate.number % 2 !== 0 ? 1 : 0);
      const nextLow = low + (candidate.number <= middle ? 1 : 0);
      if (nextOdd > targetOdd + 2 && random() > 0.2) continue;
      if (nextLow > targetLow + 2 && random() > 0.2) continue;
      selected.push(candidate.number);
    }

    candidates.forEach((candidate) => {
      if (selected.length < rule.count && !selected.includes(candidate.number)) selected.push(candidate.number);
    });

    const numbers = selected.slice(0, rule.count).sort((a, b) => a - b);
    const obvious = maxRun(numbers) > (rule.count >= 15 ? 8 : 3);
    const duplicate = history.slice(-1000).some((record) => record.key === key(game, numbers));
    if (obvious || duplicate || tooSimilar(game, numbers, history)) continue;

    return {
      id: hash(`${seed}:${numbers.join(",")}`).toString(36),
      game,
      method,
      input,
      quantity: rule.count,
      numbers,
      key: key(game, numbers),
      createdAt: new Date().toISOString(),
      attempts: attempt,
      confidence: Math.max(82, 98 - attempt)
    };
  }
}

function formatNumber(game, number) {
  return String(number).padStart(2, "0");
}

// Mantem um histórico global local para reduzir repetições de combinações.
function saveRecord(record) {
  const history = read(historyKey, []);
  write(historyKey, [...history, record].slice(-1200));
  const usage = read(usageKey, {});
  record.numbers.forEach((number) => {
    usage[`${record.game}:${number}`] = (usage[`${record.game}:${number}`] || 0) + 1;
  });
  write(usageKey, usage);
}

function currentInputValue(method, input, signSelect) {
  return method === "horoscopo" ? signSelect.value : input.value;
}

function buildResultMessage(record) {
  const input = normalize(record.input);
  if (record.method === "horoscopo") {
    return `O signo de ${signOptions[input] || "Áries"} inspirou esta combinação recreativa.`;
  }

  if (record.method === "sonho") {
    const dreamText = input || "sonho informado";
    return `Sonho usado como inspiração: ${dreamText}. A combinação foi gerada como interpretação recreativa e simbólica.`;
  }

  if (record.method === "nome-da-sorte") {
    return `Nome usado como inspiração: ${record.input || "nome informado"}. A combinação simbólica segue a numerologia recreativa do Palpinet.`;
  }

  return `Gerado pelo método ${methods[record.method]}, mantendo números unicos e regras do jogo escolhido.`;
}

function readingTitleForRecord(record) {
  if (record.interpretation_type === "dream" || record.method === "sonho") return "Significado do sonho";
  if (record.interpretation_type === "numerology" || record.method === "nome-da-sorte") return "Interpretação numerológica";
  if (record.interpretation_type === "horoscope" || record.method === "horoscopo") return "Horóscopo do dia";
  return "Mensagem Palpinet";
}

function aiSourceLabel(record) {
  if (record.ai_source === "fallback") return "Modo local";
  if (record.ai_source === "algorithm") return "Algoritmo Palpinet";
  return "Gerado com OpenAI";
}

function emailResult(record) {
  const subject = encodeURIComponent(`Palpite Palpinet - ${games[record.game].name}`);
  const body = encodeURIComponent(
    `Sugestão Palpinet para ${games[record.game].name}\n\nNumeros: ${record.numbers.map((number) => formatNumber(record.game, number)).join(" - ")}\nMetodo: ${methods[record.method]}\n\n${record.ai_response || buildResultMessage(record)}`
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function renderResult(record) {
  const result = document.querySelector("#result");
  result.classList.remove("hidden");
  const formattedNumbers = record.numbers.map((number) => formatNumber(record.game, number));
  const betInfo = betOptionFor(record.game, record.quantity || record.numbers.length);
  const readingTitle = readingTitleForRecord(record);
  const aiText = record.ai_response ? escapeHtml(record.ai_response).replace(/\n/g, "<br>") : "";
  const heroNumbers = document.querySelector("#heroNumbers");
  if (heroNumbers) {
    heroNumbers.innerHTML = formattedNumbers.map((number) => `<b>${number}</b>`).join("");
  }
  result.innerHTML = `
    <div class="quick-label">
      <span>Sua combinação</span>
      <small>${games[record.game].name} • ${record.quantity || record.numbers.length} números • ${betInfo?.price || ""}</small>
    </div>
    <div class="quick-numbers">${formattedNumbers.map((number) => `<b class="number-ball">${number}</b>`).join("")}</div>
    <div class="quick-actions">
      <button data-action="save">Salvar</button>
      <button data-action="copy">Copiar</button>
      <button data-action="regenerate">Gerar Novamente</button>
      <button data-action="share">Compartilhar</button>
      <button data-action="email">Enviar por e-mail</button>
    </div>
    ${
      aiText
        ? `<section class="ai-reading">
            <div>
              <strong>${readingTitle}</strong>
              <span>${aiSourceLabel(record)}</span>
            </div>
            <p>${aiText}</p>
          </section>`
        : `<p class="result-note">${buildResultMessage(record)}</p>`
    }
    <p class="result-warning">As sugestões do Palpinet têm caráter recreativo e informativo. Não há garantia de premiação.</p>
    ${renderAdSlot("result-after-reading")}
  `;

  result.querySelector('[data-action="save"]').addEventListener("click", () => {
    const saved = saveGameToHistory(record);
    renderDashboard();
    if (saved.reason === "guest") {
      document.querySelector("#status").textContent = "Entre para salvar este palpite no seu histórico.";
      openAuthModal("login");
      return;
    }
    document.querySelector("#status").textContent = saved.reason === "exists" ? "Este palpite já está salvo." : "Palpite salvo no seu histórico.";
  });

  result.querySelector('[data-action="copy"]').addEventListener("click", () => {
    navigator.clipboard.writeText(record.numbers.map((number) => formatNumber(record.game, number)).join(" - "));
    trackEvent("copy_numbers", { game: record.game, method: record.method, source: "result_card" });
    document.querySelector("#status").textContent = "Números copiados.";
  });

  result.querySelector('[data-action="regenerate"]').addEventListener("click", () => {
    document.querySelector("#generate").click();
  });

  result.querySelector('[data-action="share"]').addEventListener("click", async () => {
    const text = `Meu palpite Palpinet para ${games[record.game].name}: ${record.numbers.map((number) => formatNumber(record.game, number)).join(" - ")}`;
    if (navigator.share) await navigator.share({ title: "Palpinet", text });
    else await navigator.clipboard.writeText(text);
    trackEvent("share_guess", { game: record.game, method: record.method, source: "result_card" });
  });

  result.querySelector('[data-action="email"]').addEventListener("click", () => {
    emailResult(record);
  });
}

function renderDashboard() {
  const user = getCurrentUser();
  const guest = document.querySelector("#clientGuest");
  const dashboard = document.querySelector("#clientDashboard");
  const title = document.querySelector("#clientTitle");
  const subtitle = document.querySelector("#clientSubtitle");

  if (!user) {
    guest.classList.remove("hidden");
    dashboard.classList.add("hidden");
    title.textContent = "Seu espaço no Palpinet";
    subtitle.textContent = "Entre para salvar palpites, favoritos, interpretações e preferências.";
    return;
  }

  guest.classList.add("hidden");
  dashboard.classList.remove("hidden");
  title.textContent = `Painel Palpinet de ${firstName(user.name)}`;
  subtitle.textContent = "Seu histórico local fica salvo neste navegador e separado dos outros usuários.";

  document.querySelector("#clientInitials").textContent = initials(user.name);
  document.querySelector("#clientName").textContent = user.name;
  document.querySelector("#clientEmail").textContent = user.email;
  document.querySelectorAll("[data-client-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.clientView === activeClientView);
  });

  const view = document.querySelector("#clientView");
  const renderers = {
    dashboard: renderClientHome,
    guesses: renderClientGuesses,
    favorites: renderClientFavorites,
    history: renderClientTimeline,
    interpretations: renderClientInterpretations,
    account: renderClientAccount,
    settings: renderClientSettings,
    benefits: renderClientBenefits
  };
  view.innerHTML = (renderers[activeClientView] || renderClientHome)(user);
}

function firstName(name = "") {
  return name.trim().split(/\s+/)[0] || "Usuário";
}

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase() || "PP";
}

function formatDateTime(value) {
  return new Date(value || Date.now()).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatDateOnly(value) {
  return new Date(value || Date.now()).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function formatGuessNumbers(record) {
  return (record.numbers || []).map((number) => formatNumber(record.game, number)).join(" - ");
}

function favoriteGuesses(user) {
  const favoriteIds = new Set(user.favorites || []);
  return (user.history || []).filter((record) => record.is_favorite || favoriteIds.has(record.id));
}

function clientStats(user) {
  const history = user.history || [];
  const favorites = favoriteGuesses(user);
  const favoriteMethod = mostCommon(history.map((record) => record.method));
  const favoriteGame = mostCommon(history.map((record) => record.game));
  return {
    total: history.length,
    favorites: favorites.length,
    favoriteMethod: methods[favoriteMethod] || "Ainda não definido",
    favoriteGame: games[favoriteGame]?.name || "Ainda não definido"
  };
}

function renderStatCards(user) {
  const stats = clientStats(user);
  return `
    <div class="dashboard-stats">
      <article><span>Total de palpites</span><strong>${stats.total}</strong><small>gerados nesta conta</small></article>
      <article><span>Favoritos salvos</span><strong>${stats.favorites}</strong><small>combinações marcadas</small></article>
      <article><span>Metodo mais usado</span><strong>${escapeHtml(stats.favoriteMethod)}</strong><small>base do seu perfil</small></article>
      <article><span>Jogo mais usado</span><strong>${escapeHtml(stats.favoriteGame)}</strong><small>preferência atual</small></article>
    </div>`;
}

function renderClientHome(user) {
  const history = user.history || [];
  const lastGuess = history[0];
  return `
    <section class="client-welcome">
      <div>
        <span class="client-kicker">Dashboard inteligente</span>
        <h3>Ola ${escapeHtml(firstName(user.name))}</h3>
        <p>Bem-vindo novamente ao Palpinet. Este é o seu painel pessoal para acompanhar palpites, sonhos, horóscopos e preferências.</p>
      </div>
      <button class="primary-button" type="button" data-client-view="guesses">Ver meus palpites</button>
    </section>
    ${renderStatCards(user)}
    <div class="client-two-column">
      <section class="client-panel">
        <div class="client-panel-head">
          <span>Meu último palpite</span>
          <button type="button" data-client-view="guesses">Ver todos</button>
        </div>
        ${lastGuess ? renderGuessCard(lastGuess, "featured") : renderEmptyState("Nenhum palpite salvo ainda", "Gere números logado para criar o primeiro registro do seu painel.")}
      </section>
      <section class="client-panel">
        <div class="client-panel-head"><span>Sugestão personalizada</span></div>
        ${renderRecommendation(user)}
        ${renderAchievements(user)}
      </section>
    </div>`;
}

function renderRecommendation(user) {
  const history = user.history || [];
  const favoriteGame = user.preferences?.favorite_game || mostCommon(history.map((record) => record.game));
  const favoriteMethod = user.preferences?.favorite_method || mostCommon(history.map((record) => record.method));

  if (!favoriteGame || !favoriteMethod) {
    return `
      <article class="recommendation-card">
        <strong>Seu perfil esta em construção</strong>
        <p>Gere alguns palpites para o Palpinet identificar seus jogos e métodos favoritos neste navegador.</p>
        <button class="secondary-button" type="button" data-client-view="guesses">Comecar jornada</button>
      </article>`;
  }

  return `
    <article class="recommendation-card">
      <strong>Você costuma usar ${escapeHtml(methods[favoriteMethod])} e ${escapeHtml(games[favoriteGame]?.name || favoriteGame)}.</strong>
      <p>Deseja gerar uma nova combinação seguindo esse mesmo caminho?</p>
      <button class="primary-button" type="button" data-client-action="generate-preferred" data-game="${favoriteGame}" data-method="${favoriteMethod}">
        Gerar nova combinação
      </button>
    </article>`;
}

function renderAchievements(user) {
  const history = user.history || [];
  const favorites = favoriteGuesses(user);
  const dreamCount = history.filter((record) => record.method === "sonho").length;
  const achievements = [
    { label: "Primeiro Palpite", done: history.length >= 1 },
    { label: "10 Palpites Gerados", done: history.length >= 10 },
    { label: "Primeiro Sonho Interpretado", done: dreamCount >= 1 },
    { label: "10 Favoritos Salvos", done: favorites.length >= 10 }
  ];

  return `
    <div class="achievement-grid">
      ${achievements
        .map((item) => `<span class="${item.done ? "done" : ""}">${item.done ? "Ativo" : "Pendente"}<b>${item.label}</b></span>`)
        .join("")}
    </div>`;
}

function renderClientGuesses(user) {
  const history = user.history || [];
  return `
    ${renderClientViewHead("Meus Palpites", "Todos os palpites gerados enquanto você estava logado.")}
    ${history.length ? `<div class="guess-list">${history.map((record) => renderGuessCard(record)).join("")}</div>` : renderEmptyState("Nenhum palpite encontrado", "Gere números no Gerador Rápido para preencher sua lista.")}
  `;
}

function renderClientFavorites(user) {
  const favorites = favoriteGuesses(user);
  const filtered = favorites.filter((record) => guessMatchesFavoriteFilter(record, activeFavoriteFilter));
  return `
    ${renderClientViewHead("Favoritos", "Combinações marcadas para consultar, copiar ou gerar semelhantes.")}
    <div class="favorite-filters">
      ${[
        ["all", "Todos"],
        ["mega-sena", "Mega-Sena"],
        ["lotofacil", "Lotofácil"],
        ["sonho", "Sonhos"],
        ["horoscopo", "Horóscopo"]
      ]
        .map(([value, label]) => `<button class="${activeFavoriteFilter === value ? "active" : ""}" type="button" data-client-filter="${value}">${label}</button>`)
        .join("")}
    </div>
    ${filtered.length ? `<div class="guess-list">${filtered.map((record) => renderGuessCard(record, "favorite")).join("")}</div>` : renderEmptyState("Nenhum favorito neste filtro", "Marque palpites como favoritos para ve-los aqui.")}
  `;
}

function guessMatchesFavoriteFilter(record, filter) {
  if (filter === "all") return true;
  if (games[filter]) return record.game === filter;
  return record.method === filter;
}

function renderClientTimeline(user) {
  const history = user.history || [];
  const now = new Date();
  const todayKey = now.toDateString();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 7);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const today = history.filter((record) => new Date(record.createdAt).toDateString() === todayKey);
  const week = history.filter((record) => new Date(record.createdAt) >= sevenDaysAgo);
  const month = history.filter((record) => new Date(record.createdAt) >= monthStart);
  const groups = history.reduce((acc, record) => {
    const day = formatDateOnly(record.createdAt);
    acc[day] = acc[day] || [];
    acc[day].push(record);
    return acc;
  }, {});

  return `
    ${renderClientViewHead("Histórico", "Uma linha do tempo visual com seus movimentos recentes.")}
    <div class="timeline-summary">
      <article><span>Hoje</span><strong>${today.length}</strong><small>${methodSummary(today)}</small></article>
      <article><span>Semana</span><strong>${week.length}</strong><small>palpites nos ultimos 7 dias</small></article>
      <article><span>Mes</span><strong>${month.length}</strong><small>palpites neste mes</small></article>
    </div>
    ${
      history.length
        ? `<div class="timeline-list">
            ${Object.entries(groups)
              .map(
                ([day, records]) => `
                <section>
                  <h4>${day}</h4>
                  ${records
                    .map(
                      (record) => `
                      <article>
                        <b>${new Date(record.createdAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</b>
                        <span>${escapeHtml(methods[record.method])} em ${escapeHtml(games[record.game].name)}</span>
                        <small>${formatGuessNumbers(record)}</small>
                      </article>`
                    )
                    .join("")}
                </section>`
              )
              .join("")}
          </div>`
        : renderEmptyState("Sem linha do tempo", "Seu histórico aparece automaticamente depois do primeiro palpite salvo.")
    }`;
}

function methodSummary(records) {
  if (!records.length) return "nenhum palpite hoje";
  const counts = records.reduce((acc, record) => {
    const label = methods[record.method] || record.method;
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts)
    .map(([label, count]) => `${count} por ${label}`)
    .join(", ");
}

function renderClientInterpretations(user) {
  const interpretations = (user.history || []).filter((record) => record.ai_response || record.method === "sonho" || record.method === "horoscopo" || record.method === "nome-da-sorte");
  return `
    ${renderClientViewHead("Minhas Interpretações", "Histórico de sonhos, horóscopos e numerologia vinculados aos seus números.")}
    ${
      interpretations.length
        ? `<div class="interpretation-grid">
            ${interpretations
              .map((record) => {
                const isDream = record.method === "sonho";
                const isNumerology = record.method === "nome-da-sorte";
                const label = isDream ? "Sonho" : isNumerology ? "Numerologia" : "Horóscopo";
                const title = isDream
                  ? record.input || "Sonho informado"
                  : isNumerology
                    ? record.input || "Nome informado"
                    : signOptions[normalize(record.input)] || record.input || "Signo";
                return `
                  <article class="interpretation-card">
                    <span>${label}</span>
                    <h4>${escapeHtml(title)}</h4>
                    <p>${escapeHtml(record.ai_response || buildResultMessage(record))}</p>
                    <div class="client-number-row">${(record.numbers || []).map((number) => `<b>${formatNumber(record.game, number)}</b>`).join("")}</div>
                    <small>${escapeHtml(games[record.game].name)} - ${formatDateTime(record.createdAt)}</small>
                  </article>`;
              })
              .join("")}
          </div>`
        : renderEmptyState("Nenhuma interpretação ainda", "Use Sonho ou Horóscopo no gerador para alimentar esta área.")
    }`;
}

function renderClientAccount(user) {
  return `
    ${renderClientViewHead("Minha Conta", "Atualize seus dados principais e prepare seu perfil para futuras personalizacoes.")}
    <form class="account-form" id="accountForm">
      <label>Nome<input id="accountName" type="text" value="${escapeHtml(user.name)}" /></label>
      <label>E-mail<input id="accountEmail" type="email" value="${escapeHtml(user.email)}" /></label>
      <label>Data de nascimento<input id="accountBirth" type="date" value="${escapeHtml(user.birth_date || "")}" /></label>
      <label>Signo<select id="accountSign">${renderSignOptions(user.sign)}</select></label>
      <label>Cidade<input id="accountCity" type="text" value="${escapeHtml(user.city || "")}" /></label>
      <p class="form-message" id="accountMessage"></p>
      <button class="primary-button" type="submit">Salvar alteracoes</button>
    </form>`;
}

function renderClientSettings(user) {
  const prefs = { ...preferenceDefaults, ...(user.preferences || {}) };
  const settings = [
    ["daily_emails", "E-mails"],
    ["lucky_numbers_daily", "Receber números da sorte diários"],
    ["horoscope_emails", "Receber horóscopo diário"],
    ["dream_emails", "Receber interpretação de sonhos"],
    ["newsletter", "Receber novidades do Palpinet"],
    ["privacy", "Privacidade reforcada neste dispositivo"]
  ];
  return `
    ${renderClientViewHead("Configurações", "Controle comunicacoes, privacidade e dados locais da sua conta.")}
    <div class="settings-grid">
      ${settings
        .map(
          ([keyName, label]) => `
          <label class="toggle-row">
            <span>${label}</span>
            <input type="checkbox" data-user-pref="${keyName}" ${prefs[keyName] ? "checked" : ""} />
          </label>`
        )
        .join("")}
    </div>
    <div class="settings-actions">
      <button class="secondary-button" type="button" data-client-action="export-data">Exportar dados</button>
      <button class="danger-button" type="button" data-client-action="delete-account">Excluir conta</button>
    </div>`;
}

function renderClientBenefits() {
  const benefits = [
    ["Histórico completo", "Nunca perca seus palpites gerados."],
    ["Favoritos", "Salve suas combinações preferidas."],
    ["Interpretações", "Acesse sonhos e horóscopos anteriores."],
    ["Personalização", "Receba sugestões adaptadas ao seu perfil."]
  ];
  return `
    ${renderClientViewHead("Benefícios da Conta", "Recursos pensados para transformar a experiência em um painel pessoal da sorte.")}
    <div class="benefits-grid">
      ${benefits.map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join("")}
    </div>`;
}

function renderClientViewHead(title, text) {
  return `<div class="client-view-head"><div><h3>${title}</h3><p>${text}</p></div></div>`;
}

function renderEmptyState(title, text) {
  return `<div class="client-empty-state"><strong>${title}</strong><p>${text}</p></div>`;
}

function renderGuessCard(record, variant = "") {
  const isFavorite = Boolean(record.is_favorite);
  const entry = record.input ? `<p class="guess-entry">Entrada: "${escapeHtml(record.input)}"</p>` : "";
  const reading = record.ai_response
    ? `<p class="guess-reading">${escapeHtml(record.ai_response).slice(0, 220)}${record.ai_response.length > 220 ? "..." : ""}</p>`
    : "";

  return `
    <article class="client-guess-card ${variant} ${isFavorite ? "is-favorite" : ""}">
      <header>
        <div>
          <span>${escapeHtml(games[record.game]?.name || record.game)}</span>
          <small>${escapeHtml(methods[record.method] || record.method)} - ${record.quantity || record.numbers.length} nums.</small>
        </div>
        <time>${formatDateTime(record.createdAt)}</time>
      </header>
      ${entry}
      <div class="client-number-row">${(record.numbers || []).map((number) => `<b>${formatNumber(record.game, number)}</b>`).join("")}</div>
      ${reading}
      <div class="client-row-actions">
        <button type="button" data-client-action="copy" data-guess-id="${record.id}">Copiar</button>
        <button type="button" data-client-action="favorite" data-guess-id="${record.id}">${isFavorite ? "Remover favorito" : "Favoritar"}</button>
        <button type="button" data-client-action="share" data-guess-id="${record.id}">Compartilhar</button>
        <button type="button" data-client-action="similar" data-guess-id="${record.id}">Gerar semelhante</button>
        <button type="button" data-client-action="details" data-guess-id="${record.id}">Ver detalhes</button>
        <button type="button" data-client-action="delete" data-guess-id="${record.id}">Excluir</button>
      </div>
    </article>`;
}

function renderSignOptions(current = "") {
  return `<option value="">Selecione</option>${Object.entries(signOptions)
    .map(([slug, name]) => `<option value="${slug}" ${normalize(current) === slug ? "selected" : ""}>${name}</option>`)
    .join("")}`;
}

function getGuessById(guessId) {
  const user = getCurrentUser();
  if (!user) return null;
  return (user.history || []).find((record) => record.id === guessId) || null;
}

function updateCurrentUser(updater) {
  const user = getCurrentUser();
  if (!user) return;
  updateUser(user.id, updater);
}

function toggleFavoriteGuess(guessId) {
  updateCurrentUser((user) => {
    const history = user.history || [];
    const current = history.find((record) => record.id === guessId);
    const nextFavoriteState = !current?.is_favorite;
    const nextHistory = history.map((record) => (record.id === guessId ? { ...record, is_favorite: nextFavoriteState } : record));
    const favoriteIds = new Set(user.favorites || []);
    if (nextFavoriteState) favoriteIds.add(guessId);
    else favoriteIds.delete(guessId);
    return { ...user, history: nextHistory, favorites: [...favoriteIds] };
  });
  renderDashboard();
}

function deleteGuessById(guessId) {
  updateCurrentUser((user) => ({
    ...user,
    history: (user.history || []).filter((record) => record.id !== guessId),
    favorites: (user.favorites || []).filter((id) => id !== guessId)
  }));
  renderDashboard();
}

async function copyGuessById(guessId) {
  const record = getGuessById(guessId);
  if (!record) return;
  await navigator.clipboard.writeText(formatGuessNumbers(record));
  trackEvent("copy_numbers", { game: record.game, method: record.method, source: "client_area" });
  document.querySelector("#status").textContent = "Palpite copiado.";
}

async function shareGuessById(guessId) {
  const record = getGuessById(guessId);
  if (!record) return;
  const text = `Palpite Palpinet para ${games[record.game].name}: ${formatGuessNumbers(record)}`;
  if (navigator.share) await navigator.share({ title: "Palpinet", text });
  else {
    await navigator.clipboard.writeText(text);
    document.querySelector("#status").textContent = "Texto de compartilhamento copiado.";
  }
  trackEvent("share_guess", { game: record.game, method: record.method, source: "client_area" });
}

function showGuessDetails(guessId) {
  const record = getGuessById(guessId);
  if (!record) return;
  revealGenerator();
  renderResult(record);
  document.querySelector("#result").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector("#status").textContent = "Detalhes carregados no gerador.";
}

function fillGeneratorFromRecord(record, autoGenerate = true) {
  const gameSelect = document.querySelector("#game");
  const quantitySelect = document.querySelector("#quantity");
  const methodSelect = document.querySelector("#method");
  const input = document.querySelector("#userInput");
  const signSelect = document.querySelector("#signSelect");

  gameSelect.value = record.game;
  gameSelect.dispatchEvent(new Event("change"));
  quantitySelect.value = String(record.quantity || record.numbers?.length || games[record.game].count);
  quantitySelect.dispatchEvent(new Event("change"));
  methodSelect.value = record.method;
  methodSelect.dispatchEvent(new Event("change"));

  if (record.method === "horoscopo") signSelect.value = normalize(record.input || "aries");
  else {
    input.value = record.input || "";
    if (input.value && ["aleatorio", "matematica"].includes(record.method)) {
      document.querySelector("#complementaryField").hidden = false;
      document.querySelector("#customizeToggle").setAttribute("aria-expanded", "true");
    }
  }

  revealGenerator();
  document.querySelector("#gerador").scrollIntoView({ behavior: "smooth", block: "start" });
  if (autoGenerate) window.setTimeout(() => document.querySelector("#generate").click(), 120);
}

function generateSimilarGuess(guessId) {
  const record = getGuessById(guessId);
  if (!record) return;
  fillGeneratorFromRecord(record, true);
}

function generatePreferred(game, method) {
  const record = {
    game,
    method,
    input: method === "horoscopo" ? getCurrentUser()?.sign || "aries" : "",
    quantity: games[game]?.count || 6,
    numbers: []
  };
  fillGeneratorFromRecord(record, true);
}

function exportCurrentUserData() {
  const user = getCurrentUser();
  if (!user) return;
  const safeUser = { ...user, password: "oculta" };
  const blob = new Blob([JSON.stringify({ users: [safeUser], guesses: user.history || [], favorites: user.favorites || [], user_preferences: user.preferences || {} }, null, 2)], {
    type: "application/json"
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `palpinet-${cleanEmail(user.email)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function deleteCurrentAccount() {
  const user = getCurrentUser();
  if (!user) return;
  if (!window.confirm("Excluir esta conta local e todos os dados salvos neste navegador?")) return;
  saveUsers(loadUsers().filter((storedUser) => storedUser.id !== user.id));
  endSession();
  renderAuthState();
  renderDashboard();
  document.querySelector("#status").textContent = "Conta local excluida.";
}

function saveAccountForm() {
  const user = getCurrentUser();
  if (!user) return;
  const name = document.querySelector("#accountName").value.trim();
  const email = cleanEmail(document.querySelector("#accountEmail").value);
  const birthDate = document.querySelector("#accountBirth").value;
  const sign = document.querySelector("#accountSign").value;
  const city = document.querySelector("#accountCity").value.trim();
  const message = document.querySelector("#accountMessage");

  if (!name || !email) {
    setMessage(message, "Preencha nome e e-mail.", "error");
    return;
  }

  const duplicate = loadUsers().some((storedUser) => storedUser.id !== user.id && cleanEmail(storedUser.email) === email);
  if (duplicate) {
    setMessage(message, "Este e-mail já está cadastrado.", "error");
    return;
  }

  updateUser(user.id, (storedUser) => ({
    ...storedUser,
    name,
    email,
    birth_date: birthDate,
    sign,
    city
  }));
  renderAuthState();
  renderDashboard();
  document.querySelector("#status").textContent = "Conta atualizada com sucesso.";
}

function updateUserPreference(keyName, value) {
  updateCurrentUser((user) => ({
    ...user,
    preferences: { ...preferenceDefaults, ...(user.preferences || {}), [keyName]: value }
  }));
}

function submitRecoveryForm() {
  const email = cleanEmail(document.querySelector("#recoverEmail").value);
  const message = document.querySelector("#recoverMessage");

  if (!pendingRecoveryEmail) {
    if (!email) {
      setMessage(message, "Informe o e-mail cadastrado.", "error");
      return;
    }

    const user = loadUsers().find((storedUser) => cleanEmail(storedUser.email) === email);
    if (!user) {
      setMessage(message, "E-mail não cadastrado.", "error");
      return;
    }

    pendingRecoveryEmail = email;
    document.querySelector("#recoverReset").classList.remove("hidden");
    document.querySelector("#recoverSubmit").textContent = "Criar nova senha";
    setMessage(message, "Link local liberado. Defina uma nova senha abaixo.", "success");
    return;
  }

  const password = document.querySelector("#recoverPassword").value;
  const confirmPassword = document.querySelector("#recoverPasswordConfirm").value;
  if (!password.trim() || !confirmPassword.trim()) {
    setMessage(message, "Preencha e confirme a nova senha.", "error");
    return;
  }
  if (password !== confirmPassword) {
    setMessage(message, "As senhas não conferem.", "error");
    return;
  }

  saveUsers(loadUsers().map((user) => (cleanEmail(user.email) === pendingRecoveryEmail ? { ...user, password } : user)));
  const recoveredEmail = pendingRecoveryEmail;
  pendingRecoveryEmail = "";
  document.querySelector("#recoverPassword").value = "";
  document.querySelector("#recoverPasswordConfirm").value = "";
  document.querySelector("#loginEmail").value = recoveredEmail;
  setAuthMode("login");
  setMessage(document.querySelector("#loginMessage"), "Senha atualizada. Entre com a nova senha.", "success");
}

function setMessage(element, message = "", type = "") {
  element.textContent = message;
  element.className = `form-message ${type}`.trim();
}

function setAuthMode(mode) {
  const isLogin = mode === "login";
  const isSignup = mode === "signup";
  const isRecover = mode === "recover";
  document.querySelector("#authTitle").textContent = isLogin ? "Entrar na sua conta" : isSignup ? "Criar conta gratis" : "Recuperar senha";
  document.querySelector("#loginForm").classList.toggle("hidden", !isLogin);
  document.querySelector("#signupForm").classList.toggle("hidden", !isSignup);
  document.querySelector("#recoverForm").classList.toggle("hidden", !isRecover);
  document.querySelector(".auth-tabs").classList.toggle("hidden", isRecover);
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
  setMessage(document.querySelector("#loginMessage"));
  setMessage(document.querySelector("#signupMessage"));
  setMessage(document.querySelector("#recoverMessage"));
  if (!isRecover) {
    pendingRecoveryEmail = "";
    document.querySelector("#recoverReset").classList.add("hidden");
    document.querySelector("#recoverSubmit").textContent = "Receber link local";
  }
}

function openAuthModal(mode = "login", afterAuth = null, message = "") {
  pendingAfterAuth = afterAuth;
  setAuthMode(mode);
  document.querySelector("#authModal").classList.remove("hidden");
  document.body.classList.add("modal-open");
  const target = mode === "login" ? document.querySelector("#loginEmail") : mode === "recover" ? document.querySelector("#recoverEmail") : document.querySelector("#signupName");
  window.setTimeout(() => target.focus(), 80);
  if (message) {
    const messageTarget = mode === "login" ? document.querySelector("#loginMessage") : mode === "recover" ? document.querySelector("#recoverMessage") : document.querySelector("#signupMessage");
    setMessage(messageTarget, message, "success");
  }
}

function closeAuthModal() {
  document.querySelector("#authModal").classList.add("hidden");
  document.body.classList.remove("modal-open");
  pendingAfterAuth = null;
}

function afterSuccessfulAuth() {
  const action = pendingAfterAuth;
  renderAuthState();
  renderDashboard();
  renderAdmin();
  closeAuthModal();

  if (action === "generator") {
    revealGenerator();
  document.querySelector("#gerador").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (action === "admin") {
    window.history.pushState({}, "", "/admin");
    renderBlog();
    renderAdmin();
  }
}

function renderAuthState() {
  const user = getCurrentUser();
  const visitorItems = [document.querySelector("#openLogin")];
  const loggedItems = [document.querySelector("#userChip"), document.querySelector("#accountLink"), document.querySelector("#logoutButton")];
  const adminLink = document.querySelector("#adminLink");

  visitorItems.filter(Boolean).forEach((item) => item.classList.toggle("hidden", Boolean(user)));
  loggedItems.filter(Boolean).forEach((item) => item.classList.toggle("hidden", !user));
  if (adminLink) adminLink.classList.toggle("hidden", !isAdminUser(user));
  document.querySelector("#adminAccountLink").classList.toggle("hidden", !isAdminUser(user));

  if (user) {
    document.querySelector("#userChip").textContent = `Olá, ${firstName(user.name)}`;
  }
}

function setup() {
  const gameSelect = document.querySelector("#game");
  const quantitySelect = document.querySelector("#quantity");
  const methodSelect = document.querySelector("#method");
  const input = document.querySelector("#userInput");
  const signSelect = document.querySelector("#signSelect");
  const signPicker = document.querySelector("#signPicker");
  const signupSign = document.querySelector("#signupSign");
  const label = document.querySelector("#inputLabel");
  const hint = document.querySelector("#inputHint");

  loadUsers();
  renderOfficialInfoCard();

  gameSelect.innerHTML = Object.entries(games)
    .map(([slug, game]) => `<option value="${slug}">${game.name}</option>`)
    .join("");
  methodSelect.innerHTML = Object.entries(methods)
    .map(([slug, name]) => `<option value="${slug}">${name}</option>`)
    .join("");
  methodSelect.value = "aleatorio";
  signSelect.innerHTML = Object.entries(signOptions)
    .map(([slug, name]) => `<option value="${slug}">${name}</option>`)
    .join("");
  signPicker.innerHTML = Object.entries(signOptions)
    .map(([slug, name]) => `<button class="sign-option" type="button" data-sign="${slug}">${name}</button>`)
    .join("");
  signupSign.innerHTML = renderSignOptions("");

  document.querySelector("#methods").innerHTML = Object.entries(methods)
    .map(
      ([slug, name], index) => `
        <article style="--card-a:${methodVisuals[slug].a};--card-b:${methodVisuals[slug].b}">
          <span class="method-icon">${methodVisuals[slug].icon}</span>
          <strong>${name}</strong>
          <p>${methodDescriptions[slug]}</p>
        </article>`
    )
    .join("");

  document.querySelector("#games").innerHTML = Object.entries(games)
    .map(
      ([slug, game]) => {
        const visual = gameVisuals[slug];
        const options = betOptions[slug] || [];
        return `
        <article style="--game-color:${visual.color}">
          <span class="game-icon">${visual.icon}</span>
          <strong>${game.name}</strong>
          <small>${game.count} números mínimos • ${options[0]?.price || "consulte"}</small>
                    <div class="game-summary">
                      <span>Probabilidade simples: ${options[0]?.probability || "consulte regras oficiais"}</span>
                      <em>Concurso, prêmio e valores devem ser conferidos nos canais oficiais.</em>
                    </div>
                    <div class="game-card-actions">
                      <button type="button" data-game-target="${slug}">Gerar números</button>
                      <a href="/jogos/${slug}">Ver opções</a>
                    </div>
        </article>`;
      }
    )
    .join("");

  function updateBetInfo() {
    const option = betOptionFor(gameSelect.value, Number(quantitySelect.value));
    document.querySelector("#betInfo").textContent = option ? `${option.price} · Probabilidade: ${option.probability}` : "Consulte as regras oficiais.";
  }
  quantitySelect.addEventListener("change", updateBetInfo);

  function updateQuantityOptions() {
    const options = betOptions[gameSelect.value] || [{ numbers: games[gameSelect.value].count, price: "", probability: "" }];
    quantitySelect.innerHTML = options
      .map((option) => `<option value="${option.numbers}">${option.numbers} números</option>`)
      .join("");
    updateBetInfo();
    renderOfficialInfoCard();
  }

  const customizeToggle = document.querySelector("#customizeToggle");
  customizeToggle.addEventListener("click", () => {
    const expanded = customizeToggle.getAttribute("aria-expanded") !== "true";
    customizeToggle.setAttribute("aria-expanded", String(expanded));
    document.querySelector("#complementaryField").hidden = !expanded;
    if (expanded) input.focus();
    else input.value = "";
  });

  // Required inspiration fields open automatically; optional inputs stay available.
  function updateDynamicInput() {
    const method = methodSelect.value;
    const config = methodInputConfig[method];
    const isSignMode = config.mode === "sign";
    const optional = method === "aleatorio" || method === "matematica";
    customizeToggle.hidden = !optional;
    customizeToggle.setAttribute("aria-expanded", "false");
    document.querySelector("#complementaryField").hidden = optional;
    label.htmlFor = isSignMode ? "signSelect" : "userInput";
    label.textContent = config.label;
    hint.textContent = config.hint;
    input.placeholder = config.placeholder || "";
    input.type = config.mode === "date" ? "date" : "text";
    input.classList.toggle("hidden", isSignMode);
    signSelect.classList.toggle("hidden", !isSignMode);
    signPicker.classList.add("hidden");
    if (isSignMode) {
      signSelect.value = signSelect.value || "aries";
      updateSelectedSignButton();
    }
    if (!isSignMode) input.value = "";
  }

  function updateSelectedSignButton() {
    signPicker.querySelectorAll("[data-sign]").forEach((button) => {
      button.classList.toggle("selected", button.dataset.sign === signSelect.value);
    });
  }

  gameSelect.addEventListener("change", updateQuantityOptions);
  methodSelect.addEventListener("change", updateDynamicInput);
  signPicker.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sign]");
    if (!button) return;
    signSelect.value = button.dataset.sign;
    updateSelectedSignButton();
  });

  document.querySelectorAll("[data-game-target]").forEach((button) => {
    button.addEventListener("click", () => {
      gameSelect.value = button.dataset.gameTarget;
      updateQuantityOptions();
      revealGenerator();
  document.querySelector("#gerador").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelector("#openLogin").addEventListener("click", () => openAuthModal("login"));
  document.querySelector("#clientLogin").addEventListener("click", () => openAuthModal("login"));
  document.querySelector("#clientSignup").addEventListener("click", () => openAuthModal("signup"));
  document.querySelector("#authClose").addEventListener("click", closeAuthModal);
  document.querySelector("[data-auth-close]").addEventListener("click", closeAuthModal);
  document.querySelector("#sponsorClose").addEventListener("click", closeSponsorPopup);
  document.querySelector("[data-sponsor-close]").addEventListener("click", closeSponsorPopup);
  document.querySelector("#sponsorMediaLink").addEventListener("click", (event) => {
    if (event.currentTarget.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
    }
  });
  document.querySelector("#forgotPassword").addEventListener("click", () => {
    document.querySelector("#recoverEmail").value = document.querySelector("#loginEmail").value;
    setAuthMode("recover");
  });
  document.querySelector("#logoutButton").addEventListener("click", () => {
    endSession();
    renderAuthState();
    renderDashboard();
    renderAdmin();
    document.querySelector("#status").textContent = "Sessao encerrada. Você esta como visitante.";
  });

  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
  });

  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const result = authenticateUser(document.querySelector("#loginEmail").value, document.querySelector("#loginPassword").value);
    if (!result.ok) {
      setMessage(document.querySelector("#loginMessage"), result.message, "error");
      return;
    }
    document.querySelector("#loginPassword").value = "";
    afterSuccessfulAuth();
  });

  document.querySelector("#signupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const result = createUser(
      document.querySelector("#signupName").value,
      document.querySelector("#signupEmail").value,
      document.querySelector("#signupPassword").value,
      {
        birth_date: document.querySelector("#signupBirth").value,
        sign: document.querySelector("#signupSign").value,
        city: document.querySelector("#signupCity").value
      }
    );
    if (!result.ok) {
      setMessage(document.querySelector("#signupMessage"), result.message, "error");
      return;
    }
    document.querySelector("#signupPassword").value = "";
    afterSuccessfulAuth();
  });

  document.querySelector("#recoverForm").addEventListener("submit", (event) => {
    event.preventDefault();
    submitRecoveryForm();
  });

  document.querySelector("#clientDashboard").addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-client-view]");
    if (viewButton) {
      activeClientView = viewButton.dataset.clientView;
      document.querySelector("#clientNav").classList.remove("is-open");
      document.querySelector("#clientMenuToggle").setAttribute("aria-expanded", "false");
      renderDashboard();
      return;
    }

    const filterButton = event.target.closest("[data-client-filter]");
    if (filterButton) {
      activeFavoriteFilter = filterButton.dataset.clientFilter;
      renderDashboard();
      return;
    }

    const actionButton = event.target.closest("[data-client-action]");
    if (!actionButton) return;
    const action = actionButton.dataset.clientAction;
    const guessId = actionButton.dataset.guessId;

    if (action === "copy") copyGuessById(guessId);
    if (action === "favorite") toggleFavoriteGuess(guessId);
    if (action === "share") shareGuessById(guessId);
    if (action === "similar") generateSimilarGuess(guessId);
    if (action === "details") showGuessDetails(guessId);
    if (action === "delete" && window.confirm("Excluir este palpite do histórico?")) deleteGuessById(guessId);
    if (action === "generate-preferred") generatePreferred(actionButton.dataset.game, actionButton.dataset.method);
    if (action === "export-data") exportCurrentUserData();
    if (action === "delete-account") deleteCurrentAccount();
  });

  document.querySelector("#clientDashboard").addEventListener("submit", (event) => {
    if (!event.target.matches("#accountForm")) return;
    event.preventDefault();
    saveAccountForm();
  });

  document.querySelector("#clientDashboard").addEventListener("change", (event) => {
    const prefInput = event.target.closest("[data-user-pref]");
    if (!prefInput) return;
    updateUserPreference(prefInput.dataset.userPref, prefInput.checked);
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("#sponsorClose")) {
      event.preventDefault();
      closeSponsorPopup();
      return;
    }

    const adSlot = event.target.closest(".ad-slot");
    if (adSlot) trackEvent("click_ad_area", { position: adSlot.dataset.adPosition || "unknown" });

    const adminLogin = event.target.closest("[data-admin-login]");
    if (adminLogin) {
      openAuthModal("login", "admin", "Entre com uma conta administrativa.");
      return;
    }

    const adminViewButton = event.target.closest("[data-admin-view]");
    if (adminViewButton) {
      activeAdminView = adminViewButton.dataset.adminView;
      window.history.pushState({}, "", activeAdminView === "dashboard" ? "/admin" : `/admin/${activeAdminView}`);
      renderAdmin();
      return;
    }

    const adminFilterButton = event.target.closest("[data-admin-filter]");
    if (adminFilterButton) {
      activeAdminFilter = adminFilterButton.dataset.adminFilter;
      renderAdmin();
      return;
    }

    const adminActionButton = event.target.closest("[data-admin-action]");
    if (adminActionButton) {
      handleAdminAction(adminActionButton);
      return;
    }

    const adminCouponDelete = event.target.closest("[data-admin-coupon-delete]");
    if (adminCouponDelete) {
      const couponId = adminCouponDelete.dataset.adminCouponDelete;
      const coupons = getSponsorCoupons().filter((coupon) => coupon.id !== couponId);
      saveSponsorCoupons(coupons);
      writeCloudSetting(cloudSettings.couponsKey, coupons).catch((error) => console.warn("Cupom removido localmente, mas não sincronizado:", error));
      addAdminLog("Removeu cupom de patrocinador", couponId);
      renderAdmin();
      renderBlog();
      return;
    }

    const generateNowLink = event.target.closest("[data-generate-now]");
    if (generateNowLink && !event.defaultPrevented && !getCurrentUser()) {
      event.preventDefault();
      openAuthModal("login", "generator", "Entre ou crie uma conta gratis para continuar.");
      return;
    }

    const categoryButton = event.target.closest("[data-blog-category]");
    if (categoryButton) {
      document.querySelectorAll("[data-blog-category]").forEach((button) => button.classList.toggle("active", button === categoryButton));
      trackEvent("blog_category_filter", { category: categoryButton.dataset.blogCategory });
      renderBlogGrid(filterBlogArticles(document.querySelector("#blogSearchInput")?.value || "", categoryButton.dataset.blogCategory));
      return;
    }

    const exampleButton = event.target.closest("[data-search-example]");
    if (exampleButton) {
      const searchInput = document.querySelector("#blogSearchInput");
      if (searchInput) {
        searchInput.value = exampleButton.dataset.searchExample;
        trackEvent("site_search", { query: searchInput.value, source: "example" });
        renderBlogGrid(filterBlogArticles(searchInput.value, document.querySelector("[data-blog-category].active")?.dataset.blogCategory || "Todos"));
      }
    }

    const copyCouponButton = event.target.closest("[data-copy-coupon]");
    if (copyCouponButton) {
      const code = copyCouponButton.dataset.copyCoupon || "";
      if (code && navigator.clipboard) navigator.clipboard.writeText(code);
      copyCouponButton.textContent = code ? "Cupom copiado" : "Oferta aberta";
      trackEvent("copy_coupon", { code });
      return;
    }

    const couponLink = event.target.closest("[data-coupon-link]");
    if (couponLink) {
      trackEvent("click_coupon_partner", { coupon_id: couponLink.dataset.couponLink });
    }
  });

  document.addEventListener("submit", async (event) => {
    if (event.target.matches("#adminDreamForm")) {
      event.preventDefault();
      if (!adminCan("content")) return;
      const data = Object.fromEntries(new FormData(event.target).entries());
      const dream = {
        id: `dream_${hash(`${data.term}:${Date.now()}`).toString(36)}`,
        term: data.term || "Novo sonho",
        interpretation: data.interpretation || "Interpretação pendente.",
        keywords: data.keywords || "",
        seo: data.seo || ""
      };
      writeAdminStore("dreams", [dream, ...getAdminDreams()]);
      addAdminLog("Salvou sonho", dream.term);
      renderAdmin();
      return;
    }

    if (event.target.matches("#adminPromptForm")) {
      event.preventDefault();
      if (!adminCan("ai")) return;
      writeAdminStore("prompts", Object.fromEntries(new FormData(event.target).entries()));
      addAdminLog("Atualizou prompts de IA", "ai");
      renderAdmin();
      return;
    }

    if (event.target.matches("#adminAITestForm")) {
      event.preventDefault();
      const output = document.querySelector("#adminAIOutput");
      const topic = String(new FormData(event.target).get("topic") || "").trim();
      if (!topic) {
        output.textContent = "Informe um tema para testar.";
        return;
      }
      output.textContent = "Testando resposta da IA...";
      try {
        const draft = await requestEditorialDraft(topic, "Sonhos");
        output.innerHTML = escapeHtml(draft.ai_response).replace(/\n/g, "<br>");
        addAdminLog("Testou resposta de IA", topic);
      } catch (error) {
        output.textContent = error.message || "Não foi possível testar a IA.";
      }
      return;
    }

    if (event.target.matches("#adminSettingsForm")) {
      event.preventDefault();
      if (!adminCan("settings")) return;
      const data = Object.fromEntries(new FormData(event.target).entries());
      writeAdminStore("settings", {
        ...data,
        backup: event.target.elements.backup.checked,
        spamProtection: event.target.elements.spamProtection.checked
      });
      addAdminLog("Atualizou configurações gerais", "settings");
      renderAdmin();
      renderOfficialInfoCard();
      return;
    }

    if (event.target.matches("#adminSponsorForm")) {
      event.preventDefault();
      if (!adminCan("settings")) return;
      const form = event.target;
      const message = form.querySelector("#sponsorAdminMessage");
      const submitButton = form.querySelector("button[type='submit']");
      submitButton.disabled = true;
      if (message) message.textContent = "Salvando patrocinador...";

      try {
        const data = Object.fromEntries(new FormData(form).entries());
        const slots = [];
        for (let index = 0; index < 3; index += 1) {
          const file = form.elements[`slotLogoFile${index}`]?.files?.[0];
          const logo = file ? await uploadSponsorLogo(file) : String(data[`slotLogo${index}`] || "").trim();
          slots.push({
            active: Boolean(form.elements[`slotActive${index}`]?.checked),
            name: String(data[`slotName${index}`] || `Patrocinador ${index + 1}`).trim(),
            logo,
            link: String(data[`slotLink${index}`] || "").trim()
          });
        }
        const firstActive = slots.find((slot) => slot.active && slot.logo) || slots.find((slot) => slot.logo) || slots[0];
        const sponsor = {
          ...sponsorSettingsDefaults,
          enabled: form.elements.enabled.checked,
          showOnLoad: form.elements.showOnLoad.checked,
          name: firstActive.name,
          logo: firstActive.logo,
          link: firstActive.link,
          slots
        };
        activeSponsorPopup = null;
        writeAdminStore("sponsor", sponsor);
        await writeCloudSetting(cloudSettings.sponsorKey, sponsor);
        addAdminLog("Atualizou patrocinador", "sponsor");
        renderAdmin();
        renderSponsorPopup();
      } catch (error) {
        if (message) {
          message.textContent = error.message || "Não foi possível salvar o patrocinador.";
          message.classList.add("error");
        }
      } finally {
        submitButton.disabled = false;
      }
      return;
    }

    if (event.target.matches("#adminCouponForm")) {
      event.preventDefault();
      if (!adminCan("settings")) return;
      const form = event.target;
      const data = Object.fromEntries(new FormData(form).entries());
      const coupon = {
        id: `coupon_${hash(`${data.sponsor}:${Date.now()}`).toString(36)}`,
        active: form.elements.active.checked,
        sponsor: String(data.sponsor || "").trim() || "Patrocinador",
        title: String(data.title || "").trim() || "Oferta especial",
        description: String(data.description || "").trim(),
        couponCode: String(data.couponCode || "").trim().toUpperCase(),
        discount: String(data.discount || "").trim(),
        logo: String(data.logo || "").trim(),
        link: String(data.link || "").trim() || "#"
      };
      const coupons = [coupon, ...getSponsorCoupons()].slice(0, 40);
      saveSponsorCoupons(coupons);
      await writeCloudSetting(cloudSettings.couponsKey, coupons);
      addAdminLog("Cadastrou cupom de patrocinador", coupon.sponsor);
      form.reset();
      renderAdmin();
      renderBlog();
      return;
    }

    if (event.target.matches("#blogSearchForm")) {
      event.preventDefault();
      const query = document.querySelector("#blogSearchInput").value;
      trackEvent("site_search", { query, source: "blog" });
      if (normalize(query).includes("sonhar") || normalize(query).includes("sonho")) trackEvent("dream_search", { query, source: "blog" });
      renderBlogGrid(filterBlogArticles(query, document.querySelector("[data-blog-category].active")?.dataset.blogCategory || "Todos"));
      return;
    }

    if (event.target.matches("#editorialForm")) {
      event.preventDefault();
      const output = document.querySelector("#editorialOutput");
      const topic = document.querySelector("#editorialTopic").value.trim();
      const category = document.querySelector("#editorialCategory").value;
      if (!topic) {
        output.textContent = "Informe um tema antes de gerar o rascunho.";
        return;
      }
      output.textContent = "Gerando rascunho editorial...";
      try {
        const draft = await requestEditorialDraft(topic, category);
        output.innerHTML = escapeHtml(draft.ai_response).replace(/\n/g, "<br>");
      } catch (error) {
        output.textContent = error.message || "Não foi possível gerar o rascunho.";
      }
      return;
    }

    if (event.target.matches("[data-lead-form]")) {
      event.preventDefault();
      const result = saveLead(event.target);
      const message = event.target.querySelector("[data-lead-message]");
      message.textContent = result.message;
      message.className = result.ok ? "success" : "error";
      if (result.ok) {
        trackEvent("generate_lead", { source: new FormData(event.target).get("source") || "blog" });
        event.target.reset();
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !document.querySelector("#authModal").classList.contains("hidden")) {
      closeAuthModal();
    }
    if (event.key === "Escape" && !document.querySelector("#sponsorModal").classList.contains("hidden")) {
      closeSponsorPopup();
    }
  });

  document.querySelector("#generate").addEventListener("click", async () => {
    const generateButton = document.querySelector("#generate");
    const method = methodSelect.value;
    const value = currentInputValue(method, input, signSelect);
    const quantity = Number(quantitySelect.value) || games[gameSelect.value].count;
    const usesAiReading = method === "sonho" || method === "horoscopo" || method === "nome-da-sorte";
    const requiredInputMessage = method === "sonho"
      ? "Descreva seu sonho para gerar a interpretação."
      : method === "nome-da-sorte"
        ? "Informe um nome para gerar a interpretação numerológica."
        : "";

    if (requiredInputMessage && !value.trim()) {
      document.querySelector("#status").textContent = requiredInputMessage;
      return;
    }

    generateButton.disabled = true;
    document.querySelector("#status").textContent = usesAiReading
      ? "Gerando números e interpretação personalizada..."
      : "Criando sua combinação...";

    try {
      const record = await requestBackendGeneration(gameSelect.value, method, value, quantity);
      saveRecord(record);
      const savedForUser = saveGameToHistory(record);
      trackEvent("generate_numbers", { game: record.game, method: record.method, quantity: record.quantity, logged_in: Boolean(getCurrentUser()) });
      if (method === "sonho") trackEvent("dream_search", { query: value, game: record.game, source: "generator" });
      if (method === "horoscopo") trackEvent("horoscope_view", { sign: value, game: record.game, source: "generator" });
      renderResult(record);
      renderDashboard();
      document.querySelector("#status").textContent = savedForUser.saved
        ? usesAiReading
          ? "Palpite gerado, interpretado e salvo no seu histórico."
          : "Palpite gerado e salvo no seu histórico."
        : savedForUser.reason === "guest"
          ? "Palpite gerado. Entre para salvar no seu histórico."
          : "Palpite gerado e já estava salvo no seu histórico.";
    } catch (error) {
      const fallbackRecord = generateSmart(gameSelect.value, method, value, quantity) || generateSmart(gameSelect.value, "aleatorio", crypto.randomUUID(), quantity);
      saveRecord(fallbackRecord);
      saveGameToHistory(fallbackRecord);
      trackEvent("generate_numbers", { game: fallbackRecord.game, method: fallbackRecord.method, quantity: fallbackRecord.quantity, mode: "fallback" });
      renderResult(fallbackRecord);
      renderDashboard();
      console.warn("Falha na geração pelo backend Palpinet:", error);
      document.querySelector("#status").textContent = "Seus números foram gerados com sucesso.";
    } finally {
      generateButton.disabled = false;
    }
  });

  updateQuantityOptions();
  updateDynamicInput();
  hydrateAdSlots();
  renderBlog();
  renderRevenueDashboard();
  renderAuthState();
  renderDashboard();
  renderAdmin();
  renderSponsorPopup();
  hydrateCloudSponsorSettings();
  setupNavigation();
  updatePublicRoute();
}

function renderHomeArticles() {
  const selected = [];
  for (const article of blogArticles) {
    if (!selected.some(item => item.category === article.category)) selected.push(article);
    if (selected.length === 3) break;
  }
  return `<div class="section-shell home-articles"><div class="home-articles-head"><div>
    <span class="eyebrow">Um convite à curiosidade</span><h2>Inspiração para explorar</h2></div>
    <a class="text-link" href="/blog">Ver todos os artigos <span aria-hidden="true">→</span></a></div>
    <div class="blog-grid">${selected.map(renderArticleCard).join("")}</div></div>`;
}

function revealGenerator() {
  // Keep local state when a saved combination is opened from the account.
  if (!["/", "/gerador"].includes(window.location.pathname) || window.location.hash === "#cliente") {
    window.history.pushState({}, "", "/#gerador");
    renderBlog();
    renderAdmin();
  }
  updatePublicRoute();
}

function updatePublicRoute() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const account = path === "/conta" || (path === "/" && window.location.hash === "#cliente");
  const home = path === "/" && !account;
  const generator = path === "/gerador";
  document.body.dataset.page = account ? "account" : generator ? "generator" : home ? "home" : "internal";
  const visible = new Set(account ? ["cliente"] : generator ? ["home", "gerador", "officialSummary"] : home ? ["home", "gerador", "officialSummary", "como-funciona", "blog"] : path.startsWith("/admin") ? ["admin", "receita"] : ["blog"]);
  document.querySelectorAll("main > section").forEach(section => { section.hidden = !visible.has(section.id); });
  document.querySelector("#home h1").innerHTML = generator ? "Uma combinação <span>com a sua inspiração.</span>" : "Sua inspiração,<br><span>em outra dimensão.</span>";
  for (const [id, expected] of [["catalogMethods", "/metodos"], ["catalogGames", "/jogos"]]) {
    document.querySelector(`#${id}`).hidden = path !== expected;
  }
  document.querySelectorAll("#primaryNav a").forEach(link => {
    const active = link.pathname === "/" ? home : path === link.pathname || path.startsWith(link.pathname + "/");
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
  });
}

function setupNavigation() {
  const toggle = document.querySelector("#menuToggle");
  const nav = document.querySelector("#primaryNav");
  const explore = document.querySelector("#exploreMenu");
  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); explore.open = false;
  }
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open)); nav.classList.toggle("is-open", open);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && (explore.open || nav.classList.contains("is-open"))) {
      const target = explore.open ? explore.querySelector("summary") : toggle;
      closeMenu(); target.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".site-header")) closeMenu();
    if (event.target.closest("#primaryNav a")) closeMenu();
  });
  document.querySelector("#clientLogout").addEventListener("click", () => document.querySelector("#logoutButton").click());
  const clientToggle = document.querySelector("#clientMenuToggle");
  clientToggle.addEventListener("click", () => {
    const open = clientToggle.getAttribute("aria-expanded") !== "true";
    clientToggle.setAttribute("aria-expanded", String(open));
    document.querySelector("#clientNav").classList.toggle("is-open", open);
  });
  window.addEventListener("hashchange", updatePublicRoute);
  window.addEventListener("popstate", () => { renderBlog(); renderAdmin(); updatePublicRoute(); });
}

setup();
