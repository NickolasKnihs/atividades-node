// 18.	Inverter uma string.
function main(string) {
    // Dividir a string em um array de caracteres
    let arrayDeCaracteres = string.split('');
    
    // Inverter a ordem dos elementos no array
    let arrayInvertido = arrayDeCaracteres.reverse();
    
    // Unir os caracteres invertidos em uma nova string
    let stringInvertida = arrayInvertido.join('');
    
    return stringInvertida;
}

// console.log(main("banana")); 
module.exports = main;
