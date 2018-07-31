// Code your JavaScript / jQuery solution here
const WINNING_COMBINATIONS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                        [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

var turn=0

function player(){
  if (turn%2==0) { return 'X'} else {return 'O'}
}

function updateState(position){

  //var token = player();
  $(position).text(player());


}

function doTurn(){
  checkWinner()
  return turn++

}

function setMessage(message){
  $('#message').text(message);
}

function checkWinner(){
  var board={};
  var winner=false;
  $('td').text((i,value) => board[i]=value);
  WINNING_COMBINATIONS.some(function(combination){
    if(board[combination[1]]===board[combination[2]]  && board[combination[1]]===board[combination[0]] && board[combination[0]]!==""){
      setMessage(`Player ${board[combination[0]]} Won!`)
      return winner=true;
    }
  });
  return winner;
}


function attachListeners(){

}

