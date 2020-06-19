console.log("Siema");

let button = document.querySelector(".container__buttonDarkMode");
console.log(button);

button.addEventListener("click", () => {

    button.classList.toggle("container__buttonDarkMode--lightMode");

    if (button.innerText === "Dark🌛") {
        button.innerText = "Light☀️";
        document.body.setAttribute("style", "background-color: rgb(181, 181, 181)");
    } else {
        button.innerText = "Dark🌛"
        document.body.setAttribute("style", "background-color: rgba(245, 245, 245, 0.521)");
    }
});