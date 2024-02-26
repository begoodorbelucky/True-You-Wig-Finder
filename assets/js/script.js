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
            'blonde_10inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch straight wig! For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_10inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_10inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_10inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_10inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_10inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_10inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_10inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_10inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_10inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_10inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_10inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_10inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_10inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_10inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_10inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 10inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_12inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_12inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_12inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_12inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_12inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_12inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_12inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_12inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_12inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_12inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_12inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_12inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_12inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_12inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_12inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_12inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 12inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_14inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_14inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_14inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_14inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_14inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_14inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_14inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_14inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_14inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_14inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_14inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_14inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_14inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_14inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_14inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_14inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 14inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_16inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_16inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_16inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_16inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_16inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_16inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_16inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_16inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_16inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_16inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_16inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_16inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_16inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_16inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_16inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_16inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde 16inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_long_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_long_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_long_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_long_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_long_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_long_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_long_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_long_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_long_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_long_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_long_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_long_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'blonde_long_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_long_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'blonde_long_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'blonde_long_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a blonde long wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_10inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_10inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_10inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_10inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_10inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_10inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_10inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_10inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_10inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_10inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_10inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_10inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_10inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_10inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_10inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_10inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 10inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_12inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_12inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_12inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_12inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_12inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_12inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_12inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_12inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_12inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_12inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_12inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_12inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_12inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_12inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_12inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_12inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 12inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_14inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_14inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_14inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_14inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_14inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_14inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_14inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_14inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_14inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_14inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_14inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_14inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_14inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_14inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_14inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_14inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 14inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_16inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_16inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_16inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_16inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_16inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_16inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_16inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_16inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_16inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_16inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_16inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_16inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_16inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_16inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_16inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_16inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette 16inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_long_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_long_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_long_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_long_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_long_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_long_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_long_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_long_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_long_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_long_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_long_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_long_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'brunette_long_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_long_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'brunette_long_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'brunette_long_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a brunette long wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_10inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_10inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_10inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_10inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_10inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_10inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_10inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_10inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_10inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_10inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_10inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_10inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_10inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_10inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_10inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_10inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 10inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_12inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_12inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_12inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_12inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_12inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_12inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_12inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_12inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_12inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_12inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_12inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_12inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_12inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_12inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_12inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_12inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 12inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_14inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_14inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_14inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_14inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_14inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_14inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_14inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_14inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_14inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_14inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_14inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_14inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_14inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_14inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_14inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_14inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 14inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_16inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_16inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_16inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_16inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_16inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_16inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_16inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_16inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_16inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_16inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_16inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_16inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_16inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_16inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_16inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_16inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn 16inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_long_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_long_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_long_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_long_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_long_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_long_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_long_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_long_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_long_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_long_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_long_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_long_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'auburn_long_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_long_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'auburn_long_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'auburn_long_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is an auburn long wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_10inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_10inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_10inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_10inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_10inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_10inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_10inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_10inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_10inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_10inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_10inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_10inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_10inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_10inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_10inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_10inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 10inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_12inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_12inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_12inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_12inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_12inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_12inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_12inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_12inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_12inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_12inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_12inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_12inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_12inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_12inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_12inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_12inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 12inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_14inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_14inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_14inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_14inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_14inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_14inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_14inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_14inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_14inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_14inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_14inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_14inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_14inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_14inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_14inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_14inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 14inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_16inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_16inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_16inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_16inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_16inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_16inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_16inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_16inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_16inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_16inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_16inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_16inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_16inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_16inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_16inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_16inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black 16inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_long_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_long_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_long_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_long_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_long_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_long_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_long_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_long_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_long_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_long_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_long_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_long_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'black_long_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_long_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'black_long_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'black_long_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a black long wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_10inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_10inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_10inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_10inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_10inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_10inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_10inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_10inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_10inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_10inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_10inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_10inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_10inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_10inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_10inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_10inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 10inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_12inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_12inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_12inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_12inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_12inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_12inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_12inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_12inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_12inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_12inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_12inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_12inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_12inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_12inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_12inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_12inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 12inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_14inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_14inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_14inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_14inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_14inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_14inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_14inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_14inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_14inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_14inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_14inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_14inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_14inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_14inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_14inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_14inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 14inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_16inch_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_16inch_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_16inch_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_16inch_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_16inch_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_16inch_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_16inch_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_16inch_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_16inch_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_16inch_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_16inch_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_16inch_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_16inch_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_16inch_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_16inch_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_16inch_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful 16inch wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_long_Straight_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_long_Straight_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long straight wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_long_Straight_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long straight wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_long_Straight_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long straight wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_long_Wavy_No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_long_Wavy_someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wavy wig!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_long_Wavy_moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wavy wig!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_long_Wavy_experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wavy wig!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_long_loose curls _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_long_loose curls _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wig with beautiful loose curls!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_long_loose curls _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wig with beautiful loose curls!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_long_loose curls _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wig with beautiful loose curls!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
            'colourful_long_very curly _No': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_long_very curly _someexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wig with  voluminous, very curly hair!For beginners, a synthetic lace front wig is an excellent choice. The lace front creates a natural-looking hairline, and synthetic fibers make them affordable and low-maintenance, providing a stylish and hassle-free introduction to wigs.'
            },
            'colourful_long_very curly _moreexperience': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wig with  voluminous, very curly hair!For those with some experience, human hair lace front wigs offer more versatility in styling and a more natual appearance. These wigs provide a realistic look and feel, allowing for various styling options, like colouring and heat styling.'
            },
            'colourful_long_very curly _experienced': {
                image: 'blonde.webp',
                text: 'Your perfect wig is a colourful long wig with  voluminous, very curly hair!We recommend full lace wigs for individuals experienced in wearing wigs, as they offer unparalleled versatility and natural appearance. With customizable features and high-quality construction, they provide both comfort and style for seasoned wig wearers.'
            },
        };

    const combinationKey = `${selectedColour.value}_${selectedLength.value}_${selectedTexture.value}_${selectedExperience.value}`;

    // Check if the combination exists in the combinations object
    if (combinationKey in combinations) {
        imageUrl = 'images/' + combinations[combinationKey].image;
        resultText = combinations[combinationKey].text;
      } else {
        // Default image and text if combination not found
        imageUrl = 'images/default.jpg';
        resultText = 'Sorry, no match found.';
      }