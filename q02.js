let res2 = document.getElementById('res2')


function numeroAleatorio(max, min) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}

let mat = [[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0] 
]
let somaPar = 0, somaImpar = 0

function ex2Prova() {
   

    

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            mat[i][j] = numeroAleatorio(20, 1)
        }
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] % 2 == 0) {
                somaPar += mat[i][j]
            } else if (mat[i][j] % 2 == 1) {
                somaImpar += mat[i][j]
            }
        }
    }

 
}

function resposta(){
    res2.innerHTML  = `<br>`
    res2.innerHTML += `      Resultado: <br>`
    res2.innerHTML += `      [ ${mat[0]} ]<br>`
    res2.innerHTML += `      [ ${mat[1]} ]<br>`
    res2.innerHTML += `      [ ${mat[2]} ]<br>`
    res2.innerHTML += `      [ ${mat[3]} ]<br>`
    res2.innerHTML += `      [ ${mat[4]} ]<br>`
    res2.innerHTML += `      [ ${mat[5]} ]<br>`
    res2.innerHTML += `      [ ${mat[6]} ]<br>`
    res2.innerHTML += `      Soma dos Ímpares: ${somaImpar}<br>`
    res2.innerHTML += `      Soma dos Pares: ${somaPar}<br>`
    res2.innerHTML += `<br>`
}
ex2Prova()
