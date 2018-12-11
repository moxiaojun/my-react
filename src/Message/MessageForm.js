import React,{ Component } from "react";

export default class MessageForm extends Component{
    handleSubmit = (event)=>{
        event.preventDefault();
        let username = this.username.value;
        let content = this.content.value;
        let createAt =new Date();
        this.props.addMessage({username,content,createAt})
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">用户名</label>
                    <input ref={x=>this.username=x} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <lable htmlFor="content" className="contorl-label">内容</lable>
                    <input ref={x=>this.content=x} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">发表</button>
                </div>
            </form>
        )
    }
}