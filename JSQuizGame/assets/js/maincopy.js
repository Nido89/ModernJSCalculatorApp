let questions;
let questionsCount;
let currentQuestion;

//this will get the question by its htmls title
let question_title_elem = document.getElementById("title");

//Get the answer by its htmls element title
let answers_elem = document.getElementById("answers");
//Get the action button
let action_btn = document.getElementById("action_btn");
// a function to feth the questions
function getQuestions(){
    let request= new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState ==4 && this.status == 200){
            questions = JSON.parse(this.responseText).questions;
            questionsCount= questions.length;
            currentQuestion=0;
        }
    }
    request.open("GET", "./questions.json", true);
    request.send();
}
//Show the question on screen method
function displayQuestion(question){
    answers_elem.innerHTML = "";

    question.answers.array.forEach(answer => {
       let label = document.createElement("label");

       let answer_input = document.createElement("input");
       answer_input.setAttribute("type","radio");
       answer_input.setAttribute("name","answer");
       answer_input.setAttribute("value","answer.id");
       answer_input.classList.add("answer");

       let answer_title = document.createTextNode(answer.answer);
       label.appendChild(answer_input);
       label.appendChild(answer_title);

       answers_elem.appendChild(label);

    });

}


//initilaization
getQuestions();
//in the questions array find[index of current question]
//displayQuestion(questions[currentQuestion]);