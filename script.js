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
/*
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
*/
//Задание 3
/*
$("h1").click(function (){
    clearInterval(interval);
});
*/

//Задание 4
/*
$("h1").click(function (){
    time -= 1
    interval = setInterval(Square, time)
    limit -= 1
    $("h1").text(limit)
    if(limit <= 0){
        $("h1").text("Вы победили!"); 
    };
});
*/




/*
var Car = function(x, y){
    this.x = x;
    this.y = y;
    this.draw();//вызов draw
};

Car.prototype.draw = function(){
    var carHtml = '<img src = "/car.webp">';

    this.carElement = $(carHtml);

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
}

Car.prototype.moveRight = function(speed){
    this.x += speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveLeft = function(speed){
    this.x -= speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveUp = function(speed){
    this.y -= speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveDown = function(speed){
    this.y += speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

var tesla = new Car(10, 20);
var nissan = new Car(10, 200);

var speed;//свойство speed
//гонки)
setInterval(function(){tesla.moveRight(speed = Math.floor(Math.random() * 5))}, 30);
setInterval(function(){nissan.moveRight(speed = Math.floor(Math.random() * 5))}, 30);

*/

//Задание 1
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
ctx.strokeStyle = "Black"


var snowman = function(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x - 10, y - 3, 3, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x + 10, y - 3, 3, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y + 50, 30, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y + 120, 40, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "Orange"
    ctx.strokeStyle = "Orange"
    ctx.arc(x, y + 3, 2, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();

}
snowman(50, 50);
*/

/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

    var drawPoints = function (points) {
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }
      ctx.stroke();
    };

    var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];
    drawPoints(mysteryPoints);
*/

//Задание 3
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
    ctx.fill();
    } else {
    ctx.stroke();
    }
};

$('canvas').mousemove(function (event) {
    circle(event.offsetX, event.offsetY, 3, true);
})*/

//Задание 4
/*
var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var pickWord = function () {
      var words = [
      "программа",
      "макака",
      "прекрасный",
      "оладушек"
    ];

      return words[Math.floor(Math.random() * words.length)];
    };

    var setupAnswerArray = function (word) {
      var answerArray = [];
      for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
      }

      return answerArray;
    };

    var showPlayerProgress = function (answerArray) {
      alert(answerArray.join(" "));
    };

    var getGuess = function () {
      return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
    };

    var updateGameState = function (guess, word, answerArray) {
      var appearances = 0;
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          appearances++;
        }
      }

      return appearances;
    };

    var showAnswerAndCongratulatePlayer = function (answerArray) {
      showPlayerProgress(answerArray);
      alert("Отлично! Было загадано слово " + answerArray.join(""));
    };

    var drawSegment = function (incorrectGuesses) {
      ctx.lineWidth = 4;

      if (incorrectGuesses === 0) {
        ctx.strokeRect(20, 20, 20, 20);
      } else if (incorrectGuesses === 1) {
        ctx.beginPath();
        ctx.moveTo(30, 40);
        ctx.lineTo(30, 80);
        ctx.stroke();
      } else if (incorrectGuesses === 2) {
        ctx.beginPath();
        ctx.moveTo(30, 80);
        ctx.lineTo(10, 110);
        ctx.stroke();
      } else if (incorrectGuesses === 3) {
        ctx.beginPath();
        ctx.moveTo(30, 80);
        ctx.lineTo(50, 110);
        ctx.stroke();
      } else if (incorrectGuesses === 4) {
        ctx.beginPath();
        ctx.moveTo(30, 60);
        ctx.lineTo(10, 50);
        ctx.stroke();
      } else if (incorrectGuesses === 5) {
        ctx.beginPath();
        ctx.moveTo(30, 60);
        ctx.lineTo(50, 50);
        ctx.stroke();
      }
    };

    var word = pickWord();
    var answerArray = setupAnswerArray(word);
    var remainingLetters = word.length;
    var incorrectGuesses = 0;

    while (remainingLetters > 0) {
      showPlayerProgress(answerArray);
      var guess = getGuess();
      if (guess === null) {
        break;
      } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
      } else {
        var correctGuesses = updateGameState(guess, word, answerArray);

        remainingLetters -= correctGuesses;

        if (correctGuesses === 0) {
          drawSegment(incorrectGuesses);
          incorrectGuesses++;
        }
      }
    }

    showAnswerAndCongratulatePlayer(answerArray);
*/


/*
//Задание 1
var Ball = function (){
    this.x = 100;
    this.y = 100;
    this.xSpeed = -Math.floor(Math.random() * 10 -5);//Задание 2
    this.ySpeed = Math.floor(Math.random() * 10 -5);//Задание 2
    var colors = ["Red", "Orange", "Yellow", "Green", "Blue",  "Purple"];
    this.color = pickRandomWord(colors);
};

var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];//Задание 4
};

var circle = function (x, y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle){
        ctx.fill();
    }else{
        ctx.stroke();
    }
};
Ball.prototype.draw = function(){
    circle(this.x, this.y, 3, true);
    ctx.fillStyle = this.color
};

Ball.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function(){
    if (this.x < 0 || this.x > canvas.width){
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > canvas.height){
        this.ySpeed = -this.ySpeed;
    }
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ball = new Ball;



var balls = [];
    for (var i = 0; i < 10; i++) {//Задание 3
      balls[i] = new Ball();
      
    }
setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 10; i++){
        balls[i].draw();
        balls[i].move();
        balls[i].checkCollision();
    }
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    console.log(balls[0].xSpeed);
}, 10);

*/
var keyNames = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    16: "shift",
    13: "enter",
    18: "alt"

}

$("body").keydown(function(event){
    console.log(keyNames[event.keyCode]);
})

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var circle = function (x, y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle){
        ctx.fill();
    }else{
        ctx.stroke();
    }
};
var Ball = function (){
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 5;
    this.ySpeed = 0;
};
Ball.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x < 0){
        this.x = width;
    }else if(this.x > width){
        this.x = 0;
    }
    if(this.y < 0){
        this.y = height;
    }else if(this.y > height){
        this.y = 0;
    }
};

Ball.prototype.draw = function(){
    circle(this.x, this.y, 10, true);
}












