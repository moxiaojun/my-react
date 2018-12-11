import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from "prop-types";

/**
 * 受控组件
 */
/* class Input extends Component{
    constructor(){
        super();
        this.state={val:''};
    }
    handleChange=(event)=>{
        let val = event.target.value;
        console.log(val)
        this.setState({
            val
        })
    }
    render(){
        return (
            <div>
                <p>姓名：{this.state.val}</p>
                <p><input type="type" onChange={this.handleChange} value={this.state.val}/></p>
            </div>
        )
    }
} */
/**
 *受控组件 
 */
class Sum extends Component{
    constructor(){
        super();
        this.state = {a:0,b:0,result:0}
    }
    handleChangeA = (event)=>{
        let val = parseInt(event.target.value)
        this.setState({
            a: val,
            result: val+this.state.b
        })
    }
    handleChangeB = (event) => {
        let val = parseInt(event.target.value)
        this.setState({
            b: val,
            result: val + this.state.a
        })
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChangeA} value={this.state.a}></input>+
                <input type="text" onChange={this.handleChangeB} value={this.state.b}></input>=
                <input type="text" value={this.state.result}></input>
            </div>
        )
    }
}
ReactDOM.render(
    <Sum/>, 
    document.getElementById('root')
);

