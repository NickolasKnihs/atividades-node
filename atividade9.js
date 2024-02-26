// 9. Calcular o fatorial de um número.
function main (numero){
    if (numero === 0 || numero === 1){
        return 1;
    }
    let fatorial = 1;
    for(let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
}






//onsole.log(main(5))
module.exports = main;