export interface Certificate {
  date: string;
  title: string;
  url?: string;
  provider?: string;
  providerUrl?: string;
}

export const languages = [
  '🇺🇦 UKRAINIAN',
  '🇺🇸 ENGLISH'
];

export const skills = [
  'HTML', 'CSS', 'SASS', 'BEM', 'TAILWIND', 'JAVASCRIPT', 'TYPESCRIPT', 'RXJS', 
  'REACT', 'ANGULAR', 'BOOTSTRAP', 'MATERIAL UI', 'JEST', 'CYPRESS', 'POSTMAN', 
  'SWAGGER', 'GIT', 'JIRA', 'FIGMA', 'CI/CD', 'REST API', 'GRAPHQL', 'BFF', 
  'NODE.JS', 'MODULE FEDERATION', 'MICRO FRONTENDS', 'MONOREPO'
];

export const character = [
  'HONEST', 'CURIOUS', 'DEPENDABLE', 'CONSISTENT', 'RESPONSIBLE', 'TEAM-ORIENTED',
  'FAMILY-FOCUSED', 'ARCHITECT', 'EMPATHETIC', 'CURIOUS', 'PROCRASTINATOR'
];

export const likes = [
  'HUMOUR', 'PIZZA', 'IRONY', 'DOGS', 'BUGRERS', 'LOTR', 'FRIENDS',
  'EGGS AND ORANGE JUICE', 'SELF-EDUCATION', 'BOB ROSS', 'DRAMA MOVIES',
  'INIESTA', 'BRITISH ACCENT', 'NATURE', 'BLUE COLOR', 'SPORTS', 'ROGER FEDERER'
];

export const dislikes = [
  'RACISM', 'OWN BAD HABITS', 'ALCOHOL', 'ASS-KISSERS', 'SMOKERS', 'BIKERS',
  'CIRCUSES WITH ANIMALS', 'PASSIVE-AGGRESSIVE', 'BUREAUCRACY'
];

export const wants = [
  'TO BE FIT AND HEALTHY',
  'TO TRAVEL',
  'TO OWN MY SCHEDULE'
];

export const certificates: Certificate[] = [
  {
    date: 'September 2025',
    title: 'Crash Course: Algorithms and Data Structures in JS',
    url: 'https://fwdays.com/en/event/algorithms-js-course/user/3b36150c6323c912f8338aa7964a70e90b8297710506a5a7fa40f1c752e58b4c/certificate/standard',
    provider: 'fwdays',
    providerUrl: 'https://fwdays.com/en/'
  },
  {
    date: 'August 2025',
    title: 'EF SET English Certificate',
    url: '#',
    provider: 'EF SET',
    providerUrl: 'https://www.efset.org'
  },
  {
    date: '2nd June 2025',
    title: 'Certificate of successful completion The Joy of React',
    url: 'https://courses.joshwcomeau.com/certificate/683d95ec290b434444becd47',
    provider: 'The Joy of React',
    providerUrl: 'https://www.joyofreact.com/'
  },
  {
    date: '2022-2023',
    title: 'React - The Complete Guide',
    provider: 'Udemy',
    providerUrl: 'https://www.udemy.com/'
  },
  {
    date: '2019',
    title: 'Angular Course'
  },
  {
    date: 'June 2016',
    title: 'Specialist Diploma, Industrial and Civil Engineering',
    provider: "Prydniprovs'ka State Academy of Civil Engineering and Architecture",
    providerUrl: 'https://pdaba.edu.ua/'
  }
];
