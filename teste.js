function aplicarDesconto(valor, desconto) {
    return valor - desconto
}

function verificarNumero(numero) {
    return !isNaN(numero)
}

console.log('APP funcionando');
console.log('aplicarDescontotest()');

module.exports = {aplicarDesconto};
module.exports = {verificarNumero};