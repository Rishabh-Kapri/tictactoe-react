import React from 'react';
import './Square.css';

const Square = ( props ) => {
	const { value, onMoveChange, id } = props;
	const border = {
		0: ' Top Left',
		1: ' Top',
		2: ' Top Right',
		3: ' Left',
		4: '',
		5: ' Right',
		6: ' Bottom Left',
		7: ' Bottom',
		8: ' Bottom Right',
	}
	const val = value + border[id];

	return (
	  <button 
	    id={id}
	    onClick={() => onMoveChange()}
	    className={'Square ' +val}
	    >{value} 
	  </button>
	);

}

export default Square;