let estado = false
let contador = 0

const apagada = document.querySelector('#apagada')
apagada.addEventListener('click', interruptor)

const acesa = document.querySelector('#acesa')
acesa.addEventListener('click', interruptor)

const textContador = document.querySelector('#contador')

function interruptor(){
    contador = contador + 1
    textContador.textContent = contador
    
    if(estado){
        apagada.classList.remove('hidden')
        acesa.classList.add('hidden')
        estado = false
    }
    else{
        acesa.classList.remove('hidden')
        apagada.classList.add('hidden')
        estado = true
    }
}

