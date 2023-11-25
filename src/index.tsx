import { Hono } from 'hono';
import { renderer } from './renderer';

const app = new Hono();

// app.get('*', renderer);

// app.get('/', (c) => {
//   return c.render(<h1>Hello!</h1>);
// });

app.get('/', (c) => {
  return c.html(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>☠</text></svg>">
      <link rel="stylesheet" href="/static/style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CloudFlare ??</title>
    </head>
    <body>
      <div id="app"></div>
        {import.meta.env.PROD ? (
          <>
            <script type='module' src='/static/main.js'></script>
          </>
        ) : (
          <>
             <script type="module" src="/src/main.ts"></script>
          </>
        )}
     
    </body>
  </html>

  `);
});


export default app;
