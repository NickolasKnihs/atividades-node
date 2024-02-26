// 6. Contar a quantidade de vogais em uma string.
function main (string){
    // string = string.toLowerCase();
     let contador = 0;
 
 
     for (let i = 0; i < string.length; i++){
         if (['a', 'e', 'i', 'o', 'u'].includes(string[i])){
             contador++
         }
     }
     return contador;
 }
 
 
 
 
 
 
 
 
 //console.log(main('jaragua'))
 module.exports = main;