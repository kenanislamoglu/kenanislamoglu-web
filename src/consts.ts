export const SITE = {
  title: 'Kenan İslamoğlu',
  /** Same name without Turkish letters, as people often type it into search. */
  titleAscii: 'Kenan Islamoglu',
  role: 'Software Engineer & Team Lead',
  description:
    'Notes on AI-assisted development and what I learn building with LLMs, by a C#/.NET engineer and team lead in Istanbul.',
  url: 'https://kenanislamoglu.com',
  locale: 'en',
  /** 1200x630 share card, used when a page has no image of its own. */
  ogImage: '/og.png',
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
  /** Set to false to keep a project off the home page list. */
  onHome?: boolean;
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
    short: 'Lintel',
    name: 'Lintel',
    tagline: 'a multi-agent personal AI system with one shared memory',
    platform: 'Personal AI system',
    status: 'In daily use since August 2026',
    description:
      "Twelve specialist AI agents run a household's paperwork, plans and projects. They share one written memory, so every session, on any device, starts where the last one stopped. People in the house reach it over Telegram, each routed to their own entry point.",
    stack: [
      'Claude Code (sub-agents, session hooks)',
      'Markdown + git as memory',
      'Python',
      'Playwright',
      'Telegram Bot API',
    ],
    note: 'An independent QA agent checks every "done" claim and accepts a fix only with a test that fails without it. In its first 12 days about 4 in 10 claims came back FAIL.',
    href: 'https://lintel.kenanislamoglu.com',
    links: [{ label: 'Project page', href: 'https://lintel.kenanislamoglu.com' }],
  },
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
  {
    short: 'UNSEEN',
    name: 'UNSEEN',
    tagline: 'a multiplayer horror game on Roblox',
    onHome: false,
    platform: 'Roblox',
    status: 'In private testing',
    description:
      "A multiplayer horror game where the monster can see you but can't hear you, so hiding means standing in the right corner, not pressing a button. Three maps, each with its own goal: find the keys in a house, find the shifting portal in the Backrooms, carry a phone up five floors of a school to call for help.",
    stack: [
      'Roblox',
      'Luau',
      'Rojo (code in Git, synced into Studio)',
      'StyLua',
      'Node.js script that picks licensed sounds from the Creator Store',
    ],
    note: 'Every level is generated from a seed by a pure function. The server builds the map from it, and each player\'s device draws its own minimap from the same function, so no layout data crosses the network and the two can never disagree.',
    href: 'https://unseen.kenanislamoglu.com',
    links: [{ label: 'Game page', href: 'https://unseen.kenanislamoglu.com' }],
  },
];
