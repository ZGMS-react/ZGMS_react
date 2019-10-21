import Login from '../containers/login';
import DetailList from '../containers/DetailList';
import MsDetail from "../containers/msdetil";

const routes = [{
    path: '/login', //登录路由路径
    exact: true, //严格匹配
    component: Login //组件
  }, {
    path: '/detaillist',
    exact: true,
    component: DetailList
  },{
    path:'/msdetail',
    exact:true,
    component:MsDetail
  }


];

export default routes;