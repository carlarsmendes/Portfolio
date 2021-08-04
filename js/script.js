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


function showWorkExperience(dateStart, dateEnd) {

    let currentDate = dateStart.getTime();
    let targetDate = dateEnd.getTime(); // set the countdown date
    let years, months, days, hours, minutes, seconds; // variables for time units
    let countdown = document.getElementById("workExpTimer"); // get tag element

    function getCountdown() {
        // find the amount of "seconds" between now and target
        let secondsLeft = (targetDate - currentDate) / 1000;
        days = parseFloat(secondsLeft / 86400);
        
        years = (((days / 365) * 10) / 10).toFixed(1);
        months = (((days / 30) * 10) / 10).toFixed(0);
       
        
        // format countdown string + set tag value
        function sinPlural () {if (years === 0) { return ""; } else if (years === 1) { return " year"; } else { return " years";}}
        countdown.innerHTML = years + sinPlural() ;
        
    }    
    getCountdown();
    
}

let entryDateWaeg = new Date("01/01/2020");
let today = new Date();

showWorkExperience(entryDateWaeg, today);