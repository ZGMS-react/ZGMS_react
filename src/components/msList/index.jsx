import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd'
import MsCard from '../msCard'
import './index.less'


export default class MsList extends Component {
  render() {
    // let arr = []
    // for (let i = 0; i < 10; i++) {
    //   arr.push('a' + i)
    // }
    //  console.log(arr) // 已经有数据了

    return <Layout className="wrap_msList clearfix">
      {/* {arr.map((item, index) => {
        
        return <MsCard/>
      })} */}
      {/* <Layout className="wrap_msList" */}
      {/* <MsCard className="msCard_box" /> */}

      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} style={{ margin: 0 }}>
        <Col className="gutter-row" span={8}>
          <MsCard className="msCard_box" />
          {/* <div className="msCard_box">col-6</div> */}
        </Col>
        <Col className="gutter-row" span={8}>
          <MsCard className="msCard_box" />
          {/* <div className="msCard_box">col-6</div> */}
        </Col>
        <Col className="gutter-row" span={8}>
          <MsCard className="msCard_box" />
          {/* <div className="msCard_box">col-6</div> */}
        </Col>
      </Row>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} style={{ margin: 0 }}>
        <Col className="gutter-row" span={8}>
          <MsCard className="msCard_box" />
          {/* <div className="msCard_box">col-6</div> */}
        </Col>
        <Col className="gutter-row" span={8}>
          <MsCard className="msCard_box" />
          {/* <div className="msCard_box">col-6</div> */}
        </Col>
        <Col className="gutter-row" span={8}>
          <MsCard className="msCard_box" />
          {/* <div className="msCard_box">col-6</div> */}
        </Col>
      </Row>

    </Layout>
  }
}