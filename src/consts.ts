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
] as const;
