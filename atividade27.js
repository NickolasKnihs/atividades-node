// 27. Verificar se uma palavra é um isograma.
function main (palavra){
    // Converter a palavra para letras minúsculas para tornar a comparação de letras insensível a maiúsculas/minúsculas
    palavra = palavra.toLowerCase();
    
    // Objeto para rastrear quantas vezes cada letra aparece na palavra
    let contadorLetras = {};
    
    // Percorrer cada letra da palavra
    for (let letra of palavra) {
        // Verificar se a letra já foi contada
        if (contadorLetras[letra]) {
            return false; // Se a letra já foi contada, a palavra não é um isograma
        } else {
            contadorLetras[letra] = 1; // Marcar a letra como contada
        }
    }
    
    // Se todas as letras forem únicas, a palavra é um isograma
    return true;
}

// console.log(main('arroz'));
module.exports = main;