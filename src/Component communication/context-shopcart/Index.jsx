import React,{Component,createContext} from "react";

const {Provider,Consumer} = createContext()

function CountButton(props){
    return(
        <Consumer>
            {
                ({increaseCount,decreaseCount}) =>{
                    const btnText = props.type==='increase'?'+':"-"
                    const handleClick = props.type==='increase'?increaseCount:decreaseCount
                    return <button onClick={handleClick} >{btnText}</button>
                }
            }
        </Consumer>
    )
}
function Count(){
    return (        
            <Consumer>
                {
                    (value) => {return <span>{value.count}</span>}
                }
            </Consumer>          
    )
}
class ShopCart extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
        this.increaseCount =()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        this.decreaseCount =()=>{
            this.setState({
                count:this.state.count-1
            })
        }
    }
    
    render(){
        return(
            <Provider value={{count:this.state.count,increaseCount:this.increaseCount,decreaseCount:this.decreaseCount}}>
                {this.props.children}
            </Provider>
        )
    }
}

export default class App extends Component{
    render(){
        return (
            <ShopCart >
                <CountButton type="decrease" />
                <Count />
                <CountButton type="increase"/>
            </ShopCart>
        )
    }
}