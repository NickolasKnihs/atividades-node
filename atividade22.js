// 22. Verificar se um número é perfeito.
function main(numero){
    // Verificar se o número é negativo ou zero
    if (numero <= 0) {
        return false;
    }

    // Inicializar a soma dos divisores próprios como zero
    let somaDivisores = 0;

    // Encontrar divisores próprios do número e somá-los
    for (let i = 1; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
            somaDivisores += i;
        }
    }

    // Verificar se a soma dos divisores é igual ao número
    return somaDivisores === numero;

}



// console.log(main(4));
module.exports = main;