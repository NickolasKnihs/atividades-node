// 30. Verificar se um número é uma sequência de Fibonacci.
function main (numero){
    // Verificar se o número é positivo
    if (numero < 0) {
        return false;
    }

    // Verificar se (n * n * 5 + 4) ou (n * n * 5 - 4) é um quadrado perfeito
    return isQuadradoPerfeito(numero * numero * 5 + 4) || isQuadradoPerfeito(numero * numero * 5 - 4);
}

function isQuadradoPerfeito(numero) {
    const raiz = Math.sqrt(numero);
    return raiz * raiz === numero;
}

// console.log(main(77));
module.exports = main;