// 25. Verificar se um número é uma potência de 2.
function main (numero){
    // Verificar se o número é positivo
    if (numero <= 0) {
        return false;
    }

    // Enquanto o número for divisível por 2 e não for 1
    while (numero > 1) {
        if (numero % 2 !== 0) {
            return false;
        }
        numero = numero / 2;
    }

    // Se o número se tornar 1, é uma potência de 2
    return true;
}

console.log(main(8));
module.exports = main;