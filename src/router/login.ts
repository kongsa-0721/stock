import { Context } from "koa";
import Router from "koa-router";
import Api from "../sql/sqldata";
import { filterObj } from "../util";
import jwt from "jsonwebtoken";

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
        let curTime = new Date().getTime();
        let expiresTime = 1000 * 60 * 60 * 24 * 7;
        let payload = {
          time: curTime,
          timeout: expiresTime,
        };
        let token = jwt.sign(payload, "user_login");
        ctx.cookies.set("token", token, {
          expires: new Date(curTime + expiresTime),
        });
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
