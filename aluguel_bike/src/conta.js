"use strict";
class Conta {
    constructor(saldo, numero, dono) {
        this.saldo = saldo;
        this.numero = numero;
        this.dono = dono;
    }
    credita(quantia) {
        this.saldo += quantia;
    }
    debita(quantia) {
        this.saldo -= quantia;
    }
}
