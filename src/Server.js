const Koa = require("koa");
const ListRedux = require("./list_redux/Server");

const app = new Koa();

app.use(ListRedux);


app.listen(process.env.PORT || 3000);
