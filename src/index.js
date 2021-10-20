import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

  
// class Square extends React.Component{
//     constructor(props){
//         super(props)
//         console.log(props);
//     }
//     render(){
//         return (
//             <button className="square" onClick={ () => this.props.onClick() }>
//                 {this.props.val}
//             </button>
//         )
//     }
// }

// 函数组件
function Square(props){
    // console.log(props);
    return(
        <button className="square" onClick={props.onClick }>
            {props.val}
        </button>
    )
}
class Board extends React.Component{

    renderSquare(i){      
        return (<Square  val={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>)
    }
    render() {
        
    
        return (
          <div>
            {/* <div className="nextplayer">{nextPlayer}</div> */}
            <div className="board-row">
              {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
            </div>
          </div>
        );
      }
}
class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
            history:[{
                squares:Array(9).fill(null),      
            }],
            xIsNext:true,
            step:0
        }
    }
    handleClick(i){
        const history = this.state.history.slice(0,this.state.step+1)
        const current = history[history.length-1]
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]){
            return
        }
        squares[i]=this.state.xIsNext?'X':'O';
        this.setState({
            history: history.concat([{
                squares: squares
              }]),
            xIsNext:!this.state.xIsNext,
            step:history.length
        })
        
        //达不到预期要求
        // this.setState({squares: this.state.squares[i] = 'X'});
        // console.log(this.state.squares);
    }
    toStep(index){
        this.setState({
            step:index,
            xIsNext: (index % 2) === 0,
        })
        // this.handleClick(index)
        // console.log(this.state.step);
    }
    render(){
        const history = this.state.history
        const current = history[this.state.step]
        const winner = calculateWinner(current.squares)
        let nextPlayer=null;
        if(winner){
            nextPlayer = `Winner: ${winner}`
        }else{
            nextPlayer = `Next player: ${this.state.xIsNext?'X':'O'}`;
        }
        const move = history.map((item,index) => {
            const text = index?`Go to move #${index}`:'Go to game start'
            return (
                <li key={index}>
                    <button onClick={() => this.toStep(index)}>{text}</button>
                </li>             
            )
        })
        return (
            <div className="game">

                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div className="nextplayer">{nextPlayer}</div>
                    <ol>{move}</ol>
                </div>
            </div>
        )
    }
}
function calculateWinner(squares){
    const lines=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i]
        if(squares[a]&&squares[a]===squares[b]&& squares[a]===squares[c]){
            return squares[a]          
        }   
    }
    return null
}

ReactDom.render(
    <Game />,
    document.getElementById('root')
)
    
