import React, { Component } from 'react';
import './index.less'
import bg from './2.png'
import MDHeader from '../../components/header'
import { Pagination, Icon, DatePicker } from 'antd'
import Star from '../../components/star';
import { connect } from 'react-redux'
import { reqComment } from '../../api';
import { updatedetaillist } from '../../redux/action-creators';
import { getItem } from '../../utils/storage';

@connect(
  (state) => ({ item: state.listArr }),
  {updatedetaillist}
)
class MsDetail extends Component {
  //date
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
    needFixed: false,
    commArr: [],
    number: 1
  };
  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
    const startDate = JSON.stringify(value._d).slice(1, 11)

    this.props.item.startDate = startDate
    // console.log(this.props.item)
  };

  onEndChange = value => {
    this.onChange('endValue', value);
    const endDate = JSON.stringify(value._d).slice(1, 11)
    this.props.item.endDate = endDate
    // console.log(endDate)
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };
  // //监听input
  // handleChange = (e) => {
  //   this.setState({
  //     value: +e.target.value
  //   })
  // }
  reduce = () => {
    const { number } = this.state
    if (number > 1) {
      this.setState({
        number: number - 1
      })
    }
  }
  add = () => {
    const { number } = this.state
    const { item } = this.props
    if (number < item.maxPersonNum) {
      this.setState({
        number: number + 1
      })
    }
  }

  handleGoTo=()=>{
    const {item}=this.props
    const { number } = this.state
    this.props.item.checkinNumber=number
    // console.log(this.props.item)
    this.props.updatedetaillist(item)
    this.props.history.replace('/order')
  }

  async componentDidMount() {
    // console.log(11111111)
    let commentArr = await reqComment()
    // console.log(commentArr)
    this.setState({
      commArr: commentArr.comment
    })

    const fixedTop = document.getElementById('fixed-menu').offsetTop;
    document.onscroll = () => {
      let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
      // let scrollTop =document.documentElement.scrollTop

      //控制元素块A随鼠标滚动固定在顶部
      if (scrollTop >= fixedTop) {
        this.setState({ needFixed: true })
      } else if (scrollTop < fixedTop) {
        this.setState({ needFixed: false })
      }
    }


  }


  render() {
    // const { item } = this.props
    const item = getItem("listArr")

    const { commArr, number } = this.state
    // console.log(commArr)
    let canLog = true
    window.onscroll = function () {
      if (canLog) {
        // console.log(1)
        // console.log(item)
        canLog = false
        setTimeout(() => {
          canLog = true
        }, 2000)
      }
    }
    // const {commentArr}=this.props
    const { startValue, endValue, endOpen } = this.state;
    function onShowSizeChange(current, pageSize) {
      // console.log(current, pageSize);
    }
    return (
      <div className="wrap_msdetail">
        <div className="header-top">
          <MDHeader />
        </div>
        <div className="box">
          <div className="image">
            <img src={item.img} alt="" />
          </div>
        </div>
        <div className="content_wrap">
          <div className="content_left">
            <div className="left_center">
              <section className="block">
                <div className="wrap_address">
                  <div className="hrefto">
                    <a href="/shanghai/">民宿 </a>
                    <span>></span>
                    <a href="/shanghai/a34399/"> {item.city}</a>
                  </div>
                  <h2>{item.title}</h2>
                </div>
                <div className="wrap_baseInfo">
                  <span>独立单间</span>
                  <span>独卫</span>
                  <span>12平</span>
                  <span>可住{item.maxPersonNum}人</span>
                </div>
              </section>
              <section className="block">
                <h3>房东信息</h3>
                <div className="information">
                  <div className="head_sculpture">
                    <img src={item.landlordAvatar} alt="" />
                  </div>
                  <div className="communication">
                    <div className='adr'>
                      <a className="user_address" href="/user/35328256/">{item.landlorName}</a>
                      <a className="user_connect" href="/chat/1418420846/">联系房东</a>
                    </div>
                    <div className="adr_information">
                      <button type="button" data-user-id="35328256">已实名认证</button>
                    </div>
                    <div className="adr_info">
                      <span>60后巨蟹座</span>
                      <span>上海轻工业技术学校</span>
                      <span>我是搞技术的</span>
                    </div>
                  </div>
                </div>
                <hr />
                <ul className="evaluate">
                  <li>
                    <div>房源</div>
                    <div>{item.loadnlorHosing}</div>
                  </li>
                  <li>
                    <div>评价</div>
                    <div>{item.loadnlorComment}</div>
                  </li>
                  <li>
                    <div>咨询回复率</div>
                    <div>{item.loadnlorReversion}</div>
                  </li>
                  <li>
                    <div>咨询回复时长</div>
                    <div>{item.loadnlorReversionTime}</div>
                  </li>
                </ul>
                <hr />
                <div className="host_sign">
                  <span className="text_deep_grey">个人介绍：</span>
                  我是因一位性格开朗善良的女士 喜欢音乐旅游 爱交朋友 特别希望通过这个平台给自己增加一些生活乐趣 接交更多朋友 也希望把自己空闲的房子充分利用起来 供来上海朋友有个临时避风港 住我这里一定会让你称心满意 有家的感觉。
                </div>
              </section>
              <section className="block">
                <h3>亮点</h3>
                <p className="p1">出租一间次卧 有独立卫生间 非常安静 离地铁步行5分钟左右 房间宽敞明亮 有大飘窗 有空调 24小时热水 免费wfi 窗外小桥流水 风景如画 总子就是要让你住的开心 安心 放心 有家的感觉</p>
              </section>
              <section className="block">
                <h3>评价</h3>
                <div className="access_content">
                  <div className="access_count">共{item.loadnlorComment}条评价</div>
                  <div className="star">
                    {/* <Rate className="star_rate" allowHalf defaultValue={1} /> */}
                    <Star star={item.score} /><span>{item.score}分</span>
                  </div>
                  <ul>
                    <li>
                      <div className="star">
                        <span>描述准确</span><Star star={4.8} /><span>4.8分</span>
                      </div>
                    </li>
                    <li>
                      <div className="star">
                        <span>沟通交流</span><Star star={4.8} /><span>4.8分</span>
                      </div>
                    </li>
                    <li>
                      <div className="star">
                        <span>卫生状况</span><Star star={4.8} /><span>4.8分</span>
                      </div>
                    </li>
                    <li>
                      <div className="star">
                        <span>地理位置</span><Star star={4.8} /><span>4.8分</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <hr />

                {
                  commArr.map((comm ,index) => {
                    return <div className="access_user" key={index}>
                      <div className="access_top">
                        <img src={comm.commentAvatar} alt="" />
                        <div className="user_name">
                          <div className="user_name_top">{comm.commentName}</div>
                          <div className="star">
                            <Star star={4.8} />
                          </div>
                        </div>
                      </div>
                      <p className="p2">{comm.comment}</p>
                    </div>

                  })
                }

                <hr />
                {/* <div className="access_user">
                  <div className="access_top">
                    <img src="" alt="" />
                    <div className="user_name">
                      <div className="user_name_top">Kohaly_</div>
                      <div className="star">
                        <Star star={4.8} />
                      </div>
                    </div>
                  </div>
                  <p className="p2">房子靠近地鐵站，出行很方便，阿姨人也很和善～</p>
                </div>
                <hr />
                <div className="access_user">
                  <div className="access_top">
                    <img src="" alt="" />
                    <div className="user_name">
                      <div className="user_name_top">Kohaly_</div>
                      <div className="star">
                        <Star star={4.8} />
                      </div>
                    </div>
                  </div>
                  <p className="p2">房子靠近地鐵站，出行很方便，阿姨人也很和善～</p>
                </div>
                <hr />
                <div className="access_user">
                  <div className="access_top">
                    <img src="" alt="" />
                    <div className="user_name">
                      <div className="user_name_top">Kohaly_</div>
                      <div className="star">
                        <Star star={4.8} />
                      </div>
                    </div>
                  </div>
                  <p className="p2">房子靠近地鐵站，出行很方便，阿姨人也很和善～</p>
                </div> */}
                <div className="page_change">
                  <Pagination
                    // showSizeChangers
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={1}
                    total={Number(item.loadnlorComment)}
                    pageSize={3}
                  // pageSizeOptions={[3,5,7,9]}
                  />
                </div>
              </section>
              <section className="block">
                <h3>房源位置</h3>
                <p className="p3">{item.houseAddress}</p>
                {/* <div className="map">地图</div> */}
              </section>
              <section className="block">
                <h3>设施服务</h3>
                <p className="p4">床型</p>
                <div className="bed_type">双人床X1</div>

                <ul>
                  <hr />
                  <li className="facilities">
                    <p className="p5">设施</p>
                    <ul className="center_ul">
                      <li>
                        <Icon style={{ fontSize: '32px' }} type="wifi" />
                        <p>WI-FI</p>
                      </li>
                      <li>
                        <Icon style={{ fontSize: '32px' }} type="wifi" />
                        <p>WI-FI</p>
                      </li>
                      <li>
                        <Icon style={{ fontSize: '32px' }} type="wifi" />
                        <p>书桌/工作区</p>
                      </li>
                    </ul>
                  </li>
                  <hr />
                  <li className="facilities">
                    <p className="p5">设施</p>
                    <ul className="center_ul">
                      <li>
                        <Icon style={{ fontSize: '32px' }} type="wifi" />
                        <p>WI-FI</p>
                      </li>
                      <li>
                        <Icon style={{ fontSize: '32px' }} type="wifi" />
                        <p>WI-FI</p>
                      </li>
                      <li>
                        <Icon style={{ fontSize: '32px' }} type="wifi" />
                        <p>书桌/工作区</p>
                      </li>
                    </ul>
                  </li>

                </ul>
              </section>
              <section className="block">
                <h3>详细介绍</h3>
                <p>房间的次卧 卫生间就在房间门口 基本是独立卫生间 供次卧客人使用 家人有自己卫生间 房间阳光充足 宽敞明亮 有空调 24小时热水 免费wfi 窗外小桥流水 风景如画 总子就是要让你住的开心舒服安心。</p>
              </section>
              <section className="block">
                <h3>周边介绍</h3>
                <p>
                  房间位于黄浦区市中心新楼房小高层电梯房 闹中取静 安全可靠<br />
                  地铁公交过来都非常好找 <br />
                  地铁4号线鲁班路站1号出口步行5分钟既到<br />
                  13号线世博会博物馆3号出口步行5分钟既到<br />
                  9号线马当路蒙自路出口15分钟到<br />
                  门口骑个单车10～15分钟之内能到黄浦滨江 新天地 田子坊 日月光 思南公馆 淮海路商圈 世博会博物馆 上海当代艺术博物馆等上海经典景点。<br />
                  地铁2站路程能到梅赛德斯中心欣赏各种演唱会。<br />
                  如果不想坐车 打车15–20元左右能到人民广场杜莎蜡像馆 南京路外滩 城隍庙豫园 东方明珠 静安寺等上海各大景点 免去晚上没有地铁烦恼 骑个单车或打个滴就能轻松回来。<br />
                  门口还有密室逃脱 大型农工商超市 8号桥创意园 汇暻生活广场 星巴克 永辉超市 汉堡王 万宁 等等<br />
                  <br />
                  门口地铁直达迪士尼乐园<br />
                  另外门口还有多条公交线路933路 36路 45路 96路 17路 隧道8线等交通非常便利 <br />
                  4站能到南京西路 静安寺 人民广场 外滩 陆家嘴 杜莎蜡像馆 上海东方明珠等上海经典景点 另外世博会又向全国开放了 离我家8分钟左右很方便的 欢迎各位光临。<br />
                  还有晚上可以骑个单车5分钟到黄浦徐汇滨江看黄浦江夜景 卢浦大桥非常漂亮 美丽壮观。<br />
                </p>
              </section>
              <section className="block">
                <h3>预订须知</h3>
                <h4>入住时间</h4>
                <p>14:00后(若晚于22:00请联系房东确认)</p>
                <hr />
                <h4>退房时间</h4>
                <p>12:00前</p>
                <hr />
                <h4>预订时长</h4>
                <li className="lispecial">随时可预订</li>
                <li className="lispecial">最少预订1天， 最多预订天数不限</li>
                <hr />
                <h4>退订策略</h4>
                <li className="lispecial">【宽松】入住前1天12:00前退订，可获100%退款。之后退订不退款</li>
                <hr />
                <h4>可住人数</h4>
                <p>可住2人，不可加客</p>
                <hr />
                <h4>客人须知</h4>
                <li className="lispecial"> <del>适合老人丶（60岁以上）丶适合婴幼儿（2岁以下）丶允许携带宠物允许聚会允许抽烟适合儿童（2-12岁）丶允许做饭</del></li>
                <li className="lispecial_li">
                  不接待入住期间需要看病和接受整容手术客人<br />
                  入住时需要出示身份证<br />
                  如需提供2条被子的请提前和我联系 <br />
                  12点退房 14点入住 限女生入住<br />
                  为了保证卫生 毛巾需要自己携带。 <br />
                  请先沟通好再下单奥<br />
                  入住一天的只适合当天空房和满房相隔间一天空房 其余时间需2天以上才能预定<br />
                </li>
              </section>
              {/* <section className="block">
                <h3>推荐房源</h3>

              </section> */}
            </div>
          </div>
          <div id="fixed-menu" className={`content_right ${this.state.needFixed ? 'fixed' : ''}`}>
            <div className="react_root">
              <header className="product_top">
                <span className="product_price">
                  <span className="currency">￥
                    <span className="price">{item.newPrice}</span>
                    <small>/晚</small>
                  </span>
                </span>
              </header>
              <div className="booking_wrapper">
                <div className="book_date">
                  <div className="bookDatesCell">
                    <div className="bookDatesCell_top">入住日期</div>
                    <div className="bookDatesCell_bottom">
                      <DatePicker
                        size={"large=38"}
                        style={{ width: 135, height: 38, minHeight: 0, minWidth: 0 }}
                        disabledDate={this.disabledStartDate}
                        // showTime
                        format="YYYY-MM-DD"
                        value={startValue}
                        placeholder="选择日期"
                        onChange={this.onStartChange}
                        onOpenChange={this.handleStartOpenChange}
                      />
                    </div>
                  </div>
                  <div className="bookDatesCell">
                    <div className="bookDatesCell_top">退房日期</div>
                    <div>
                      <DatePicker
                        style={{ width: 135, height: 38, minHeight: 0, minWidth: 0 }}
                        disabledDate={this.disabledEndDate}
                        // showTime
                        format="YYYY-MM-DD"
                        value={endValue}
                        placeholder="选择日期"
                        onChange={this.onEndChange}
                        open={endOpen}
                        onOpenChange={this.handleEndOpenChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="menu_label">
                  <label>入住人数</label>
                  <div className="jisuan">
                    <Icon type="minus" onClick={this.reduce} style={{ width: 20, height: 20, fontSize: 16, fontWeight: 600, borderRadius: 10 }} />
                    {/* <input type="text" placeholder="" Value="1" style={{ fontSize: 20 }} onChang={this.handleChange} /> */}
                    <span>{number}</span>
                    <Icon type="plus" onClick={this.add} style={{ width: 20, height: 20, fontSize: 16, fontWeight: 600, borderRadius: 10 }} />
                  </div>
                </div>
                <p style={{ fontSize: 12, color: '#979797' }}>可住{item.maxPersonNum}人，不可加客</p>
                <button className="bton" type="submit" onClick={this.handleGoTo}><span>立即预定</span></button>
                <div className="erweima">
                  <img src={bg} alt="" />
                  <div>
                    <p>微信扫码9折订</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MsDetail
