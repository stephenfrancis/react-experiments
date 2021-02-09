const Koa = require('koa')
const KoaStatic = require('koa-static')
const GracefulShutdown = require('http-graceful-shutdown')
const ListRedux = require('./list_redux/Server')

const app = new Koa()

app.use(async (ctx) => {
  ctx.throw(501)
})

const server = app.listen(process.env.PORT || 1337)
GracefulShutdown(server)
