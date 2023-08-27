import { aluguel } from "./aluguel";
import { loja } from "./loja";
import { bicicleta } from "./bicicleta";


export class Cliente {
    nome: string
    idade: number
    peso: number
    cpf: string
    id: number
    alugando: boolean

    constructor(nome: string, idade: number, peso: number, cpf: string, id: number, alugando: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.cpf = cpf;
        this.id = id;
        this.alugando = alugando;
    }

    alugar() {
        this.alugando = true;
    }
  
    devolver() {
        this.alugando = false;
    }
}

const rafael: Aluguel = new aluguel(111222, 13, 1, 30, 'dinheiro');
const loja: Loja = new loja('aluga bike', 'rua rafael braga', 13);
const bike: Bicicleta = new bicicleta(1, 'kaloi', 'bmw', 20, true);
const contaRafael = new Cliente('Rafael', 21, 70, '12345678912', 111222, false);

contaRafael.alugar();
console.log(contaRafael.alugando);
contaRafael.devolver();
console.log(contaRafael.alugando);