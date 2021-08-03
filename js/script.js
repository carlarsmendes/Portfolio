function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

    style1.onclick = function () {swapStyleSheet("./css/default.css");}
    style2.onclick = function(){swapStyleSheet("./css/dark.css");}
}

window.onload = initate;

function showWorkExperience() {
    
    let today = new Date();
    let todayDay = String(today.getDate()).padStart(2, '0');
    var todayMonth = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let todayYear = today.getFullYear();

    let dateStartWaeg = Apr 2020

}

function renderCountdown(dateStart, dateEnd) {

    console.log(dateStart, dateEnd);
    // Logs 
    // Sat Dec 19 2015 11:42:04 GMT-0600 (CST) 
    // Mon Jan 18 2016 11:42:04 GMT-0600 (CST)

    let currentDate = dateStart.getTime();
    let targetDate = dateEnd.getTime(); // set the countdown date
    let days, hours, minutes, seconds; // variables for time units
    let countdown = document.getElementById("tiles"); // get tag element
    function getCountdown() {
        // find the amount of "seconds" between now and target
        let secondsLeft = (targetDate - currentDate) / 1000;
        days = pad(parseInt(secondsLeft / 86400));
        secondsLeft %= 86400;
        hours = pad(parseInt(secondsLeft / 3600));
        secondsLeft %= 3600;
        minutes = pad(parseInt(secondsLeft / 60));
        seconds = pad(parseInt(secondsLeft % 60));
        // format countdown string + set tag value
        countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
    }

    console.log("<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>");

    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }
    getCountdown();
    setInterval(function () { getCountdown(); }, 1000);
}

let entryDateWaeg = "Sat Apr 01 2020 11: 42: 04 GMT - 0600(CST)";
let today = new Date();


renderCountdown(entryDateWaeg, today);