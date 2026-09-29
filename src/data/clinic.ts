export const whatsappUrl = 'https://wa.me/message/SZXSDXWXDTAOO1';

export const instagramUrl = 'https://www.instagram.com/odontologiazaya/?hl=en';

export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Zaya+Odontologia+Humanizada+Av.+Coca+751+Vila+Curu%C3%A7%C3%A1+S%C3%A3o+Paulo';

export const ctaLabel = 'Agendar avaliação';

export const seo = {
  title: 'Zaya Odontologia Humanizada | Vila Curuçá, São Paulo',
  description:
    'Clínica da Dra. Adrielle Lucena Mota na Av. Coca, 751, Vila Curuçá. Agende a avaliação pelo WhatsApp.',
};

export const nav = [
  { href: '#cuidados', label: 'Cuidados' },
  { href: '#por-que', label: 'Por que a Zaya' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#onde', label: 'Onde estamos' },
] as const;

export const hero = {
  line1: 'Cuidado calmo para quem',
  line2: 'adiou o dentista.',
  sub: 'A Dra. Adrielle Lucena Mota atende na Vila Curuçá, em São Miguel Paulista. A avaliação começa com uma conversa, e cada etapa é explicada antes de acontecer.',
  proof: '5,0 no Google · 5 avaliações',
};

export const cuidados = [
  {
    id: 'avaliacao',
    title: 'Avaliação',
    text: 'Você conta o que sente e sai com um caminho claro.',
  },
  {
    id: 'clinico',
    title: 'Clínico geral',
    text: 'O atendimento de rotina, com tempo para explicar cada passo.',
  },
  {
    id: 'criancas',
    title: 'Crianças',
    text: 'A visita é apresentada com calma, para a criança entender o consultório.',
  },
  {
    id: 'medo',
    title: 'Medo de dentista',
    text: 'A avaliação começa devagar, sem empurrar o procedimento.',
  },
] as const;

export const benefits = [
  {
    title: 'Clareza antes do procedimento.',
    text: 'Cada etapa é dita antes de acontecer.',
  },
  {
    title: 'Crianças mais seguras.',
    text: 'O consultório é apresentado com calma, do começo ao fim.',
  },
  {
    title: 'Paciência com medo antigo.',
    text: 'Trauma de dentista entra na conversa da avaliação.',
  },
  {
    title: 'Chegada sem pressa.',
    text: 'Recepção com café e vaga de estacionamento.',
  },
  {
    title: 'Rua tranquila, consultório equipado.',
    text: 'Vila Curuçá, São Miguel Paulista.',
  },
] as const;

export const tagline = [
  ['Cada', 'etapa'],
  ['é', 'explicada.'],
  ['Cada', 'visita'],
  ['fica', 'mais', 'leve.'],
] as const;

export const steps = [
  'Escreva no WhatsApp o que está sentindo.',
  'Receba os horários livres e o valor da avaliação.',
  'Na consulta, saia com o plano explicado.',
] as const;

export const reviews = [
  {
    quote:
      'Eu carregava um trauma de infância com dentistas. Depois da avaliação com a Dra. Adrielle e a Michele, criei coragem e iniciei o tratamento. O atendimento é humanizado e leve.',
    name: 'Valdeilson Ribeiro',
    initials: 'VR',
  },
  {
    quote:
      'Clínica acolhedora, com carinho com a minha pequena. Ela se sentiu totalmente segura.',
    name: 'Dani Alves',
    initials: 'DA',
  },
  {
    quote:
      'Desde o primeiro contato explicaram cada passo. Minha filha ficou tranquila, com muito carinho e atenção.',
    name: 'Vagner Pereira',
    initials: 'VP',
  },
  {
    quote:
      'A Dra. Adrielle explica tudo com clareza e passa confiança. Eu e minha filha nos sentimos acolhidas do início ao fim.',
    name: 'Giovana Cavalcante',
    initials: 'GC',
  },
  {
    quote:
      'Ela cuida do meu filho Gabriel com carinho e paciência, e ele até gosta de ir ao dentista. A Elane nos recebe com simpatia.',
    name: 'Larissa Dantas',
    initials: 'LD',
  },
] as const;

export const faq = [
  {
    q: 'Onde fica a clínica?',
    a: 'Av. Coca, 751, Casa 1, Vila Curuçá, São Miguel Paulista, São Paulo. CEP 08030-000.',
  },
  {
    q: 'Como agendo?',
    a: 'Por mensagem no WhatsApp. Sem formulário e sem encaminhamento.',
  },
  {
    q: 'Atendem crianças?',
    a: 'Sim. O consultório recebe crianças e adultos.',
  },
  {
    q: 'Tenho medo de dentista. Vocês atendem?',
    a: 'Sim. A avaliação começa pela conversa.',
  },
  {
    q: 'Qual o valor da avaliação?',
    a: 'A clínica responde com o valor atual no WhatsApp.',
  },
  {
    q: 'Qual o horário?',
    a: 'Os horários livres são confirmados na mensagem.',
  },
  {
    q: 'Quem é a responsável técnica?',
    a: 'Dra. Adrielle Lucena Mota, CROSP 148412. A clínica é Zaya Odontologia, CROSP-PJ 029914.',
  },
  {
    q: 'Preciso levar exames?',
    a: 'Traga o que já tiver. Se não tiver, a avaliação segue mesmo assim.',
  },
] as const;

export const dentist = {
  name: 'Dra. Adrielle Lucena Mota',
  cro: 'CROSP 148412',
  clinic: 'Zaya Odontologia',
  clinicCro: 'CROSP-PJ 029914',
  text: 'Ela conduz a avaliação e o cuidado clínico da Zaya, com tempo para explicar cada etapa.',
};

export const address = {
  street: 'Av. Coca, 751, Casa 1',
  area: 'Vila Curuçá · São Paulo',
  cep: 'CEP 08030-000',
};

function json(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const businessJsonLd = json({
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness'],
  name: 'Zaya Odontologia Humanizada',
  image: '/logo.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Coca, 751, Casa 1',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '08030-000',
    addressCountry: 'BR',
  },
  areaServed: 'São Miguel Paulista',
  employee: {
    '@type': 'Person',
    name: dentist.name,
    identifier: dentist.cro,
    jobTitle: 'Responsável técnica',
  },
  sameAs: [instagramUrl],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '5',
    bestRating: '5',
  },
});

export const faqJsonLd = json({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
});
