"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliente = void 0;
const aluguel_1 = require("./aluguel");
const loja_1 = require("./loja");
const bicicleta_1 = require("./bicicleta");
class Cliente {

    constructor(nome, idade, peso, cpf, id, alugando) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.cpf = cpf;
        this.id = id;
        this.alugando = alugando;
    }
    alugar() {
        this.alugando = 'true';
    }
    devolver(quantia) {
        this.alugando = 'false';
    }
}

exports.cliente = Cliente;
const rafael = new aluguel_1.Aluguel('111222', '13', '1', '30', 'dinheiro', 'false');
const loja = new loja_1.Loja('aluga bike', 'rua rafael braga', '13');
const bike = new bicicleta_1.Bicicleta('1', 'kaloi', 'bmw', '20', 'true');
const contaRafael = new Cliente('Rafael', '21', '70', '12345678912', '111222');

contaRafael.alugar();
console.log(contaRafael.alugando);
contaRafael.devolver();
console.log(contaRafael.alugando);