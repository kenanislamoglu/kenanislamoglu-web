export const SITE = {
  title: 'Kenan İslamoğlu',
  /** Same name without Turkish letters, as people often type it into search. */
  titleAscii: 'Kenan Islamoglu',
  role: 'Software Engineer & Team Lead',
  description:
    'Software engineer and team lead. C# and .NET since 2008, a 10-person team, and systems built end to end: a multi-tenant SaaS, iOS apps and a multi-agent AI system.',
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
  /** Projects sharing a group appear as one combined line on the home page. */
  group?: string;
  platform: string;
  status: string;
  description: string;
  stack: string[];
  note: string;
  /** One verifiable number, shown first on cards. */
  metric: string;
  /** Architecture write-up, if the project has one. */
  howHref?: string;
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
    metric: '12 agents; about 4 in 10 "done" claims rejected in the first 12 days',
    howHref: 'https://lintel.kenanislamoglu.com/#architecture',
    note: 'An independent QA agent checks every "done" claim and accepts a fix only with a test that fails without it. In its first 12 days about 4 in 10 claims came back FAIL.',
    href: 'https://lintel.kenanislamoglu.com',
    links: [{ label: 'Project page', href: 'https://lintel.kenanislamoglu.com' }],
  },
  {
    short: 'Checklee',
    name: 'Checklee',
    tagline: 'a multi-tenant SaaS for field teams',
    platform: 'Web (SaaS, installable PWA)',
    status: 'Live, in maintenance mode',
    description:
      'Task and workforce management for hotel, facility and service teams. Managers plan work on kanban boards, set recurring tasks and automation rules, and track deals on a CRM board; staff check in and out with signed QR codes, attach photo evidence and can work from plain WhatsApp messages in five languages. Two-layer roles, an audit log with rollback and plan limits enforced on the server. Co-built with a business partner; I designed and wrote the software end to end.',
    stack: [
      '.NET 8 isolated Azure Functions (~540 HTTP and timer functions)',
      'Cosmos DB serverless, partitioned by tenant',
      'Meta WhatsApp Cloud API (webhooks, 5-language command parser)',
      'Azure Communication Services (email)',
      'React 18 + Vite + TypeScript (TanStack Query, Radix UI, Tailwind)',
      'PWA with a service worker and web push',
      'JWT auth with refresh tokens',
    ],
    metric: '540+ serverless functions; −68% scheduled timer runs',
    howHref: 'https://checklee.kenanislamoglu.com/#architecture',
    note: 'The whole backend is serverless, with data partitioned by tenant in Cosmos DB and 21 timer functions handling reminders, recurring tasks, automations, analytics and billing. Moving the most frequent timers to longer intervals cut scheduled timer runs from 3,728 to 1,184 a day (-68%); telemetry sampling keeps logging costs down too.',
    href: 'https://checklee.kenanislamoglu.com',
    links: [
      { label: 'Project page', href: 'https://checklee.kenanislamoglu.com' },
      { label: 'Live app', href: 'https://app.checklee.com' },
    ],
  },
  {
    short: 'Derman',
    name: 'Derman: Nöbetçi Eczane',
    tagline: 'an ad-free on-duty pharmacy finder',
    platform: 'iOS',
    status: 'Live on the App Store',
    description:
      'An ad-free app that shows the on-duty pharmacies near you in Turkey, built for the moment you need one at 2 a.m.',
    stack: ['React Native (Expo)', 'TypeScript', 'Cloudflare Workers + KV'],
    metric: '0 user requests reach the paid data API',
    howHref: 'https://derman.kenanislamoglu.com/how-it-works',
    note: 'The app never calls the paid pharmacy-data API directly; a Cloudflare Worker serves it from a KV cache, so data cost stays flat as usage grows.',
    href: 'https://derman.kenanislamoglu.com',
    links: [
      { label: 'Project page', href: 'https://derman.kenanislamoglu.com' },
      { label: 'App Store', href: 'https://apps.apple.com/app/id6805183165' },
    ],
  },
  {
    short: 'EARSHOT',
    name: 'EARSHOT: Audio Horror',
    tagline: 'an audio-only horror game for iPhone',
    platform: 'iOS',
    status: 'Coming to the App Store',
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
    metric: 'Plays fully offline, screen off',
    howHref: 'https://earshot.kenanislamoglu.com/how-it-works',
    note: 'Sound is the whole game, so a suite of automated checks guards the audio engine: every sound fades in and out without a click, and is released once it falls silent.',
    href: 'https://earshot.kenanislamoglu.com',
    links: [{ label: 'Game page', href: 'https://earshot.kenanislamoglu.com' }],
  },
  {
    short: 'Snipsy',
    name: 'Snipsy',
    tagline: 'a batch green-screen remover for iPhone and iPad',
    onHome: false,
    platform: 'iOS and iPadOS',
    status: 'Live on the App Store',
    description:
      'Removes flat-colour backgrounds and the frame around them from a whole batch of pictures in one tap, and saves each one as a full-resolution transparent PNG. Images are processed on the device; there is no account, no ads and no analytics.',
    stack: [
      'React Native (Expo)',
      'TypeScript image core with no native module',
      '@shopify/react-native-skia (decode and PNG encode)',
      'StoreKit 2 via expo-iap, no server',
      'node:test + pngjs (golden tests on sample images)',
    ],
    metric: '27 of 27 tests pass',
    note: 'Keying one colour across the whole picture would also erase the dark outlines inside each character, so the core peels the background in layers instead: it flood-fills inward from the edge, first the outer frame, then the colour behind it, and clears enclosed gaps only at a much tighter threshold. Tests fail if outline pixels lose opacity, if green clothing is removed or if a green halo is left on the edges.',
    href: 'https://snipsy.kenanislamoglu.com',
    links: [
      { label: 'Project page', href: 'https://snipsy.kenanislamoglu.com' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/snipsy/id6824310637' },
    ],
  },
  {
    short: 'Redline',
    name: 'Redline: Text Diff & Restore for Jira',
    tagline: 'word-level diffs and restore for Jira descriptions',
    onHome: false,
    group: 'Atlassian Cloud apps for Jira and Confluence',
    platform: 'Jira Cloud (Atlassian Forge)',
    status: 'Submitted to the Atlassian Marketplace',
    description:
      "Jira's history shows the whole old text and the whole new text, not what changed. Redline adds a Text history tab to every issue: a word-level diff of the Description and paragraph fields, any two versions side by side, and a one-click restore that keeps the formatting.",
    stack: ['Atlassian Forge (UI Kit)', 'TypeScript', 'Jira REST API (changelog, v2 wiki renderer)', 'Vitest (responses recorded from a real site)'],
    metric: '27 of 27 live checks pass on a real Jira site',
    note: "Jira stores text history as wiki markup, so a restore goes back through REST API v2 and Jira's own renderer turns it into rich text again; tables, lists and code blocks come back as they were. It runs as the current user, so Jira's own Edit permission applies, and it stores nothing.",
    href: 'https://redline.kenanislamoglu.com',
    links: [{ label: 'Project page', href: 'https://redline.kenanislamoglu.com' }],
  },
  {
    short: 'Prune',
    name: 'Prune: Version & Trash Cleanup for Confluence',
    tagline: 'rule-based cleanup of old page versions and trash',
    onHome: false,
    group: 'Atlassian Cloud apps for Jira and Confluence',
    platform: 'Confluence Cloud (Atlassian Forge)',
    status: 'Submitted to the Atlassian Marketplace',
    description:
      'Keeps the last N versions of every page and blog post, deletes versions older than D days, and empties old trash on a daily schedule. A dry run comes first, deleting needs a typed confirmation, and every run leaves a CSV report.',
    stack: ['Atlassian Forge (UI Kit, async events queue, scheduled triggers)', 'TypeScript', 'Confluence REST API', 'Vitest (responses recorded from a real site)'],
    metric: '62 of 62 tests pass',
    note: 'Confluence renumbers the remaining versions after every delete, so the job reads the list again before each single delete instead of working out numbers up front; a test fails if it ever does. Long jobs run in time-boxed slices and pick up again after a timeout or a rate limit.',
    href: 'https://prune.kenanislamoglu.com',
    links: [{ label: 'Project page', href: 'https://prune.kenanislamoglu.com' }],
  },
  {
    short: 'Vacancy',
    name: 'Vacancy: Personal Space Cleanup for Confluence',
    tagline: 'finds and archives abandoned personal spaces',
    onHome: false,
    group: 'Atlassian Cloud apps for Jira and Confluence',
    platform: 'Confluence Cloud (Atlassian Forge)',
    status: 'Submitted to the Atlassian Marketplace',
    description:
      "Lists every personal space with its owner's status and three flags: untouched, owner left, dormant. Admins archive them in bulk after a dry run or with a daily rule, and any run can be undone.",
    stack: ['Atlassian Forge (UI Kit, async events queue, scheduled triggers)', 'TypeScript', 'Confluence REST API', 'Vitest'],
    metric: '0 spaces deleted: it only archives, and every run can be undone',
    note: 'Deleting a space was not proven safe for an app, so Vacancy only archives. Each space is read again right before it changes, only personal spaces are ever touched, and a test fails if the "untouched" rule is loosened.',
    href: 'https://vacancy.kenanislamoglu.com',
    links: [{ label: 'Project page', href: 'https://vacancy.kenanislamoglu.com' }],
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
    metric: 'Minimap built on each device from the level seed',
    note: 'Every level is generated from a seed by a pure function. The server builds the map from it, and each player\'s device draws its own minimap from the same function, so the minimap needs no data from the server and the two can never disagree.',
    href: 'https://unseen.kenanislamoglu.com',
    links: [{ label: 'Game page', href: 'https://unseen.kenanislamoglu.com' }],
  },
];
