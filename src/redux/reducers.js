/*
 * 根据之前的PrevState和action对象生成newState（新状态）的函数
 */
import {
    combineReducers
} from 'redux'
import {
    SAVE_USER,
    UPDATE_DETAIL_LIST,
    DELETE_USER,
    SHOW_USERNAME
  
} from './action-types'
import {
    getItem,
    setItem,
    removeItem
} from '../utils/storage'

/*
 * 初始化数据
 * 1.数据虽然进行了持久化的存储，但是一旦页面进行了刷新，数据就又会进行初始化就又被清空了
 * 2.所以在redux中还需要读取数据
 *      ----在初始化中进行数据的读取，一上来就先读取数据，有就用，没有就是{}
 *
 */
const initUser = {
    user: getItem('user') || {},
    token: getItem('token') || ''
};

//用户数据
function user(prevState = initUser, action) {
    switch (action.type) {
        case SAVE_USER:
            //进行永久化存储
            setItem('user', action.data);
            setItem('token', action.data.token);
            return action.data;
        case DELETE_USER:
            //删除存储
            removeItem('user')
            removeItem('token')
            return null;
        default:
            return prevState;
    }
}

//用户名字
function userName(prevState =false, action){
    switch (action.type) {
        case SHOW_USERNAME:
            return action.data
        default:
            return prevState
    }
}

// 
function listArr(prevState = [], action) {
    switch (action.type) {
        case UPDATE_DETAIL_LIST:
            return action.data
        default:
            return prevState
    }
}


export default combineReducers({
    user,
    listArr,
    userName
})