const signInInput = document.getElementById("sign-in-email");
const signUpInput = document.getElementById("sign-up-email");
const passwordSignInInput = document.getElementById("sign-in-password");
const passwordSignUpInput = document.getElementById("sign-up-password");
const passwordRepeatInput = document.getElementById("repeat-password");
const userInput = document.getElementById("user-name");
const animalInput = document.getElementById("animal-name");
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const namePatter = /^[a-zA-Z0-9_-]{3,16}$/;
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const showPasswordBtn = document.getElementById("show-password-btn");
const signInBtn = document.getElementById("sign-in-btn");
// "generate-password-btn"
// generatedPassword
// use-password-btn


let emailSignInIcon = document.querySelector(".email-sign-in-icon");
let emailSignUpIcon = document.querySelector(".email-sign-up-icon");
let passwordSignInIcon = document.querySelector(".password-sign-in-icon");
let passwordSignUpIcon = document.querySelector(".password-sign-up-icon");
let passwordRepeatIcon = document.querySelector(".password-repeat-icon");
let userIcon = document.querySelector(".user-icon");
let animalIcon = document.querySelector(".animal-icon");
let passwordRules = document.getElementById(".password-checking");


let envelopeImage = "uil-envelope";
let checkImage = "uil-check";
let passwordImage = "uil-keyhole-square";
let userImage = "uil-head-side";
let animalImage = "uil-heart";


function validation(input, icon, pattern, iconImage, checkImage) {
    if (input.value === "") {
        icon.classList.replace(checkImage, iconImage);
        return icon.style.color = "#b4b4b4";
    }
    if (input.value.match(pattern)) {
        icon.classList.replace(iconImage, checkImage);
        return icon.style.color = "#4bb543";
    }
    icon.classList.replace(checkImage, iconImage);
    return icon.style.color = "red";
}

signInInput.addEventListener("keyup", () => {
    validation(signInInput, emailSignInIcon, emailPattern, envelopeImage, checkImage)
})

signUpInput.addEventListener("keyup", () => {
    validation(signUpInput, emailSignUpIcon, emailPattern, envelopeImage, checkImage)
})

passwordSignInInput.addEventListener("keyup", () => {
    validation(passwordSignInInput, passwordSignInIcon, passwordPattern, passwordImage, checkImage)
})

passwordSignUpInput.addEventListener("keyup", () => {
    validation(passwordSignUpInput, passwordSignUpIcon, passwordPattern, passwordImage, checkImage)
})

passwordRepeatInput.addEventListener("keyup", () => {
    if (passwordSignUpInput.value === passwordRepeatInput.value) {
        passwordRepeatIcon.classList.replace(passwordImage, checkImage);
        return passwordRepeatIcon.style.color = "#4bb543";
    } else if (passwordSignUpInput.value < 8){
        passwordRepeatIcon.classList.replace(checkImage, passwordImage);
        return passwordRepeatIcon.style.color = "red";
    } else {
        passwordRepeatIcon.classList.replace(checkImage, passwordImage);
        return passwordRepeatIcon.style.color = "red";
    }
})

userInput.addEventListener("keyup", () => {
    validation(userInput, userIcon, namePatter, userImage, checkImage)
})

animalInput.addEventListener("keyup", () => {
    validation(animalInput, animalIcon, namePatter, animalImage, checkImage)
})

fetch('/breeds')
.then(response = response.json())
.then(data => {
const chosenAnimal = document.getElementById("chosenAnimal");

data.forEach(item => {
    const option = document.createElement('option')
    option.text = item.name;
    select.add(option)
})
})
.catch(error =>
    console.log(error)
)