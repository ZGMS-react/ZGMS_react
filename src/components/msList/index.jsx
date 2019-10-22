import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Row, Col } from 'antd'
import MsCard from '../msCard'
// import MsDetail from '../../containers/msdetil'
import './index.less'
import { updatedetaillist } from '../../redux/action-creators';

@connect(
  (state) => ({ arrHomeList: state.homeList }),
  {updatedetaillist}
)
class MsList extends Component {
  gotoMsDetail=(index1,index2)=>{
    return ()=>{
      let MsDetailList = this.props.arrHomeList[index1][index2]
      console.log(MsDetailList)
      this.props.updatedetaillist(MsDetailList)
    }
  }
  render() {
    const { arrHomeList } = this.props
    // console.log(arrHomeList)
    return <Layout className="wrap_msList clearfix">
      {
        arrHomeList.map((intems, index1) => {
          return <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} style={{ margin: 0 }} key={index1}>
            {
              intems.map((item, index2) => {
                return <Col className="gutter-row" span={8} key={index2}  >
                  <Link to="/msdetail" onClick={this.gotoMsDetail(index1,index2)} >
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