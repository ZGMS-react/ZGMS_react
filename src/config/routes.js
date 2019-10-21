import Login from '../containers/login';
import Home from '../containers/home';
import DetailList from '../containers/DetailList';

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
    
  }


];

export default routes;