import React,{ Component } from "react";
import jsonp from 'jsonp'
/**
 * 1.给input绑定值改变时间当值发生改变时调用监听
 * 2.获取到input的值，然后调用百度的接口获取数据并修改状态对象中的words的属性
**/
export default class Suggest extends Component{
    constructor(){
        super();
        this.state={
            words:[],
            index:-1,//当前选中的索引
        };
    }
    handleChange = (event)=>{
        let wd = event.target.value;
        this.wd = wd;
        console.log(wd)
        jsonp('http://www.baidu.com/su?wd='+wd,{
            param:'cb'
        },(err,data)=>{
            this.setState({
                words:data.s
            })
        })
    }
    handleKeyDown = (event)=>{
        let code = event.keyCode;
        //当按下的是向上或向下箭头键时
        if(code===38 || code===40){
            let index = this.state.index;
            if(code === 38){
                index--;
                if (index==-2){
                    index = this.state.words.length-1
                }
            }else if (code===40) {
                index++;
                if (index==this.state.words.length){
                    index = -1;
                }
            }
            this.setState(
                {index:index},
                ()=>{
                this.refs.keyword.value = this.state.index==-1 ? this.wd : this.state.words[this.state.index]
            })

        }
        else if (event.keyCode===13){
            window.location.href = 'http://www.baidu.com/s?wd='+event.target.value;
        }
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input ref='keyword' onKeyDown={this.handleKeyDown} type="text" className="form-control" onChange={this.handleChange}></input>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((word,index)=>(
                                            <li  key={index} className={"list-group-item "+(index===this.state.index?"active":"")}>{word}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}