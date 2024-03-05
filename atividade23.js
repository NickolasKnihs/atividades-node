// Contar a quantidade de números pares em uma lista.
function main (listaNumeros){
    let quantidadePares = 0;

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0) {
            quantidadePares++;
        }
    }

    return quantidadePares;
}


// console.log(main([4, 5, 8, 12, 3]));
module.exports = main;