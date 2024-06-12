const singupContent = document.querySelectorAll(".singup")[0];
const loginContent = document.querySelectorAll(".Login")[0];

const buttons = document.querySelectorAll('button[type="reset"]');
const checkIcon = document.querySelector("i.fa-solid.fa-circle-check.checked");

const form = document.getElementById("form");

const singBtn = document.getElementById("singup-btn");
const loginBtn = document.getElementById("login-btn");

const showSingUp = () => {
    form.classList.toggle("rotate-sign");
    form.classList.remove("rotate-login");
    singupContent.style.display = "block";
    loginContent.style.display = "none";
    singBtn.classList.add("active");
    loginBtn.classList.remove("active");
}
const showLogin = () => {
    form.classList.toggle('rotate-login');
    form.classList.remove("rotate-sign");
    loginContent.style.display = "block";
    singupContent.style.display = "none";
    loginBtn.classList.add("active");
    singBtn.classList.remove("active");
}
const checked = () => {
    checkIcon.style.display = "inline-block";
    setTimeout(() => {
        checkIcon.style.display = "none"
    }, 1000);
}
