const Koa = require("koa")
const KoaStatic = require("koa-static")
const GracefulShutdown = require('http-graceful-shutdown')
const ListRedux = require("./list_redux/Server")

const app = new Koa();

app.use(ListRedux);

app.use(KoaStatic("dist/", {
  maxAge: "1y",
}))

const server = app.listen(process.env.PORT || 3000);
GracefulShutdown(server)
