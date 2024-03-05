// 36. Calcular o logaritmo de um número na base 10.
function main (numero){
    // Calcular o logaritmo na base 10 do número fornecido
    const resultado = Math.log10(numero);

    return resultado;
}

console.log(main(100));
module.exports = main;