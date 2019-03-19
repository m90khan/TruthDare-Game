
function game(){
  // to generate random numbers from 1-6. mathflorr to round up the number to 6 and 1 to start from number 1 instead 0
  var d1 = Math.floor(Math.random() * 6) +1;
  // to get random dice image
  var d1d = "dice" + d1 + ".png";
  // give path images/dice(generatednumber).png
  var dice1 = "images/" + d1d;
  //we select image tag at index 0
  var image1 =  document.querySelectorAll("img")[0].setAttribute("src", dice1);
   //and change its src attribute to random
  // image1.setAttribute("src", dice1);

  var d2  = Math.floor(Math.random() * 6) +1;
  var dice2 = "images/dice" + d2 + ".png";

  var image2 = document.querySelectorAll("img")[1].setAttribute("src", dice2);
  document.querySelector("#tied").classList.add("truth-dare");
  document.querySelector("#outputtruth").classList.add("truth-dare");


// Condition on who wins
// When Player 1 wins
if (d1 > d2) {
document.querySelector("#player-one").innerHTML = "WIN" ;
document.querySelector("#player-two").innerHTML = "YOU LOSE" ;
document.querySelector("#playme").classList.add("truth-dare");
document.querySelector("#truther").classList.toggle("truth-dare");
document.querySelector("#tied").classList.add("truth-dare");
   // When Player 2 wins
}else if(d2 > d1){
  document.querySelector("#player-two").innerHTML = "WIN " ;
  document.querySelector("#player-one").innerHTML = "YOU LOSE " ;
  document.querySelector("#playme").classList.add("truth-dare");
  document.querySelector("#truther").classList.toggle("truth-dare");
  document.querySelector("#tied").classList.add("truth-dare");

   // // When it is a Tie
}else{
  document.querySelector("#tied").style.backgroundColor = "white";
  document.querySelector("#tied").classList.toggle("truth-dare");
  document.querySelector("#tied").innerHTML = "Oh No: It`s a Tie <br> Both of you Drink a shot and Play Again";

  document.querySelectorALL("output1").style.visibility = "hidden";


}


}


function dareQuestion(){
   //                                             // Dare
   var diceArray4 = [
     "For a guy, put on makeup. For a girl, wash off your make up.",
     "Dance with no music for 1 minute.",
     "Lick your Partner neck.",
     "LoveBite on the neck.",
     "Let someone shave part of your body.",
     "For next 5 minutes: Everytime you speak, you have to add (Master) before every sentence.",
     "Attempt to break dance for 30 seconds.",
     "Be someone’s pet for the next 5 minutes.",
     "Poll dance for 1 minute with an imaginary pole.",
     "Your Partner have to give you a spanking.",
     "Make a funny face and keep making it for 2 minutes while the game continues.",
     "Do your best impression of a baby being born.",
     "Belly dance like your life depended on it.",
     "Take off your underwear and put it on your head. Wear it on your head for next 5 minutes",
     "Remove whatever you wearing as a Top",
     "If you are at his/her place, wear his/her clothes",
     ];


    var d4 = Math.random();
    d4 = d4 * diceArray4.length;
    d4 = Math.floor(d4)+1;
    var dice4 = diceArray4[d4];
    if (isNaN (dice4)){
      document.querySelector("#outputtruth").innerHTML = dice4;
      document.querySelector("#truther").classList.add("truth-dare");
      document.querySelector("#playme").classList.toggle("truth-dare");
      document.querySelector("#outputtruth").classList.toggle("truth-dare");



    }
   //   var d4 = Math.floor(Math.random() * diceArray4.length) +1;
   // var dice4 = diceArray3[d3];
   // if (isNaN (dic4)){
   //   document.querySelector("#outputtruth").innerHTML = dice4;
   // }
   // document.querySelector("#playme").classList.toggle("truth-dare");
   // document.querySelector("#truther").classList.toggle("truth-dare");
}
//
function truthQuestion(){
   //                                               // Truth
   var diceArray3 = [
     "What is the most childish thing you still do?",
     "What is something that people think you would never do but you have?",
     "Tell me about your most awkward date.",
     "What is your deepest darkest fear?",
     "What is the most embarrassing thing in your room?",
     "What is the stupidest thing you have ever done?",
     "When was the last time you picked your nose without a tissue?",
     "Tell me something you don’t want me to know.",
     "What would you do if you were the opposite gender for a day?",
     "Do you like me?",
     "What is something you think you will regret in the future not starting now and what is something you already regret not starting sooner?",
     "What part of your culture are you most and least proud of?",
     "What is your deepest darkest fear?",
     "What memory do you just keep going back to?",
     "Where is the dream place you wish to visit?",
     ];
     var d3 = Math.random();
    d3 = d3 * diceArray3.length;
    d3 = Math.floor(d3)+1;
    var dice3 = diceArray3[d3];
    if (isNaN (dice3)){
      document.querySelector("#outputtruth").innerHTML = dice3;
      document.querySelector("#truther").classList.toggle("truth-dare");
      document.querySelector("#playme").classList.toggle("truth-dare");
      document.querySelector("#outputtruth").classList.toggle("truth-dare");

    }


   //   var d3 = Math.floor(Math.random() * diceArray3.length) +1;
   // var dice3 = diceArray3[d3];
   // if (isNaN (dic3)){
   //   document.querySelector("#outputtruth").innerHTML = dice3;
   // }
   // document.querySelector("#playme").classList.toggle("truth-dare");
   // document.querySelector("#truther").classList.toggle("truth-dare");

}
