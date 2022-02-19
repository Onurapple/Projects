let upScreen = document.querySelector('#upscreen');
let bottomScreen = document.querySelector('#bottomscreen');
let butons = document.getElementsByTagName('button');
let digit = document.querySelectorAll('.digit');
let orange = document.querySelectorAll('.orange');

let sayi1 = 0;
let sayi2 = 0;
let ydksayi = 0;
let equal = 0;
let result = 0;
let ydkOper = "";
let oper = "";

bottomScreen.innerHTML = 0;
upScreen.innerHTML = '';

function reset(){
    bottomScreen.innerHTML = 0;
    upScreen.innerHTML = '';
    sayi1 = 0;
    sayi2 = 0;
    ydksayi = 0;
    result = 0;
    equal = 0;
    ydkOper = "";
    oper = "";
}

for (let i = 0; i < digit.length; i++) { 
    digit[i].addEventListener('click', () =>{
        if (equal == 1){ 
            let ydkResult = result;
            reset();
            bottomScreen.innerHTML = digit[i].innerHTML;
            equal = 0;
            sayi1 = ydkResult;
        }
        else if (bottomScreen.innerHTML != "Hata"){
            if(i == 9){
                if(bottomScreen.innerHTML != "0" && bottomScreen.innerHTML != "-0"){
                    bottomScreen.innerHTML += digit[i].innerHTML;
                }
            }
            else if(i == 10){
                bottomScreen.innerHTML = (!bottomScreen.innerHTML.includes(".")) ? bottomScreen.innerHTML + digit[10].innerHTML : bottomScreen.innerHTML;
            }
            else {bottomScreen.innerHTML = bottomScreen.innerHTML == "0" ? digit[i].innerHTML : bottomScreen.innerHTML + digit[i].innerHTML;
            }
        }
    });
}

for (let j = 0; j < orange.length; j++) { 
    orange[j].addEventListener('click', () =>{
        if (equal == 1){
            equal = 0;
            let ydkResult = result;
            reset();
            bottomScreen.innerHTML = "";
            oper = orange[j].innerHTML;
           
            sayi1 = ydkResult;
            upScreen.innerHTML = sayi1 + oper;
            console.log("sayı1: ", sayi1);
            console.log(oper);
            console.log("sayı2: ", sayi2);
        }
        else {
        if (ydkOper != ""){
            if((orange[j].innerHTML == "/" && bottomScreen.innerHTML == "0") || (bottomScreen.innerHTML == "Hata") || (ydkOper == "/" && bottomScreen.innerHTML == "0")) {
                bottomScreen.innerHTML = "Hata";
            }
            else {
                ydksayi = +bottomScreen.innerHTML;
                oper = orange[j].innerHTML;
                    sayi1 =     (sayi1 == "0") ? +bottomScreen.innerHTML
                            : (ydkOper == "+") ? sayi1 + ydksayi
                            : (ydkOper == "-") ? sayi1 - ydksayi
                            : (ydkOper == "x") ? sayi1 * ydksayi
                            : sayi1 / ydksayi;
                    
                    upScreen.innerHTML = sayi1 + orange[j].innerHTML; 
                    bottomScreen.innerHTML = "";
                    console.log("sayı1: ", sayi1);
                    console.log(oper);
                    console.log("sayı2: ", sayi2);
                    ydksayi = 0;
                    ydkOper = oper;

            }
        }
        else {
            sayi1 = +bottomScreen.innerHTML;
            oper = orange[j].innerHTML;
            bottomScreen.innerHTML = "";
            upScreen.innerHTML = sayi1 + oper;
            ydkOper = oper;
        }
    }
    });
}


butons[18].addEventListener('click', ()=>{
    sayi2 = bottomScreen.innerHTML;
    if(sayi2 != "Hata"){
        sayi2 =  +sayi2;
        if(oper == '+'){
            bottomScreen.innerHTML = (sayi1) + (sayi2);
        } else if(oper == '-') {
            bottomScreen.innerHTML = (sayi1) - (sayi2);
        } else if(oper == 'x') {
            bottomScreen.innerHTML = ((sayi1*100000) * (sayi2*100000))/10000000000;
        } else if(oper == '/') {
            bottomScreen.innerHTML = (sayi2 == 0) ? "Hata" : (+sayi1.toFixed(2)) / (+sayi2.toFixed(2));

        }
        result = +bottomScreen.innerHTML;
        console.log(result);
        upScreen.innerHTML = '';
        equal = 1;

        //return;
    }
    else {
        bottomScreen.innerHTML = "Hata";
    }

})

butons[0].addEventListener('click', reset);


butons[1].addEventListener('click', ()=>{
    if (bottomScreen.innerHTML != "Hata"){
    if (bottomScreen.innerHTML[0] != "-"){
    bottomScreen.innerHTML = '-'+ bottomScreen.innerHTML;
    }else {
        bottomScreen.innerHTML = bottomScreen.innerHTML.substring(1);
    }
}
})

butons[2].addEventListener('click', ()=>{
    if (bottomScreen.innerHTML != "Hata"){
    bottomScreen.innerHTML /= 100;
/*     sayi2 = bottomScreen.innerHTML; */
    }
})
