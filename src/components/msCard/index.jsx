import React, { Component } from 'react';
import { Tag } from 'antd'
import './index.less'
export default class MsList extends Component {
  render() {
    return <div className="wrap_Card">
      <img className="cover_img" src='https://img.meituan.net/iphoenix/8fd374262c0b93023f21ade5d259536d255985.jpg@1000w_750h_1e_1c_80Q' alt="" />
      <div className="ms_tags">
        <Tag color="gold">可做饭</Tag>
        <Tag color="volcano">立即确认</Tag>
        <Tag color="lime">近地铁</Tag>
        <Tag color="cyan">全家出游</Tag>
      </div>
      <h2 className="ms_title">地铁公园旁loft的现代简约风格</h2>
      <div className="score_row">
        <span className="ms_score">5.0分</span>
        |<span>整套·1居室</span>
        |<span>可住2人</span>
        |<span>顺义区</span>
      </div>
      <div className="wrap_price">    
      96    
        {/* <span className="ms_price">344</span> */}
      </div>
    </div>
  }
}