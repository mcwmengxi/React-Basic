import React,{Component} from "react";
export default class MouseTracker extends Component{

    render(){
        return (
            <Mouse render={(state)=>{ return <Move state={state}/>}} />

        )
    }
    
}
class Mouse extends Component{
    constructor(props) {
        super(props);
        this.state={
            x:0,
            y:0
        }
    }
    handleMouseMove = (e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    render(){
        return (
            <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
                <h1>移动鼠标!</h1>
                
                {this.props.render(this.state)}
            </div>
        )
    }
}
class Move extends Component{
    render(){
        // return (<p>当前的鼠标位置是 ({this.props.state.x}, {this.props.state.y})</p>)
        return <img src="./logo192.png"  alt="" style={
            {position:'absolute',
            left:this.props.state.x,
            top:this.props.state.y,
            display:'block',width:"50px",height:"50px"
        }} />
    }
}