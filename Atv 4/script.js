let estado = false
let contador = 0

const imagem = document.querySelector('#imagem')
imagem.addEventListener('click', interruptor)

const inputContador = document.querySelector('#contador')

function interruptor(){
    contador = contador + 1
    inputContador.textContent = contador
    
    if(estado){
        imagem.src = 'apagada.jpg'
        estado = false
    }
    else{
        imagem.src = 'acesa.jpg'
        estado = true
    }
}

