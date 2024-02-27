// 11. Verificar se um ano é bissexto.
function main (ano){
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        return true;
    } else {
        return false;
    }
}








//console.log(main(2023));
module.exports = main;