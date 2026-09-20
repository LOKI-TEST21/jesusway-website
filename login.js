const pullHandle = document.getElementById("pullHandle");
const pullChain = document.getElementById("pullChain");
const loginPage = document.getElementById("loginPage");

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");


let isDragging = false;
let startY = 0;
let lightOn = false;


/* =====================
   START PULLING CHAIN
===================== */

pullHandle.addEventListener("mousedown", function (event) {

    isDragging = true;

    startY = event.clientY;

    pullHandle.style.transition = "none";
    pullChain.style.transition = "none";

});


/* =====================
   DRAG CHAIN
===================== */

document.addEventListener("mousemove", function (event) {

    if (!isDragging) return;


    let distance = event.clientY - startY;


    /* Do not allow pulling upward */

    if (distance < 0) {
        distance = 0;
    }


    /* Maximum pull distance */

    if (distance > 150) {
        distance = 150;
    }


    /* Move handle downward */

    pullHandle.style.transform =
        `translateY(${distance}px)`;


    /* Stretch chain */

    pullChain.style.height =
        `${120 + distance}px`;


    /* Toggle light when pulled far enough */

    if (distance >= 80) {

        isDragging = false;

        toggleLight();

    }

});


/* =====================
   RELEASE CHAIN
===================== */

document.addEventListener("mouseup", function () {

    if (!isDragging) return;


    isDragging = false;

    returnChain();

});


/* =====================
   TOGGLE LIGHT
===================== */

function toggleLight() {

    if (lightOn) {

        turnOffLight();

    } else {

        turnOnLight();

    }

}


/* =====================
   TURN ON LIGHT
===================== */

function turnOnLight() {

    lightOn = true;

    loginPage.classList.add("light-on");

    returnChain();

}


/* =====================
   TURN OFF LIGHT
===================== */

function turnOffLight() {

    lightOn = false;

    loginPage.classList.remove("light-on");

    /* Optional: clear the password */

    passwordInput.value = "";

    errorMessage.textContent = "";

    returnChain();

}


/* =====================
   RETURN CHAIN
===================== */

function returnChain() {

    pullHandle.style.transition =
        "transform 0.5s ease";

    pullChain.style.transition =
        "height 0.5s ease";


    pullHandle.style.transform =
        "translateY(0)";

    pullChain.style.height =
        "120px";

}


/* =====================
   LOGIN
===================== */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const username = usernameInput.value;
    const password = passwordInput.value;


    /* LOGIN DETAILS */

    const correctUsername = "jwcc";
    const correctPassword = "12345";


    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        /* GO TO CHURCH WEBSITE */

        window.location.href = "index.html";

    } else {

        errorMessage.textContent =
            "Incorrect username or password.";

    }

});