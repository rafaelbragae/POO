export class Bicicleta {
    id: number
    modelo: string
    marca: string
    valor: number
    disponibilidade: boolean

    constructor(id: number, modelo: string, marca: string, valor: number, disponibilidade: boolean) {
        this.id = id;
        this.modelo = modelo;
        this.marca = marca;
        this.valor = valor;
        this.disponibilidade = disponibilidade;
    }
}