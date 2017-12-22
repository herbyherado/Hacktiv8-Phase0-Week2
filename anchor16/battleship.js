process.stdin.setEncoding('utf8');

let board = [];
let turn = 5;

// function to re-print board everytime an input has been entered and remove '[]' in arrays
function printBoard(){
    for (i=0; i<5; i++){
        console.log(board[i].join(' '));
    }
}
// initializes board at beginning of game
function initBoard(){
    // prepare/add array space for initial 1x5 (row)
    for(i=0;i<5;i++){
        board.push([]);
        // adds "O" in each array to make 5x5 (col)
        for(j=0; j<5; j++){
            board[i].push('O');
        }    
    }
    console.log();
    console.log(`               Welcome to Battleship!`);
    console.log(`We have placed our hidden Battleship in a sea of arrays!`);
    console.log(`       Take your guess with a range between 0-4`);
    console.log(`      Try and sink us before we sink you! hahaha!`);
    console.log(`           You get to have ${turn} turns to guess!`);
    console.log();
    console.log(`Le Sea of Arrays`);
    printBoard();
    console.log();
}

initBoard();

// function below to randomize row & column 
function randomRow(board){
    return Math.abs(Math.round(Math.random()*(board.length-1)));
}

function randomCol(board){
    return (Math.round(Math.random()*(board[0].length-1)));
}
// places random battleship 
let shipRow = randomRow(board);
let shipCol = randomCol(board);

// activate code below to check the hidden battleship
console.log(`Psst..our hidden ship is at row ${shipRow}`);
console.log(`Psst..our hidden ship is at column ${shipCol}`);
console.log();
//-----------------------NodeJs process.stdout/process.stdin---------------------------
var questions = [
    'Guess Row: ',
    'Guess Column: '
];

// multidimensional array format: [ [x1, y1], [x2, y2] ]
var guessAns = [];

// toggle value to be used in process.stdin
var askingForRow = true;

// function to check turn left/whether to ask for input again or not
function askUser() {
    if (turn === 0){
        board[shipRow][shipCol] = "I";
        console.log(`My hidden battleship is indicated at "I"! haha!`)
        printBoard();
        process.exit();
    } else {
        askUserForRow();
    }
}

function askUserForRow() {
  process.stdout.write(`${questions[0]}`);
}

function askUserForColumn() {
  process.stdout.write(`${questions[1]}`);
}

//function event listener to the stdin
process.stdin.on('data', function(data){

    if(askingForRow) { // if user insert a row
        guessAns.push([Number(data.trim())]);
        askingForRow = false;
        askUserForColumn();
    } else { // if user insert a column
        guessAns[guessAns.length - 1].push(Number(data.trim()));
        askingForRow = true;
        showFeedback();
    }
});

function showFeedback() {
//   console.log(guessAns);
  guessRow = guessAns[guessAns.length - 1][0];
  guessCol = guessAns[guessAns.length - 1][1];

  turn -= 1;

  if (guessRow == shipRow && guessCol == shipCol){
      board[guessRow][guessCol] = "I";
      console.log();
      printBoard();
      console.log(`Congratulations! You sunk my battleship!`);
      console.log();
      process.exit();
  } else if (guessRow > 4 || guessRow < 0 || guessCol > 4 || guessCol < 0){
      console.log();
      printBoard();
      console.log(`Oops,that's not even in the ocean.`);
      console.log();
      process.stdout.write(`You have ${turn} turn left \n`);
      console.log();
      askUser();
  } else if (board[guessRow][guessCol] == "X"){
      console.log() ; 
      printBoard();
      console.log(`You guessed that one already.`);
      console.log();
      process.stdout.write(`You have ${turn} turn left \n`);
      console.log();
      askUser();
  } else {
      board[guessRow][guessCol] = 'X';
      console.log();
      printBoard();
      console.log(`You missed my battleship!`);
      console.log();
      process.stdout.write(`You have ${turn} turn left \n`);
      console.log();
      askUser();
  }
}
// event listener when exit is entered
process.on('exit', function(){
    console.log(`\nGame Over! \n\n`)
})

askUser();