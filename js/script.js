"use strict"

let input = document.querySelector(".password");
let inputAfter = document.querySelector(".password::after");

let check = document.createElement("span");
let problem = document.createElement("span");
check.classList.add("material-icons", "check");
problem.classList.add("material-icons", "problem");
check.textContent = "done";
problem.textContent = "report_problem";


let errorMessage = document.createElement("div");
errorMessage.innerHTML = "Incorrect Password";
errorMessage.classList.add("errorMessage");

document.forms[0].addEventListener("submit", (event) => {
    event.preventDefault();
    removeStuff();
    
    if(input.value === "password") {
        input.classList.remove("error");
        problem.remove();
        errorMessage.remove();
        input.classList.add("success");
        input.after(check);
        window.location.href = window.location.href.replace("index", "passwords");
    }
    else {
        input.classList.remove("success");
        check.remove();
        input.classList.add("error");
        input.after(problem);
        document.querySelector(".password-container").after(errorMessage);
    }
    
});

document.querySelector(".password").addEventListener("focus", (event) => {
    if(document.querySelector("div.errorMessage") != null) {
        document.querySelector(".password").value = "";
    }
    removeStuff();  
});

function removeStuff() {
    input.classList.remove("success");
    input.classList.remove("error");
    check.remove();
    problem.remove();
    errorMessage.remove();
}