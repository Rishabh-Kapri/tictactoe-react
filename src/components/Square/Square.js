import React from 'react';
import './Square.css';

const Square = ( props ) => {
	const { value, onMoveChange, id } = props;

	return (
	  <button 
	    id={id}
	    onClick={() => onMoveChange()}
	    className={'Square ' +value}
	    >{value} 
	  </button>
	);

}

export default Square;