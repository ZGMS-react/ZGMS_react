import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Row, Col } from 'antd'
import MsCard from '../msCard'
import MsDetail from '../../containers/msdetil'
import './index.less'

@connect(
  (state) => ({ arrHomeList: state.homeList })
)
class MsList extends Component {
  render() {
    const { arrHomeList } = this.props
    // console.log(arrHomeList)
    return <Layout className="wrap_msList clearfix">
      {
        arrHomeList.map((intems, index) => {
          return <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} style={{ margin: 0 }} key={index}>
            {
              intems.map((item, index) => {
                return <Col className="gutter-row" span={8} key={index} >
                  <Link to="/msdetail" >
                    <MsCard className="msCard_box" item={item} />
                  </Link>
                </Col>
              })
            }
          </Row>
        })
      }
    </Layout>
  }
}

export default MsList