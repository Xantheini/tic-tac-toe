//Tic-Tac-Toe

//Set up game board
var row1 = ["_", "_", "_"];
var row2 = ["_", "_", "_"];
var row3 = ["_", "_", "_"];

//Log game board
var game = [row1, row2, row3]; 
console.log(row1 + '\n' + row2 + '\n' + row3); 

//Players
var playerX = {letter: "X", row: 4, col: 4}; 
var playerO = {letter: "O", row: 4, col: 4}; 

var playing = true; 

function placeLetter(player) {
    //Check if spot is within range
    while (player.row > 2 || player.col > 2 || player.row < 0 || player.col < 0) {
        var position = prompt("Where would you like to place your " + player.letter + "? Type a two digit number where the first is the column and the second is the row: \n"); 
        player.col = position[0] - 1; 
        player.row = position[1] - 1; 
    }
    //If within range, and blank, place letter
    if (game[player.row][player.col] == "_") {
        game[player.row][player.col] = player.letter;
    } else {
        //If not blank, ask again and place letter 
        while (game[player.row][player.col] != "_") {
            position = prompt("Where would you like to place your " + player.letter + "? Type a two digit number where the first is the column and the second is the row: \n"); 
            player.col = position[0] - 1; 
            player.row = position[1] - 1;
        }
        game[player.row][player.col] = player.letter;
    }
    console.log(row1 + '\n' + row2 + '\n' + row3); 
}

function gameOver(player) {
    //Diagonals
    if (game[0][0] == player.letter && game[1][1] == player.letter && game[2][2] == player.letter) {
        playing = false; 
        console.log("Player " + player.letter + " wins!"); 
    } else if (game[0][2] == player.letter && game[1][1] == player.letter && game[2][0] == player.letter) {
        playing = false; 
        console.log("Player " + player.letter + " wins!");
    //Columns 
    } else if (game[0][0] == player.letter && game[1][0] == player.letter && game[2][0] == player.letter) {
        playing = false; 
        console.log("Player " + player.letter + " wins!");
    } else if (game[0][1] == player.letter && game[1][1] == player.letter && game[2][1] == player.letter) {
        playing = false; 
        console.log("Player " + player.letter + " wins!");
    } else if (game[0][2] == player.letter && game[1][2] == player.letter && game[2][2] == player.letter) {
        playing = false; 
        console.log("Player " + player.letter + " wins!");
    //Rows 
    } else if (game[0][0] == player.letter && game[0][1] == player.letter && game[0][2] == player.letter) {
        playing = false; 
        console.log("Player " + player.letter + " wins!");
    } else if (game[1][0] == player.letter && game[1][1] == player.letter && game[1][2] == player.letter) {
        playing = false; 
        console.log("Player " + player.letter + " wins!");
    } else if (game[2][0] == player.letter && game[2][1] == player.letter && game[2][2] == player.letter) {
        playing = false; 
        console.log("Player " + player.letter + " wins!");
    //No more spots 
    } else if (game.includes("_") == false) {
        playing = false; 
        console.log("There are no more spots left. It's a tie!")
    //Keep playing 
    } else {
        playing = true;
    }
} 

//Main game 
while(playing == true) {
    placeLetter(playerX); 
    gameOver(playerX); 
    placeLetter(playerO); 
    gameOver(playerO); 
}
