// 17.	Calcular o máximo divisor comum de dois números.
function main(numero1, numero2) {
    // while (numero2 !== 0) {
    //     let tempNumero2 = numero2;
    //     numero2 = numero1 % numero2;
    //     numero1 = tempNumero2;
    // }
    // return numero1;

    if (numero2 == 0){
        return numero1;
    } else {
        return main(numero2, numero1 % numero2);
    }
}


console.log(main(12, 15));
module.exports = main;
