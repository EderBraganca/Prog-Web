const inpLength = document.querySelector('#inpLength');
const passwordDisplay = document.querySelector('#passwordDisplay');

function generate (){
    const length = inpLength.value;

    fetch('https://passwordinator.onrender.com?num=true&char=true&caps=true&len=' + length) 
    .then((res)=> res.json()) 
    .then((data) => passwordDisplay.textContent = "Senha: " + data.data)
    
}

const btnSub = document.querySelector('#btnGenerate')
btnSub.addEventListener('click', generate);
