//13. Gerar os primeiros n números da sequência de Fibonacci. (A ideia é receber
// quantos números de Fibonacci devem ser gerados)
function main(n) {
    let fibonacci = [0, 1];


    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }


    return fibonacci.slice(0, n);
}




console.log(main(50));
module.exports = main;