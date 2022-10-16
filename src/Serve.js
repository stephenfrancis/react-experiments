const Fs = require('fs')
const Koa = require('koa')
const KoaStatic = require('koa-static')
const ListRedux = require('./list_redux/Server')

const app = new Koa()

app.use(ListRedux)

app.use(
  KoaStatic('dist/', {
    maxAge: 365 * 24 * 60 * 60 * 1000,
  })
)

app.use(async (ctx, next) => {
  // SPA: serve the main HTML file at ALL navigation URLs
  if (ctx.headers['accept'].indexOf('text/html') > -1) {
    // res.sendFile(process.cwd() + "/build/index.html");
    ctx.type = 'html'
    ctx.body = Fs.createReadStream(process.cwd() + '/src/public/index.html')
  } else {
    next()
  }
})
const port = process.env.PORT || 10001
const server = app.listen(port)
console.log(`listening on port ${port}`)
