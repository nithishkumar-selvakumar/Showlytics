import "dotenv/config"; // automatically loads .env variables
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import koaPinoLogger from "koa-pino-logger";
import logger from "./logger/index.js";

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(koaPinoLogger({ logger }));

router.get("/", (ctx) => {
  ctx.body = { message: "Hello Koa!", port: process.env.PORT };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  logger.info(`Server running on http://localhost:${PORT}`),
);
