export const SITE = {
  title: 'Kenan İslamoğlu',
  role: 'Software Engineer & Team Lead',
  description:
    'Notes on AI-assisted development and what I learn building with LLMs, by a C#/.NET engineer and team lead in Istanbul.',
  url: 'https://kenanislamoglu.com',
  locale: 'en',
} as const;

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/kenanislamoglu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kenanislamoglu/' },
] as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Engineering Log', href: '/engineering-log' },
  { label: 'Field Notes', href: '/field-notes' },
  { label: 'About', href: '/about' },
  { label: 'Side projects', href: '/projects' },
] as const;

interface Project {
  /** Short name for the home page list. */
  short: string;
  name: string;
  tagline: string;
  platform: string;
  status: string;
  description: string;
  stack: string[];
  note: string;
  /** Omitted until the project has a public page that resolves. */
  href?: string;
  links: { label: string; href: string }[];
}

// Every claim here must hold up against the project's repo.
export const PROJECTS: Project[] = [
  {
    short: 'EARSHOT',
    name: 'EARSHOT: Audio Horror',
    tagline: 'an audio-only horror game for iPhone',
    platform: 'iOS',
    status: 'In App Store review, launching October 2026',
    description:
      'A horror game you play with your ears: headphones on, screen off, and you turn the phone toward the sound to find your way.',
    stack: [
      'React Native (Expo)',
      'TypeScript',
      'react-native-audio-api',
      'binaural (HRIR) rendering',
      'motion sensors',
      'plays fully offline',
    ],
    note: 'Sound is the whole game, so a suite of automated checks guards the audio engine: every sound fades in and out without a click, and is released once it falls silent.',
    links: [],
  },
  {
    short: 'Ease',
    name: 'Ease: Nöbetçi Eczane',
    tagline: 'an ad-free on-duty pharmacy finder',
    platform: 'iOS',
    status: 'Live on the App Store',
    description:
      'An ad-free app that shows the on-duty pharmacies near you in Turkey, built for the moment you need one at 2 a.m.',
    stack: ['React Native (Expo)', 'TypeScript', 'Cloudflare Workers + KV'],
    note: 'The app never calls the paid pharmacy-data API directly; a Cloudflare Worker serves it from a KV cache, so data cost stays flat as usage grows.',
    href: 'https://apps.apple.com/app/id6805183165',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id6805183165' }],
  },
];
