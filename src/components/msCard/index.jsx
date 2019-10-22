import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import './index.less'

class MsList extends Component {
  static propTypes = { 
    item : PropTypes.object.isRequired 
  } 

  render() {
    const { item } = this.props
    // console.log(item)
    // const { labels } = item.label
    // console.log(labels)


    return <div className="wrap_Card">
      <img className="cover_img" src={item.img} alt="" />
      <div className="ms_tags">
        <Tag color="gold">可做饭</Tag>
        <Tag color="volcano">立即确认</Tag>
        <Tag color="lime">近地铁</Tag>
        <Tag color="cyan">全家出游</Tag>
      </div>
      <h2 className="ms_title">{item.title}</h2>
      <div className="score_row">
        <span className="ms_score">{item.score}分</span>
        |<span>{item.houseType}</span>
        |<span>可住{item.maxPersonNum}人</span>
        |<span>{item.city}</span>
      </div>
      <div className="wrap_price">
        {item.newPrice}
        {/* <span className="ms_price">344</span> */}
      </div>
    </div>
  }
}

export default MsList