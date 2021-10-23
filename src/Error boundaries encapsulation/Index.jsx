import React, { Component } from 'react';
import Errorboundary from './Errorboundary';

class Index extends Component {
    render() {
        return (
            <div>
                <Errorboundary >
                    <AddCount />
                </Errorboundary>
                <br />
                <Errorboundary >
                    <AddCount />
                </Errorboundary>
            </div>
        );
    }
}
class AddCount extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    handleClick=() => {
        this.setState(state => ({
            count:state.count+1
        }))
    }
    render(){
        if(this.state.count===5){
            throw new Error('模拟 js 错误')
        }
        return (
            <button onClick={this.handleClick}>{this.state.count}</button>
        )
    }
    
}

export default Index;