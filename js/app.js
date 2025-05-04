/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]


/*---------------------------- Variables (state) ----------------------------*/
let board 
let turn 
let winner 
let tie 

/*------------------------ Cached Element References ------------------------*/
const squareEls= document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const resetButton = document.querySelector('#reset-button')
// console.log(messageEl);
/*-------------------------------- Functions --------------------------------*/

const init = () =>{
    // console.log('init function');
     board = ['','','','','','','','','']
     turn = 'X'
     winner = false
     tie = false
    render()
}

const render = () =>{
    updateBoard()
    updateMessage()
}
const updateBoard = () => {
    board.forEach((boardValue , index) =>{
       const square = squareEls[index]
       square.textContent = boardValue
       if( boardValue === 'X'){
        square.style.color = 'red'
        // square.style.backgroundColor = 'grey'
       } else if (boardValue === 'O'){
        square.style.color = 'blue'
       }
    })
}
const updateMessage = () =>{
    if(winner === false && tie === false){
        messageEl.textContent = `It is ${turn} turn!`
    } else if (winner === false && tie === true){
        messageEl.textContent = 'It is a tie!'
    } else {
        messageEl.textContent = `Congratulations ${turn}, You win!`
    }
}
const handleClick = (event) =>{
    const squareIdx = Number(event.target.id)
    console.log(squareIdx);
    if (board[squareIdx] !== ''){
        console.log('isnt empty');
        return
    }
    if (winner === true){
        return
    }
    placePiece(squareIdx)
    checkWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}
const placePiece = (index)=>{
    board[index] = turn
    console.log(board);
    updateBoard()
}
const checkWinner = () => {
    if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
      winner = true
    //   console.log(winner);
    }
    if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
      winner = true
    }
    if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
      winner = true
    }
    if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
      winner = true
    }
    if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
      winner = true
    }
    if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
      winner = true
    }
    if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
      winner = true
    }
    if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
      winner = true
    }
  };
const checkForTie = () =>{
    if(winner === true){
        return
    }
    if(board.includes('')){
        tie = false
    } else {
        tie = true
    }
}
const switchPlayerTurn = () =>{
    if(winner === true){
        return
    } else {
        if(turn === 'X'){
            turn = 'O'
            // console.log(turn);
        } else if (turn === 'O'){
            turn = 'X'
            // console.log(turn);
        }
    }
    
}
init()
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square, i) =>{
    square.addEventListener('click', handleClick)
})
resetButton.addEventListener('click', init)

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
