let res7 = document.getElementById('res7')
let idade = 0

function gerarNumAlt(max, min){
    let number = Math.floor(Math.random() * (max - min + 1) + min)
    return number
}

function numeroAlt(){
    idade = gerarNumAlt(100,1)
}
 
function exIfElse(){
    numeroAlt()
    res7.innerHTML = ''
    if(idade <= 0) {
        
        res7.innerHTML += `        Voto Inválido`
    } else if((idade > 0)&&(idade < 16)) {
        res7.innerHTML += `        Não pode votar`
    } else if(((idade >= 16)&&(idade < 17))||idade >= 70) {
        
        res7.innerHTML += `        Voto Opcional`
    } else if((idade >= 18)&&(idade < 70)) {
       
        res7.innerHTML += `        Voto Obrigatório`
    } else {
        
        res7.innerHTML += `        Voto Inválido`
    }

    res7.innerHTML += `<br> idade: ${idade}`
} 

