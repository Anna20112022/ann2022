// находим все элементы
var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');
var green = document.querySelector('.green');
var counters = {red:15,green:10};
// функция запуска запрещающего цикла светофора (красный и желтый)
function RedInterval (){
  var redInterval =  setInterval(function(){
// светофор стартует из состояния “движение запрещено”:при этом горит красный сигнал светофора, 
   yellow.classList.remove('greentext'); 
   green.classList.remove('greenblock');
   red.classList.add('redblock');
   yellow.classList.add('redtext');
// в центре горит красное табло с обратным отсчетом до переключения в след. состояние    
   yellow.innerHTML = counters.red--;
// по истечению таймера, когда остаются последние 3 секунды, табло с таймером исчезает, и на его месте включается желтый сигнал светофора, который горит эти последние 3 секунды, и далее светофор переходит в состояние “движение разрешено”
   if (counters.red <= 2){
     yellow.innerHTML = "";
     yellow.classList.add('yellowblock');
   };
   if (counters.red == 0) {
    clearTimeout(redInterval);
    };
  }, 1000);};
// функция запуска разрешающего цикла светофора (зеленый)
function GreenInterval(){
  var greenInterval = setInterval(function(){
   red.classList.remove("redblock");
   yellow.classList.remove("yellowblock");
   green.classList.add('greenblock');
   yellow.classList.add('greentext');
   yellow.innerHTML = counters.green--;
// когда остаются последние 3 секунды, зеленый сигнал начинает мигать (с частотой 500 мсек), по завершению этих последних 3 секунд, светофор переключается обратно в состояние “движение запрещено”
   if (counters.green <= 2){
    var blinkColor = setInterval(function(){
       green.classList.toggle('greenblock');
       clearInterval(blinkColor);
     },500);
   };
   if (counters.green <= 0) {
     clearInterval(greenInterval);
     //StartTrafficLight();
   };
 }, 1000);};
// функция запуска светофора, передаем функции и новые каунтеры
/*function StartTrafficLight (){
  counters.red = 15; 
  counters.green = 10; 
  RedInterval ();
  setTimeout(GreenInterval, 15000);
};
StartTrafficLight();*/
var colorQueue = [RedInterval, GreenInterval];

function changeColor(colorQueue){
   var currentColorFn = colorQueue.shift();
   currentColorFn();
   colorQueue.push(currentColorFn);
};
colorQueue.forEach(changeColor(colorQueue));
////////////////////////////////////////////////////////////////////////////////

var b1 = document.getElementById("b1")

var h11 = document.getElementById("h11")

b1.onclick = function() {
    h11.style.color = "red";
}

var b2 = document.getElementById("b2")
b2.onclick = function() {
    h11.style.color = "green";
}
var b3 = document.getElementById("b3")
b3.onclick = function() {
    h11.style.color = "blue";
}
var h11 = document.getElementById("h11")

b1.onclick = function() {
    h11.style.color = "red";
}

var num = 38 % 5;
console.log(num)
console.log("Hello World!")



