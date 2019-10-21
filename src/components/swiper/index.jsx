import React, { Component } from 'react';
// import Swiper from 'swiper'
import moment from 'moment';
import { DatePicker, Row, Col,Button,Icon } from 'antd';
import './index.less'
const { RangePicker } = DatePicker;

export default class MySwiper extends Component {
  render() {
    function disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    }


    return <div className="wrap_swiper">
      <div className="swiper"></div>
      {/* <img src="https://p1.meituan.net/iphoenix/3d1f903d47e845f896568b43d3bccc282623564.jpg.webp" alt="" /> */}
      <Row className="wrap_search">
        <Col span={6} className="current_city">
          <Icon type="environment" />
          <span className="city_name">北京</span>
          <span className="border_right"></span>
        </Col>
        <Col span={12} className="select_Date">
          <RangePicker disabledDate={disabledDate} format="YYYY-MM-DD" />
        </Col>
        <Col span={6} className="search"> 
          <Button>搜索</Button>
        </Col>
      </Row>

    </div>
  }
}