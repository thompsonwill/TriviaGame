$(document).ready(function() {
var userChoice;
var wins = 0;
var losses= 0;
var timer = 0;

var seinfeldQuestions = [{
    question: "The restaurant known as Monk's on the show is actually named what?",
    choices: ["<input type='radio' name='option' value='jerrys' id='ans1'> Jerry's " , "<input type='radio' name='option' value='toms' id='ans2'> Tom's ", "<input type='radio' name='option' value='harrys'> Harry's " , "<input type='radio' name='option' value='barrys'> Barry's "],
    correctAns: "toms"
}, {
    question: "What are the names of George's horses at his fictitious home in the Hamptons?",
    choices: ["<input type='radio' name='option1' value='Thomas and Scamper' id='ans1'> Thomas and Scamper ", "<input type='radio' name='option1' value='Seabisquick and Billy the Kid' id='ans1'> Seabisquick and Billy the Kid ", "<input type='radio' name='option1' value='Snoopy and Prickly Pete' id='ans1'> Snoopy and Prickly Pete ", "<input type='radio' name='option1' value='Runner & Jumper' id='ans1'> Runner & Jumper "],
    correctAns: "Snoopy and Prickly Pete"
}, {
    question: "Other than Jerry, who uttered the words 'Hello Newman'?",
    choices: ["<input type='radio' name='option2' value='Helen Seinfeld' id='ans1'> Helen Seinfeld", "<input type='radio' name='option2' value='George' id='ans1'> George", "<input type='radio' name='option2' value='Kramer' id='ans1'> Kramer", "<input type='radio' name='option2' value='Elaine' id='ans1'> Elaine"],
    correctAns: "Helen Seinfeld"
}, {
    question: "What food was thrown at George at the end of the episode where the gang goes to the Hamptons?",
    choices: ["<input type='radio' name='option3' value='Apple' id='ans1'> Apple", "<input type='radio' name='option3' value='Orange' id='ans1'> Orange", "<input type='radio' name='option3' value='Banana' id='ans1'> Banana", "<input type='radio' name='option3' value='Tomato' id='ans1'> Tomato"],
    correctAns: "Tomato"
}, {
  question: "What is the color of the base of the Pez dispenser that makes Elaine laugh?",
  choices: ["<input type='radio' name='option4' value='Red' id='ans1'> Red ", "<input type='radio' name='option4' value='Blue' id='ans1'> Blue", "<input type='radio' name='option4' value='Green' id='ans1'> Green ", "<input type='radio' name='option4' value='Purple' id='ans1'> Purple"],
  correctAns: "Blue"
}, {
  question: "What are the names of Jerry’s parents?",
  choices: ["<input type='radio' name='option5' value='Jack and Susan' id='ans1'> Jack and Susan ", "<input type='radio' name='option5' value='Harold and Maude' id='ans1'> Harold and Maude ", "<input type='radio' name='option5' value='Morty and Helen' id='ans1'> Morty and Helen ", "<input type='radio' name='option5' value='Ben and Sherly' id='ans1'> Ben and Sherly "],
  correctAns: "Morty and Helen"
}];

var choicesArr;

function initializeGame(){
  //Hide questions until they are ready
  $("#game1").hide();
  $("#game2").hide();
  $("#game3").hide();
  $("#game4").hide();
  $("#game5").hide();
  $("#game6").hide();
  $("#userWins").hide();
  $("#userLoss").hide();
}

$('#startGame').click(function() {
    $("#game1").show();
    $( "#startGame" ).prop( "disabled", true );

    //Play sound
    document.getElementById('audio').play();

    //Timer
    var timeLeft = 45;
    var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                console.log("Out of time");
                $("#userWins").show();
                $("#userLoss").show();
                $("#timer").text("You are out of time");
                $("#userWins").text("You have " + wins + " correct answers");
                $("#userLoss").text("You have " + losses + " incorrect answers");
                $("#triviaGame").hide();
            } else {
                $("#timer").text(timeLeft + " Seconds Remaining");
                timeLeft--;
            }
        }

});


//Create a function to list the questions & answers
function showQuestion(divId, questionList, questionChoices, arrayDiv){
    $(divId).text(questionList);
    choicesArr = questionChoices;
    for (let i = 0; i < choicesArr.length; i++) {
    $(arrayDiv).append(choicesArr[i]);
};
}

function nextQuestion(hidden, showing, radioChoice, answerDiv, seinQuestion) {
  $(hidden).hide();
  $(showing).show();
  userChoice = ($(radioChoice, answerDiv).val());
      if(userChoice != seinQuestion) {
          losses++;
          console.log("You are incorrect. " + losses);
      } else {
          wins++;
          console.log("You are correct. " + wins);
      }
}

//Start the game
initializeGame();

//Show questoin 1
showQuestion("#question1", seinfeldQuestions[0].question, seinfeldQuestions[0].choices, "#ansDiv");

//Get the answer and move on to the next question
$('#nextQ').click(function() {
  nextQuestion("#game1", "#game2", 'input[name=option]:checked', '#ansDiv', seinfeldQuestions[0].correctAns);
 });

//Question 2 - Display on DOM
showQuestion("#question2", seinfeldQuestions[1].question, seinfeldQuestions[1].choices, "#ansDiv2");


//Get the answer and move on to the next question
$('#nextQ1').click(function() {
  nextQuestion("#game2", "#game3", 'input[name=option1]:checked', '#ansDiv2', seinfeldQuestions[1].correctAns);
 });

//Show question 3
 showQuestion("#question3", seinfeldQuestions[2].question, seinfeldQuestions[2].choices, "#ansDiv3");


//Get the answer and move on to the next question
$('#nextQ2').click(function() {
  nextQuestion("#game3", "#game4", 'input[name=option2]:checked', '#ansDiv3', seinfeldQuestions[2].correctAns);
 });

//Show question 4
 showQuestion("#question4", seinfeldQuestions[3].question, seinfeldQuestions[3].choices, "#ansDiv4");

//Get the answer and move on to the next question
$('#nextQ3').click(function() {
  nextQuestion("#game4", "#game5", 'input[name=option3]:checked', '#ansDiv4', seinfeldQuestions[3].correctAns);
 });

 //Show question 4
  showQuestion("#question5", seinfeldQuestions[4].question, seinfeldQuestions[4].choices, "#ansDiv5");


 //Get the answer and move on to the next question
 $('#nextQ4').click(function() {
   nextQuestion("#game5", "#game6", 'input[name=option4]:checked', '#ansDiv5', seinfeldQuestions[4].correctAns);
  });

  //Show question 5
   showQuestion("#question6", seinfeldQuestions[5].question, seinfeldQuestions[5].choices, "#ansDiv6");

  //Get the answer and move on to the next question
  $('#nextQ5').click(function() {
    nextQuestion("#game6", "#game7", 'input[name=option5]:checked', '#ansDiv6', seinfeldQuestions[5].correctAns);
   });




//This is the final endy
});
