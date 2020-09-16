// create start page with "start" button to kick off timer and start first quiz question

// step one set up timeer 

// create quiz qustions and answer options with button

// log user's answer for each question and provide true or false comment

// if false - reduce timer by 5 secs

// when timer runs out or all questions are answered, prompt to page for user initial and score to local storage

//set timer 
var timeEl = document.querySelector(".time");
var mainEL = document.getElementById("main");
var timeLeft = 10;
var start = document.getElementById("start");
start.addEventListener ("click", startCountDown)
var timeInterval

function startCountDown(){
timeInterval = setInterval(countDown,1000);
countDown()
start.style.display="none"
questionSection.style.display="inline-block"
answerChoices.style.display="inline"
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

var questionSection = document.getElementById("quiz");
var answerChoices = document.getElementById("choices");
var answerBtns = document.querySelectorAll(".btn-secondary");
var answerSection = document.getElementById("answer")
var answer;




function question1 (){
    questionSection.textContent = "Inside which HTML element do we put the JavaScript?";
    answerBtns[0].textContent = "<script>";
    answerBtns[1].textContent = "<javascript>";
    answerBtns[2].textContent = "<js>";
    answerBtns[3].textContent = "<scripting>"
    answer = 0;
    
    
}

function question2 (){
    questionSection.textContent = "what color is the sky";
    answerBtns[0].textContent = "green";
    answerBtns[1].textContent = "red";
    answerBtns[2].textContent = "blue";
    answerBtns[3].textContent = "toast"
    answer = 2;
}

function question3 (){
    questionSection.textContent = "what coloxxxxxy";
    answerBtns[0].textContent = "green";
    answerBtns[1].textContent = "red";
    answerBtns[2].textContent = "blue";
    answerBtns[3].textContent = "toast"
    answer = 2;
}

function question4 (){
    questionSection.textContent = "whsssxxxxssssccfdddis the sky";
    answerBtns[0].textContent = "green";
    answerBtns[1].textContent = "red";
    answerBtns[2].textContent = "blue";
    answerBtns[3].textContent = "toast"
    answer = 2;
}


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

var numCorrectAns
var numWrongAns
var currentQues

function checkAnswer(isItCorrect){
    if(isItCorrect === true){
        answerChoices.textcontent = "Correct!"
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

    }
    
}