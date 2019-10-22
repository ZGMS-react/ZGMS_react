import React,{Component} from 'react'
import './index.less'
class Star extends Component{
    constructor(props){
        super(props);
        this.state={
            starNum:['star0','star0','star0','star0','star0'] //设置默认背景图
        }
    }
    componentDidMount(){
        this.getStar((Math.floor(this.props.star*2))/2+1);
    }
    getStar(num){
        let newStar = this.state.starNum.map((item)=>{ //当num=3.5时遍历后newStar数组变成['star2','star2','star2','star1','star0','star0']
            --num;
            return num>=1?'star2':((num>0)?'star1':'star0'); //两次三目运算
        })
        this.setState({
            starNum:newStar  //设置state为遍历后的新数组
        })
    }
    render(){
        return (<span className="star">
            {
                this.state.starNum.map((item, index)=>{
                    return <span className={item} key={index}></span>
                })
            }
        </span>)
    }
}
export default Star;