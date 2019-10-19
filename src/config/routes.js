import Login from '../containers/Login';
import DetailList from '../containers/DetailList';

const routes = [{
    path: '/login', //登录路由路径
    exact: true, //严格匹配
    component: Login //组件
  }, {
    path: '/detaillist',
    exact: true,
    component: DetailList
  }


];

export default routes;