// nav menu hamburger function 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", (event) => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// start quiz function
let currentQuestionIndex = 1;

function startQuiz() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block'; // Show the quiz container
  document.getElementById('quiz-form').style.display = 'block';
  document.getElementById('question1').style.display = 'block';
}

// next question function
function nextQuestion() {
  const currentQuestion = document.getElementById(`question${currentQuestionIndex}`);
  currentQuestion.style.display = 'none';
  currentQuestionIndex++;
  const nextQuestion = document.getElementById(`question${currentQuestionIndex}`);
  if (nextQuestion) {
    nextQuestion.style.display = 'block';
  }
}

//quiz result function
function getResult() {
    const selectedColour = document.querySelector('input[name="colour"]:checked');
    const selectedLength = document.querySelector('input[name="length"]:checked');
    const selectedTexture = document.querySelector('input[name="texture"]:checked');
    const selectedExperience = document.querySelector('input[name="experience"]:checked');
    const resultContainer = document.getElementById('result');
    let imageUrl = '';
    let resultText = '';
    
    if (selectedColour && selectedLength && selectedTexture && selectedExperience) {
        const combinations = {
            'Blonde_10inch_Straight_No': {image: 'blonde.webp', text: 'You should get a short blonde wig!' },
            //to add more combainations
        };