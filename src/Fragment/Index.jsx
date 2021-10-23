import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Child />
                <Child />
            </React.Fragment>
        );
    }
}
// 短语法
function Block(){
    return (
        <>     
            <dt>1</dt>
            <dd>1-1</dd>
            <dd>1-2</dd>
        </>
    )
}
function Child(){
    return(
        <dl>
            <Block />
            <Block />
            <Block />
        </dl>
    )
}

export default Index;