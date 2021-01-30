var defaultColor = 'white';

document.getElementById("1").onmouseover = function() { changeColor('yellow'); }
document.getElementById("2").onmouseover = function() { changeColor('blue'); }
document.getElementById("3").onmouseover = function() { changeColor('green'); }

document.getElementById("1").onmouseleave = function() { changeColor(defaultColor); }
document.getElementById("2").onmouseleave = function() { changeColor(defaultColor); }
document.getElementById("3").onmouseleave = function() { changeColor(defaultColor); }

function changeColor(color) {
    document.body.style.background = color;
}

function onRectangleClick(color) {
    document.body.style.background = color;
    defaultColor = color;
}