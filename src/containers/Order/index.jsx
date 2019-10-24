import React from 'react';
import Header from '@comps/header'
import './index.less'
import {getItem} from '@utils/storage'
import withCheckLogin from "@conts/with-check-login";

@withCheckLogin
class Order extends React.Component {
   
    render() {
        console.log(this)
        let dataArr=getItem('listArr')
        return (
            <div className="order">
                <Header />
                <div className="order_content">
                    <div className="order_head">
                        <img className="order_img" src={dataArr.img} alt="房源图片" />
                        <div className="order_right">
                            <p className="order_title">{dataArr.houseType}</p>
                            <p className="order_author">{dataArr.houseAddress}</p>
                        </div>
                    </div>
                    <div className="order_info">
                        <h4 className="detailPrice">费用详情</h4>
                        <div className="info_start">
                            <span className="info_data">入住日期</span>
                            <div className="start_data">
                                <p className="info_start_data">{dataArr.startDate}</p>
                                <p className="start_data_log">14:00至不限时间</p>
                            </div>
                        </div>
                        <div className="info_end">
                            <span className="info_data">退房日期</span>
                            <div className="start_data">
                                <p className="info_start_data">{dataArr.endDate}</p>
                                <p className="start_data_log">12:00前</p>
                            </div>
                        </div>
                        <div className="info_person">
                            <span className="info_data">入住人数</span>
                            <div className="start_data">
                                <p className="info_start_data">{dataArr.checkinNumber}位客人</p>
                            </div>
                        </div>
                        <div className="info_price">
                            <span className="info_data">房费</span>
                            <div className="start_data">
                                <p className="info_start_data">￥{dataArr.newPrice}</p>
                            </div>
                        </div>

                    </div>
                    <div className="order_explain">
                        <h4 className="explainList">注意事项</h4>
                        <ul>
                            <li>1.退款政策：【宽松】入住前1天12:00前退订，可获100%退款。之后退订不退款</li>
                            <li>2.住宿后如需要发票，请与房东协商或咨询人工服务</li>
                            <li>3.预订代表您同意《房客规则》《用户服务协议》《隐私政策》《法律声明》和房东的《客人须知》</li>
                        </ul>
                    </div>
                    <div className='account'>
                       ￥199 提交订单
                    </div>
                </div>
            </div>
        )
    }
}
export default Order