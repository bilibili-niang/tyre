const router = require("koa-router")();

router.prefix("/user");

// 账户密码登录
router.post("/login", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      token: "123456"
    }
  };
});

// 微信用户登录
router.post("/wxlogin", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      token: "123456"
    }
  };
});

module.exports = router;
