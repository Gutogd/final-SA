let res3 = document.getElementById('res3')


function numeroAleatorio(max, min) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}


let matriz = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

let somaColImpar = 0

function ex3Prova() {
   

 

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            matriz[i][j] = numeroAleatorio(50, 1)
        }
    }
    console.table(matriz)
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            if(j % 2 == 1) {
                somaColImpar += matriz[i][j]
            }
            
        }
    }
    console.table(matriz)
    
}



function resposta3(){
    res3.innerHTML  = `<br>`
    res3.innerHTML += `      Resultado: <br>`
    res3.innerHTML += `      [ ${matriz[0]} ]<br>`
    res3.innerHTML += `      [ ${matriz[1]} ] <br>`
    res3.innerHTML += `      [ ${matriz[2]} ] <br>`
    res3.innerHTML += `      [ ${matriz[3]} ]<br>`
    res3.innerHTML += `      [ ${matriz[4]} ]<br>`
    res3.innerHTML += `      [ ${matriz[5]} ]<br>`
    res3.innerHTML += `      [ ${matriz[6]} ]<br>`
    res3.innerHTML += `    Soma das Colunas Impares: ${somaColImpar}`
    res3.innerHTML += `<br>`
}



ex3Prova()