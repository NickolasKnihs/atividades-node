// 15. Verificar se uma palavra é um anagrama de outra.


function main(palavra1, palavra2) {
    // Verifica se ambas as palavras têm o mesmo comprimento
    if (palavra1.length !== palavra2.length) {
        return false;
    }

    // Converte as palavras para letras minúsculas para ignorar a diferença de capitalização
    palavra1 = palavra1.toLowerCase();
    palavra2 = palavra2.toLowerCase();


    // Cria objetos para contar a frequência de cada letra em ambas as palavras
    const contador1 = {};
    const contador2 = {};

    // Preenche os contadores para a primeira palavra
    for (let letra of palavra1) {
        contador1[letra] = (contador1[letra] || 0) + 1;
    }

    // Preenche os contadores para a segunda palavra
    for (let letra of palavra2) {
        contador2[letra] = (contador2[letra] || 0) + 1;
    }

    // Compara os contadores para verificar se as palavras têm as mesmas letras com a mesma frequência
    for (let chave in contador1) {
        if (contador1[chave] !== contador2[chave]) {
            return false;
        }
    }

    return true;

    /*
      
    const palavra1Organizada = palavra1
    .toLowerCase()
    .split(' ')
    .join('')
    .split('')
    .sort()
    .join();

    const palavra2Organizada = palavra2
    .toLowerCase()
    .split(' ')
    .join('')
    .split('')
    .sort()
    .join();

    return palavra1Organizada === palavra2Organizada

    */

}

console.log(main('listen', 'silent'));
console.log(main('hello', 'world'));
module.exports = main;