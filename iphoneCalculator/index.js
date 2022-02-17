let upScreen = document.querySelector('#upscreen');
let bottomScreen = document.querySelector('#bottomscreen');
let butons = document.getElementsByTagName('button');
let digit = document.querySelectorAll('.digit');
let orange = document.querySelectorAll('.orange');
let grey = document.querySelectorAll('.grey');
let sayi1;
let sayi2;
let oper;


for (let i = 0; i < digit.length; i++) { 
    digit[i].addEventListener('click', () =>{
        bottomScreen.innerHTML += digit[i].innerHTML
       console.log(oper);
       sayi2 = +bottomScreen.innerHTML;
       console.log(sayi2);
       console.log(sayi1);
    });
}

for (let j = 0; j < orange.length; j++) { 
    orange[j].addEventListener('click', () =>{
        oper = orange[j].innerHTML;    
        sayi1 = +bottomScreen.innerHTML;
        upScreen.innerHTML += bottomScreen.innerHTML + orange[j].innerHTML; 
        bottomScreen.innerHTML = '';
        console.log(sayi2);
        console.log(sayi1);
    });
}


butons[18].addEventListener('click', ()=>{
if(oper === '+'){
    bottomScreen.innerHTML = (sayi1) + (sayi2);
} else if(oper === '-') {
    bottomScreen.innerHTML = (sayi1) - (sayi2);
} else if(oper === 'x') {
    bottomScreen.innerHTML = +((sayi1*100000) * (sayi2*100000))/10000000000;
} else if(oper === '/') {
    bottomScreen.innerHTML = (+sayi1.toFixed(2)) / (+sayi2.toFixed(2));

}
upScreen.innerHTML = '';

console.log(sayi1);
console.log(sayi2);
//return;

})
butons[0].addEventListener('click', ()=>{
    bottomScreen.innerHTML = ''
    upScreen.innerHTML = ''

})

let first_click = true;
butons[1].addEventListener('click', ()=>{
    if (first_click){
    bottomScreen.innerHTML = '-'+ bottomScreen.innerHTML;
    first_click = false;
    }else {
        bottomScreen.innerHTML = bottomScreen.innerHTML.substring(1);
        first_click = true;
    }
})

butons[2].addEventListener('click', ()=>{
    bottomScreen.innerHTML = bottomScreen.innerHTML / 100;
    sayi2 = bottomScreen.innerHTML;
})


//Duzeltilmesi gereken
//ilk basişta peşpeşe 0 ve nokta yazabiliyor
//esittirden sonra yeni isleme baslarken ekrani temizlemiyor
//- sonuc cikinca - yi kaldirma


