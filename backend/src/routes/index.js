import Router from '@koa/router';
import userRoutes from './user.routes.js';

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = { status: 'ok', message: 'API running!' };
});

router.use('/users', userRoutes.routes());

export default router;
