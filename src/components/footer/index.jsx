import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Row, Col, } from 'antd';
import './index.less'
class MyFooter extends Component {
  render() {
    return <Layout className="myfooter">
      <Row className="footerRow">
        <Col span={6} className="footerCol">
          <p>公司信息</p>
          <p>关于我们</p>
          <p>工作机会</p>
        </Col>
        <Col span={6} className="footerCol">
          <p>公司信息</p>
          <p>服务协议</p>
          <p>隐私协议</p>
          <p>网站地图</p>
          <p>民宿推荐 </p>
        </Col>
        <Col span={6} className="footerCol">
          <p>公司信息</p>
          <p className="footTel">400-6666-999</p>
          <p>登录问题
            <b>10107888</b>
          </p>
        </Col>
        <Col span={6} className="footerCol">
          <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/images/qrcodes/app-download-v56bda98f.svg" alt=""/>
          <p className="downApp">
            下载民宿App
          </p>
        </Col>
      </Row>

    </Layout>
  }
}

export default MyFooter