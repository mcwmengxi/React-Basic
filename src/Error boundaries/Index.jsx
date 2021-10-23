import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError:''
        }
    }
    
    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError: error}
    }
    componentDidCatch(error,errorInfo){
        console.log("Something for error");
        console.log(error,errorInfo);
    }
    render() {
        return (
            <div>
                <h1>父级组件</h1>
                { this.state.hasError ? <h2>网络出现了小问题</h2>:<Child /> }
            </div>
        );
    }
}



class Child extends Component {
    constructor(props) {
        super(props);
        this.state={
            value :'string',
            user:[
                {id:1,name:'nangong'},
                {id:2,name:'ky'}
            ]
        }
    }
    
    //test() 不是生命周期中发生的错误无法使用error boundary
    render() {
        return (
            <>     
                <ul>
                    {
                        this.state.value.map((item) => {
                            return <li key={item.id}>{item.name}</li>
                        })
                    }     
                </ul>
            </>
        );
    }
}

export default Index;
