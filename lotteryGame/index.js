let giris = document.querySelector("#number");
let buton = document.querySelector(".button");
let myDiv = document.querySelector(".bos");
let myDiv2 = document.querySelector(".bos2");

function myNumber(){
    return (Math.floor(Math.random()*90+1) + "").padStart(2,"0");    
} 

function kupon() {
let list = []
while (list.length < 6) {
    let sayi = myNumber()
    if (!list.includes(sayi)) {
        list.push(sayi);        
    }         
}
return list.sort()  
}

let superStar = ()=> myNumber(); 
let joker = () => myNumber(); 

while (kupon().includes(joker)) {
    joker = myNumber();
}

buton.addEventListener("click", run);
function run() {
if (giris.value == 9 || giris.value < 1) {
    alert('Please enter a number between 1 and 8 to generate sets')
    
}else{
    myDiv.innerHTML = ""
    myDiv2.innerHTML = ""
    for (let i = 0; i < giris.value; i++) {
        let newP = document.createElement("p");
        let newText = `${kupon().join(" - ")}  |  ${joker()}  |  ${superStar()}`
        newP.innerText = newText
        myDiv.appendChild(newP);
        myDiv.style.margin-top; '10px'
    } 
    let newP2 = document.createElement("p");
    let newText2 = `GOOD LUCK...`
    newP2.innerText = newText2
    myDiv2.appendChild(newP2)
}
}