import React,{Component} from 'react';
import SliderItems from './SliderItems'
import './Slider.css'
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
export default class Slider extends Component{
    constructor(){
        super();
        //通过修改此index的值就可以改变ul的left值
        this.state = {index:0}
    }
    //启动自动轮播
    go = ()=>{
        this.$timer = setInterval(()=>{
            this.turn(1)
        },this.props.delay*1000)
    }
    //传入步长得到新的index值
    turn =(step)=>{
        let index = this.state.index + step;
        if (index < 0){
            this.$slider.style.transitionDuration = '0s';
            this.$slider.style.left = this.props.items.length*-500+'px';
            setTimeout(()=>{
                index = this.props.items.length-1;
                this.$slider.style.transitionDuration = this.props.speed+'s';
                this.setState({index});
            },0)
            return ;

        }
        if(index > this.props.items.length){
            this.$slider.style.transitionDuration = '0s';
            this.$slider.style.left = 0;
            setTimeout(()=>{
                index = 1;
                this.$slider.style.transitionDuration = this.props.speed+'s';
                this.setState({index});
            },0)
            return ;
        }
        this.setState({index});
    }
    componentDidMount(){
        this.$slider = document.querySelector('.sliders');
        if (this.props.auto){//如果自动轮播为true开启自动轮播
            this.go()
        }
    }
    render(){

        return (
            <div 
                onMouseOver={()=>clearInterval(this.$timer)} 
                onMouseOut={()=>this.go()} 
                className="slider-wrapper">
                <SliderItems 
                    items={this.props.items} 
                    index = {this.state.index} 
                    speed={this.props.speed}/>
                <SliderArrows turn={this.turn}/>
                <SliderDots items={this.props.items}
                            index = {this.state.index}
                            turn={this.turn}/>
            </div>
        )
    }
}