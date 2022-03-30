import { Context } from "koa";
import * as  Router from "koa-router";
import Api from "../sql/sqldata";
import { filterObj } from "../util";

const login = new Router();

interface Iuser {
  username: string;
  password: string;
}
login.post("/", async (ctx: Context) => {
  const loginConfig: Iuser = ctx.request.body;
  const res = await Api.Login(loginConfig.username);
  if (res.state === 1) {
    if (res.results.length > 0) {
      if (res.results[0].password === loginConfig.password) {
        ctx.body = {
          code: 200,
          msg: "登录成功",
          data: filterObj(res.results[0], ["id", "username", "phone"]),
        };
      } else {
        ctx.body = { msg: "密码错误", code: "403" };
      }
    } else {
      ctx.body = {
        msg: "账号不存在",
        code: "403",
        err: res.error,
        config: loginConfig,
      };
    }
  } else {
    ctx.body = { msg: "查询失败", code: "500" };
  }
});

export default login;
