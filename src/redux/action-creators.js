/*
* 包含n个生成action对象的工厂函数模块
*/

import {SAVE_USER,UPDATE_DETAIL_LIST,DELETE_USER,SHOW_USERNAME,SAVE_HOMELIST} from './action-types';

//保存数据
export const saveUser=(user)=>({
     type:SAVE_USER,data:user
});

//删除数据
export const deleteUser=(user)=>({
     type:DELETE_USER,data:user
});

//保存状态数据
export const changeShow=(isUser)=>({
     type:SHOW_USERNAME,data:isUser
})

// 保存列表页
export const updatedetaillist = (listArr)=>({type:UPDATE_DETAIL_LIST,data:listArr})

// 保存处理后的请求的数组（切换城市）
export const homeList = (arrHomeList)=>({type:SAVE_HOMELIST,data:arrHomeList})