// 1. Verificar se um número é positivo, negativo ou zero. (retorno esperado em
//string da seguinte forma: positivo, negativo, zero)
function main (numero){
    if (numero < 0){
        return 'negativo'
    } else if (numero > 0){
        return 'positivo'
    } else {
        return 'zero';
    }
}



console.log(main(0))
module.exports = main;