const Winner = (gameBoard) => {
	const winCondition = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < winCondition.length; i++) {
		const [a, b, c] = winCondition[i];
		if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
			return gameBoard[a];
		}
	}
	return null;
}

export default Winner;