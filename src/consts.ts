export const SITE = {
  title: 'Kenan İslamoğlu',
  role: 'Software Engineer · Systems & Security',
  description:
    'Architecture breakdowns, post-mortems and field notes on distributed systems, performance and security.',
  url: 'https://kenanislamoglu.com',
  locale: 'en',
} as const;

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/kenanislamoglu' },
  { label: 'X', href: 'https://x.com/kenan_islamoglu' },
] as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Engineering Log', href: '/engineering-log' },
  { label: 'Field Notes', href: '/field-notes' },
] as const;
