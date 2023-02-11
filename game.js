var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
userClickedPattern = [];

var level = 0;
var started = false;

$(document).keypress(function(){
  if (!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;  
  }
});

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $('#' + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomChosenColour;
  var randomNumber = (Math.floor(Math.random() * 4));
  switch(randomNumber) {

    case 0 :
      randomChosenColour = "red";
      gamePattern.push(randomChosenColour);
      $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChosenColour);
      break;

    case 1 :
      randomChosenColour = "blue";
      gamePattern.push(randomChosenColour);
      $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChosenColour);
      break;
            
    case 2 :
      randomChosenColour = "green";
      gamePattern.push(randomChosenColour);
      $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChosenColour);
      break;

    case 3 :
      randomChosenColour = "yellow";
      gamePattern.push(randomChosenColour);
      $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChosenColour);
      break;
  }
}

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("succes");

    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}


