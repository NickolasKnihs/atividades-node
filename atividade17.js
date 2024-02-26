// 17.	Calcular o máximo divisor comum de dois números.
function main(numero1, numero2) {
    while (numero2 !== 0) {
        let temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }
    return numero1;
}


// console.log(main(20, 84));
module.exports = main;
