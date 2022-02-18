let text = document.querySelector('#textArea');
let buton = document.querySelector('#button');
let output = document.querySelector('#bos');
let body = document.querySelector('.container')


buton.addEventListener('click', cap);
function cap(){

    let str = text.value.trim().replace( /\s+/g, ' ').split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1).toLowerCase();
    }
    
    output.innerText = str.join(' ')

}
output.style.textAlign = 'justify';
//body.style.justifyCiontent = 'center';
