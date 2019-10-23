import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
/*
* 为什么要做登录验证？
*    --1.有些页面需要登录成功之后才能访问，因此要对这些页面进行登录验证
*    --2.只有登录了才能访问，否则跳转回登录夜页面
*    --3.如果已经登陆了，再访问登录页面就定向到该页面，不用再登录
*/

//定义一个高阶组件用来进行登录验证（为实现代码的复用，故定义高阶组件来实现）

export default function withCheckLogin(WrappedComponent) {

    return connect(
        (state)=>({token:state.user.token}),
        null
    )(class extends Component{

        //组件重命名
            static displayName=`CheckLogin(${WrappedComponent.displayName||WrappedComponent.name||'component'})`;

            render() {

              //解决高阶组件丢失children属性问题
                const {token,...rest}=this.props;//除了token，剩余的其他属性全部打包到rest中
                const {location:{pathname}}=rest;
                console.log(token)
                if (pathname==='/login'&&token) return <Redirect to="/"/>;
                if (pathname!=='/login'&&!token) return <Redirect to="/login"/>;
               



                //Login组件已经没有路由的三大属性了，故需要通过新组建传递过去
                return <WrappedComponent {...rest}/> //解包
            }
        }
    )
}