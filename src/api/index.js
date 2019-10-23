/*
 封装发送请求函数
 */
import axios from './request';
// 请求登录
export const reqLogin = (username, password) => axios.post(`/loginWithPassword`,{
	header:{
		"Content-Type": "application/x-www-form-urlencoded",
		"Access-Control-Allow-Origin":""
	},
	data:{username, password}
});
// 请求获取分类列表数据
export const reqGetCategories = () => axios.get('/category/get');
// 请求添加分类数据
export const reqAddCategory = (categoryName) => axios.post('/category/add', { categoryName });

export const reqGetProducts = (pageNum, pageSize) => axios.get('/product/list', { params: { pageNum, pageSize } });

// 请求详情列表页
export const reqDetailList = () => axios.get('/detailList')

// 请求首页信息
export const reqHome = () => axios.get('/home')

// 请求评价数据
export const reqComment = ()=>axios.get('/comment')


