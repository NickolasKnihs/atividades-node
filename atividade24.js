// 24. Calcular o seno de um ângulo.
function main (anguloGraus){
    // Converter o ângulo de graus para radianos
    const anguloRadianos = anguloGraus * (Math.PI / 180);
    
    // Calcular o seno do ângulo em radianos
    const seno = Math.sin(anguloRadianos);
    
    return seno;
}

// console.log(main(180));
module.exports = main;