import React,{Component} from 'react';
import ReactDOM from 'react-dom';

/**
 *非受控组件 
 */
class Sum extends Component{
    
    handleChange = (event)=>{
        let a = parseInt(this.a.value || 0);
        let b = parseInt(this.b.value || 0);
        this.res.value = a+b;
    }
    render(){
        //ref等于一个函数，表示当元素被挂载到页面中之后会立即调用此函数并传入渲染后的DOM元素
        return (
            <div onChange={this.handleChange}>
                <input ref={ref=>this.a=ref} type="text" ></input>+
                <input ref={ref => this.b = ref} type="text"></input>=
                <input ref={ref => this.res = ref} type="text" readOnly></input>
            </div>
        )
    }
}
ReactDOM.render(
    <Sum/>, 
    document.getElementById('root')
);

