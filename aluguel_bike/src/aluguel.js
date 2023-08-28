"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluguel = void 0;
class Aluguel {
    constructor(id_cliente, id_loja, id_bicicleta, tempo, forma_pagamento) {
        this.id_cliente = id_cliente;
        this.id_loja = id_loja;
        this.id_bicicleta = id_bicicleta;
        this.tempo = tempo;
        this.forma_pagamento = forma_pagamento;
    }
}
exports.Aluguel = Aluguel;
