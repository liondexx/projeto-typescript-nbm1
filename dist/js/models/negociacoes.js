export class Negociacoes {
    constructor() {
        this.negociacoes = []; //é o mesmo que usar esse tipo Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
