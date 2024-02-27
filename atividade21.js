// 21.	Verifica se uma lista de palavras forma um acróstico. (Será passado uma lista de palavras, e como segundo parâmetro, uma string para realizar a verificação)
function main(palavras, acronimo){
    let comparador = '';

    for (let index = 0; index < palavras.length; index++){
        const palavra = palavras[index];
        const primeiraLetra = palavra[0];
        comparador += primeiraLetra;
    }

    return comparador.toLowerCase() === acronimo.toLowerCase();
}



console.log(main(['Hello','World'],'HW'));
module.exports = main;