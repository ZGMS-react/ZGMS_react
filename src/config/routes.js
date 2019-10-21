// 引入路由组件
// 引入登录组件
import Login from '../containers/Login';
// 引入列表页组件
import DetailList from '../containers/DetailList';


const routes = [{
    path: '/login', //登录路由路径
    exact: true, //严格匹配
    component: Login //组件
  }, {
    path: '/detaillist',
    exact: true,
    component: DetailList
  },{
    path:'/',
    redirect: '/home'
  }


];

export default routes;