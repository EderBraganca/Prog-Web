let list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//Verifique se todos os elementos sao primos
console.log(list.every(elem => elem % 2 === 0))

//Imprima o dobro dos valores
console.log(list.map(elem => elem * 2))

//Retorne um array apenas com os primos