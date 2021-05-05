//creating a random number from 1-6 for 1st dice.
var randomNumber1 = Math.floor(Math.random()*6)+1;
//image source for dice1.
randomDiceImage1 = "images/dice"+randomNumber1+".png";
//selecting image1 and changing its image according to the random number.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute('src',randomDiceImage1);

//creating a random number from 1-6 for 2nd dice.
var randomNumber2 = Math.floor(Math.random()*6)+1;
//image source for dice1.
randomDiceImage2 = "images/dice"+randomNumber2+".png";
//selecting image1 and changing its image according to the random number.
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute('src',randomDiceImage2);

//deciding the winner.
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent = "Player1 wins.";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent = "Player2 wins.";
}
else{
  document.querySelector("h1").textContent = "Draw!"
}
