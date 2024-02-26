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

const metabolicPower = 0.75;
const energy = 70;
const fewCalories = 15;

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

resultBtn.addEventListener("click", () => {

    fifthQuestion.classList.remove('hidden');
    if (fifthQuestion) {
        fourthQuestion.classList.add('hidden')
    }

    let yearAge = parseInt(animalYearInput.value);
    let monthAge = parseInt(animalMonthInput.value);
    let animalWeightResult = parseFloat(animalWeightInput.value);
    let animalActivity = parseInt(animalActivityInput.value);
    let metabolicWeight = animalWeightResult ** metabolicPower;
    let restingEnergyRequirement = metabolicWeight * energy

    getCaloricDemand(yearAge, monthAge, isNeutered, isFat, restingEnergyRequirement, animalActivity)

})

function getCaloricDemand(year, month, castration, obesity, energyDemand, activity) {
    let result;

    if (!year) {
        year = 0;
    }

    if (month < 7 && year < 1) {
        result = energyDemand * 2
        console.log('mniej niz 7 mies')

    } else if (month > 7 && year < 1) {
        result = energyDemand * 3
        console.log('wievej niz 7 mies')

    } else if (year >= 1 && obesity) {
        result = energyDemand * 1.4
        console.log('grubasek')

    } else if (year >= 1 && activity > 3) {

        if (activity === 4) {
            result = energyDemand * 3
            console.log('aktywny')
        } else if (activity === 5) {
            result = energyDemand * 4
            console.log(' bardzo aktywny')
        } else {
            result = energyDemand * 5
            console.log('tubro aktywny ')
        }

    } else if (year >= 1 && !castration) {
        result = energyDemand * 1.8
        console.log('niekasrt')

    } else if (year >= 1 && castration) {
        result = energyDemand * 1.6
        console.log('kastr')
    } else {
        result = energyDemand * 1.5
        console.log('wyszlo else')
    }


    function numberRange() {
        let finalNumber = Math.floor(result)

        let lowerLimit = finalNumber - fewCalories;
        let highestLimig = finalNumber + fewCalories;

        console.log(lowerLimit, highestLimig)

        let finalResult = document.createElement('div')
        finalResult.classList.add('final-result')
        finalResult.textContent = `${lowerLimit} - ${highestLimig}`;
        showResult.appendChild(finalResult)
    }

    numberRange()

    // dodac testy

};

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

