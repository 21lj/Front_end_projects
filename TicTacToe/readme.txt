# Tic Tac Toe Game

This is a simple implementation of a Tic Tac Toe game using JavaScript, HTML, and CSS. The game allows two players to take turns placing their marks (X and O) on a 3x3 grid, with the goal of getting three in a row either horizontally, vertically, or diagonally.

## Features

- Two-player gameplay
- Win detection
- Draw detection
- Reset button to start a new game
- Dynamic UI updates

## How to Use

1. **Setup**: Clone or download this repository to your local machine.
2. **Open the Game**: Open the `ticTacToe.html` file in your web browser.
3. **Playing**:
   - Players take turns clicking on the empty cells in the grid to place their marks (X or O).
   - The game will display a message when a player wins or if the game ends in a draw.
4. **Reset**: Click the reset button to start a new game.

## Code Overview

- **Variables**:
  - `currentPlayer`: Tracks whose turn it is (X or O).
  - `gameBoard`: An array representing the state of the game board.
  - `gameActive`: A boolean that indicates if the game is ongoing.

- **Functions**:
  - `HPT(clickedcellindex)`: Handles player turn logic.
  - `cellClicked(clickedEvent)`: Handles cell click events and updates the game state.
  - `updateUI()`: Updates the UI to reflect the current game state.
  - `winner(player)`: Displays a message when a player wins and changes the background.
  - `draw()`: Displays a message when the game ends in a draw.
  - `checkWD()`: Checks for winning conditions or a draw after each turn.
  - `reset()`: Resets the game to the initial state.

- **Event Listeners**:
  - Click events on each cell are captured to handle player moves.
  - A click event on the reset button resets the game.

## Win Conditions

The game checks for winning conditions based on predefined combinations:

- Horizontal: [0,1,2], [3,4,5], [6,7,8]
- Vertical: [0,3,6], [1,4,7], [2,5,8]
- Diagonal: [0,4,8], [2,4,6]

## Requirements

- A modern web browser to run the HTML and JavaScript.
- Basic understanding of JavaScript and HTML for customization.
