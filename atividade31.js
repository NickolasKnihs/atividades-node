// 31. Verificar se um número é primo de Mersenne.
function main (numero){
    // Verificar se o número é positivo
    if (numero <= 0) {
        return false;
    }

    // Encontrar o valor de p
    let p = 2;
    while (Math.pow(2, p) - 1 < numero) {
        p++;
    }

    // Verificar se o número é da forma 2^p - 1
    if (Math.pow(2, p) - 1 === numero) {
        // Verificar se p é primo
        return isPrimo(p);
    } else {
        return false;
    }
}

function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(main(3));
module.exports = main;