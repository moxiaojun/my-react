import React,{ Component } from "react";
import Message from "./Message"

export default class MessageList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((message,index)=>(
                        <Message message={message} index={index} delMessage={this.props.delMessage}></Message>
                    ))
                }
            </ul>
        )
    }
}