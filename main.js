const body = document.querySelector("body");
const btn = document.querySelector("#toggle");

btn.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
})