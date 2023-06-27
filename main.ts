import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();

// Define routes
router
  .get('/', (ctx) => {
    ctx.response.body = 'Hello, world!';
  })
  .get('/api/data', (ctx) => {
    ctx.response.body = { message: 'API endpoint reached' };
  });

// Middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
console.log('Server is running on http://localhost:8000');
await app.listen({ port: 8000 });
