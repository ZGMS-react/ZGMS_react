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
    path: '/home',
    component: Home
  },
  {
    path: '/detaillist',
    exact: true,
    component: DetailList
  },
  {
    path: '/order',
    exact: true,
    component: Order
  },
  {
    path: '/',
    redirect: '/home'
  }


];

export default routes;