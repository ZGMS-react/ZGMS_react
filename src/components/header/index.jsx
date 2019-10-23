import React, { Component } from 'react';
import { Link ,withRouter} from "react-router-dom";
import { Row, Col, Avatar, Menu, Dropdown,message } from 'antd';
import { connect } from 'react-redux'
import { deleteUser,changeShow } from "@redux/action-creators";
import Home from '../../containers/home'
import './index.less'



@connect(
  (state) => ({ user: state.user,userName:state.userName }),
  { deleteUser ,changeShow}
)
@withRouter
class MyHeader extends Component {
  state={
   isUser:false
  }
  
  delete = (user) => {
    return ()=>{
      // user={}
      if(user){
          this.props.deleteUser(user)
          this.props.changeShow(this.state.isUser)
      }else{
        this.props.history.push('/login')
      }
    }
  };
login=()=>{
  
}
  
  render() {
    // console.log(this.props)
    const {user,userName} =this.props

    const onClick = ({ key }) => {
      message.info(`Click on item ${key}`);
    };

    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">我的收藏</Menu.Item>
        <Menu.Item key="2">修改资料</Menu.Item>
        <Menu.Item key="3" onClick={this.delete(user)}>{user?'退出登录':'登录'}</Menu.Item>
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
            <Avatar className="user_avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <span className="user_name"  onClick={this.login}>{userName?user.username:'登录'}</span>
          </div>
        </Dropdown>


      </Col>


    </Row>
  }
}
export default MyHeader
