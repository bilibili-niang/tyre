const koaRouter = require('koa-router');

const router = new koaRouter();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'start'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
