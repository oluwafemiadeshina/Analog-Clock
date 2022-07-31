let hour_hand = document.getElementById('hour_hand');
let minute_hand = document.getElementById('minute_hand');
let second_hand = document.getElementById('second_hand');

document.getElementById('clock').style.background = 'url("/images/clock_face.png")';

function initClock(){
    //Variable declaration
    let date = new Date();
    let hour = date.getHours()%12;
    let minute = date.getMinutes();
    let second = date.getSeconds();


    let hourDeg = hour * 30 +(0.5 * minute);
    let minuteDeg = minute * 6 +(0.1 * second);
    let secondDeg = second * 6;

    hour_hand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minute_hand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    second_hand.style.transform = 'rotate(' + secondDeg + 'deg)';

    //run timeout in milliseconds
    setTimeout(initClock, 1000);



}


initClock();