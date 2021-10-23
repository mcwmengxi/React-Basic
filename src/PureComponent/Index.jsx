import React, { Component,PureComponent } from 'react';

// class Parent extends Component {
    class Parent extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            componentname:"parentComponrent"
        }


    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);
    //     console.log(this.props,this.state);
    //     return !nextState.componentname===this.state.componentname
    // }
    handleClick = ()=>{
        this.setState({
            componentname:"parentComponent-update"
        })

        // 虽然修改了state内部数据，但是PureComponent重写shouldComponentUpdate()方法进行的是浅比较，返回的是false,所以不进行组件更新
        const object=this.state
        object.componentname ="parentComponent-update"
        this.setState(object)
        console.log(object===this.state,object);

        // 父组件this.setState({}),子组件不接收父级的任何数据,
        // this.setState({})
    }
    render() {
        console.log('parent-render');
        return (
            <>
                <h1> 父级组件</h1>
                <span>{this.state.componentname}</span>
                <br/>
                <button onClick={this.handleClick}>更改parent组件</button>
                {/* <Child value={this.state.componentname}/> */}
                <Child value="stick-name"/>
            </>
        );
    }
}
class Child extends Component {
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);
    //     console.log(this.props,this.state);
    //     if(nextProps.value===this.props.value){
    //         return false
    //     }
    //     return true
     
    // }
    render() {
        console.log('child-render');
        return (
            <>
                <h2>子级组件</h2>
                <span>从父级组件接收的值:{this.props.value}</span>
            </>
        );
    }
}

export default Parent;