// 引入koa
let Koa = require('koa')
// 引入koa-router
const KoaRouter = require('koa-router')
// 可以接受请求体
const bodyParser = require("koa-bodyparser");

const cors = require('koa-cors')
// 实例化koa
let koa = new Koa()
koa.use(bodyParser());
// 实例化路由
let koaRouter = new KoaRouter()

// 引入datas数据
let datas = require('./data/data.json')
koa.use(cors({
  origin: function (ctx) {
      if (ctx.url === '/cors') {
          return "*"; // 允许来自所有域名请求
      }
      return 'http://localhost:3000';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'], //设置允许的HTTP请求类型
  allowHeaders: ['Content-Type', 'Authorization', 'Accept','Access-Control-Allow-Origin'],
}));

koa.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  await next()
})

// 详情列表页数据
koaRouter.get('/detailList',(ctx)=>{
	console.log(ctx.query)
	return ctx.body = datas.detailList
})

// 首页数据
koaRouter.get('/home',(ctx)=>{
	console.log(ctx.query)
	return ctx.body = datas.home01
})

// 评价数据
koaRouter.get('/comment',(ctx)=>{
	console.log(ctx.query)
	return ctx.body = datas.comments
})

// 登录
koaRouter.post("/loginWithPassword", async (ctx) => {
  const data = ctx.request.body.data;
  console.log(data);
  let result;
  if (typeof data.username === "string" && typeof data.password === "string") {
    const user = datas.users.find(user => user.username === data.username);
    if (user && user.password === data.password) {
      user.token = "this is token";
      result = { status:0, user };
    }
  }
  if (!result) {
    result = { code: 1, message: "not user match" };
  }
  ctx.body = result;
});

//声明使用所有的路由及路由的相关的所有的方法
koa.use(koaRouter.routes()).use(koaRouter.allowedMethods());

koa.listen(4000,()=>{
	console.log('服务器启动成功');
	console.log("服务器的地址为:http://localhost:4000");
})