$(document).ready(function() {
    //Hide questions until they are ready
    $("#game1").hide();
    $("#game2").hide();
    $("#game3").hide();
    $("#game4").hide();
    $("#userWins").hide();
    $("#userLoss").hide();

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
    choices: ["<input type='radio' name='option1' value='Thomas and Scamer' id='ans1'> Thomas and Scamper", "<input type='radio' name='option1' value='Seabisquick and Billy the Kid' id='ans1'> Seabisquick and Billy the Kid", "<input type='radio' name='option1' value='Snoopy and Prickly Pete' id='ans1'> Snoopy and Prickly Pete", "<input type='radio' name='option1' value='Runner & Jumper' id='ans1'> Runner & Jumper"],
    correctAns: "Snoopy and Prickly Pete"
}, {
    question: "Other than Jerry, who uttered the words 'Hello Newman'?",
    choices: ["<input type='radio' name='option2' value='Helen Seinfeld' id='ans1'> Helen Seinfeld", "<input type='radio' name='option2' value='George' id='ans1'> George", "<input type='radio' name='option2' value='Kramer' id='ans1'> Kramer", "<input type='radio' name='option2' value='Elaine' id='ans1'> Elaine"],
    correctAns: "Helen Seinfeld"
}, {
    question: "What food was thrown at George at the end of the episode where the gang goes to the Hamptons?",
    choices: ["<input type='radio' name='option3' value='Apple' id='ans1'> Apple", "<input type='radio' name='option3' value='Orange' id='ans1'> Orange", "<input type='radio' name='option3' value='Banana' id='ans1'> Banana", "<input type='radio' name='option3' value='Tomato' id='ans1'> Tomato"],
    correctAns: "Tomato"
}];

$('#startGame').click(function() {
    $("#game1").show();
    $( "#startGame" ).prop( "disabled", true );

    //Timer
    var timeLeft = 30;
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


//Question 1 - Display on DOM
$("#question1").text(seinfeldQuestions[0].question);

//Radio Buttons Question 1 - Display on DOM
var choicesArr = seinfeldQuestions[0].choices;
for (let i = 0; i < choicesArr.length; i++) {
    $("#ansDiv").append(choicesArr[i]);
};

//Get the answer and move on to the next question
$('#nextQ').click(function() {
    $("#game1").hide();
    $("#game2").show();
    userChoice = ($('input[name=option]:checked', '#ansDiv').val());
        if(userChoice != seinfeldQuestions[0].correctAns) {
            losses++;
            console.log("You are incorrect. " + losses);
        } else {
            wins++;
            console.log("You are correct. " + wins);
        }
 });




//Question 2 - Display on DOM
$("#question2").text(seinfeldQuestions[1].question);

//Radio Buttons Question 2 - Display on DOM
choicesArr = seinfeldQuestions[1].choices;
for (let i = 0; i < choicesArr.length; i++) {
    $("#ansDiv2").append(choicesArr[i]);
};

//Get the answer and move on to the next question
$('#nextQ1').click(function() {
    $("#game2").hide();
    $("#game3").show();
    userChoice = ($('input[name=option1]:checked', '#ansDiv2').val());
        if(userChoice != seinfeldQuestions[1].correctAns) {
            losses++;
            console.log("You are incorrect. " + losses);
        } else {
            wins++;
            console.log("You are correct. " + wins);
        }
 });





 //Question 3 - Display on DOM
$("#question3").text(seinfeldQuestions[2].question);

//Radio Buttons Question 3 - Display on DOM
choicesArr = seinfeldQuestions[2].choices;
for (let i = 0; i < choicesArr.length; i++) {
    $("#ansDiv3").append(choicesArr[i]);
};

//Get the answer and move on to the next question
$('#nextQ2').click(function() {
    $("#game3").hide();
    $("#game4").show();
    userChoice = ($('input[name=option2]:checked', '#ansDiv3').val());
        if(userChoice != seinfeldQuestions[2].correctAns) {
            losses++;
            console.log("You are incorrect. " + losses);
        } else {
            wins++;
            console.log("You are correct. " + wins);
        }
 });




  //Question 4 - Display on DOM
$("#question4").text(seinfeldQuestions[3].question);

//Radio Buttons Question 4 - Display on DOM
choicesArr = seinfeldQuestions[3].choices;
for (let i = 0; i < choicesArr.length; i++) {
    $("#ansDiv4").append(choicesArr[i]);
};

//Get the answer and move on to the next question
$('#nextQ3').click(function() {
    $("#game4").hide();
    $("#game5").show();
    userChoice = ($('input[name=option3]:checked', '#ansDiv4').val());
        if(userChoice != seinfeldQuestions[3].correctAns) {
            losses++;
            console.log("You are incorrect. " + losses);
        } else {
            wins++;
            console.log("You are correct. " + wins);
        }
 });



//This is the final endy
});