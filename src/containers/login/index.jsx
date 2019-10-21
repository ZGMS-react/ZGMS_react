import React from 'react';
import { Form, Input, Icon, Button, message } from 'antd'
import './index.less'
import logo from './images/login.png'
import withCheckLogin from "@conts/with-check-login";
import {connect} from 'react-redux'
import {saveUser} from "@redux/action-creators";
import { reqLogin } from '../../api';

@withCheckLogin
//调用一个高阶组件Form.create()()是为了创建form属性，用于自定义表单校验
@connect(
    null,
    {saveUser}
)
@Form.create()
class Login extends React.Component {

    /**
     * 自定义表单校验(校验的规则)
     * @param rule  校验规则
     * @param value  所有表单项的值
     * @param callback 必须调用，当callback传参时，表示校验失败，并提示校验参数；当callback不传参时，表示校验成功。
     */
    validator = (rule, value, callback) => {
        // console.log(rule, value);
        const name = rule.field === 'username' ? '用户名' : '密码';
        if (!value) {
            return callback(`请输入${name}`)
        }
        if (value.length < 3) {
            return callback(`${name}长度必须大于3位`)
        }
        if (value.length > 9) {
            return callback(`${name}长度必须小于9位`)
        }
        const reg = /^[a-zA-Z0-9_]{3,13}$/;
        if (!reg.test(value)) {
            return callback(`${name}只能包含英文、数字和下划线`);
        }

        callback();
    };

    //点击登录
    login = (e) => {
        //阻止浏览器默认行为
        e.preventDefault();



        //点击登陆后再次对表单进行登录校验
        this.props.form.validateFields(async (error, values) => {
            if (!error) {
                console.log(values)
                const { username, password } = values

                reqLogin(username, password)

                    .then((result) => {
                        console.log(result);
                        //登录成功
                        message.success('登录成功');

                        //保存用户数据
                        this.props.saveUser(result.user);

                        //登录成功，跳转到'/'路由（用于非render方法中进行路由的跳转）
                        this.props.history.replace('/home');

                    })
                    .catch((error) => {
                        //清空密码
                        this.props.form.resetFields(['password']);
                    })
            }
        })

    }
    render() {
        // getFieldDecorator 专门表单校验的方法高阶组件
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login">
                <section className="login_main">
                    <div className="login_logo">
                        <img src={logo} alt="榛果民宿" />
                        <h1>美团民宿</h1>
                    </div>
                    <div className="login_content">
                        <h2>用户登录</h2>
                        <Form className="login_form" onSubmit={this.login}>
                            <Form.Item>
                                {

                                    //在Form组件中，有一个getFieldDecorator方法，是一个高阶组件（作用：复用代码），用于表单验证

                                    getFieldDecorator(
                                        'username',
                                        {
                                            rules: [
                                                /*
                                                * 1.在getFiledDecorate方法中，有一个自定义校验规则
                                                * 2.validator：值是一个函数，但是函不好复用，故在this上创建一个函数，不用重复创建函数，实现代码复用                                                          代码的复用
                                                */
                                                { validator: this.validator }
                                            ]
                                        }
                                    )(
                                        <Input prefix={<Icon type="user" />} placeholder="username" />
                                    )
                                }


                            </Form.Item>
                            <Form.Item>
                                {
                                    getFieldDecorator(
                                        'password',
                                        {
                                            rules: [
                                                { validator: this.validator }
                                            ]
                                        }
                                    )(
                                        <Input prefix={<Icon type="lock" />} placeholder="password" type="password" />
                                    )
                                }

                            </Form.Item>
                            <Form.Item>
                                <Button className="login-btn" type="primary" htmlType="submit">登录</Button>
                            </Form.Item>
                            <span>提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意《美团网用户协议》</span>
                        </Form>
                    </div>
                </section>
                <footer className="login_footer">&copy;2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</footer>

            </div>
        )
    }
}
export default Login;