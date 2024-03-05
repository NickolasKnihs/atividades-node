// 29. Calcular o cosseno de um ângulo.
function main (anguloGraus){
    // Converter o ângulo de graus para radianos
    const anguloRadianos = anguloGraus * (Math.PI / 180);
    
    // Calcular o cosseno do ângulo em radianos
    const cosseno = Math.cos(anguloRadianos);
    
    return cosseno;
}

// console.log(main(60));
module.exports = main;