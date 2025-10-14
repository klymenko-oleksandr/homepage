export interface ExperienceItem {
  period: string;
  title: string;
  company?: string;
  companyUrl?: string;
  achievements?: string[];
  skills?: string;
  highlighted?: boolean;
}

export const currentExperience: ExperienceItem[] = [
  {
    period: '17th August 2020 - present',
    title: 'Frontend Engineer',
    company: 'Zesty',
    companyUrl: 'https://zesty.co/',
    achievements: [
      'Led migration from Angular to React, introducing component-based architecture and improving performance.',
      'Implemented BFF (backend-for-frontend) architecture in Node.js and integrated LaunchDarkly for feature flagging.',
      'Collaborated with a cross-functional team (3-5 frontend devs, 10+ backend devs) to build and maintain an enterprise dashboard with charts, tables, and complex forms.',
      'Rendered React components inside Angular to support a gradual migration strategy.'
    ],
    skills: 'Angular · React · LaunchDarkly · Module Federation · Micro Frontends',
    highlighted: true
  },
  {
    period: '? - present',
    title: 'Study English',
    company: 'Cool School',
    companyUrl: 'https://coolschool.in.ua/',
    achievements: [
      'Upper-Intermediate',
      'Intermediate ✅',
      'Pre-Intermediate ✅',
      'Elementary ✅'
    ],
    highlighted: true
  }
];

export const pastExperience: ExperienceItem[] = [
  {
    period: '15th August 2020',
    title: 'Relocated to Kyiv, Ukraine',
    companyUrl: 'https://maps.app.goo.gl/f4zsvNGAK3C3oFhz8'
  },
  {
    period: '3rd January 2018 - 15th August 2020',
    title: 'Frontend Engineer',
    company: 'Agilie',
    companyUrl: 'https://agilie.com/',
    achievements: [
      'Built an admin dashboard for a taxi service using Angular, with multi-language support and Google Maps integration.',
      'Developed a crypto wallet mobile app with NativeScript and Angular, delivering responsive interfaces and business logic.',
      'Contributed to a streaming platform UI, working with Angular, SCSS, and Figma-based designs.',
      'Maintained and extended Ruby on Rails e-commerce applications, focusing on UI and JavaScript-driven functionality.',
      'Delivered multiple high-quality marketing landing pages with semantic HTML and clean CSS.'
    ],
    skills: 'Angular · JavaScript · TypeScript · HTML · CSS · SCSS · NativeScript · Ruby on Rails'
  },
  {
    period: '2015 - 2017',
    title: 'Teaching kids football ⚽️ and acrobatics 🤸‍♂️'
  },
  {
    period: '2004 - 2011',
    title: 'Football'
  },
  {
    period: '1999 - 2004',
    title: 'Acrobatics'
  },
  {
    period: '2011',
    title: 'Graduated from high school.'
  },
  {
    period: '2000 - 2011',
    title: 'Active school life.'
  },
  {
    period: '1st September 2000',
    title: 'Went to first grade!'
  },
  {
    period: '',
    title: 'diligent self-development...'
  },
  {
    period: '23rd February 1994',
    title: 'Born in Dnipro, Ukraine.',
    companyUrl: 'https://maps.app.goo.gl/VcpnnxpRUYFdB2V48'
  }
];
