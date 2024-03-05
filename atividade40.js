// 40.	Calcular o máximo divisor comum de uma lista de números.
function main (listaNumeros){
    // Função para calcular o MDC de dois números usando o algoritmo de Euclides
    const mdcDoisNumeros = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // Calcular o MDC de todos os números na lista
    let resultado = listaNumeros[0];
    for (let i = 1; i < listaNumeros.length; i++) {
        resultado = mdcDoisNumeros(resultado, listaNumeros[i]);
    }

    return resultado;
}

// console.log(main([24, 36, 48]));
module.exports = main;