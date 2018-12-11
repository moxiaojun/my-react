import React,{ Component } from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import "./MessageBox.css"

export default class MessageBox extends Component{
    constructor(){
        super();
        this.state={
            messages:[
                    {username:'张三',content:'今天天气很好',createAt:new Date()}
                ]
        };
    }
    addMessage = (message)=>{
        let messages = [...this.state.messages,message];
        this.setState({
           messages
        })
    }
    delMessage = (index)=>{
        this.state.messages.splice(index,1);
        this.setState({
            messages:[...this.state.messages]
        })
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h2 className="text-center">欢迎来到我的留言板</h2>
                            </div>
                            <div className="panel-body">
                                <MessageList messages={this.state.messages} delMessage={this.delMessage}/>
                            </div>
                            <div className="panle-footer">
                                <MessageForm addMessage={this.addMessage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}