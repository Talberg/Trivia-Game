//Start Button: Starts the function to show the first question
var startBtn = document.getElementById('header')
startBtn.addEventListener("click",function(){
    startBtn.style.display = 'none';

    //run  the quiz function here 
    globalTime()
    Q1()
})







// Question timer and a global timer 
var totalTime = questions.length * 15
console.log( totalTime)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var score = []
var questionTime = 15;




function globalTime() {
  var timerInterval = setInterval(function() {
    totalTime--;
    timeEl.textContent =  " Time left: " + totalTime;
    
    if(totalTime === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
// how to print to the score, and how to deduct the time if wrong. 

function sendMessage() {
  

}




function incorrect1(){
    totalTime = (totalTime- questionTime)
    console.log('-15')
    Q2()
    
}


// generate question  generate 4 buttons 

var answers = document.getElementById('answers')
var questionDisplay = document.getElementById('question')
function Q1(){

    var a1 = document.createElement('button')
    var a2 = document.createElement('button')
    var a3 = document.createElement('button')
    var a4 = document.createElement('button')

    // generating and filling the buttons 
    
    $(a1).addClass('button')
    $(a2).addClass('button')
    $(a3).addClass('button')
    $(a4).addClass('button')
    a1.addEventListener('click', function(){

        incorrect1()
    })
    
    a1.textContent = questions[0].choices[0]
    a2.textContent = questions[0].choices[1]
    a3.textContent = questions[0].choices[2]
    a4.textContent = questions[0].choices[3]






    answers.append(a1)
    answers.append(a2)
    answers.append(a3)
    answers.append(a4)
    // displays the text in the title: of index 0
    questionDisplay.textContent = questions[0].title
    questionTime = 15
    var currentScore = setInterval(function(){
        questionTime--;
        console.log(questionTime)
        if(questionTime === 0 ){
            Q2()
        }
        
        
    }, 1000
    )
}
function Q2(){
    $('#answers').empty()
    questionDisplay.textContent = questions[1].title
    questionTime = 15
    var currentScore = setInterval(function(){
        questionTime--;
        console.log(questionTime)
        if(questionTime === 0 ){
            
        }
        
    }, 1000
    )
}




// Weight the answers 






// make time left add to score if correct





// make question-time time subtract from total time






//add score to local storage 






