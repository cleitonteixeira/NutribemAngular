import { Injectable } from '@angular/core';
import { Gestao } from './gestao'

@Injectable({
    providedIn: 'root'
})

export class GestaoService{

    retornaTudo (): Gestao[]{
        return contratos;
    }
    retornoById (id: number): Gestao{
        return contratos.find((contratoIterator: Gestao) => contratoIterator.id === id)
    }
    save (contrato: Gestao): void{
        if(contrato.id){
            const index = contratos.findIndex((contratoIterator: Gestao )=> contratoIterator.id === contrato.id);
            contratos[index] = contrato;
        }
    }
}
var contratos: Gestao[] = [
    {
        id: 1,
        cliente: 'Syngenta Formosa',
        contrato: 'CT.081.2018.01',
        unidadefaturamento: 'Syngenta Formosa NTB'
    },
    {
        id: 2,
        cliente: 'Syngenta Ituiutaba',
        contrato: 'CT.154.2018.01',
        unidadefaturamento: 'Syngenta Ituiutaba NTB'
    },
    {
        id: 3,
        cliente: 'Syngenta Matão',
        contrato: 'CT.156.2018.01',
        unidadefaturamento: 'Syngenta Matão NTB'
    }
    ,
    {
        id: 4,
        cliente: 'Syngenta Cascavel',
        contrato: 'CT.156.2018.01',
        unidadefaturamento: 'Syngenta Cascave NTB'
    },
    {
        id: 5,
        cliente: 'Corteva Formosa',
        contrato: 'CT.081.2018.01',
        unidadefaturamento: 'Corteva Formosa NTB'
    },
    {
        id: 6,
        cliente: 'Corteva Ituiutaba',
        contrato: 'CT.154.2018.01',
        unidadefaturamento: 'Corteva Ituiutaba NTB'
    },
    {
        id: 7,
        cliente: 'Corteva Matão',
        contrato: 'CT.156.2018.01',
        unidadefaturamento: 'Corteva Matão NTB'
    }
    ,
    {
        id: 8,
        cliente: 'Corteva Cascavel',
        contrato: 'CT.156.2018.01',
        unidadefaturamento: 'Corteva Cascavel NTB'
    }
];