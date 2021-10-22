import React from "react";

export default class Parent extends React.Component{
    // ref 调用子组件的方法改变子组件的状态
    ColorRef = React.createRef()
    handleClick = ()=>{
        this.ColorRef.current.changeColor('kyblue')
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={this.handleClick}>改变颜色</button>
                <Child ref={this.ColorRef} />
            </React.Fragment>
        )
    }
}
class Child extends React.Component{
    state={
        color:'green'
    }
    changeColor(args){
        this.setState({
            color:args
        })
    }
    render(){
        return(
            <p>{this.state.color}</p>
        )
         
    }
}