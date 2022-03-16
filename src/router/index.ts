import Router from "koa-router";
import list from "./list";
import login from "./login";
import Api from "../sql/sqldata";
import { Context } from "koa";
const router = new Router();
//路由跳转
router.get("/home", async (ctx: Context) => {
  // Api.Select();
  ctx.body = {
    name: "chundan",
    age: 22,
    msg: "hello koa",
  };
});
router.use("/login", login.routes(), login.allowedMethods());
router.use("/list", list.routes(), list.allowedMethods());
router.redirect("/", "/home");
//导出
export default router;
