let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let valor_atual = 0
let res4 = document.getElementById('res4')
let cont = 0

function numeroAleatorio(max, min) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}

function gerarArray() {
    for (let i = 0; i < array.length; i++) {
        array[i] = numeroAleatorio(20, 1)
    }

    res4.innerHTML = `Array bagunçado : [ ${array} ]`
    console.log('Scapini viado');
}

function bubble() {
    res4.innerHTML = `metodo bubble sort : <br>
    Array bagunçado : [${array}] <br>`
    res4.innerHTML += ` Array : [${bubblesort()}]<br>`
    res4.innerHTML += `iterações = ${cont}`

}

function bubblesort() {
    cont = 0
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                valor_atual = array[i]
                array[i] = array[i + 1]
                array[i + 1] = valor_atual
            }
            cont++
        }

    }
    return array

}

function instertion() {
    res4.innerHTML = `metodo insertion sort : <br>
    Array bagunçado : [${array}] <br>`
    res4.innerHTML += ` Array : [${insertionsort()}]<br>`
    res4.innerHTML += `iterações = ${cont}`

}

function insertionsort() {
    cont = 0
    for (i = 1; i < array.length; i++) {
        let j = i - 1
        valor_atual = array[i]
        while (j >= 0 && valor_atual < array[j]) {
            array[j + 1] = array[j]
            j--
        }
        cont++
        array[j + 1] = valor_atual
    }
    return array

}

function selection() {
    res4.innerHTML = `metodo selection sort : <br>
    Array bagunçado : [${array}] <br>`
    res4.innerHTML += ` Array : [${selectionsort()}]<br>`
    res4.innerHTML += `iterações = ${cont}`
}

function selectionsort() {
    cont = 0
    for (let i = 0; i < array.length; i++) {
        let menor = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j
            }
            cont++
        }
        if (i != menor) {
            let valor = array[i]
            array[i] = array[menor]
            array[menor] = valor
        }

    }
    return array

}


