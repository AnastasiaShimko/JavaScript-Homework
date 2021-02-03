var defaultColor = 'white';

$("#yellow").hover(function () { changeColor('yellow'); }, function () { changeColor(defaultColor); });
$("#blue").hover(function () { changeColor('blue'); }, function () { changeColor(defaultColor); });
$("#green").hover(function () { changeColor('green'); }, function () { changeColor(defaultColor); });

function changeColor(color) {
    $('body').css('background', color);
    document.body.style.background = color;
}

function changeDefaultColor(color) {
    $('body').css('background', color);
    defaultColor = color;
}