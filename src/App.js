import React, { Component } from 'react';
import Board from './components/Board/Board';
import Winner from './components/Winner';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameBoard: Array(9).fill(null),
      isXNext: true,
    }
  }

  onMoveChange = (id) => {
    const currentBoard = this.state.gameBoard.slice();
    if (currentBoard[id] || Winner(currentBoard)) {
      return;
    }
    currentBoard[id] = this.state.isXNext ? 'X' : 'O';

    this.setState({
      gameBoard: currentBoard, 
      isXNext: !this.state.isXNext, 
    });
  }

  render() {
    const { gameBoard, isXNext } = this.state;
    const winner = Winner(gameBoard);
    console.log(gameBoard, winner);
    let status, value;
    if (winner) {
      status = 'WINNER: ' + winner;
    }
    else if (!gameBoard.includes(null) && !winner) {
      value = 'Tie';
      status = 'A TIE';
    }
    else {
      value = isXNext ? 'X' : 'O';
      status = 'Next player: ' + (isXNext ? 'X' : 'O');
    }

    return (
      <div className='App'>
        <div className={'Status ' +value}>{status}</div>
        <div className='Game'>
          <Board gameBoard={gameBoard} onMoveChange={this.onMoveChange}/>
        </div>
        <div className='Status'>
          {'SCORE'}
        </div>
      </div>
    );
  }
}

export default App;
