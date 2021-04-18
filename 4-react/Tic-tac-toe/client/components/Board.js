import React from 'react';
import Square from './Square';

// renders 9 squares
// lifting state from squares to board
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    // handler method (to be passed down to Square to update state)
    // note: better practice to make copy state instead of directly changing directly
    //       aka mutability 
    handleClick(i) {
        const squares = this.state.squares.slice(); 
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
           
        });
    }

    // passing value and onClick prop to Square component
    renderSquare(i) {
      return ( 
        <Square 
         value={this.state.squares[i]}
         onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

export default Board;