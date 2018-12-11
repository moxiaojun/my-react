import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let ele = <p>我的第一个react</p>;
let ele2 = React.createElement('div', { className: 'red', id: '1', style:{backgroundColor:'pink'}},['hello22','hihihih']);
/**
 * React元素原理
 */
let eleObj = {
    type:'div',
    props:{
        className:'red',
        id:'1',
        children: [
            'hello', 
            {
            type: 'soan',
                props: {
                    className: 'red',
                    children: ['你好啊']
                }
            }
         ]
    }
}
function render(ele,container) {
    let {type,props} = ele;
    let elenode = document.createElement(type);
    for (let attr in props) {
        if (attr=='children') {
            props[attr].forEach(element => {
                if (typeof element =='string') {
                    let textNode = document.createTextNode(element);
                    elenode.appendChild(textNode);
                }else{
                    render(element);
                }
            });
        } else if (attr == 'className'){
            elenode.setAttribute('class', props[attr])
        }else{
            elenode.setAttribute(attr,props[attr]);      
        }
    }
    document.getElementById('root').appendChild(elenode);
}
render(eleObj);
let names = ['张三','李四','王五'];

// ReactDOM.render(
//     <App/>, 
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
