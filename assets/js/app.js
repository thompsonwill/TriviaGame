$(document).ready(function() {

var userChoice;
var wins = 0;
var losses= 0;

var seinfeldQuestions = [{
    question: "The restaurant known as Monk's on the show is actually named what?",
    choices: ["<button type='button' class='btn btn-outline-primary' id='ans'>Jerry's</button>" , "<button type='button' class='btn btn-outline-primary' id='ans'>Tom's</button>" , "<button type='button' class='btn btn-outline-primary' id='ans'>Harry's</button>" , "<button type='button' class='btn btn-outline-primary' id='ans'>Barry's</button>"],
    correctAns: 1
}, {
    questions: "What are the names of George's horses at his fictitious home in the Hamptons?",
    choices: ["<button type='button' class='btn btn-outline-primary' id='ans'>Thomas and Scamper</button>", "<button type='button' class='btn btn-outline-primary' id='ans'>Seabisquick and Billy the Kid</button>", "<button type='button' class='btn btn-outline-primary' id='ans'>Snoopy and Prickly Pete</button>", "<button type='button' class='btn btn-outline-primary' id='ans'>Runner and Jumper</button>"],
    correctAns: 4
}];


//Question 1
$("#question1").text(seinfeldQuestions[0].question);

//Buttons 1
var choicesArr = seinfeldQuestions[0].choices;
for (let i = 0; i < choicesArr.length; i++) {
    $("#ansDiv").append(choicesArr[i]);
};
$('#ansDiv').on('click', 'button', function(e){
    seinfeldQuestions[0].correctAns;
    userChoice = $(this).index();

    if(userChoice != seinfeldQuestions[0].correctAns) {
        losses++;
        console.log("Wrong! " + losses);
        
    }
    else {
        wins++;
        console.log("Correct! " + wins);
    }
});

//Question 2
$("#question1").text(seinfeldQuestions[0].question);

//Buttons 2
choicesArr = seinfeldQuestions[1].choices;
for (let i = 0; i < choicesArr.length; i++) {
    $("#ansDiv2").append(choicesArr[i]);
};
$('#ansDiv2').on('click', 'button', function(e){
    userChoice = $(this).index();
    console.log($(this).index());
    if(userChoice != seinfeldQuestions[1].correctAns) {
        losses++;
        console.log("Wrong! " + losses)
    }
    else {
        wins++;
        console.log("Correct! " + wins);
    }
});






});