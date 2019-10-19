import React from 'react';
import './index.less'
class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <section className="login_main">
                    <div className="login_logo">
                        <img className="login_img" src="./images/login.png" alt=""/>
                        <span>美团民宿</span>
                    </div>
                    <div className="login_content"></div>
                </section>
                <footer className="login_footer">&copy;2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</footer>

            </div>
        )
    }
}
export default Login;