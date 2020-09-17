// set variables 
var timeEl = document.getElementById("timer");
var timeLeft = 60; //total test time 60 seconds
var start = document.getElementById("start"); //assign var to start button
start.addEventListener ("click", startCountDown) //add click event to kick off startCountDown function
var timeInterval

//Here is the function to start the count down after "start" button is clicked and prompt to first question
function startCountDown(){
timeInterval = setInterval(countDown,1000);
countDown()
start.style.display="none"
questionSection.style.display="inline-block"
answerChoices.style.display="inline"
answerSection.style.display="block"
currentQues =1;
question1();
}


//Setting the timer once the start button is clicked
function countDown(){
          timeEl.textContent = "Quiz end in " + timeLeft + " seconds"
        if(timeLeft === 0){
            clearInterval(timeInterval);
            sendMessage();
            timeLeft = 60;
            startCountDown();
        }
        timeLeft--;
    }
function sendMessage(){
    alert ("Time is Up")
    
}

//setting up variables and functions for quizs and answers, jquery is not used. Will implement for next update.
var questionSection = document.getElementById("quiz");
var answerChoices = document.getElementById("choices");
var answerBtns = document.querySelectorAll(".btn-secondary");
var answerSection = document.getElementById("answer")
var answer;
var testResult = document.getElementById('testResult')


// Set function for each question. The answer are included for the checking answer function
function question1 (){
    questionSection.textContent = "Q1: Inside which HTML element do we put the JavaScript?";
    answerBtns[0].textContent = "A. <script>";
    answerBtns[1].textContent = "B. <javascript>";
    answerBtns[2].textContent = "C. <js>";
    answerBtns[3].textContent = "D. <scripting>";
    answer = 0;
    
    
}

function question2 (){
    questionSection.textContent = "Q2: Where is the correct place to insert a JavaScript?";
    answerBtns[0].textContent = "A. The <head> section";
    answerBtns[1].textContent = "B. The <body> section";
    answerBtns[2].textContent = "C. The <title> section";
    answerBtns[3].textContent = "D. The <footer> section";
    answer = 1;
}

function question3 (){
    questionSection.textContent = 'Q3: What is the correct syntax for referring to an external script called "xxx.js"?';
    answerBtns[0].textContent = 'A. <script name="xxx.js">';
    answerBtns[1].textContent = 'B. <script src="xxx.js">';
    answerBtns[2].textContent = 'C. <script href="xxx.js">';
    answerBtns[3].textContent = 'D. <script ./asset/xxx.js>';
    answer = 1;
}

function question4 (){
    questionSection.textContent = "Q4: How do you write 'Hello World' in an alert box?";
    answerBtns[0].textContent = 'A. msg("Hello World")';
    answerBtns[1].textContent = 'B. msgBox("Hello World")';
    answerBtns[2].textContent = 'C. alertBox("Hello World")';
    answerBtns[3].textContent = 'D. alert("Hello World")';
    answer = 3;
}


//each multiple choice options have a eventlistener and check the user answer aganist the correct answer

answerBtns[0].addEventListener("click",function(){
    checkAnswer(answer === 0)
})
answerBtns[1].addEventListener("click",function(){
    checkAnswer(answer === 1)
})
answerBtns[2].addEventListener("click",function(){
    checkAnswer(answer === 2)
})
answerBtns[3].addEventListener("click",function(){
    checkAnswer(answer === 3)
})

//set the variables for counting correct/ wrong answers
var numCorrectAns=0;
var numWrongAns=0;
var currentQues;

//this function is showing the user if they are correct or wrong for each question. In the wront condition, the clock is deducted by 10 sec
function checkAnswer(isItCorrect){
    if(isItCorrect === true){
        answerSection.textContent = "Correct!"
        numCorrectAns++
    }else{
        answerSection.textContent = "Wrong!"
        numWrongAns++
        timeLeft=timeLeft-10
        }
    currentQues++
//loop through each questions until the end and prompt alert and show the score form
    if (currentQues===1){
        question1 ()    
    }
    if (currentQues===2){
        question2 ()    
    }
    if (currentQues===3){
        question3 ()    
    }
    if (currentQues===4){
        question4 ()    
    }
    if (currentQues===5){
        alert("finished")
        clearInterval(timeInterval);
        showScore()
    }  
}
// form for user input and score %
var form =  document.querySelector(".form")

function showScore(){
    start.style.display="none"
    questionSection.style.display="none"
    answerChoices.style.display="none"
    answerSection.style.display="none"
    form.style.display = "block"
    testResult.style.display = "block"
    testResult.textContent="Your score is "+(numCorrectAns/4)*100 +"%"
    }

