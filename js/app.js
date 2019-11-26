var but = document.getElementsByTagName('button');
var turn = 1;


function go(index) {
    
    if (turn == 1) {
        but[index].innerHTML = "X";
        turn = 2;
    }
    else {
        but[index].innerHTML = "O";
        turn = 1;
    }
}