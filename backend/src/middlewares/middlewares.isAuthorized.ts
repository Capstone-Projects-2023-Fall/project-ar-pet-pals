import { verify } from "https://deno.land/x/djwt@v2.4/mod.ts";
import  key  from "../utils/utils.apiKey.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

export const authourized = async (ctx: Context, next: any) => {
  try {
    const headers: Headers = ctx.request.headers;
    const authorization = headers.get("Authorization");
    if (!authorization) {
      ctx.response.status = 401;
      ctx.response.body = {
        message: "No authorization headers",
      };
      return;
    }
    const jwt = authorization.split(" ")[1];

    if (!jwt) {
      ctx.response.status = 401;
      ctx.response.body = {
        message: "JWT error",
      };
      return;
    }
    const payload = await verify(jwt, key);

    if (!payload) {
      throw new Error("!payload");
    }
    await next();
  } catch (error) {
    ctx.response.status = 401;
    ctx.response.body = {
      message: String(error),
    };
    return;
  }
};
