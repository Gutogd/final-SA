let res5 = document.getElementById('res5')
let retiradas = [0,0,0,0,0,0,0,0,0,0]

function gerarValorAleatorio(max, min) {
    let valor = Math.floor(Math.random() * (max - min + 1) + min)
    return valor
}

function fazerArray(){
    for(let i = 0; i < 10; i++) {
       retiradas[i] = gerarValorAleatorio(20,1)
    }
    
}
console.log(retiradas)

function pilha(){
    console.log('Array Bagunçada: '+retiradas)

    res5.innerHTML = `
        Array Bagunçada: ${retiradas}`
    
    bubblesort(retiradas)
    
    res5.innerHTML += `
        Array Ordenada: ${retiradas} <br>
    `
        
    console.log('Array Ordenada: '+retiradas)
    
    for(let i = 0; i < 10; i++) {
        retiradas.pop()
        res5.innerHTML += `        retirada: ${retiradas} <br>`
        console.log('Pop: '+retiradas)
    }
        
    res5.innerHTML += `  `
}

fazerArray()