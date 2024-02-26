// 19.	Calcular a média aritmética de uma lista de números.
function main(listaNumeros) {
    // Verificar se a lista está vazia
    if (listaNumeros.length === 0) {
        throw new Error("A lista de números está vazia.");
    }
    
    // Somar todos os números na lista
    const soma = listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    
    // Calcular a média aritmética
    const media = soma / listaNumeros.length;
    
    return media;
}

// console.log(main([1, 4, 8, 9]));
module.exports = main;

