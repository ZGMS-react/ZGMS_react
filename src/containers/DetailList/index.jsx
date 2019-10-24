// 引入react
import React, { Component } from 'react'
import moment from 'moment'

// 引入antd
import { Menu, Icon, Slider, InputNumber, Row, Col, DatePicker, Tag, Pagination } from 'antd';

// 引入样式
import './index.less'
// 引入图片
// import img from './img/01.jpg'
import { reqDetailList } from '../../api';
import { connect } from 'react-redux'
import Header from '../../components/header'
import { updatedetaillist } from '../../redux/action-creators';
import Footer from '../../components/footer'

const { SubMenu } = Menu;
const { RangePicker } = DatePicker;

@connect(
	(state) => ({ listArr: state.listArr }),
	{ updatedetaillist }
)
class DetailList extends Component {
	state = {
		current: 'mail',
		inputValue: 1,
		listArr: [],
		startValue: null,
		endValue: null,
		endOpen: false,
		needFixed: false,
		startTime:'',
		endTime:''
	};

	handleClick = e => {
		console.log('click ', e);
		this.setState({
			// current: e.key,
		});
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
		let startStr = startDate.split('-')
		console.log(startStr)
		this.setState({
			startTime:startStr
		})
		// console.log(this.props.item)
	};

	onEndChange = value => {
		this.onChange('endValue', value);
		const endDate = JSON.stringify(value._d).slice(1, 11)
		// '2019-10-04'
		let endStr = endDate.split('-')
		this.setState({
			endTime:endStr
		})
		console.log(endStr)
	};

	handleStartOpenChange = open => {
		if (!open) {
			this.setState({ endOpen: true });
		}
	};

	handleEndOpenChange = open => {
		this.setState({ endOpen: open });
	};

	async componentDidMount() {
		let result = await reqDetailList()
		let listArr = result.detailList
		console.log(this)
		console.log(listArr)
		this.setState({
			listArr: listArr
		})

	};

	gotoMsDetail = (index) => {
		const { listArr } = this.state
		return () => {
			this.props.updatedetaillist(listArr[index])
			this.props.history.replace('/msdetail')
		}
	}


