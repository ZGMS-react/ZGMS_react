import React, { Component } from 'react';
import MyHeader from '../../components/header'
import MySwiper from '../../components/swiper'

import './index.less'

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export default class Home extends Component {
  render() {
    return (<div className="wrap_home">
      <Layout>
        <Header>
          <MyHeader />
        </Header>
        <MySwiper />
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

    </div>
    )

  }
}