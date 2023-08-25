import { Correntista } from "./correntista"

export class Conta {
    saldo: number = 0.0
    numero: string
    dono: Correntista

    constructor(numero:string, dono: Correntista) {
        this.numero = numero
        this.dono = dono
    }

    credita(quantia: number): void {
        this.saldo += quantia
    }

    debita(quantia: number): void {
        this.saldo -= quantia
    }
}

const joao: Correntista = new Correntista('Joao da Silva', '111222333-45')
const contaJoao = new Conta('123' , joao)
contaJoao.credita(100.0)

console.log(contaJoao.saldo)