function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

    style1.onclick = function () {swapStyleSheet("./css/default.css");};
    style2.onclick = function() {swapStyleSheet("./css/dark.css");};
}

window.onload = initate;

function showWorkExperience() {
    
    let today = new Date();
    let todayDay = String(today.getDate()).padStart(2, '0');
    var todayMonth = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let todayYear = today.getFullYear();

    //let dateStartWaeg = Apr 2020

}

function renderCountdown(dateStart, dateEnd) {

    console.log(dateStart, dateEnd);
    // Logs 
    // Sat Dec 19 2015 11:42:04 GMT-0600 (CST) 
    // Mon Jan 18 2016 11:42:04 GMT-0600 (CST)

    let currentDate = dateStart.getTime();
    let targetDate = dateEnd.getTime(); // set the countdown date
    let years, months, days, hours, minutes, seconds; // variables for time units
    let countdown = document.getElementById("workExpTimer"); // get tag element
    function getCountdown() {
        // find the amount of "seconds" between now and target
        let secondsLeft = (targetDate - currentDate) / 1000;
        days = parseFloat(secondsLeft / 86400);
        console.log("days",days);
        years = (((days / 365) * 10) / 10).toFixed(1);
        months = (((days / 30) * 10) / 10).toFixed(0);
        //months = Math.floor((pad(parseInt(secondsLeft / 86400)) / 30)-(years*365/30));
        
        // format countdown string + set tag value
        function sinPlural () {if (years === 0) { return ""; } else if (years === 1) { return " year"; } else { return " years";}}
        countdown.innerHTML = years + sinPlural() ;
        
    }

    

    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }
    getCountdown();
    setInterval(function () { getCountdown(); }, 1000);
}

let entryDateWaeg = new Date("01/01/2020");
let today = new Date();
console.log("Log here");


renderCountdown(entryDateWaeg, today);