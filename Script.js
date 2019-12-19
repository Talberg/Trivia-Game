//Start Button: Starts the function to show the first question
var header = document.getElementById('header')
var startBtn = document.getElementById('startBtn')
var highScore = document.getElementById('high-score')
var questions = [{
    title: "Question 1: When Walt Disney's seven dwarfs went off to work in the mines, what were they looking for?",
    choices: ["Gold", "Peals", "Diamonds", "Silver"],
    answer: "Silver"}
    ,{
    title: "Question 2: What is the most common blood type in humans?",
    choices: ["O", "AB", "A", "B"],
    answer: "O"
    },{
    title: "Question 3: Which company use the android application in their mobiles first time?",
    choices: ["Motorola", "Sony", "Apple", "HTC"],
    answer: "HTC"
    },{
    title: "Question 4: Where is the largest data center?",
    choices: ["Nevada, USA", "Langfang,China", "Illinois,USA", "Bangalore,India"],
    answer: "Nevada,USA"
    },{
    title: "Question 5: What is the combined wealth of the richest 5 people in the world?  ",
    choices: ["140.7bn", "471.8bn", "234.4bn", "803.6bn"],
    answer: "471.8bn"
    }
   
]
startBtn.addEventListener("click",function(){
    startBtn.style.display = 'none';
    header.style.display= 'none'
    highScore.style.display = 'none'
    //run  the quiz function here and start timer
    globalTime()
    Q1()
})









// Question timer and a global timer 
var totalTime = questions.length * 15
console.log( totalTime)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var score = 0
var questionTime = 15;
var scoredisplay = $('.score')

scoredisplay.append(score)

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







// generate question  generate 4 buttons 

