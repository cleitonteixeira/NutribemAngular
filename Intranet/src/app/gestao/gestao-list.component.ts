import { Component, OnInit } from '@angular/core'
import { Gestao } from './gestao'

@Component({
    selector: 'app-gestao-list',
    templateUrl: './gestao-list.component.html'
})

export class GestaoListComponent implements OnInit {

    contratos: Gestao[] = [];

    ngOnInit(): void {
        this.contratos = [
            {
                id: 1,
                cliente: 'Syngenta Formosa',
                contrato: 'CT.081.2018.01',
                unidadefaturamento: 'Syngenta Formosa'
            },
            {
                id: 2,
                cliente: 'Syngenta Ituiutaba',
                contrato: 'CT.154.2018.01',
                unidadefaturamento: 'Syngenta Ituiutaba'
            }
        ]
    }

}