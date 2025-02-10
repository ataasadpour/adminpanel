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

// load

window.addEventListener('load', function () {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.main-all').style.display = 'block';
});