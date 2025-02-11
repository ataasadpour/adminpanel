// theme

document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('theme-but');
    const themeButtonLight = document.getElementById('them-but-light');
    const body = document.getElementById('body');


    if (localStorage.getItem('theme')) {
        body.className = localStorage.getItem('theme');
    }

    themeButton.addEventListener('click', function () {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        updateIcons();
        saveTheme();
    });

    themeButtonLight.addEventListener('click', function () {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        updateIcons();
        saveTheme();
    });

    function updateIcons() {
        if (body.classList.contains('dark')) {
            themeButton.style.display = 'block';
            themeButtonLight.style.display = 'none';
        } else {
            themeButton.style.display = 'none';
            themeButtonLight.style.display = 'block';
        }
    }

    function saveTheme() {
        localStorage.setItem('theme', body.className);
    }

    // Initialize icons on page load
    updateIcons();
});

// Load
window.addEventListener('load', function () {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.main-all').style.display = 'block';
});