let scorePlayer1, scorePlayer2, currentPlayer, gameActive, board;

const squares = Array.from(document.querySelectorAll('#board div'));

const winningCombinations = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]

];



init();



function init() {

    scorePlayer1 = 0;
    scorePlayer2 = 0;



    document.getElementById("player1score").textContent = scorePlayer1;
    document.getElementById("player2score").textContent = scorePlayer2;



    newGame();

}



function testForWinner() {

    winningCombinations.forEach(function (containComb) {

        let positionZero = squares[containComb[0]].textContent;
        let positionOne = squares[containComb[1]].textContent;
        let positionTwo = squares[containComb[2]].textContent;



        winner = positionZero !== '' && positionZero === positionOne && positionOne === positionTwo;



        if (winner === true) {

            document.getElementById("player" + currentPlayer).innerHTML = "Winner!";

            if (currentPlayer == 1) {
                scorePlayer1++;
                document.getElementById("player1score").textContent = scorePlayer1;

                return gameActive = false;

            }

            else if (currentPlayer == 2){
                scorePlayer2++;
                document.getElementById("player2score").textContent = scorePlayer2;

                return gameActive = false;

            }

        }

    });

}





function newGame() {
    

    currentPlayer = 1;
    gameActive = true;


    document.getElementById("player1").innerHTML = "Player 1";
    document.getElementById("player2").innerHTML = "Player 2";



    document.querySelector(".player1").classList.add("active");
    document.querySelector(".player2").classList.remove("active");



    for(let i = 0; i < squares.length; i++) {

        squares[i].innerHTML = null;

    }



    turn();

};





function turn() {
    if (gameActive === true) {
        for(let i = 0; i < squares.length; i++) {
            squares[i].onclick = function() {


                if (squares[i].innerHTML == "") {
                   

                    if (currentPlayer == 1) {
                        squares[i].style.color = "green";
                        squares[i].innerHTML = "X";                        

                        nextPlayer();

                    }

                    else {

                        squares[i].style.color = "blue";
                        squares[i].innerHTML = "O";                        

                        nextPlayer();

                    }

                }

            }

        }

    }

    

    else if (gameActive === false){
        for(let i = 0; i < squares.length; i++) {
            squares[i].onclick = function () {}

        }

    }

}





function nextPlayer(){

    testForWinner(); 

    if (gameActive == true) {

        currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;


        document.querySelector(".player1").classList.toggle("active");
        document.querySelector(".player2").classList.toggle("active");        

    }

    turn()

};

document.querySelector(".newGame").addEventListener("click", newGame);
document.querySelector(".reset").addEventListener("click", init);