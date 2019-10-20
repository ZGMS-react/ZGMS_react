// 引入react
import React, { Component } from 'react'

// 引入antd
import { Menu, Icon } from 'antd';

// 引入样式
import './index.less'

const { SubMenu } = Menu;


class DetailList extends Component {
	state = {
		current: 'mail',
	};
	handleClick = e => {
		console.log('click ', e);
		this.setState({
			// current: e.key,
		});
	};
	render() {
		return (
			<div className="topList">
				<div className="topListUl">
					{/* <li className="topListItem">北京</li> */}
					<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
						<Menu.Item key="mail">
							北京
							<Icon type="down" />
						</Menu.Item>
						<Menu.Item key="app">
							<span>10/20-10/21</span>&nbsp;
							<span>1晚</span>
							<Icon type="down" />
						</Menu.Item>
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
						<Menu.Item key="alipay">
							推荐排序
							<Icon type="down" />
						</Menu.Item>
					</Menu>
				</div>
			</div>
		)
	}
}

export default DetailList