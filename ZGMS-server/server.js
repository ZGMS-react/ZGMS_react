// 引入koa
let Koa = require('koa')
// 引入koa-router
const KoaRouter = require('koa-router')
// 实例化koa
let koa = new Koa()
// 实例化路由
let koaRouter = new KoaRouter()
// 引入datas数据
let datas = require('./data.json')
//声明使用所有的路由及路由的相关的所有的方法
koa.use(koaRouter.routes()).use(koaRouter.allowedMethods());

koa.listen(4000,()=>{
	console.log('服务器启动成功');
	console.log("服务器的地址为:http://localhost:4000");
})