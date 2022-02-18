let birthdayHTML = document.querySelector('[name=birthday]');

let image        = document.getElementById("loading");
let background   = document.querySelector("body");

birthdayHTML.addEventListener("change", function calc() {
    // let hesap = () => {
    
    let yil = document.getElementById('years');
    let ay = document.getElementById('months');
    let gun = document.getElementById('days');
    let saat = document.getElementById('hours');
    let dakika  = document.getElementById("minutes");
    let saniye = document.getElementById('seconds');

    let date = birthdayHTML.value;
    let dateEntered = new Date(date);

    let yearEntered = dateEntered.getFullYear(); 
    let monthEntered = dateEntered.getMonth(); 
    let DayEntered = dateEntered.getDate(); 
    let HourEntered = dateEntered.getHours(); 
    let minuteEntered = dateEntered.getMinutes(); 
    let secondEntered = dateEntered.getSeconds(); 
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSecond = new Date().getSeconds();
    let year = currentYear - yearEntered;
    let month = currentMonth - monthEntered;
    let day = currentDay - DayEntered;
    let hour = currentHour - HourEntered;
    let minute = currentMinute - minuteEntered;
    let second = currentSecond - secondEntered;

    if (second < 0) {
        second += 60;
        minute--;
    } 
    if (minute < 0) {
        minute += 60;
        hour--;
    }
    if (hour < 0) {
        hour += 24;
        day--;
    }
    if (day < 0) {
        if (currentMonth == 0 && currentMonth == 2 && currentMonth == 4 && currentMonth == 6 &&
            currentMonth == 7 && currentMonth == 9 && currentMonth == 11){
                day += 31;
            } else if (currentMonth == 1){
                day +=28;
            } else{
                day +=30;
            }
        month--;
    }
    if (month < 0) {
        month += 12;
        year--;
    };
    yil.innerText      = year;
    ay.innerText     = month;
    gun.innerText       = day;
    saat.innerText      = hour;
    dakika.innerText    = minute;
    saniye.innerText    = second;
    
    setInterval(calc, 1000);
});
let iptal = () => image.style.visibility = "hidden";
setTimeout(iptal, 1000);

birthdayHTML.addEventListener("change", ()=>{
    background.style.backgroundImage = 'url("https://picsum.photos/id/903/800/600")';
});