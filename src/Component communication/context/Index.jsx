import React from "react"
import './index.css'

const NameContext = React.createContext()

// 设置在react-devtools中的显示名称
NameContext.displayName='MyDisplayName'
export default class A extends React.Component{

    state={
        name:'Ky'
    }
    
    render(){
        // value可以是对象
        return(
            <div className="component-a">
                <p >我是A组件</p>
                <NameContext.Provider value={this.state.name}>
                    <B />
                </NameContext.Provider>          
            </div>
        )
    }
}

function B(props){
        return(
            <div className="component-b">
                <p >我是B组件</p>
                <C />
            </div>
        )

}

// class组件context接收方法
// class C extends React.Component{
//     static contextType = NameContext    
//     render(){
//         console.log(this.context);

//         return(
//             <div className="component-c">
//                 <p >我是C组件</p>
//                 <p>从顶层组件A接收到的名字:{this.context}</p>  
//             </div>
//         )
//     }
// }
// C.contextType = NameContext


// 函数组件context接收方法consumer
function C(){       
        return(
                 
                <div className="component-c">
                    <p >我是C组件</p>
                    <p>从顶层组件A接收到的名字:
                    <NameContext.Consumer>   
                        {value=>value}
                    </NameContext.Consumer> 
                    </p>  
                </div>
            
        )
}