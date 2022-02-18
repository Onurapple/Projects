let numStart = document.querySelector('#startNumber');
let numTop = document.querySelector('#topNumber');
let buttonPal = document.querySelector('.palButton');
let buttonPer = document.querySelector('.perButton');
let listPal = document.querySelector('#palList');
let listPer = document.querySelector('.perList');

//console.log(listPal)

buttonPal.addEventListener('click', palin);
function palin(){
    for (let i = +numStart.value; i < +numTop.value; i++) {
         if (i == i.toString().split('').reverse().join('')){
             listPal.value += i + '\n';
         } 
     }
}

buttonPer.addEventListener('click', per);
function per(){
    listPer.value = ''
    let temp;
    for (let i = +numStart.value; i < +numTop.value; i++) {
        temp = 0;
       for (let j = 1; j < i; j++) {
           
         temp = i % j == 0 ? temp + j : temp;
        /* if (i % j == 0) {
               temp += j; 
           } */  
        }
        listPer.value = (temp == i) ? listPer.value + i + '\n' :listPer.value;
        /* if (temp == i) {
         listPer.value += i + '\n';
       } */
    }
}




































































































// let numStart = document.querySelector('#startNumber');
// let numTop = document.querySelector('#topNumber');
// let buttonPal = document.querySelector('#palButton');
// let buttonPer = document.querySelector('#perButton');
// let listPal = document.querySelector('#palList');
// let listPer = document.querySelector('#perList');
// liste1 = [];
// liste2 = [];
// let temp = 0;

// buttonPal.addEventListener('click', palin);
// function palin (){
//     for (let i = +numStart.value; i <= +numTop.value; i++) {
//         if (i == i.toString().split('').reverse().join('')){
//             liste1.push(i + '\n')
//         }  
//     }
//     console.log(liste1);
//     listPal.textContent = liste1;
// }


// buttonPer.addEventListener('click', per);
// function per (){
//     for (let i = +numStart.value; i <= +numTop.value; i++) {
//         for (let j = 1; j < +i; j++) {
//             if (+i % +j === 0) {
//                 temp += j; 
//             }
//         }
//         if (+temp == i) {
//             liste2.push(i + '\n')
//     }
        
//     }
//     console.log(temp);
//     console.log(liste2);
//     listPer.textContent = liste2;
// }
