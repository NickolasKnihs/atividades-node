// 39.	Verificar se um número é um número de Harshad.
function main (numero){
    // Converter o número para uma string para poder somar os dígitos
    const numeroStr = String(numero);

    // Calcular a soma dos dígitos
    let somaDigitos = 0;
    for (let digito of numeroStr) {
        somaDigitos += Number(digito);
    }

    // Verificar se o número é divisível pela soma dos seus dígitos
    return numero % somaDigitos === 0;
}

// console.log(main(18));
module.exports = main;