import { defineMdastPlugin } from 'satteri';

/**
 * Turns ```mermaid fenced blocks into <pre class="mermaid"> so the client-side
 * renderer can pick them up. Without this, Shiki would syntax-highlight the
 * diagram source as if it were code.
 */
export const mermaidPlugin = defineMdastPlugin({
  name: 'mermaid',
  code(node) {
    if (node.lang !== 'mermaid') return;

    return {
      raw: `<pre class="mermaid" data-diagram>${escapeHtml(node.value)}</pre>`,
      // The diagram source contains braces that are not MDX expressions.
      mdxExpressions: false,
    };
  },
});

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
