// theme

var themebut = document.getElementById("theme-but");
var thembody = document.getElementById("body");

if (localStorage.getItem("theme")) {
    thembody.className = localStorage.getItem("theme");
}

themebut.addEventListener("click", () => {
    if (thembody.className === "dark") {
        thembody.className = "light";
    } else {
        thembody.className = "dark";
    }
    
    localStorage.setItem("theme", thembody.className);
});

// load

window.addEventListener('load', function () {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.main-all').style.display = 'block';
});

