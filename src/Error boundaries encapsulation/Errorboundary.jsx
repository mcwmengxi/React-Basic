import React, { Component } from 'react';

class Errorboundary extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError:'',
            error:null,
            errorInfo:null
        }
    }
     static getDerivedStateFromError(error){
         return {
             hasError:true
         }
     }
    componentDidCatch(error, errorInfo){
        // 你同样可以将错误日志上报给服务器
        // logErrorToMyService(error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    render() {
        if(this.state.errorInfo){
            // return
            // (<div>          
            //     <h1>Something went Wrong.</h1> 
            //     <details style={{ whiteSpace: 'pre-wrap' }}>
            //         {this.state.error && this.state.error.toString()}
            //         <br />
            //         {this.state.errorInfo.componentStack}
            //     </details>
            // </div> )

            return (
                <div>
                  <h2>Something went wrong.</h2>
                  <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </details>
                </div>
              );
        }
        return this.props.children
    }
}

export default Errorboundary;