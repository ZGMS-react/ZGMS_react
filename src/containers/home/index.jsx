import React, { Component } from 'react';
import MyHeader from '../../components/header'
import MySwiper from '../../components/swiper'
import MyFooter from '../../components/footer'

import MsList from '../../components/msList'
import DetailList from '../DetailList'

import './index.less'

import { NavLink, Route, Link } from "react-router-dom";
import { Layout, Row, Col, } from 'antd';
import { reqHome } from '../../api';
const { Header, Footer, Content } = Layout;

export default class Home extends Component {
  async componentDidMount(){
    let result = await reqHome()
    console.log(result.home)
    console.log(this)
  }
  render() {
    return (<div className="wrap_home">
      <Layout>
        <Header>
          <MyHeader />
        </Header>
        <MySwiper />
        <Content>
          <div className="hot_citys">
            <div className="hot_cn">热门城市</div>
            <div className="hot_en">HOT CITIES</div>
          </div>
          <Layout>
            <Row type="flex" justify="center" className="city_list">
              <Col span={6} ></Col>
              <Col span={2} className="city_name">
                <Link className="active">
                  <span>上海</span>
                  {/* /home */}
                </Link>

              </Col>
              <Col span={2} className="city_name">
                <Link>
                  <span>北京</span>
                  {/* /detaillist */}
                </Link>

              </Col>
              <Col span={2} className="city_name">
                <Link>
                  <span>成都</span>
                </Link>

              </Col>
              <Col span={2} className="city_name">
                <Link>
                  <span>广州</span>
                </Link>

              </Col>
              <Col span={2} className="city_name">
                <Link>
                  <span>杭州</span>
                </Link>

              </Col>
              <Col span={2} className="city_name">
                <Link>
                  <span>深圳</span>
                </Link>

              </Col>
              <Col span={6}></Col>

            </Row>
          </Layout>
          {/* <ul className="citys_link clearfix">
            
            <li className="city_name">杭州</li>
            <li className="city_name">深圳</li>
          </ul> */}
          {/* 判断 /home /detaillist */}
          <MsList />
          <NavLink className="moreMs_btn" to="/DetailList" >
            查看更多民宿
          </NavLink>
        </Content>
        <Layout className="middle_ad">
          <Row className="ad_container">
            <Col span={6}>
              <Route path='/DetailList' component={DetailList}>
                <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v91dba65f.png" alt="" />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </Route>
            </Col>
            <Col span={6}>
              <Route path='/DetailList' component={DetailList}>
                <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v91dba65f.png" alt="" />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </Route>
            </Col>
            <Col span={6}>
              <Route path='/DetailList' component={DetailList}>
                <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v91dba65f.png" alt="" />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </Route>
            </Col>
            <Col span={6}>
              <Route path='/DetailList' component={DetailList}>
                <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v91dba65f.png" alt="" />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </Route>
            </Col>
          </Row>
        </Layout>
        <Layout className="wrap_msStory">
          <Row className="story_container" >
            <Col span={8} className="story_col">
              <Link to='/DetailList' className="story_card">
                <img src="https://s3-img.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/iphx-activity/86e2cd_0000.jpg@90Q_250h_400w_1e_1c.webp" alt="" />
                <p>她辞了职卖了公司，在西双版纳盖了座“茅草棚”，连执法的城管都为她点赞</p>
                <p>勇于尝试不同的人生，才能遇见更好的自己</p>
              </Link>
            </Col>
            <Col span={8} className="story_col">
              <Link to='/DetailList' className="story_card">
                <img src="https://s3-img.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/iphx-activity/86e2cd_0000.jpg@90Q_250h_400w_1e_1c.webp" alt="" />
                <p>她辞了职卖了公司，在西双版纳盖了座“茅草棚”，连执法的城管都为她点赞</p>
                <p>勇于尝试不同的人生，才能遇见更好的自己</p>
              </Link>
            </Col>
            <Col span={8} className="story_col">
              <Link to='/DetailList' className="story_card">
                <img src="https://s3-img.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/iphx-activity/86e2cd_0000.jpg@90Q_250h_400w_1e_1c.webp" alt="" />
                <p>她辞了职卖了公司，在西双版纳盖了座“茅草棚”，连执法的城管都为她点赞</p>
                <p>勇于尝试不同的人生，才能遇见更好的自己</p>
              </Link>
            </Col>
          </Row>
        </Layout>
        <Footer>
          <MyFooter />
        </Footer>
      </Layout>

    </div>
    )

  }
}