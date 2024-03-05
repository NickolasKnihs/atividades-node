// 32. Calcular a área de um triângulo.
function main (base, altura){
    // Verificar se a base e a altura são positivas
    if (base <= 0 || altura <= 0) {
        return "Base e altura devem ser números positivos.";
    }

    // Calcular a área do triângulo
    const area = (base * altura) / 2;

    return area;
}

// console.log(main(5, 10));
module.exports = main;