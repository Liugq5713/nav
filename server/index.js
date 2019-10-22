const Koa = require('koa');
const Router = require('koa-router');
const onerror = require('koa-onerror');
// const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const request = require('request');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  await next();
});
router
  .get('/api/weather', async (ctx, next) => {
    const res = await request('https://api.seniverse.com/v3/weather/now.json?key=SYBk9uS_DqZnHYJ1L&location=shanghai&language=zh-Hans&unit=c')
    ctx.status = 200;
    ctx.body = res;
  })

router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.body = `<h1>hello,${name}</h1>`;
})

app.on('error', function (err, ctx) {
  console.log(err);
});
app.use(cors());
app
  .use(router.routes())
  .use(router.allowedMethods());
onerror(app);
app.listen(5678);
