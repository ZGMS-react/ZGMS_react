import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Row, Col, } from 'antd';
export default class MyFooter extends Component {
  render() {
    return <Layout>
      <Row  className="footer_row">
        <Col span={6}>
          <p>公司信息</p>
          <p>
            <Link to="/home">关于我们</Link>
          </p>
          <p>
            <Link to="/home">工作机会</Link>
          </p>
        </Col>
        <Col span={6}>
          <p>公司信息</p>
          <p>
            <Link to="/home">关于我们</Link>
          </p>
          <p>
            <Link to="/home">关于我们</Link>
          </p>
          <p>
            <Link to="/home">关于我们</Link>
          </p>
          <p>
            <Link to="/home">工作机会</Link>
          </p>
        </Col>
        <Col span={6}>
          <p>公司信息</p>
          <p>
            <Link to="/home">400-6666-999</Link>
          </p>
          <p>
            <Link to="/home">工作机会</Link>
          </p>
        </Col>
        <Col span={6}>
        <p>
            <Link to="/home">工作机会</Link>
          </p>
          <p>
            <Link to="/home">工作机会</Link>
          </p>
        </Col>
      </Row>

    </Layout>
  }
}