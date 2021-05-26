// manual time tracker with random weather
// made by Philip Beeltje 2021

// the program is pretty simple, it tracks years, months, days, hours and minutes(per 10) instead of counting automatically it is manually operated by buttons.
//every day/month/year or two hours the weather is changed randomly based on two six sides die in order to make certain weather rare.


//counters
let counterm = document.querySelector(".counterm");
let counterh = document.querySelector(".counterh");
let counterd = document.querySelector(".counterd");
let countermo = document.querySelector(".countermo");
let countery = document.querySelector(".countery");
let status = document.querySelector(".status");


//get weather data
if (localStorage.getItem("status") === null) {
    status.innerHTML = "clear skies";
    window.localStorage.setItem('status', status.innerHTML); 
    console.log("set status");
}
else {
    status.innerHTML = window.localStorage.getItem('status');
    console.log("fetched status");
}

//get minute data
if (localStorage.getItem("counterm") === null) {
    counterm.innerHTML = 0;
    window.localStorage.setItem('counterm', counterm.innerHTML); 
    console.log("set minutes");
}
else {
    counterm.innerHTML = window.localStorage.getItem('counterm');
    console.log("fetched minutes");
}

//get hour data
if (localStorage.getItem("counterh") === null) {
    counterh.innerHTML = 0;
    window.localStorage.setItem('counterh', counterh.innerHTML); 
}
else {
    counterh.innerHTML = window.localStorage.getItem('counterh');
}

//get day data
if (localStorage.getItem("counterd") === null) {
    counterd.innerHTML = 1;
    window.localStorage.setItem('counterd', counterd.innerHTML); 
}
else {
    counterd.innerHTML = window.localStorage.getItem('counterd');
}

//get month data
if (localStorage.getItem("countermo") === null) {
    countermo.innerHTML = 1;
    window.localStorage.setItem('countermo', countermo.innerHTML); 
}
else {
    countermo.innerHTML = window.localStorage.getItem('countermo');
}

//get year data
if (localStorage.getItem("countery") === null) {
    countery.innerHTML = 1785;
    window.localStorage.setItem('countery', countery.innerHTML); 
}
else {
    countery.innerHTML = window.localStorage.getItem('countery');
}

//button functions
function addCounter(type){
    let counter_num;
    counter_num=parseInt(counter_num);
    switch(type) {
        case 1:
        counter_num = counterm.innerHTML;
        if (counter_num == 50){
            counterm.innerHTML = 0;
            addCounter(2);
        }
        else {
        counterm.innerHTML = parseInt(counter_num)+10;  
        } 
        window.localStorage.setItem('counterm', counterm.innerHTML);
        break;
        case 2:
        counter_num = counterh.innerHTML;
        if (counter_num == 23) {
            counterh.innerHTML = 0;
            addCounter(3);
        }
        else {
          counterh.innerHTML = parseInt(counter_num)+1;
        }   
        window.localStorage.setItem('counterh', counterh.innerHTML);
            
        if (isEven(counter_num)){//weather simulator on even hours
        
        status.innerHTML = weather();
        window.localStorage.setItem('status', status.innerHTML);
        }
            
        break;
        case 3:
        counter_num = counterd.innerHTML;
        if (counter_num == 30) {
            counterd.innerHTML = 1;
            addCounter(4);
        }
        else {
          counterd.innerHTML = parseInt(counter_num)+1;
        }
        window.localStorage.setItem('counterd', counterd.innerHTML);
        status.innerHTML = weather(); //change weather
        window.localStorage.setItem('status', status.innerHTML);
        break;
        case 4:
        counter_num = countermo.innerHTML;
        if (counter_num == 12) {
            countermo.innerHTML = 1;
            addCounter(5);
        }
        else {
          countermo.innerHTML = parseInt(counter_num)+1;
        }
        window.localStorage.setItem('countermo', countermo.innerHTML);
        status.innerHTML = weather(); //change weather
        window.localStorage.setItem('status', status.innerHTML);
            break;
        case 5:
        counter_num = countery.innerHTML;
        countery.innerHTML = parseInt(counter_num)+1;
        window.localStorage.setItem('countery', countery.innerHTML);
        status.innerHTML = weather(); //change weather
        window.localStorage.setItem('status', status.innerHTML);
            break;
        default:
            break;
    }//switch end
}

function minCounter(type){
    let counter_num;
    switch(type) {
        case 1:
        counter_num = counterm.innerHTML;
        if (counter_num == 0){
            counterm.innerHTML = 50;
            minCounter(2);
        }
        else {
            counterm.innerHTML = parseInt(counter_num)-10;
        } 
        window.localStorage.setItem('counterm', counterm.innerHTML);
        break;
        case 2:
        counter_num = counterh.innerHTML;
        if (counter_num == 0) {
            counterh.innerHTML = 23;
            minCounter(3);
        }
        else {
          counterh.innerHTML = parseInt(counter_num)-1; 
        }  
        window.localStorage.setItem('counterh', counterm.innerHTML);
        break;
        case 3:
        counter_num = counterd.innerHTML;
        if (counter_num == 1) {
            counterd.innerHTML = 30;
            minCounter(4);
        }
        else {
          counterd.innerHTML = parseInt(counter_num)-1; 
        }
        window.localStorage.setItem('counterd', counterm.innerHTML);
        status.innerHTML = weather(); //change weather
        window.localStorage.setItem('status', status.innerHTML);
        break;
        case 4:
        counter_num = countermo.innerHTML;
        if (counter_num == 1) {
            countermo.innerHTML = 12;
            minCounter(5);
        }
        else {
          countermo.innerHTML = parseInt(counter_num)-1;
        }
        window.localStorage.setItem('countermo', countermo.innerHTML);
        status.innerHTML = weather(); //change weather
        window.localStorage.setItem('status', status.innerHTML);
        break;
        case 5:
        counter_num = countery.innerHTML;
        countery.innerHTML = parseInt(counter_num)-1;
        window.localStorage.setItem('countery', countery.innerHTML);
        status.innerHTML = weather(); //change weather
        window.localStorage.setItem('status', status.innerHTML);
            break;
        default:
            break;
    }//switch end
}

function resetCounter(type){
switch(type) {
        case 1:
        counterm.innerHTML = 0;
        window.localStorage.setItem('counterm', counterm.innerHTML);
        break;
        case 2:
        counterh.innerHTML = 0;
        window.localStorage.setItem('counterh', counterh.innerHTML);
        break;
        case 3:
        counterd.innerHTML = 1;
        window.localStorage.setItem('counterd', counterd.innerHTML);
        break;
        default:
        break;
    }//switch end
}


//diceroll function
function diceRoll(dice, min, max) { 
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var result = 0;
    var i;
    for(i=dice; i > 0; i--){
    var roll = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(roll);
    result= result + roll;
    }
    return result;
}

function isEven(value) {
return (value%2 == 0);
}

//weather function
function weather(){
let weather_num;
weather_num = diceRoll(2,1,6); 
switch (weather_num) {
            case 2:
                return "storm/ blizzard";
                break;
            case 3:
            case 4:
            case 5:
                return "rain/ snow";
                break;
            case 6:
            case 7:
            case 8:
                return "clear skies";
                break;
            case 9: 
                return "partly cloudy";
                break;
            case 10:
            case 11:
                return "overcast";
                break;
            case 12:
                return "downpour/ heavy snow";
                break;
            default:
                break;
        }
}
