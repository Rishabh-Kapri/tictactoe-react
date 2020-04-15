import Winner from './Winner';

// default scores if ai is O
let scores = {
	X: -1,
	O: 1,
	Tie: 0
}
const Ai = (currentBoard, ai, human) => {
	if (ai === 'X') {
		Object.assign(scores, { X: 1, O: -1 });
	}
	let bestScore = -Infinity;
	let move = -1;
	for (let i = 0; i < 9; i++) {
		if (!currentBoard[i]) {
			currentBoard[i] = ai;
			const score = minimax(currentBoard, 0, false, ai, human);
			currentBoard[i] = null;
			if (score > bestScore) {
				bestScore = score;
				move = i;
			}
		}
	}
	return move;
}

const minimax = (board, depth, isMaximizing, ai, human) => {
	const winner = Winner(board);
	if (winner) {
		return scores[winner];
	} else if (!board.includes(null) && !winner) {
		return scores['Tie'];
	}
	if (isMaximizing) {
		let value = -Infinity;
		for (let i = 0; i < 9; i++) {
			if (!board[i]) {
				board[i] = ai;
				value = Math.max(value, minimax(board, depth + 1, false, ai, human));
				board[i] = null;
			}
		}
		return value;
	} else {
		let value = Infinity;
		for (let i = 0; i < 9; i++) {
			if (!board[i]) {
				board[i] = human;
				value = Math.min(value, minimax(board, depth + 1, true, ai, human));
				board[i] = null;
			}
		}
		return value;
	}
}

export default Ai;