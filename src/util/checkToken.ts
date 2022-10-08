/**
 * Created by KongSa on 2022/10/8-1:33 PM.
 */
import jwt from "jsonwebtoken";
import { Context, Next } from "koa";

async function check(ctx: Context, next: Next) {
  // split('?')[0]把字符串分割成字符串数组——拿到url值
  let url = ctx.url.split("?")[0];
  // 如果是登陆页面 就不需要验证token了
  if (url === "/login") {
    await next();
  } else {
    //获取到token
    const token = ctx.cookies.get("token");
    if (token) {
      try {
        //  如果有token的话解析 这个token类型有点问题
        const tokenItem = jwt.verify(token, "user_login");
        // @ts-ignore
        const { time, timeout } = tokenItem;
        // 拿到当前时间
        let NewTime = new Date().getTime();
        if (NewTime - time <= timeout) {
          // 说明没过期
          await next();
        } else {
          ctx.body = {
            status: 405,
            message: "token 过期了 重新登录下吧",
          };
        }
      } catch (e) {
        //token解析失败了 throw了Error 被我们catch到了 处理异常
        ctx.body = {
          status: 405,
          message: "token 不正确 重新登录下吧",
        };
      }
    } else {
      ctx.body = {
        status: 405,
        message: "token 不存在 重新登录下吧",
      };
    }
  }
}

export default check;
