class TicTacToeGame {

	drawBoard() {
		// erases/cleans any element in the body
		document.body.innerHTML = "";

		// Creating gameBoard <div>, then
		// specifying id, class.
		let gameBoard = document.createElement("div");
		gameBoard.id = "gameBoard";
		gameBoard.classList.add("board");

		/*
			For every element of the 'board' array:
			-create a <div> for each,
			-assign its id to be the 'index' position in array,
			-assign same 'square' class for every one,
			-parent it to the gameBoard created above.
		*/ 
		this.board.forEach((square, index) => {
			let squareElement = document.createElement("div");
			squareElement.id = index;
			squareElement.classList.add("square");
			gameBoard.appendChild(squareElement);
		});

		// Parent the gameBoard to the <body>
		document.body.appendChild(gameBoard);
	}

	start() {

		// Creates array to represent board.
		this.board = 
			[
			"", "", "",
			"", "", "",
			"", "", ""
			];

		this.drawBoard();
	}
}

const game = new TicTacToeGame();
game.start();