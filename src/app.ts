//new 一个koa 的实例
import koa from "koa";
//路由引入进来
import router from "./router/index";
//处理post请求体
import bodyParser from "koa-bodyparser";
//配置跨域
import cors from "koa2-cors";
//config
import config from "./util/config";
//挂载app new一个实例
const app = new koa();

//配置了ws
const http = require("http");
const WebSocket1 = require("ws");
const WebSocketApi = require("./util/ws"); //引入封装的ws模块
const server = http.createServer(app.callback());
const wss = new WebSocket1.Server({
  // 同一个端口监听不同的服务
  server,
});
WebSocketApi(wss);

//配置路由
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || config.port;

app.listen(port, () => {
  console.log(`Server start on ${port}`);
});
