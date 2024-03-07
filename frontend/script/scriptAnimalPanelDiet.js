const calculatorBtn = document.getElementById("calculator-btn");
const closeCalculatorBtn = document.getElementById("close-calculator-btn");
const calculatorPopup = document.querySelector(".calculator-popup");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const backQuestionBtn = document.querySelector(".back-question-btn");
const firstQuestion = document.querySelector(".first-question");
const secondQuestion = document.querySelector(".second-question");
const thirdQuestion = document.querySelector(".third-question");
const fourthQuestion = document.querySelector(".fourth-question");
const fifthQuestion = document.querySelector(".fifth-question");
const animalWeightInput = document.getElementById("animal-weight-input");
const animalYearInput = document.getElementById("animal-year-input");
const animalMonthInput = document.getElementById("animal-month-input");
const neuteredBtn = document.getElementById("neutered-btn");
const unneuteredBtn = document.getElementById("unneutered-btn");
const animalActivityInput = document.getElementById("animal-activity-input");
const fat = document.getElementById("is-fat-btn");
const notFat = document.getElementById("not-fat-btn");
const resultBtn = document.getElementById('result-btn');
const showResult = document.getElementById('result-here')

import {getCaloricDemand, DogCharacteristics} from "./caloriesCalculator.js";

let isNeutered;
let isFat;

calculatorBtn.addEventListener("click", () => {
    calculatorPopup.classList.add('open');
});

closeCalculatorBtn.addEventListener("click", () => {
    calculatorPopup.classList.remove("open");
    console.log('tutaj')
});

neuteredBtn.addEventListener("click", function () {
    isNeutered = true;

    fourthQuestion.classList.remove('hidden');
    resultBtn.classList.remove('hidden')
    if (fourthQuestion) {
        thirdQuestion.classList.add('hidden')
    }
});

unneuteredBtn.addEventListener("click", function () {
    isNeutered = false;

    fourthQuestion.classList.remove('hidden');
    resultBtn.classList.remove('hidden')
    if (fourthQuestion) {
        thirdQuestion.classList.add('hidden')
    }
});

fat.addEventListener('click', () => {
    isFat = true;

    thirdQuestion.classList.remove('hidden');
    if (thirdQuestion) {
        secondQuestion.classList.add('hidden')
    }
});

notFat.addEventListener('click', () => {
    isFat = false;

    thirdQuestion.classList.remove('hidden');
    if (thirdQuestion) {
        secondQuestion.classList.add('hidden')
    }
});

nextQuestionBtn.addEventListener('click', nextPage);
backQuestionBtn.addEventListener('click', backPage);

resultBtn.addEventListener("click", () => {

    fifthQuestion.classList.remove('hidden');
    if (fifthQuestion) {
        fourthQuestion.classList.add('hidden')
    }

    let yearAge = parseInt(animalYearInput.value) || 0;
    let monthAge = parseInt(animalMonthInput.value);
    let animalWeightResult = parseFloat(animalWeightInput.value);
    let animalActivity = parseInt(animalActivityInput.value);

    let dog = new DogCharacteristics(yearAge, monthAge, isFat, animalWeightResult, animalActivity, isNeutered);
    let caloricDemand = getCaloricDemand(dog);

    let finalResult = document.createElement('div')
    finalResult.classList.add('final-result')
    finalResult.textContent = `${caloricDemand.lowerLimit} - ${caloricDemand.higherLimit}`;
    showResult.appendChild(finalResult)
})

function backPage() {
    if (secondQuestion && !secondQuestion.classList.contains('hidden')) {
        firstQuestion.classList.remove('hidden');
        if (firstQuestion) {
            secondQuestion.classList.add('hidden');
        }
    }
    else if (thirdQuestion && !thirdQuestion.classList.contains('hidden')) {
        secondQuestion.classList.remove('hidden');
        if (secondQuestion) {
            thirdQuestion.classList.add('hidden')
        }
    }
    else if (fourthQuestion && !fourthQuestion.classList.contains('hidden')) {
        thirdQuestion.classList.remove('hidden');
        if (thirdQuestion) {
            resultBtn.classList.add('hidden')
            fourthQuestion.classList.add('hidden')
        };
    }
};

function nextPage() {
    if (firstQuestion && !firstQuestion.classList.contains('hidden')) {
        secondQuestion.classList.remove('hidden');
        if (secondQuestion) {
            firstQuestion.classList.add('hidden');
        }
    } else if (secondQuestion && !secondQuestion.classList.contains('hidden')) {
        thirdQuestion.classList.remove('hidden');
        if (thirdQuestion) {
            secondQuestion.classList.add('hidden')
        }
    } else if (thirdQuestion && !thirdQuestion.classList.contains('hidden')) {
        fourthQuestion.classList.remove('hidden');
        resultBtn.classList.remove('hidden')
        if (fourthQuestion) {
            thirdQuestion.classList.add('hidden')
        }
    }
};
