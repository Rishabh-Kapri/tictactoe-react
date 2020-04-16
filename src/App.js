import React, { Component } from 'react';
import Board from './components/Board/Board';
import Winner from './components/Winner';
import Ai from './components/Ai';
import Status from './components/Status/Status';
import NewGame from './components/NewGame/NewGame';
import './App.css';

class App extends Component {
  initialState = {
    gameBoard: Array(9).fill(null),
    isXNext: true,  // X is always first
    route: 'newgame', // human's value
    gameMode: 1, // 1 = 1p, 2 = 2p
    // 0 = ai, 1 = human
    X: -1,
    O: -1
  }
  constructor() {
    super()
    this.state = {
      gameBoard: Array(9).fill(null),
      isXNext: true,  // X is always first
      route: 'newgame', // human's value
      gameMode: 1, // 1 = 1p, 2 = 2p
      // 0 = ai, 1 = human
      X: -1,
      O: -1
    }
  }

  componentDidUpdate() {
  }

  onMoveChange = (id) => {
    const currentBoard = this.state.gameBoard.slice();
    if ((id !== -1) && (currentBoard[id] || Winner(currentBoard))) {
      return;
    }

    if (this.state.gameMode === 1) {
      if (this.state.isXNext) {
        // X's turn
        this.makeMove('X', currentBoard, id);
      } else {
        // O's turn
        this.makeMove('O', currentBoard, id)
      }
    } else if (this.state.gameMode === 2) {

    }
  }

  makeMove(turn, currentBoard, id) {
    if (this.state[turn] === 0) {
      const human = turn === 'X' ? 'O' : 'X';
      const move = Ai(currentBoard.slice(), turn, human);
      console.log(move, turn, human);
      currentBoard[move] = turn;
      this.setState({
        gameBoard: currentBoard,
        isXNext: !this.state.isXNext
      });
    } else if (this.state[turn] === 1) {
      currentBoard[id] = turn;
      this.setState({
        gameBoard: currentBoard,
        isXNext: !this.state.isXNext
      }, () => {
        this.onMoveChange(-1);
      });
    }
  }

  choosePlayer = (player) => {
    this.setState(this.initialState);
    this.setState({
      X: player === 'X' ? 1 : 0,
      O: player === 'O' ? 1 : 0,
      route: player
    }, () => {
      if (this.state.X === 0) {
        this.onMoveChange(-1);
      }
    });
  }

  onNewGame = (mode) => {
    if (mode === 1) {
      this.setState({ gameMode: 1 });
    }
    else if (mode === 2) {
      this.setState({ gameMode: 2 });
    }
    this.setState(this.initialState);
  }


  render() {
    const { gameBoard, route, isXNext, gameMode } = this.state;
    const winner = Winner(gameBoard);
    let status, value;
    console.log(this.state);

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
      // console.log('mode=', mode, 'ai=', ai, 'isXNext=', isXNext),
      <div>
        {
          (route === 'newgame')
            ? (<NewGame choosePlayer={this.choosePlayer} />)
            : ((route === 'X' || route === 'O')
              ? <div className='App'>
                <div className={'Move ' + value}>{status}</div>
                <div className='Game'>
                  <Board gameBoard={gameBoard} onMoveChange={this.onMoveChange} />
                </div>
                <Status isXNext={isXNext} mode={gameMode} onNewGame={this.onNewGame} />
              </div>
              : <p>{'ERROR'}</p>
            )
        }
      </div>
    );
  }

}

export default App;