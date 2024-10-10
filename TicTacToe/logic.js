let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];
let gameActive = true;

function HPT(clickedcellindex){
    if(gameBoard[clickedcellindex] !=='' || !gameActive){
        return; 
    }
    gameBoard[clickedcellindex] = currentPlayer;
    checkWD();
    currentPlayer = currentPlayer === 'X'?'O':'X';
}

function cellClicked(clickedEvent){
    const clickedCell = clickedEvent.target;
    const clickedCellIndex = parseInt(clickedCell.id.replace('cell-','')) -1 ;
    if(gameBoard[clickedCellIndex] !='' || !gameActive){
        return; 
    }
    HPT(clickedCellIndex);
    updateUI();
}

const cells = document.querySelectorAll('.cell');

cells.forEach(cell =>{
    cell.addEventListener('click',cellClicked,false);
});

function updateUI(){
    for(let i = 0;i < cells.length; i++){
        cells[i].innerHTML = gameBoard[i];
    }
}

function winner(player){
    const msgEl = document.getElementById('gameMessage');
    msgEl.innerText = `Player ${player} Won!`;
    if(player === 'X')
        document.body.style.backgroundImage = "url('g1.gif')";
    if(player === 'O')
        document.body.style.backgroundImage = "url('R.gif')";
}

function draw(){
    const msgEl = document.getElementById('gameMessage');
    msgEl.innerText = "Game Draw";
    document.body.style.backgroundImage = "url('g3.gif')";
}

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWD(){
    let roundWon = false;
    for(let i = 0; i <winConditions.length;i++){
        const [x,y,z] = winConditions[i];
        if(gameBoard[x] && gameBoard[x] === gameBoard[y] && gameBoard[x] === gameBoard[z]){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        winner(currentPlayer);
        gameActive = false;
        return;
    }

    let roundDraw = !gameBoard.includes('');
    if(roundDraw){
        draw();
        gameActive = false;
        return;
    }
}

function reset(){
    gameBoard = ['','','','','','','','',''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell =>{
        cell.innerText = '';
    });
    document.getElementById('gameMessage').innerText = '';
    document.body.style.backgroundImage = "";
}

const resbtn = document.getElementById('resetButton');
resbtn.addEventListener('click',reset,false);