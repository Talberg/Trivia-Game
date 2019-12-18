//Start Button: Starts the function to show the first question
var startBtn = document.getElementById('header')
startBtn.addEventListener("click",function(){
    startBtn.style.display = 'none';

    //run  the quiz function here 
    setTime()
})







// Question timer and a global timer 
var totalTime = questions.length * 15
console.log( totalTime)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var score = []
var questionTime = 15;




function setTime() {
  var timerInterval = setInterval(function() {
    totalTime--;
    
    questionTime--;
    timeEl.textContent =  " Total time left: " + totalTime;
    console.log(questionTime)
    
    
    console.log(score)
    if(totalTime === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
// how to print to the score, and how to deduct the time if wrong. 

function sendMessage() {
  

}






// generate question  generate 4 buttons 


var questionDisplay = document.getElementById('question')




// Weight the answers 






// make time left add to score if correct





// make question-time time subtract from total time






//add score to local storage 






