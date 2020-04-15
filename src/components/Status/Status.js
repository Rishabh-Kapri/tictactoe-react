import React from 'react';
import './Status.css';

const Status = ( props ) => {
	const { isXNext, mode, onNewGame } = props;
	let score = 0, gameMode, p1, p2;
	let hideX = isXNext ? '' : 'Hide';
	let hideO = isXNext ? 'Hide': '';
	if (mode === 'p1') {
		gameMode = '1P';
		p2 = 'Hidden';
	}
	else if (mode === 'p2') {
		gameMode = '2P';
		p1 = 'Hidden';
	}
	
	return (
		<div className={'Status ' +mode}>
		  <p className={'Player1 ' +hideX}>
		    <span className={p1}>
		      {'PLAYER '}
		    </span>
		    <span className={p2}>
		      {'PLAYER 1 '}
		    </span>
		    <span>{'(x)'}</span>
		    <span className='Score'>
			    {score}
			  </span>
		  </p>
		  <p className={'Tie Hide'}>
		    <span>{'TIE'}</span>
		    <span className='Score'>
		      {score}
		    </span>
		  </p>
		  <p className={'Player2 ' +hideO}>
		    <span className={p1}>
			    {'COMPUTER '}
			  </span>
		    <span className={p2}>
		      {'PLAYER 2 '}
		    </span>
		    <span>{'(o)'}</span>
		    <span className='Score'>
		      {score}
		    </span>
		  </p>
		  <div className={'Switch '}>
			  <button onClick={() => onNewGame(mode)}>
			    {'New Game'}
			  </button>
			  <p className={'Player1'}>{gameMode}</p>
			</div>
		</div>
	)

}

export default Status;