var answers = document.getElementById('answers')
var questionDisplay = document.getElementById('question')
function Q1(){
    
    $('#answers').empty()
    $('#question').empty()

      // displays the text in the title: of index 0
    questionDisplay.textContent = questions[0].title
    questionTime = 15
    // generating and filling the buttons
    var a1 = document.createElement('button')
    var a2 = document.createElement('button')
    var a3 = document.createElement('button')
    var a4 = document.createElement('button')

     
    
    $(a1).addClass('button')
    $(a2).addClass('button')
    $(a3).addClass('button')
    $(a4).addClass('button')
    a1.addEventListener('click', function(){ incorrect1()})
    a2.addEventListener('click', function(){ incorrect1()})
    a3.addEventListener('click', function(){ correct1()})
    a4.addEventListener('click', function(){ incorrect1()})
    
    a1.textContent = questions[0].choices[0]
    a2.textContent = questions[0].choices[1]
    a3.textContent = questions[0].choices[2]
    a4.textContent = questions[0].choices[3]

    answers.append(a1)
    answers.append(a2)
    answers.append(a3)
    answers.append(a4)



    scoredisplay.text(score)
    
  
    
    
    var currentScore = 
    setInterval(function(){
        questionTime--;
        
                
        
    }, 1000
    )

// $('#answers').empty()

    
    
        
}
function Q2(){
    $('#answers').empty()
      // displays the text in the title: of index 0
    questionDisplay.textContent = questions[1].title
    questionTime = 15
    // generating and filling the buttons
    var a1 = document.createElement('button')
    var a2 = document.createElement('button')
    var a3 = document.createElement('button')
    var a4 = document.createElement('button')

     
    
    $(a1).addClass('button')
    $(a2).addClass('button')
    $(a3).addClass('button')
    $(a4).addClass('button')
    a1.addEventListener('click', function(){correct2() })
    a2.addEventListener('click', function(){ incorrect2()})
    a3.addEventListener('click', function(){incorrect2() })
    a4.addEventListener('click', function(){ incorrect2()})
    
    a1.textContent = questions[1].choices[0]
    a2.textContent = questions[1].choices[1]
    a3.textContent = questions[1].choices[2]
    a4.textContent = questions[1].choices[3]

    answers.append(a1)
    answers.append(a2)
    answers.append(a3)
    answers.append(a4)




    
    scoredisplay.text(score)
    
    
    var currentScore = 
    setInterval(function(){
        questionTime--;
        
        if(questionTime === 0 ){
            Q3()
        }
        
        
    }, 1000
    )

// $('#answers').empty()

    
    
        
}
function Q3(){
    $('#answers').empty()
      // displays the text in the title: of index 0
    questionDisplay.textContent = questions[2].title
    questionTime = 15
    // generating and filling the buttons
    var a1 = document.createElement('button')
    var a2 = document.createElement('button')
    var a3 = document.createElement('button')
    var a4 = document.createElement('button')

     
    
    $(a1).addClass('button')
    $(a2).addClass('button')
    $(a3).addClass('button')
    $(a4).addClass('button')
    a1.addEventListener('click', function(){ incorrect3()})
    a2.addEventListener('click', function(){ incorrect3()})
    a3.addEventListener('click', function(){incorrect3() })
    a4.addEventListener('click', function(){ correct3()})
    
    a1.textContent = questions[2].choices[0]
    a2.textContent = questions[2].choices[1]
    a3.textContent = questions[2].choices[2]
    a4.textContent = questions[2].choices[3]

    answers.append(a1)
    answers.append(a2)
    answers.append(a3)
    answers.append(a4)




    
    scoredisplay.text(score)
    
    
    var currentScore = 
    setInterval(function(){
        questionTime--;
        
        if(questionTime === 0 ){
            Q4()
        }
        
        
    }, 1000
    )

// $('#answers').empty()

    
    
        
}
function Q4(){
    //   empties the answers Element
    $('#answers').empty()
    
    // displays the text in the title: of index 0
    questionDisplay.textContent = questions[3].title
    questionTime = 15
    // generating and filling the buttons
    var a1 = document.createElement('button')
    var a2 = document.createElement('button')
    var a3 = document.createElement('button')
    var a4 = document.createElement('button')

     
    
    $(a1).addClass('button')
    $(a2).addClass('button')
    $(a3).addClass('button')
    $(a4).addClass('button')
    a1.addEventListener('click', function(){correct4() })
    a2.addEventListener('click', function(){ incorrect4()})
    a3.addEventListener('click', function(){ incorrect4()})
    a4.addEventListener('click', function(){ incorrect4()})
    
    a1.textContent = questions[3].choices[0]
    a2.textContent = questions[3].choices[1]
    a3.textContent = questions[3].choices[2]
    a4.textContent = questions[3].choices[3]

    answers.append(a1)
    answers.append(a2)
    answers.append(a3)
    answers.append(a4)



    scoredisplay.textContent(score)
    
  
    
    
    var currentScore = 
    setInterval(function(){
        questionTime--;
        
        if(questionTime === 0 ){
            Q5()
        }
        
        
    }, 1000
    )



    
    
        
}
function Q5(){
    $('#answers').empty()
      // displays the text in the title: of index 0
    questionDisplay.textContent = questions[4].title
    questionTime = 15
    // generating and filling the buttons
    var a1 = document.createElement('button')
    var a2 = document.createElement('button')
    var a3 = document.createElement('button')
    var a4 = document.createElement('button')

     
    
    $(a1).addClass('button')
    $(a2).addClass('button')
    $(a3).addClass('button')
    $(a4).addClass('button')
    a1.addEventListener('click', function(){ incorrect5()})
    a2.addEventListener('click', function(){correct5() })
    a3.addEventListener('click', function(){incorrect5() })
    a4.addEventListener('click', function(){ incorrect5()})
    
    a1.textContent = questions[4].choices[0]
    a2.textContent = questions[4].choices[1]
    a3.textContent = questions[4].choices[2]
    a4.textContent = questions[4].choices[3]

    answers.append(a1)
    answers.append(a2)
    answers.append(a3)
    answers.append(a4)



    scoredisplay.text(score)
    
  
    
    
    var currentScore = 
    setInterval(function(){
        questionTime--;
        
        if(questionTime === 0 ){
            // log score and show score board 
                }
        
        
    }, 1000
    )

// $('#answers').empty()

    
    
        
}
// function Q1(){
//       // displays the text in the title: of index 0
//     questionDisplay.textContent = questions[0].title
//     questionTime = 15
//     // generating and filling the buttons
//     var a1 = document.createElement('button')
//     var a2 = document.createElement('button')
//     var a3 = document.createElement('button')
//     var a4 = document.createElement('button')

     
    
