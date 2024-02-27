// 7. Calcular a média ponderada de 3 notas. (as médias são: 1, 2 e 3
//respectivamente)
function main(nota1, nota2, nota3) {
    const pesos1 = 1
    const pesos2 = 2
    const pesos3 = 3
    
    const somaPesos = pesos1 + pesos2 + pesos3;
    const somaNotas = (pesos1 * nota1) + (pesos2 * nota2) + (pesos3 * nota3);


    return somaNotas/somaPesos
}

// console.log(main(5,5,5))
// console.log(main(10,10,10))
// console.log(main(0,0,0))
module.exports = main;