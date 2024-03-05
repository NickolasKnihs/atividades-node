// 37. Verificar se um número é um número de Armstrong.
function main (numero){
    // Converter o número para uma string para poder contar os dígitos
    const numeroStr = String(numero);
    const numDigitos = numeroStr.length;

    // Inicializar a soma dos dígitos elevados à potência numDigitos
    let soma = 0;

    // Calcular a soma dos dígitos elevados à potência numDigitos
    for (let i = 0; i < numDigitos; i++) {
        soma += Math.pow(Number(numeroStr[i]), numDigitos);
    }

    // Verificar se a soma é igual ao número original
    return soma === numero;
}

// console.log(main(153));
module.exports = main;