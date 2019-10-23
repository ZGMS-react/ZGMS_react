import React, { Component } from 'react';
import { connect } from 'react-redux'
import { homeList } from '../../redux/action-creators'
import { spliceHomeList } from '../../utils/cuttingArr.js'

import MyHeader from '../../components/header'
import MySwiper from '../../components/swiper'
import MyFooter from '../../components/footer'
import MsList from '../../components/msList'
import DetailList from '../DetailList'

import './index.less'

import { Switch, NavLink, Route, Link } from "react-router-dom";
import { Layout, Row, Col } from 'antd';
import { reqHome, reqDetailList } from '../../api';

// import { connect } from 'tls';
const { Header, Footer, Content } = Layout;
@connect(
  (state) => ({ arrHomeList: state.arrHomeList }),
  { homeList }
)
class Home extends Component {
  async componentDidMount() {
    let listData = []
    let homeDate = await reqHome()
    listData = spliceHomeList(homeDate.home)
    this.props.homeList(listData)
  }

  handleCity = (index) => {
    let listData = []
    return async () => {
      // 判断点击的是哪个城市，发送相关请求，获取对应的数据数组(二维数组)
      if (index === 1) {
        let homeDate = await reqHome()
        listData = spliceHomeList(homeDate.home)
      } else {
        let detailList = await reqDetailList()
        listData = spliceHomeList(detailList.detailList)
      }
      this.props.homeList(listData)
    }
  }

  // 城市切换---排他操作---forEach遍历时注意每个项目
  handleActive = (e) => {
    // console.log(e.currentTarget) // Row标签
    // console.log(e.currentTarget.children) // Row标签中的子标签集合
    const colNodes = e.currentTarget.children
    const arrColNodes = Array.from(colNodes)
    // 遍历所有的Col节点，清空每一个col的子元素的className
    arrColNodes.forEach((colNode, index) => {
      colNode.className = "ant-col ant-col-2 city_name"
    })
    e.target.className = "ant-col ant-col-2 city_name active"
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
            <Row type="flex" justify="center" className="city_list" onClick={this.handleActive}>
              <Col span={6} ></Col>
              <Col span={2} className="city_name active" onClick={this.handleCity(1)}>上海</Col>
              <Col span={2} className="city_name" onClick={this.handleCity(2)}>北京</Col>
              <Col span={2} className="city_name" onClick={this.handleCity(1)}>成都</Col>
              <Col span={2} className="city_name" onClick={this.handleCity(2)}>广州</Col>
              <Col span={2} className="city_name" onClick={this.handleCity(1)}>杭州</Col>
              <Col span={2} className="city_name" onClick={this.handleCity(2)}>深圳</Col>
              <Col span={6}></Col>

            </Row>
          </Layout>
          {/* 判断 /home /detaillist */}
          <MsList />
          <NavLink className="moreMs_btn" to="/DetailList" >
            查看更多民宿
          </NavLink>
        </Content>
        <Layout className="middle_ad">
          <Row className="ad_container">
            <Col span={6}>
              <Link to="/storyDetail">
                <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v91dba65f.png" alt="" />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </Link>
            </Col>
            <Col span={6}>
              <Link to="/ss">
                <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v91dba65f.png" alt="" />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </Link>
            </Col>
            <Col span={6}>
              <Link to="/ss">
                <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v91dba65f.png" alt="" />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </Link>
            </Col>
            <Col span={6}>
              <Link to="/ss">
                <img src="https://s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v91dba65f.png" alt="" />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </Link>
            </Col>
          </Row>
        </Layout>
        <Layout className="wrap_msStory">
          <Row className="story_container" >
            <Col span={8} className="story_col">
              <Link to='/storyDetail' className="story_card">
                <img src="https://s3-img.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/iphx-activity/3effef_s4%20(2).jpg@90Q_250h_400w_1e_1c.webp" alt="" />
                <p>他横穿美国66号公路后，回到北京野郊开了一个农庄</p>
                <p>历时五年，在北京野郊打造一个世外桃源</p>
              </Link>
            </Col>
            <Col span={8} className="story_col">
              <Link to='/storyDetail' className="story_card">
                <img src="https://s3-img.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/iphx-activity/86e2cd_0000.jpg@90Q_250h_400w_1e_1c.webp" alt="" />
                <p>她辞了职卖了公司，在西双版纳盖了座“茅草棚”，连执法的城管都为她点赞</p>
                <p>勇于尝试不同的人生，才能遇见更好的自己</p>
              </Link>
            </Col>
            <Col span={8} className="story_col">
              <Link to='/storyDetail' className="story_card">
                <img src="https://s3-img.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/iphx-activity/c6cc6e_d0.jpg@90Q_250h_400w_1e_1c.webp" alt="" />
                <p>他辗转印度甘孜藏区做公益，回来后和妻子开了民宿</p>
                <p>爆改迪士尼边上的乡间农民房，美哭了</p>
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

export default Home;