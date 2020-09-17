// create start page with "start" button to kick off timer and start first quiz question

// step one set up timeer 

// create quiz qustions and answer options with button

// log user's answer for each question and provide true or false comment

// if false - reduce timer by 5 secs

// when timer runs out or all questions are answered, prompt to page for user initial and score to local storage

// set variables, I started with DOM method before learn about Jquery but can change in next revision 
var timeEl = document.getElementById("timer");
var timeLeft = 60; //total test time 60 seconds
var start = document.getElementById("start"); //assign var to start button
start.addEventListener ("click", startCountDown) //add click event to kick off startCountDown function
var timeInterval

//Add function to start the count down after "start" button is clicked 
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



function countDown(){
          timeEl.textContent = "Quiz end in " + timeLeft + " seconds"
        if(timeLeft === 0){
            clearInterval(timeInterval);
            sendMessage();
        }
        timeLeft--;
    }
function sendMessage(){
    alert ("Time is Up")
}

//setting up variables and functions for quizs and answers

var questionSection = document.getElementById("quiz");
var answerChoices = document.getElementById("choices");
var answerBtns = document.querySelectorAll(".btn-secondary");
var answerSection = document.getElementById("answer")
var answer;
var testResult = document.getElementById('testResult')



function question1 (){
    questionSection.textContent = "Inside which HTML element do we put the JavaScript?";
    answerBtns[0].textContent = "A. <script>";
    answerBtns[1].textContent = "B. <javascript>";
    answerBtns[2].textContent = "C. <js>";
    answerBtns[3].textContent = "D. <scripting>";
    answer = 0;
    
    
}

function question2 (){
    questionSection.textContent = "Where is the correct place to insert a JavaScript?";
    answerBtns[0].textContent = "A. The <head> section";
    answerBtns[1].textContent = "B. The <body> section";
    answerBtns[2].textContent = "C. The <title> section";
    answerBtns[3].textContent = "D. The <footer> section";
    answer = 1;
}

function question3 (){
    questionSection.textContent = 'What is the correct syntax for referring to an external script called "xxx.js"?';
    answerBtns[0].textContent = 'A. <script name="xxx.js">';
    answerBtns[1].textContent = 'B. <script src="xxx.js">';
    answerBtns[2].textContent = 'C. <script href="xxx.js">';
    answerBtns[3].textContent = 'D. <script ./asset/xxx.js>';
    answer = 1;
}

function question4 (){
    questionSection.textContent = "How do you write 'Hello World' in an alert box?";
    answerBtns[0].textContent = 'A. msg("Hello World")';
    answerBtns[1].textContent = 'B. msgBox("Hello World")';
    answerBtns[2].textContent = 'C. alertBox("Hello World")';
    answerBtns[3].textContent = 'D. alert("Hello World")';
    answer = 3;
}


//
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

var numCorrectAns=0;
var numWrongAns=0;
var currentQues;

function checkAnswer(isItCorrect){
    if(isItCorrect === true){
        answerSection.textContent = "Correct!"
        numCorrectAns++
    }else{
        answerSection.textContent = "Wrong!"
        numWrongAns++
    }
    currentQues++

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

