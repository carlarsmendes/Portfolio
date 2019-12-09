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