let audioTurn = new Audio("Music/click.wav");
let gameOverMusic = new Audio("Music/error.wav");
let turn = "X";
let gameOver = false;
let reset = document.getElementById('reset');

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Wins the game🥳😇";
            gameOver = true;
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = '200px';
        }
    })

}

//Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');

    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


//Add onlcick listener to reset button
reset.addEventListener('click', () => {
    let boxtext = document.getElementsByClassName('boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = '0';
})