export class Aluguel {
    id_cliente: number
    id_loja: number
    id_bicicleta: number
    tempo: number
    forma_pagamento: string

    constructor(id_cliente: number, id_loja: number, id_bicicleta: number, tempo: number, forma_pagamento: string) {
        this.id_cliente = id_cliente;
        this.id_loja = id_loja;
        this.id_bicicleta = id_bicicleta;
        this.tempo = tempo;
        this.forma_pagamento = forma_pagamento;
    }
}