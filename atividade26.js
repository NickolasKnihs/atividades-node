// 26. Calcular a raiz quadrada de um número.
function main (numero){
    // Verificar se o número é negativo
    if (numero < 0) {
        return NaN; // Retornar NaN para indicar que a raiz quadrada de um número negativo é indefinida
    }
    
    // Calcular a raiz quadrada do número
    return Math.sqrt(numero);    
}

console.log(main(9));
module.exports = main;