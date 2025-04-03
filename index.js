var userClickedPattern = [];

var gamePattern = [];
var buttonColours = ["red", "blue" , "yellow" , "green"];

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
   
    userClickedPattern.push(userChosenColour);
    $("#"+ userChosenColour).addClass("pressed");
    animations(userChosenColour);

    setTimeout(function () {
        $("#"+ userChosenColour).removeClass("pressed");
    }, 100);
    var idx =  userClickedPattern.length - 1;
    checkAnswer(idx);
   })


function nextSequence() {
    userClickedPattern = [];
    var randomnumber = Math.floor(Math.random() *4) ;
    
    var randomChosenColour = buttonColours[randomnumber];
    gamePattern.push(randomChosenColour);

    animations(randomChosenColour);

    $("h1").text("Level " + level);
    level = level + 1;

   

}

function animations(key) {

    $("#" + key).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var aud = new Audio("sounds/"+key+".mp3" );
    aud.play();

}

var level = 0;

if(level == 0){
    $(document).keydown(nextSequence);
}


function checkAnswer(currentLevel) {
if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
    
    if(currentLevel == gamePattern.length - 1){
        setTimeout(nextSequence , 1000);
      
       
    }
}
else {
    var aud1 = new Audio("sounds/wrong.mp3");
    aud1.play();

    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over")} , 200);


    $("h1").text("Game Over, Press Any Key to Restart");    

    gamePattern = [];
    level = 0;
}

}