//     $(a1).addClass('button')
//     $(a2).addClass('button')
//     $(a3).addClass('button')
//     $(a4).addClass('button')
//     a1.addEventListener('click', function(){ incorrect1()})
//     a2.addEventListener('click', function(){ incorrect1()})
//     a3.addEventListener('click', function(){ correct1()})
//     a4.addEventListener('click', function(){ incorrect1()})
    
//     a1.textContent = questions[0].choices[0]
//     a2.textContent = questions[0].choices[1]
//     a3.textContent = questions[0].choices[2]
//     a4.textContent = questions[0].choices[3]

//     answers.append(a1)
//     answers.append(a2)
//     answers.append(a3)
//     answers.append(a4)




    
  
    
    
//     var currentScore = 
//     setInterval(function(){
//         questionTime--;
        
//         if(questionTime === 0 ){
//             Q2()
//         }
        
        
//     }, 1000
//     )

// // $('#answers').empty()

    
    
        
// }





// Weight the answers 

 





// make time left add to score if correct


function correct1(){

    score = (score+ questionTime)
    console.log(score)

    Q2()
}
function correct2(){

    score = (score+ questionTime)
    console.log(score)
    Q3()
}
function correct3(){

    score = (score+ questionTime)
    console.log(score)
    Q4()
}
function correct4(){

    score = (score+ questionTime)
    console.log(score)
    Q5()
}
function correct5(){

    score = (score+ questionTime)
    console.log(score)
    var name = prompt('Initals please')
    var nameScore = name + '-' + score
    localStorage.setItem(name,nameScore)
    
    

    Store()
    
}



// make question-time time subtract from total time



function incorrect1(){
    totalTime = (totalTime- questionTime)
    console.log('-15')
    Q2()
    
}
function incorrect2(){
    totalTime = (totalTime- questionTime)
    console.log('-15')
    Q3()
    
}
function incorrect3(){
    totalTime = (totalTime- questionTime)
    console.log('-15')
    Q4()
    
}
function incorrect4(){
    totalTime = (totalTime- questionTime)
    console.log('-15')
    Q5()
    
}
function incorrect5(){
    totalTime = (totalTime- questionTime)
    console.log('-15');
    var name = prompt('Initals please')
    var nameScore = name + '-' + score
    localStorage.setItem(name,nameScore)

   Store()

    

    // show scorescreen() and store it in local storage as an object 

}   

function Store (){
    $('#answers').empty()
    $('#question').empty()
    $('#question').append('HIGH SCORES!')

    for (let i = 0; i < localStorage.length; i++) {

   let key = localStorage.key(i);
   console.log(localStorage.getItem(key));
       var x =  document.createElement('li')
       

   
    $(x).append(localStorage.getItem(key))
    $('#answers').append(x)

        
}
}


console.log()
//add score to local storage 



var questions = [{
    title: "Question 1: When Walt Disney's seven dwarfs went off to work in the mines, what were they looking for?",
    choices: ["Gold", "Peals", "Diamonds", "Silver"],
    answer: "Silver"}
    ,{
    title: "Question 2: What is the most common blood type in humans?",
    choices: ["O", "AB", "A", "B"],
    answer: "O"
    },{
    title: "Question 3: Which company use the android application in their mobiles first time?",
    choices: ["Motorola", "Sony", "Apple", "HTC"],
    answer: "HTC"
    },{
    title: "Question 4: Where is the largest data center?",
    choices: ["Nevada, USA", "Langfang,China", "Illinois,USA", "Bangalore,India"],
    answer: "Nevada,USA"
    },{
    title: "Question 5: What is the combined wealth of the richest 5 people in the world?  ",
    choices: ["140.7bn", "471.8bn", "234.4bn", "803.6bn"],
    answer: "471.8bn"
    }
   
]


