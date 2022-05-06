var player1 = Math.random();
var player11= player1 * 6;
var player111 = Math.floor(player11) + 1;
 
var randomDice = "dice" +player111+ ".png";
var randomImage = "images/" +randomDice;
document.querySelector(".img1").setAttribute("src", randomImage);
var image1 = document.querySelector(".img1")

var player2 = Math.random();
var player22 = player2 * 6;
var player222 = Math.floor(player22) + 1;
// var player2 = Math.random();
// var player22= player1 * 6;
// var player222 = Math.floor(player11) + 1;

var randomDice = "dice" +player222+ ".png";
var randomImage = "images/" +randomDice;
document.querySelector(".img2").setAttribute("src", randomImage);
var image1 = document.querySelector(".img1")

if (player111 > player222) {
    document.querySelector("h1").innerHTML = "Player 1 won";
    } 
else if (player222 > player111) {
        document.querySelector("h1").innerHTML = "Player 2 won";
    }
else{
    document.querySelector("h1").innerHTML = "Draw";

}
// var player2 = Math.random();
// var player22= player1 * 6;
// var player222 = Math.floor(player11) + 1;




    // if (player111 > player222) {
    //     document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    //   }
    //   else if (player222 > player111) {
    //     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    //   }
    // //   else {
    // //     document.querySelector("h1").innerHTML = "Draw!";
    // //   }
      