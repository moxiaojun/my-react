import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class Clock extends Component{
    constructor(){
        super();
        this.state = {time:new Date().toLocaleString()};
    }
    componentDidMount(){
        window.setInterval(()=>{
            this.setState({ time: new Date().toLocaleString()})
        },1000);
    }
    render(){
        return <h1>{this.state.time}</h1>
    }
}
ReactDOM.render(
    <Clock/>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
