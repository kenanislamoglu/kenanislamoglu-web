# kenanislamoglu.com

Personal engineering site. Static, no client-side framework, no tracking.

- **Astro** — content collections, Shiki syntax highlighting, Mermaid diagrams
- **Cloudflare Pages** — built and deployed on every push to `main`

## Structure

```
/                  Home — who I am, latest entries
/engineering-log   Long-form case studies: post-mortems, architecture breakdowns
/field-notes       Reference notes, grouped by topic, revised in place
```

## Writing

Posts are Markdown files. Drop one in the right folder and push — that is the
whole publishing workflow.

| Section | Folder | Required frontmatter |
| --- | --- | --- |
| Engineering Log | `src/content/engineering-log/` | `title`, `description`, `pubDate` |
| Field Notes | `src/content/field-notes/` | `title`, `description`, `pubDate`, `topic` |

Optional on both: `updatedDate`, `tags`, `draft`. Engineering Log entries also
take `takeaway` (the one-line summary shown on index pages). Field Notes group
by `topic`, so reuse the exact same string for related notes.

The filename becomes the URL: `zero-trust-edge.md` → `/field-notes/zero-trust-edge`.
Set `draft: true` to keep a file out of the build.

`_template.md` in each folder documents every supported feature — including
Mermaid diagrams via ```` ```mermaid ```` fences. Delete them once real content
exists.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type-check .astro files
```

## Deployment

Cloudflare Pages builds `main` with `npm run build` and serves `dist/`.
Security headers and cache policy live in `public/_headers`.
