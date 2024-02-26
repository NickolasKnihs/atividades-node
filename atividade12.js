// 12. Encontrar o menor número em uma lista.
function main(lista) {
    if (lista.length === 0) {
        return "A lista está vazia.";
    }


    let menor = lista[0];


    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }


    return menor;
}








// console.log(main([10, 5, 3, 8, 15]));
module.exports = main;