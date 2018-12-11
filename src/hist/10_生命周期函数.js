import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
/**
 * 1.生命周期
 * 2.代码编写顺序
 */
class Counter extends Component{
    constructor(){
        super();
        this.state={num:0}
    }
    componentWillMount(){
        console.log('1.componentWillMount 组件挂载前')
    }
    handleClick= () => {
        //setState 方法是异步的，所以不能在赋值之后立即获取最新的值，使用回调函数中获取
        this.setState({
            num:this.state.num+1
        },()=>{
            console.log(this.state.num)
        });
    }
    //newProps 新的属性对象
    // newState新的状态对象
    shouldComponentUpdate(newProps,newState){
        console.log('4.shouldComponentUpdate 组件是否要进行更新');
        if (newState.num%5 === 0) {
            return true
        }else{
            return false;
        }
    }
    componentWillUpdate(){
        console.log('5.componentWillUpdate 组件将要更新')
    }
    
    render(){
        console.log('2.render 组件挂载过程')
        return (
            <div style={{ border: '1px solid red',padding:5 }}>
               <p>{this.state.num}</p>
               <button onClick={this.handleClick}>+</button>
                <SubCounter num={this.state.num}></SubCounter>
            </div>
        )
    }
    componentDidUpdate() {
        console.log('6.componentDidUpdate 组件更新完成')
    }
    componentDidMount(){
        console.log('3.componentDidMount 组件挂载完成')
    }
}

class SubCounter extends Component{
    //组件将要接收到新的属性对象
    componentWillReceiveProps(newProps){
        console.log('SubCounter componentWillReceiveProps');
    }
    shouldComponentUpdate(newProps,newState){
        if (newProps.num%2===0) {
            return true
        }else{
            return false
        }
    }
    render(){
        return (
            <div style={{border:'1px solid blue',margin:5}}>
                <p>{this.props.num}</p>
            </div>
        )
    }
}
ReactDOM.render(
    <Counter/>, 
    document.getElementById('root')
);

