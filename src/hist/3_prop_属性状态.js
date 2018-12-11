import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

class Porson extends Component{
    constructor(){
        super();
        //为组建增加一个初始状态  状态只在组件内部生效
        this.state={happy:true}
    }
    //默认属性对象 属性在父组件更新 在子组件内部只能读取
    static defaultProps={
        name:'无名',
    }
    //如果定义组件的时候希望传入的组件属性有类型和是否必填的限制
    static propTypes={
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    handleClick = ()=>{
        this.setState({happy:!this.state.happy})
    }
    render(){
        let heart = this.state.happy?'开心':'难过';
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>心情：{heart}</p>
                <button onClick={this.handleClick}>改变</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Porson age={18}/>, 
    document.getElementById('root')
);

