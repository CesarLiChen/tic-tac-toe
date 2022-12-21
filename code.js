const PLAYER_ONE_SYMBOL = "X";
const PLAYER_TWO_SYMBOL = "O";

class TicTacToeGame {

	handleEventClick(event) {
		console.log(event.target.id);
		this.executeMove(event.target.id);
	}

	executeMove(moveIndex) {
		if(this.board[moveIndex] == "") {
			this.board[moveIndex] = this.currentPlayer;

			// Ternary operator
			this.currentPlayer = (
				this.currentPlayer == PLAYER_ONE_SYMBOL ? 
				PLAYER_TWO_SYMBOL : 
				PLAYER_ONE_SYMBOL
				);

			this.updateBoard();
			console.log(this.board);
		}
	}

	updateBoard() {
		let gameBoard = document.getElementById("gameBoard");
		let squareElements = gameBoard.childNodes;

		// Updates the <div>s created, compared to boarda array.
		squareElements.forEach((element, index) => {
			if (element.innerHTML != this.board[index]) {
				element.innerHTML = this.board[index];
			}
		});
	}

	drawBoard() {
		// erases/cleans any element in the body
		document.body.innerHTML = "";

		// Creating gameBoard <div>, then
		// specifying id, class.
		let gameBoard = document.createElement("div");
		gameBoard.id = "gameBoard";
		gameBoard.classList.add("board");

		// Event listener creation
		gameBoard.addEventListener("click", this.handleEventClick.bind(this));

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
		this.currentPlayer = PLAYER_ONE_SYMBOL;
		this.drawBoard();
	}
}

const game = new TicTacToeGame();
game.start();