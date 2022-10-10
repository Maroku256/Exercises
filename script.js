//slideUp и slideDown
/*
for (var i = 0; i < 5; i++){
    $("h1").slideUp(1000);
    $("h1").slideDown(1000);
}
*/


//Задание 1
/*
$("h1").slideUp(1000)
$("h1").text("Мои друзья")
$("h1").slideDown(1000);
for (var i = 0; i < 3; i++){
    var name = prompt("Введите имя вашего друга")
    $("body").append("<p>" + name + "</p>").fadeIn(1000).hide(1000)
}
$("p").append(" - лучший!")
*/

//Задание 2
/*
var time = 0;
for(var i = 0; i < 5; i++){
    time = time + 1000;
    $("h1").fadeOut(time).fadeIn(time);
    console.log(time);
}
*/

//Задание 3
//$("h1").fadeOut(300).delay(5000).fadeIn(300);


//Задание 4
//$("h1").fadeTo(2000, 0.1);

/*
var leftOffset = 0;
var moveHeading = function (){
    $("h1").offset({ left: leftOffset });

    leftOffset += 3;

    if (leftOffset > 200){
        leftOffset = 0;
    }
};

setInterval(moveHeading, 30);
*/

//Обработчик кликов
/*
var clickHandler = function(event){
    console.log("Клик! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);
*/

//Мышь?
/*
$("html").mousemove(function (event) {
    $("h1").offset({
        left: event.pageX,
        top: event.pageY
    });
    
});
*/


//Задание 1
/*
$("html").click(function (event) {
    x = event.pageX;
    y = event.pageY;
    $("h1").offset({
        left: x,
        top: y
    });
});
*/

//Задание 2
var limit = 10;
var time = 50;
var direction = 'вправо';
var offset = 0;
$("#h1").offset({ left: offset, top: offset });

var Square = function () {
    if (direction === 'вправо') {
        $("h1").offset({ left: offset });
        offset += 3;
        if (offset > 200) {
            offset = 0;
            direction = 'вниз';
        }
    } else if (direction === 'вниз') {
        $("h1").offset({ top: offset });
        offset += 3;
        if (offset > 200) {
            offset = 200;
            direction = 'влево';
        }
    } else if (direction === 'влево') {
        $("h1").offset({ left: offset });
        offset -= 3;
        if (offset < 0) {
            offset = 200;
            direction = 'вверх';
        }
    } else if (direction === 'вверх') {
        $("h1").offset({ top: offset });
        offset -= 3;
        if (offset < 0) {
            offset = 0;
            direction = 'вправо';
        }
    }
};

var interval = setInterval(Square, time);
//Задание 3
/*
$("h1").click(function (){
    clearInterval(interval);
});
*/

//Задание 4
$("h1").click(function (){
    time -= 1
    interval = setInterval(Square, time)
    limit -= 1
    $("h1").text(limit)
    if(limit <= 0){
        $("h1").text("Вы победили!"); 
    };
});





