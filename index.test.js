const test = require('tape')
const func = require('./teste')
/*
test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(10,5) === 5, "Desconto true 01")
    t.end()
})

test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(11,5) === 5, "Desconto false 02")
    t.end()
})
test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(20,5) === 15, "Desconto true 03")
    t.end()
})
test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(100,50) === 50, "Desconto true 04")
    t.end()
})
test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(1000,500) === 500, "Desconto true 05")
    t.end()
})*/


test('Valida se é número', (t) => {
    t.assert(func.verificarNumero(100) === true, "Validação true 06")
    t.end()
})

test('Valida se é número', (t) => {
    t.assert(func.verificarNumero('Vitor') === true, "Validação true 06")
    t.end()
})