// 7. Calcular a média ponderada de 3 notas. (as médias são: 1, 2 e 3
//respectivamente)
function main(notas) {
    const pesos = [1, 2, 3];
    if (notas.length !== pesos.length || notas.length !== 3) {
        // Verifica se o número de notas é igual ao número de pesos e se é 3
        return "Erro: Forneça três notas e três pesos correspondentes.";
    }


    let somaProdutos = 0;
    let somaPesos = 0;


    for (let i = 0; i < notas.length; i++) {
        somaProdutos += notas[i] * pesos[i];
        somaPesos += pesos[i];
    }


    return somaProdutos / somaPesos;
}


// Teste
// const notas = [1, 2, 3];


// console.log(main([1, 2, 3]))
module.exports = main;