import { Component, OnInit } from '@angular/core'
import { Gestao } from './gestao'
import { GestaoService } from './gestao.service';

@Component({
    templateUrl: './gestao-list.component.html'
})

export class GestaoListComponent implements OnInit {

    contratosFiltrados: Gestao[] = [];

    _contratos: Gestao[] = [];

    _filterBy: string;

    constructor( private gestaoService: GestaoService){}

    ngOnInit(): void {
        this._contratos = this.gestaoService.retornaTudo();
        this.contratosFiltrados = this._contratos;
    }

    set filtro(value: string){
        this._filterBy = value;

        this.contratosFiltrados = this._contratos.filter((contrato: Gestao)=> contrato.cliente.toLowerCase().indexOf(this._filterBy.toLowerCase())> -1);    
    }

    get filtro(){
        return this._filterBy;
    }
}