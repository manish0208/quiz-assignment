var questionBank = [
    {
        question: "what is the National sport of India",
        answer: "Hockey",
        option: [
            "Foot-ball",
            "Basket-ball",
            "Hockey",
            "Cricket"
        ]

    },
    {
       
        question: "In which year did the India Women’s National Hockey Team made its breakthrough performance",
        answer: "1974",
        option: [
            "1974",
            "1985",
            "1996",
            "1978"
        ]

    },
    {
        
        question: "How many teams in all have qualified for the Hockey World Cup",
        answer: "24",
        option: [
            "11",
            "32",
            "24",
            "18"
        ]

    },
    {
      
        question: "Which is the governing body of gymnastics in India",
        answer: "Gymnastics Federation of India",
        option: [
            "Gymnastics Federation of India",
            " Association of Gymnastics in India",
            "Gymnastics Organisation of India",
            "Gymnastics India"
        ]

    },
    {
       
        question: "Who is the President of UCI",
        answer: "David Lappartient",
        option: [
            "Brian Cookson",
            "Luis Puig",
            "David Lappartient",
            "Achille Joinard"
        ]

    },
    {
        
        question: "Who is the captain of Indian Men’s Cricket team",
        answer: "Virat Kohli",
        option: [
            "MS Dhoni",
            "Shikhar Dhawan",
            " Rohit Sharma",
            "Virat Kohli"
        ]

    },
    {
        
        question: "Which country had won the 2018 UCI America Tour circuit",
        answer: "Colombia",
        option: [
            "USA",
            "Canada",
            "Mexico",
            "Colombia"
        ]

    },
    {
       
        question: "Till 2010, who was the only Indian athlete to win an individual Gold Medal at Commonwealth Games",
        answer: "Milkha Singh",
        option: [
            "Krishna Punia",
            "PT Usha",
            "Milkha Singh",
            "Lavy Pinto"
        ]

    },
    {
        
        question: "When was the Olympic Motto introduced",
        answer: "1924",
        option: [
            "1920",
            "1914",
            "1924",
            "1928"
        ]

    },
    {
        
        question: "Who was the first President of IAAF",
        answer: "Sigfrid Edstrom",
        option: [
            "Adriaan Paulen",
            "Sigfrid Edstrom",
            "Primo Nebiolo",
            "Lamine Diack"
        ]

    }
];

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scoreboard = document.getElementById('scoreboard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');

var next = document.querySelector('.next');

var points = document.getElementById('score');
var span = document.querySelectorAll('span');

var i=0, score = 0;

function displayQuestion(){
    for(var a=0; a<span.length; a++){
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];

    stat.innerHTML = "Question"+' '+(i+1)+' '+"of "+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML === questionBank[i].answer && score < questionBank.length){
        score = score+1;
        document.getElementById(e.id).style.background= 'green';
    }
    else{
        document.getElementById(e.id).style.background= 'red';
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1){
        i = i+1;
        displayQuestion(); 
    }
    else{
        points.innerHTML = score+ '/'+questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block';
    }
}

next.addEventListener('click',nextQuestion);

function backToQuiz(){
    location.reload();
}

displayQuestion();