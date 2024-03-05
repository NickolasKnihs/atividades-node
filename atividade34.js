// 34. Verificar se uma palavra é um pangrama.
function main (palavra){
    // Converter a palavra para letras minúsculas para tornar a comparação insensível a maiúsculas/minúsculas
    palavra = palavra.toLowerCase();
    
    // Criar um conjunto para armazenar as letras presentes na palavra
    let letrasPresentes = new Set();

    // Percorrer cada letra da palavra
    for (let letra of palavra) {
        // Verificar se a letra é uma letra do alfabeto
        if (/[a-z]/.test(letra)) {
            letrasPresentes.add(letra);
        }
    }

    // Verificar se o número de letras presentes é igual ao número de letras no alfabeto
    return letrasPresentes.size === 26;
}

console.log(main('The quick brown fox jumps over the lazy dog'));
module.exports = main;