import MsDetail from "../containers/msdetil";
import Home from '../containers/home';
import Login from '@conts/login';
import DetailList from '@conts/DetailList';
import Order from '@conts/Order'

const routes = [
  {
    path: '/login', //登录路由路径
    exact: true, //严格匹配
    component: Login //组件
  },
  {
    path:'/home',
    component:Home
  },
  {
    path: '/detaillist',
    exact: true,
    component: DetailList
  },{
<<<<<<< HEAD
    path:'/msdetail',
    exact:true,
    component:MsDetail
=======
    path:'/order',
    exact:true,
    component:Order},
    {
    path:'/',
    redirect: '/home'
>>>>>>> 9c3af33f0413a392e9ba7c9ac26e19db52049370
  }


];

export default routes;