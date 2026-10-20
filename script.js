const questions= [
    {
        category: "JavaScript Fundamentals",
        question:"which Keyword declares a block-scoped variable that can not be reassigned?",
        answers:[
            {text: "var", correct:false},
            {text: "const", correct:true},
            {text: "function", correct:false},
            {text: "let", correct:false}
        ]
    },
    {  
        category: "JavaScript Fundamentals",
         question:'What is the output of console.log(typeof "Hello")?',
        answers:[
            {text: "number", correct:false},
            {text: "string", correct:true},
            {text: "boolean", correct:false},
            {text: "undefined", correct:false}
        ]
    },
    {
        category: "JavaScript Fundamentals",
         question:"Which JavaScript method adds a new element to the end of an arry?",
        answers:[
            {text: "pop()", correct:false},
            {text: "shift()", correct:false},
            {text: "Slice()", correct:false},
            {text: "push()", correct:true}
        ]  
    },
    {
        category: "HTML and CSS",
        question:"what is the main purpose of HTML?",
        answers:[
            {text: "To store data in database", correct:false},
            {text: "To structure the webpage content", correct:true},
            {text: "To manage server hardware", correct:false},
            {text: "To execute SQL queries", correct:false}
        ]    
    },
    {
        category: "HTML and CSS",
        question:"Which CSS property changes the text color?",
        answers:[
            {text:"background-color",correct:false},
            {text:"font-size",correct:false},
            {text:"color",correct:true},
            {text:"text-style",correct:false}
        ]
        
    },
    {
        category: "Object-Oriented Programming",
        question:"what is inheritance in OOP?",
        answers:[
            {text:"Creating acopy of a database",correct:false},
            {text:"Removing a method a class",correct:false},
            {text:"Converting code into machine language",correct:false},
            {text:"A class acquiring properites and method from another class",correct:true},
        ]
    },
        {
            category: "Object-Oriented Programming",
        question:"Which OOP concept combines data and methods within a class while conrolling access to the data?",
        answers:[
            {text:"Inheritance",correct:false},
            {text:"Encapsulation",correct:true},
            {text:"Compilation",correct:false},
            {text:"recursion",correct:false},
        ]
    }
    ,
        {
            category: "Object-Oriented Programming",
        question:"Which java keyword is used to create an object?",
        answers:[
            {text:"class",correct:false},
            {text:"static",correct:false},
            {text:"new",correct:true},
            {text:"this",correct:false},
        ]
    }
        ,
        {
            category: "Data Structures and Algorithms",
        question:"Which data structure  follows the Last In, First Out(LIFO) princlpe?",
        answers:[
            {text:"Linked list",correct:false},
            {text:"Queue",correct:false},
            {text:"Stack",correct:true},
            {text:"Array",correct:false},
        ]
    }
     ,
        {
            category: "Data Structures and Algorithms",
        question:"Which searching algorithm requirs sorted data to work as intended",
        answers:[
            {text:"Binary search",correct:true},
            {text:"linear search",correct:false},
            {text:"Random search",correct:false},
            {text:"Sequential search",correct:false},
        ]
    }
     ,
        {
            category: "Data Structures and Algorithms",
        question:"What is time complexity of accessing an element by index in a typical array?",
        answers:[
            {text:"O(1)",correct:true},
            {text:"O(n)",correct:false},
            {text:"O(n^2)",correct:false},
            {text:"O(log n)",correct:false},
        ]
    }
];


const questionElement= document.getElementById("question");

const answerButton= document.getElementById("answer-buttons");

const nextButton= document.getElementById("next-btn");

const  catagoryElement= document.querySelector(".category");

//const quiz = document.getElementsByClassName(".category");

let currentQuestionIndex =  0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
     resetState();
     
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

   catagoryElement.innerHTML = currentQuestion.category;
   

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    
        if(answer.correct){
            button.dataset.correct= answer.correct;
           //<button data-correct="true"></button>
        }
        button.addEventListener("click",selectAnswer);

    });
}

function resetState(){
 nextButton.style.display="none";
 while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
 }
}

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
 }


  
 function showScore(){
    resetState();
     catagoryElement.innerHTML = null;
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Start Again";
    nextButton.style.display="block"
 }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
  }

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz(); 