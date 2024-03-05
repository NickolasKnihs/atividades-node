// 33. Calcular o perímetro de um círculo.
function main (raio){
    // Verificar se o raio é positivo
    if (raio <= 0) {
        return "O raio deve ser um número positivo.";
    }

    // Calcular a circunferência do círculo
    const circunferencia = 2 * Math.PI * raio;

    return circunferencia;
}

// console.log(main(5));
module.exports = main;