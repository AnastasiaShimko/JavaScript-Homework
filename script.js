var defaultColor = 'white';

$("#1").hover(function () { changeColor('yellow'); }, function () { changeColor(defaultColor); });
$("#2").hover(function () { changeColor('blue'); }, function () { changeColor(defaultColor); });
$("#3").hover(function () { changeColor('green'); }, function () { changeColor(defaultColor); });

function changeColor(color) {
    $('body').css('background', color);
    document.body.style.background = color;
}

function changeDefaultColor(color) {
    $('body').css('background', color);
    defaultColor = color;
}