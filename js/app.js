var but = document.getElementsByTagName('button');
var turn = 1;
var win = new Array(9);
// index.disabled=true;

function go(index) {
    if (but[index].innerText) {
        return;
    }

    if (turn == 1) {
        but[index].innerHTML = "X";
        win[index] = turn;
    }
    else {
        but[index].innerHTML = "O";
        win[index] = turn;
    }

    winCon(turn);

    if (turn == 1) {
        turn = 2;
    }
    else {
        turn = 1;
    }
}

function winCon(turn) {
    if (win[0] == turn && win[1] == turn && win[2] == turn){
        alert("Player " + turn + " Wins");
    }
    if (win[3] == turn && win[4] == turn && win[5] == turn){
        alert("Player " + turn + " Wins");
    }
    if (win[6] == turn && win[7] == turn && win[8] == turn){
        alert("Player " + turn + " Wins");
    }
    if (win[0] == turn && win[3] == turn && win[6] == turn){
        alert("Player " + turn + " Wins");
    }
    if (win[1] == turn && win[4] == turn && win[7] == turn){
        alert("Player " + turn + " Wins");
    }
    if (win[2] == turn && win[5] == turn && win[8] == turn){
        alert("Player " + turn + " Wins");
    }
    if (win[0] == turn && win[4] == turn && win[8] == turn){
        alert("Player " + turn + " Wins");
    }
    if (win[2] == turn && win[4] == turn && win[6] == turn){
        alert("Player " + turn + " Wins");
    }

}


