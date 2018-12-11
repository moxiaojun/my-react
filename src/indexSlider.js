import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Slider from './slider/Slider'
let IMAGE_DATA =[
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')}
]
/**
 * items 目标源
 * speed 图片的轮播速度
 * delay 延迟时间 多长时间轮播一次
 * pause 暂停 如果它为true 则当鼠标滑过的时候自动停止轮播
 * auto 当页面加载完成后自动开始轮播
 * dots 显示小点状导航
 * arrows 显示左右导航
 */
ReactDOM.render(
    <Slider
        items={IMAGE_DATA}
        speed={1.2}
        delay={2.1}
        pause={true}
        auto={true}
        dots={true}
        arrows={true}
    ></Slider>,
    document.getElementById('root')
);

