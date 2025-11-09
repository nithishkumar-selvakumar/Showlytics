import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import koaLogger from 'koa-pino-logger';

import errorHandler from './middleware/errorHandler.js';
import routes from './routes/index.js';
import { PORT } from './config/env.js';
import logger from './config/logger.js';

const app = new Koa();
const router = new Router();

app.use(errorHandler);
app.use(koaLogger(logger));
app.use(helmet());
app.use(cors());
app.use(bodyParser());

router.use('/users', routes.routes(), routes.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.on('error', (err, ctx) => {
  logger.error({
    msg: 'Unhandled error',
    error: err,
    url: ctx?.url,
    method: ctx?.method,
    status: ctx?.status,
  });
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
