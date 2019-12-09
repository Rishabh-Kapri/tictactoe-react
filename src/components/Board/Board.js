import React from 'react';
import Square from '../Square/Square';
import './Board.css';

const Board = (props) => {
  const { gameBoard, onMoveChange} = props;
  let i = -1;
	
	return (
		<div className='Board'>
		  {
		  	gameBoard.map((square, index) =>
		  	  <div key={(i++).toString() + 'p'}>
			  		<Square key={index} value={gameBoard[index]} onMoveChange={() => onMoveChange(index)} id={index} />
		  		</div>
		  		)
		  	}
		  
		</div>
	);			
}


export default Board;