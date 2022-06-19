const loginForm = document.querySelector("#loginForm");
const loginDiv = document.querySelector("#loginDiv");
const loginInput = document.querySelector("#loginForm input");
const loginBtn = document.querySelector("#loginForm button");
const greeting = document.querySelector("#greeting");

const background =document.querySelector("body")
const coverBox = document.querySelector("#cover");
const clockBox = document.querySelector(".clock");
const Main = document.querySelector("#main");
const mainRight = document.querySelector("#MainRight");
const MainLeft = document.querySelector("#MainLeft");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event){
    event.preventDefault();
    setting();

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    pantingName(username);
}

function pantingName(username){
    greeting.innerHTML = username;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

function setting() {
    loginDiv.classList.add(CLASSNAME_HIDDEN);
    coverBox.classList.add(CLASSNAME_HIDDEN);
    Main.classList.remove(CLASSNAME_HIDDEN);

    background.classList.add("submitBody");
    clockBox.classList.add(CLASSNAME_HIDDEN);
}
const savedusername = localStorage.getItem(USERNAME_KEY);

if(savedusername == null){
    loginForm.addEventListener("submit", loginSubmit);
}
else {
    setting();
    pantingName(savedusername);
}
