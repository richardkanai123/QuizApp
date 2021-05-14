const startBtn = document.querySelector('#start');
const nextBtn = document.querySelector('#next');
const Choices = document.querySelector('#Choices');
const Quiz = document.querySelector("#Quiz");
const body = document.querySelector('body');

window.onload = () =>{
    alert('Hello! Click Start When Ready!')
    alert('Note::: Green=correct & Red=wrong')
}

let shuffle, CurrentQuizIndex;

// events
startBtn.addEventListener('click', kickoff);
nextBtn.addEventListener('click', ()=> {
    CurrentQuizIndex++;
    nextQuiz();
})


function kickoff(){
    Choices.style.display = "grid";
    Quiz.classList.remove('hide');
    nextBtn.classList.remove('hide');
    startBtn.classList.add("hide");
    shuffle = questions.sort(()=> Math.random() - 0.5 );
    CurrentQuizIndex = 0;
    nextQuiz()
}

function nextQuiz(){
    resetContent();
    showQuiz(shuffle[CurrentQuizIndex])

}

function showQuiz(question){
    Quiz.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        Choices.appendChild(button);

    })

}


function resetContent(){
    nextBtn.classList.add('hide');
    while(Choices.firstChild){
        Choices.removeChild(Choices.firstChild);
    }
}

function selectAnswer(e){
    let SelectedBtn = e.target;
    let correct = SelectedBtn.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(Choices.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if(shuffle.length > CurrentQuizIndex + 1 ){
        nextBtn.classList.remove('hide');
    }else{
    startBtn.textContent = "Restart";
    startBtn.classList.remove('hide');
    alert('End of Quiz!!! Restart')
    }

}


function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong');
}

const questions = [
    {
        question : "What is the capital of Kenya?",
        answers : [
            { text: 'Nairobi', correct:true},
            { text: 'Kampala', correct:false},
            { text: 'Nakuru', correct:false},
            { text: 'Mombasa', correct:false}
        ]
    },

    {
        question : "what is the capital of Rwanda?",
        answers : [
            { text: 'Nairobi', correct:false},
            { text: 'Kampala', correct:false},
            { text: 'Kigali', correct:true},
            { text: 'Bujumbura', correct:false}
        ]
    },

    {
        question : "what is the capital of Tanzania?",
        answers : [
            { text: 'Dodoma', correct:true},
            { text: 'Kampala', correct:false},
            { text: 'Dar', correct:false},
            { text: 'Morogoro', correct:false}
        ]
    },
    {
        question : "what is the capital of South Sudan?",
        answers : [
            { text: 'Bor', correct:false},
            { text: 'Juba', correct:true},
            { text: 'Kampala', correct:false},
            { text: 'Khartoum', correct:false}
        ]
    },
    {
        question : "what is the capital of Sudan?",
        answers : [
            { text: 'Kampala', correct:false},
            { text: 'Dar', correct:false},
            { text: 'Morogoro', correct:false},
            { text: 'Khartoum', correct:true}
        ]
    },
]