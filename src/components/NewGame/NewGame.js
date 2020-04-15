import React from 'react';
import './NewGame.css';

const NewGame = ({ choosePlayer }) => {
	let fade = 'Fade';
	return (
		<div className='Container'>
			<div className='Blur'>
			</div>
			<div className='NewGame'>
			  <div className='Buttons'>
			    <button onClick={() => choosePlayer('X')}  className='X'>{'X'}</button>
			    <span>{'OR'}</span>
			    <button onClick={() => choosePlayer('O')} className='O'>{'O'}</button>
			  </div>
			</div>
		</div>
	);
}

export default NewGame;