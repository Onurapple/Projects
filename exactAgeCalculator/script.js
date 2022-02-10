
let birthdayHTML = document.querySelector('[name=birthday]');

let image        = document.getElementById("loading");
let background   = document.querySelector("body");

birthdayHTML.addEventListener("change", function calc() {
    // let hesap = () => {
    
    let year = document.getElementById('years');
    let month = document.getElementById('months');
    let day = document.getElementById('days');
    let hour = document.getElementById('hours');
    let minute  = document.getElementById("minutes");
    let second = document.getElementById('seconds');
    
    
    
    let birthday = new Date(birthdayHTML.value).getTime();
    let sayi = new Date().getTime(); 
    let fark = sayi - birthday

        let yil = Math.floor(fark / 31556926000);
        let ay = Math.floor((fark % 31556926000)/2629800000);
        let gun = Math.floor(((fark % 31556926000) % 2629800000)/86400000);
        let saat = Math.floor((((fark % 31556926000) % 2629800000)%86400000)/3600000);
        let dakika = Math.floor(((((fark % 31556926000) % 2629800000)% 86400000)%3600000)/60000);
        let saniye = Math.floor((((((fark % 31556926000) % 2629800000) % 86400000)% 3600000)% 60000)/ 1000);
    
        // console.log(yil, ay, gun, saat, dakika, saniye)
        
        year.innerText      = yil;
        month.innerText     = ay;
        day.innerText       = gun;
        hour.innerText      = saat;
        minute.innerText    = dakika;
        second.innerText    = saniye;
        
        setInterval(calc, 1000);
    // }



    // let a = new Date(fark);
    // console.log(a.toLocaleDateString())

});

let iptal = () => image.style.visibility = "hidden";
setTimeout(iptal, 1000);

birthdayHTML.addEventListener("change", ()=>{
    background.style.backgroundImage = 'url("https://picsum.photos/id/903/800/600")';
});






// birthdayHTML.addEventListener('change', function (){

//     let birthday = new Date(birthdayHTML.value);
    
//     console.log(birthday);
// }








// let sayi2 = new Date(birthday.value).getTime();
// console.log(sayi2);




