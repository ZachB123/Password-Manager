"use strict"

document.querySelector(".add").addEventListener("click", () => {
    document.querySelector(".add-password-menu").style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".add-password-menu").style.display = "none";
});

document.querySelector(".visibility").addEventListener("click", () => {
    let password = document.querySelector("#password");
    let eye = document.querySelector(".visibility");
    if(eye.innerHTML === "visibility") {
        eye.innerHTML = "visibility_off";
        password.setAttribute("type", "text");
    }
    else {
        eye.innerHTML = "visibility";
        password.setAttribute("type", "password");
    }
});

function removeError() {
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    if(username.classList.contains("error")) {
        username.classList.remove("error");
    }
    if(password.classList.contains("error")) {
        password.classList.remove("error");
    }
}

document.querySelector("#username").addEventListener("click", () => {
    removeError();
});

document.querySelector("#password").addEventListener("click", () => {
   removeError();
});


document.querySelector(".submit-container button").addEventListener("click", (event) => {
    event.preventDefault();
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let passwordMenu = document.querySelector(".add-password-menu");
    if(username.value == "" || password.value == "") {
        (username.value == "") ? username.classList.add("error") : 0;
        (password.value == "") ? password.classList.add("error") : 0;
        return false;
    }
    else {
        createPassword({
            username: username.value,
            password: password.value,
        });
        username.value = "";
        password.value = "";
        passwordMenu.style.display = "none";
    }
    return false;
});

function createPassword(passwordObject) {
    let elem = document.createElement("div");
    elem.classList.add("password-item");
    elem.innerHTML = `  <div class='password-item-content-wrapper ${(passwordObject.username.length >= 12 || passwordObject.password.length >= 12) ? 'smaller-font' : ''}'>
                            <div class='content-wrapper username'>
                                <h4>Username: </h4>
                                <p>${passwordObject.username}</p>
                            </div>
                            <div class='content-wrapper password'>
                                <h4>Password: </h4>
                                <p>${passwordObject.password}</p>
                            </div>
                        </div>
                        <div class='button-wrapper'>
                            <button class='remove-password'>
                                <i class='material-icons removePasswordIcon'>delete_forever</i>
                            </button>
                        </div>`;
    elem.children[1].children[0].addEventListener("click", (event) => {
        event.target.closest(".password-item").remove();
    });
    document.querySelector(".password-container").append(elem);
}
