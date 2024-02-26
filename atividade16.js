// 16.	Calcular o produto escalar de dois vetores.
function main(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        throw new Error("Os vetores devem ter o mesmo comprimento.");
    }

    let produtoEscalar = 0;
    for (let i = 0; i < vetor1.length; i++) {
        produtoEscalar = produtoEscalar + vetor1[i] * vetor2[i];
    }

    return produtoEscalar;
}


// console.log(main([1, 2, 3], [4, 5, 6]));
module.exports = main;









// console.log(main(0));
module.exports = main;