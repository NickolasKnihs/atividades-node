// 38. Calcular a soma dos dígitos de um número.
function main (numero){
    // Converter o número para uma string para iterar sobre os dígitos
    const numeroStr = String(numero);
    
    // Inicializar a soma dos dígitos
    let soma = 0;

    // Iterar sobre cada dígito e somá-lo
    for (let digito of numeroStr) {
        soma += Number(digito);
    }

    return soma;
}

// console.log(main(12345));
module.exports = main;