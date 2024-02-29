const Koa = require("koa");
const views = require("koa-views");
const json = require("koa-json");
const indexRouter = require("./src/routes/index");
const app = new Koa();
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const users = require("./src/routes/users");

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes: ["json", "form", "text"]
}));
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/src/public"));

app.use(views(__dirname + "/src/views", {
  extension: "ejs"
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(indexRouter.routes(), indexRouter.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
