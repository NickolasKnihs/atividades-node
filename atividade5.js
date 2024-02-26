// 5. Somar todos os elementos de um array.
function main(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}








// console.log(main([1, 2, 3, 4, 5]))
module.exports = main;