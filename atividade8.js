// 8. Verificar se uma string é um palíndromo.
function main(string) {
    string = string.replace(/\s/g, '').toLowerCase();


    const stringInvertida = string.split('').reverse().join('');


    return string === stringInvertida;


}


// console.log(main('arara e arara'))
module.exports = main;