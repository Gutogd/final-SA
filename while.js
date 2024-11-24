let res6 = document.getElementById('res6')
let num = 0
function gerarNumAlt(max, min){
    let number = Math.floor(Math.random() * (max - min + 1) + min)
    return number
}
function numeroAlt(){
    num = gerarNumAlt(20,1)
}
 

function exLacoWhile(){
    numeroAlt()
    res6.innerHTML = `
       Número escolhido: ${num} <br>`
    
    while(num > 0) {
        console.log(num)
        num = num - 1
        res6.innerHTML += '       '+ num + '<br>'
    }
    console.log(num)

    res6.innerHTML += '       '
}
    

numeroAlt()
