// 28. Contar a quantidade de elementos únicos em uma lista.
function main (lista){
    // Objeto para rastrear quantas vezes cada elemento aparece na lista
    let contadorElementos = {};
    
    // Percorrer cada elemento da lista e contá-los
    for (let elemento of lista) {
        if (contadorElementos[elemento]) {
            contadorElementos[elemento]++;
        } else {
            contadorElementos[elemento] = 1;
        }
    }
    
    // Contar quantos elementos únicos existem
    let quantidadeUnicos = 0;
    for (let chave in contadorElementos) {
        if (contadorElementos[chave] === 1) {
            quantidadeUnicos++;
        }
    }
    
    return quantidadeUnicos;
}

// console.log(main([2, 5, 3, 2]));
module.exports = main;