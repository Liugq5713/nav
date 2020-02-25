import Koa from "koa";
import "ignore-styles";
import Router from "koa-router";
import cors from "koa-cors";
import request from "request";
import React from "react";
import ReactDom from "react-dom/server";
import App from "../src/App";
// const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  await next();
});
router.get("/api/weather", async (ctx, next) => {
  const res = await request(
    "https://api.seniverse.com/v3/weather/now.json?key=SYBk9uS_DqZnHYJ1L&location=shanghai&language=zh-Hans&unit=c"
  );
  ctx.status = 200;
  ctx.body = res;
});

router.get("/ssr", ctx => {
  const HTML = ReactDom.renderToString(<App />);

  console.log(HTML);
});

router.get("/hello/:name", async (ctx, next) => {
  var name = ctx.params.name;
  ctx.body = `<h1>hello,${name}</h1>`;
});

app.on("error", function(err, ctx) {
  console.log(err);
});
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(5678);
