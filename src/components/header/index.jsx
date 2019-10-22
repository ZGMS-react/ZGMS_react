import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Avatar, Menu, Dropdown, message } from 'antd';
import Home from '../../containers/home'
import './index.less'

export default class MyHeader extends Component {
  render() {
    const onClick = ({ key }) => {
      message.info(`Click on item ${key}`);
    };

    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">我的收藏</Menu.Item>
        <Menu.Item key="2">修改资料</Menu.Item>
        <Menu.Item key="3">退出登录</Menu.Item>
      </Menu>
    );
    return <Row className="wrap_header">
      <Col className="logo" span={8}>
        <Link to="/home" component={Home}>
          <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/images/logo/h-full-va3ab1f94.svg" alt="" />
        </Link>
      </Col>

      <Col span={4} offset={12}>
        <Dropdown overlay={menu}>
          <div className="ant-dropdown-link" >
            {/* <Avatar icon="user"  /> */}
            <Avatar className="user_avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <span className="user_name">鸿蒙兔</span>
          </div>
        </Dropdown>


      </Col>


    </Row>
  }
}  
