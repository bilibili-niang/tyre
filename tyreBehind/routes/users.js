const router = require("koa-router")();

router.prefix("/user");

router.post("/login", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      token: "123456"
    }
  };
});

module.exports = router;
