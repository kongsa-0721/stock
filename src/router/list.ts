import * as Router from "koa-router";
import { Context, Next } from "koa";
const list = new Router();

list.get("/", async (ctx: Context) => {
  ctx.body = {
    name: "kongsa",
    age: 20,
    msg: "hello koa list",
  };
});
list.get("/dic", async (ctx: Context) => {
  ctx.body = { msg: "hello koa list dic" };
});
list.get("/opt", async (ctx: Context) => {
  ctx.body = { msg: "hello koa list opt" };
});
list.post("/post", async (ctx: Context, next: Next) => {
  const rb = ctx.request.body;
  ctx.response.body = { type: "success", data: rb };
});

export default list;
