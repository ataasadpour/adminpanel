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

    updateIcons();
});

// Load
window.addEventListener('load', function () {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.main-all').style.display = 'block';
});


// chart-1

var chart1 = document.getElementById('chart1').getContext('2d');
    var myChart = new Chart(chart1, {
        type: 'line',
        data: {
            labels: ['بازدید','فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر' ,'آبان','آذر','دی','بهمن' , 'اسفند'],
            datasets: [{
                label: 'بازدیدها ماه',
                data: [null,65, 59, 80, 81, 56, 55, 40 , 50,10,25,32 , 15],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });