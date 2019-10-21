import React, {Component} from 'react';
import './index.less'
import bgc from './1.jpg'

export default class MsDetail extends Component {
  render() {
    return (
      <div>
        <div className="header-top"></div>
        <div className="box">
          <div className="image">
            <img src={bgc} alt=""/>
          </div>
        </div>

        <div className="content">
          <div className="content-left">

          </div>
          <div className="content-right">

          </div>
        </div>
      </div>
    )
  }
}