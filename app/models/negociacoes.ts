import { Negociacao } from './negociacao.js'

export class Negociacoes {
    private negociacoes: Negociacao[] = [];//é o mesmo que usar esse tipo Array<Negociacao>


    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] { //é o mesmo que usar esse tipo ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}



