// theme

var themebut = document.getElementById("theme-but");
var thembody = document.getElementById("body");

themebut.addEventListener("click", () => {
    if (thembody.className === "dark") {
        thembody.className = "light";
    } else {
        thembody.className = "dark";
    }
});