// 4. Verificar se um número é primo.
function main (numero){
    if (numero <= 1){
        return false;
    }
    for (let i = 2; i < numero/ 2; i++){
        if (numero % i === 0){
            return false
        }
    }
    return true;
}



// console.log(main(7))
// console.log(main(6))
// console.log(main(204))
module.exports = main;