	render() {
		// function disabledDate(current) {
		// 	// Can not select days before today and today
		// 	return current && current < moment().endOf('day');
		// }
		const { inputValue, listArr } = this.state;
		const { startValue, endValue, endOpen,startTime,endTime } = this.state;
		return (
			<div id='parent'>
				<div>
					<Header />
				</div>
				<div className="detail-topList">
					<div className="detail-topListUl">
						<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
							<Menu.Item key="mail">
								北京
							<Icon type="down" />
							</Menu.Item>
							<SubMenu
								title={
									<span>
										<span>{startTime[1]?startTime[1]:'10'}/{startTime[2]?startTime[2]:'24'}-{endTime[1]?endTime[1]:'10'}/{endTime[2]?endTime[2]:'25'}</span>&nbsp;
										<Icon type="down" />
									</span>
								}>
								<div style={{minWidth:'160px'}}>
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

							</SubMenu>
							<SubMenu
								title={
									<span className="submenu-title-wrapper">
										位置
									<Icon type="down" />
									</span>
								}
							>
								<SubMenu
									key="sub1"
									title={
										<span>
											<span>热门推荐</span>
										</span>
									}
								>
									<Menu.Item key="1">北京大兴国际机场</Menu.Item>
									<Menu.Item key="2">国贸CBD/四惠</Menu.Item>
									<Menu.Item key="3">劲松/潘家园/宋家庄</Menu.Item>
									<Menu.Item key="4">果园环岛/通州区</Menu.Item>
									<Menu.Item key="5">中关村/五道口</Menu.Item>
									<Menu.Item key="6">大兴北京新机场</Menu.Item>
									<Menu.Item key="7">良乡大学城</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub2"
									title={
										<span>
											<span>行政区</span>
										</span>
									}
								>
									<Menu.Item key="1">昌平区</Menu.Item>
									<Menu.Item key="2">朝阳区</Menu.Item>
									<Menu.Item key="3">大兴区</Menu.Item>
									<Menu.Item key="4">东城区</Menu.Item>
									<Menu.Item key="5">房山区</Menu.Item>
									<Menu.Item key="6">丰台区</Menu.Item>
									<Menu.Item key="7">海淀区</Menu.Item>
									<Menu.Item key="8">怀柔区</Menu.Item>
									<Menu.Item key="9">门头沟区</Menu.Item>
									<Menu.Item key="10">密云区</Menu.Item>
									<Menu.Item key="11">平台区</Menu.Item>
									<Menu.Item key="12">石景山区</Menu.Item>
								</SubMenu>

								{/* <Menu.ItemGroup title="景点"> */}
								<SubMenu
									key="sub3"
									title={
										<span>
											<span>景点</span>
										</span>
									}
								>
									<Menu.Item key="1">东湖港</Menu.Item>
									<Menu.Item key="2">乔波滑雪馆</Menu.Item>
									<Menu.Item key="3">云龙涧风景区</Menu.Item>
									<Menu.Item key="4">中华世纪坛</Menu.Item>
									<Menu.Item key="5">中国国际展览中心</Menu.Item>
									<Menu.Item key="6">云蒙山</Menu.Item>
									<Menu.Item key="7">东京大溶洞</Menu.Item>
									<Menu.Item key="8">人民大会堂</Menu.Item>
								</SubMenu>
								{/* </Menu.ItemGroup> */}
							</SubMenu>
							<SubMenu
								key="sub4"
								title={
									<span>
										<span>推荐排序</span>
										<Icon type="down" />
									</span>
								}
							>
								<Menu.Item key="alipay1">
									推荐排序
							</Menu.Item>
								<Menu.Item key="alipay2">
									好评优先
							</Menu.Item>
								<Menu.Item key="alipay3">
									低价优先
							</Menu.Item>
								<Menu.Item key="alipay4">
									高价优先
							</Menu.Item>
								<Menu.Item key="alipay5">
									人气优先
							</Menu.Item>
								<Menu.Item key="alipay6">
									距离优先
							</Menu.Item>
							</SubMenu>
							<SubMenu
								key='sub5'
								title={
									<span>
										<span>价格范围</span>
										<Icon type="down" />
									</span>
								}
								id="Icon"
							>
								<Menu.Item key="1">
									<Row>
										<Col span={12}>
											<Slider
												min={0}
												max={600}
												onChange={this.onChange}
												value={typeof inputValue === 'number' ? inputValue : 0}
											/>
										</Col>
										<Col span={4}>
											<InputNumber
												min={0}
												max={600}
												style={{ marginLeft: 16 }}
												value={inputValue}
												onChange={this.onChange}
											/>
										</Col>
									</Row>
								</Menu.Item>
							</SubMenu>
						</Menu>
					</div>
					<div className="detail-headerList">
						<ul className="hearerListUl">
							<li className="headerItem">
								<span>有优惠</span>
								<Icon type="down" />
							</li>
							<li className="headerItem">
								<span>有特色</span>
								<Icon type="down" />
							</li>
							<li className="headerItem">全家出游</li>
							<li className="headerItem">可做饭</li>
							<li className="headerItem">近地铁</li>
							<li className="headerItem">有停车位</li>
							<li className="headerItem">超赞房东</li>
							<li className="headerItem">立即确认</li>
							<li className="headerItem">可开发票</li>
							<li className="headerItem">性价比高</li>
							<li className="headerItem">一室一厅</li>
							<li className="headerItem">青旅</li>
						</ul>
					</div>
					<div className="detail-content">
						<ul className="content-list">
							{
								listArr.map((item, index) => {
									return <li className="content-item" key={item.id} onClick={this.gotoMsDetail(index)}>
										<img className="img" src={item.img} alt="" />
										<div className="tags">
											<ul className="tagsList">
												<li className="tagsItem">
													<Tag color="gold">可做饭</Tag>
													<Tag color="volcano">立即确认</Tag>
													<Tag color="lime">近地铁</Tag>
													<Tag color="cyan">全家出游</Tag>
												</li>
											</ul>
										</div>
										<p className="title">{item.title}</p>
										<div className="code">
											<span className="code1">5.0分</span>
											|<span>整套·1居室</span>
											|<span>可住{item.maxPersonNum}人</span>
											|<span>{item.city}</span>
										</div>
										<p className="price">
											<span>￥</span>
											<span className="num">{item.newPrice}</span>
										</p>
									</li>
								})
							}
						</ul>
					</div>
					<div className="detail-pagination">
						<Pagination defaultCurrent={1} total={170} className="pagination-list" />
					</div>
				</div>
				
					<Footer/>
				
			</div>
		)
	}
}

export default DetailList