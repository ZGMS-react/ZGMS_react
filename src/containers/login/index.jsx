import React from 'react';
import { Form, Input, Icon, Button } from 'antd'
import './index.less'
import logo from './images/login.png'
import { from } from 'rxjs';
class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <section className="login_main">
                    <div className="login_logo">
                        <img src={logo} alt="榛果民宿" />
                        <h1>美团民宿</h1>
                    </div>
                    <div className="login_content">
                        <h2>用户登录</h2>
                        <Form className="login_form">
                            <Form.Item>
                                <Input prefix={<Icon type="user" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item>
                                <Input prefix={<Icon type="lock" />} placeholder="密码" />
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