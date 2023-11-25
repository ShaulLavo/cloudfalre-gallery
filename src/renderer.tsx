import 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string; }): Response;
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          <script type="module" src="/src/gallery.ts"></script>
          <link href="/src/style.css" rel="stylesheet" />
          <title>{title}</title>
        </head>
        <body>{children}</body>
      </html>
    );
  },
  {
    docType: true
  }
);
