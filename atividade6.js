// 6. Contar a quantidade de vogais em uma string.
function main (string){
    // vogais
     string = string.toLowerCase();
     let contador = 0;
 
 
     for (let i = 0; i < string.length; i++){
         if (['a', 'e', 'i', 'o', 'u'].includes(string[i])){   // vogais.includes(string)
             contador++
         }
     }
     return contador;
 }
 
 
 
//  console.log(main('Hello World'))
//  console.log(main('banana'))
//  console.log(main(''))
 module.exports = main;