
let res = document.getElementById('res')

     let mat1 = [[0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0]]

     let mat2 = [[0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0]]

     let mat3 = [[0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0]]
    

 function matrizSecundaria(){
    for (let i = 0; i < mat1.length; i++) {
        for (let j = 0; j < mat1.length; j++) {
            if (i + j == 6) {
                mat1[i][j] = 5
            }
        }
    }

 

    
 }



 function matrizIdentidade(){
for (let i = 0; i < mat2.length; i++) {
for (let j = 0; j < mat2.length; j++) {
if (i == j) {
    mat2[i][j] = 7
 }
}
}

 }


 function ex01(){
     for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1.length; j++) {
    mat3[i][j] = mat1[i][j] + mat2[i][j]
   
    
     }
    }

console.log(mat3)

 }

 function responder(){
    res.innerHTML = `<br>`
    res.innerHTML += `  Resultado: <br>`
    res.innerHTML += `  [${mat1[0]}] + [${mat2[0]}] =  [${mat3[0]}] <br>` 
    res.innerHTML += `  [${mat1[1]}] + [${mat2[1]}] =  [${mat3[1]}] <br>` 
    res.innerHTML += `  [${mat1[2]}] + [${mat2[2]}] =  [${mat3[2]}] <br>` 
    res.innerHTML += `  [${mat1[3]}] + [${mat2[3]}] =  [${mat3[3]}] <br>` 
    res.innerHTML += `  [${mat1[4]}] + [${mat2[4]}] =  [${mat3[4]}] <br>` 
    res.innerHTML += `  [${mat1[5]}] + [${mat2[5]}] =  [${mat3[5]}] <br>` 
    res.innerHTML += `  [${mat1[6]}] + [${mat2[6]}] =  [${mat3[6]}] <br>` 
    res.innerHTML += `<br>` 
 }


 matrizSecundaria()
 matrizIdentidade()
 ex01()
 console.table(mat3)












 