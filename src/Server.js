const Koa = require("koa");
const KoaStatic = require("koa-static")
const ListRedux = require("./list_redux/Server");

const app = new Koa();

app.use(KoaStatic("dist/", {
  maxAge: "1y",
}))
app.use(ListRedux);

app.listen(process.env.PORT || 3000);
