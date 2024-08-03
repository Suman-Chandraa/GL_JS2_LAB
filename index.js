// Questions and answers data
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: ["<script href='script.js'>", "<script name='script.js'>", "<script src='script.js'>", "<script file='script.js'>"],
        answer: "<script src='script.js'>"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "IBM"],
        answer: "Netscape"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update the question text
    document.getElementById('question').textContent = question.question;
    
    // Update the button texts
    question.options.forEach((option, index) => {
        document.getElementById(`btn${index}`).textContent = option;
    });
    
    // Update the progress
    document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function handleAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const chosenAnswer = document.getElementById(`btn${selectedOption}`).textContent;
    
    if (chosenAnswer === correctAnswer) {
        score++;
    }
    
    // Move to the next question or finish the quiz
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    // Clear the quiz content
    document.getElementById('quiz').innerHTML = `
        <h1>Quiz Completed!</h1>
        <p id="score">Your score is ${score} out of ${questions.length}</p>
        <p>Your percentage: ${((score / questions.length) * 100).toFixed(2)}%</p>
    `;
}

// Set up event listeners for buttons
document.getElementById('btn0').addEventListener('click', () => handleAnswer(0));
document.getElementById('btn1').addEventListener('click', () => handleAnswer(1));
document.getElementById('btn2').addEventListener('click', () => handleAnswer(2));
document.getElementById('btn3').addEventListener('click', () => handleAnswer(3));

// Show the first question when the page loads
showQuestion();
