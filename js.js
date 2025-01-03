let headingOne=document.querySelector(".headingOne")
let inputOne=document.querySelector(".inputOne")
let buttonOne=document.querySelector(".buttonOne")
let error=document.querySelector(".error")

let headingTwo=document.querySelector(".headingTwo")
let inputTwo=document.querySelector(".inputTwo")
let buttonTwo=document.querySelector(".buttonTwo")
let error2=document.querySelector(".error2")
let chance=document.querySelector(".chance")

let count=5

buttonOne.addEventListener("click", function () {
    if (!inputOne.value) {
        error.innerHTML = "Please Enter a Value";
    } else if (isNaN(inputOne.value)) {
        error.innerHTML = "Please Enter a Number";
    } else if (!(inputOne.value <= 10 && inputOne.value > 0)) {
        error.innerHTML = "Please Enter a Number 1 to 10";
    } else {
        headingTwo.style.display = "block";
        inputTwo.style.display = "inline-block";
        buttonTwo.style.display = "inline-block";
        error2.style.display = "block";
        chance.innerHTML = `Chance : ${count}`;
        chance.style.display = "block"; // Ensure the chance is displayed initially

        headingOne.style.display = "none";
        inputOne.style.display = "none";
        buttonOne.style.display = "none";
        error.style.display = "none";
    }
});

buttonTwo.addEventListener("click", function () {
    if (!inputTwo.value) {
        error2.innerHTML = "Please enter Value";
    } else if (isNaN(inputTwo.value)) {
        error2.innerHTML = "Please enter Number";
    } else if (!(inputTwo.value <= 10 && inputTwo.value > 0)) {
        error2.innerHTML = "Please enter a number 1 to 10";
    } else {
        if (count > 1) {
            count--;
            chance.innerHTML = `Chance : ${count}`;
            if (inputOne.value == inputTwo.value) {
                headingTwo.innerHTML = "Player Two has been Winner";
                buttonTwo.style.display = "none";
                chance.style.display = "none"; // Hide chance when Player Two wins
            }
        } else {
            count = 0;
            chance.innerHTML = `Chance : ${count}`;
            headingTwo.innerHTML = "Player One has been Winner";
            buttonTwo.style.display = "none";
            chance.style.display = "none"; // Hide chance when Player One wins
        }
    }
});
