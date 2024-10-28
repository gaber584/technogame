const questions = [
    { question: "Which shape has three sides?", answer: "Triangle", description: "A triangle has three sides." },
    { question: "Which shape has four equal sides and right angles?", answer: "Square", description: "A square has four equal sides and right angles." },
    { question: "Which shape has four sides but unequal lengths?", answer: "Rectangle", description: "A rectangle has two pairs of equal sides." },
    { question: "Which shape has five points and looks like a star?", answer: "Star", description: "A star has five points." },
    { question: "Which shape is commonly used as a symbol of stability?", answer: "Square", description: "A square represents stability." },
    { question: "Which shape is used in warning signs?", answer: "Triangle", description: "Triangles are often used for warning signs." },
    { question: "Which shape has two longer sides and two shorter sides?", answer: "Rectangle", description: "A rectangle has opposite sides equal in length." }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    const resultElement = document.getElementById("result");

    resultElement.textContent = "";
    resultElement.classList.remove("correct", "incorrect");
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedShape) {
    const resultElement = document.getElementById("result");

    if (selectedShape === questions[currentQuestion].answer) {
        resultElement.textContent = `Correct Answer! ${questions[currentQuestion].description}`;
        resultElement.classList.add("correct");
        score++;
        document.getElementById("next-button").style.display = "block";
        showStars(); // Display golden stars for correct answer
    } else {
        resultElement.textContent = "Wrong Answer! Try Again.";
        resultElement.classList.add("incorrect");
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("question").textContent = `Quiz Over! Your score: ${score} out of ${questions.length}`;
        document.querySelector(".options").style.display = "none";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("restart-button").style.display = "block";
    }
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    document.querySelector(".options").style.display = "flex";
    document.getElementById("restart-button").style.display = "none";
    loadQuestion();
}

function showStars() {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars-animation");
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        starsContainer.appendChild(star);
    }
    document.body.appendChild(starsContainer);

    setTimeout(() => {
        starsContainer.remove();
    }, 1000);
}

// Load the first question when the page loads
loadQuestion();