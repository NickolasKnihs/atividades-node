// 4. Verificar se um número é primo.
function main (numero){
    if (numero <= 1){
        return "Não é um numero primo";
    }
    for (let i = 2; i < numero; i++){
        if (numero % i === 0){
            return "Não é um numero primo";
        }
    }
    return "É um numero primo";
}








// console.log(main(239))
module.exports = main;