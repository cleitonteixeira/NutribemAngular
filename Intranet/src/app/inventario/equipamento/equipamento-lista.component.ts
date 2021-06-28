import { Component, OnInit } from "@angular/core";

import { EquipamentoService } from "./equipamento-cadastro.service"

import { Equipamento } from "./equipamento";

@Component({
    templateUrl: './equipamento-listar.component.html'
})
export class ListarEquipamentoComponent implements OnInit{

    equipamentosFiltrados: Equipamento[] = [];

    _equipamentos: Equipamento[] = [];

    _filterBy: string;

    constructor( private equipamentoService: EquipamentoService){}

    ngOnInit(): void {

        this.retornaTudo();
        
    }

    retornaTudo(): void{
        this.equipamentoService.retornaTudo().subscribe({
            next:equipamentos=>{
                this._equipamentos = equipamentos;
                this.equipamentosFiltrados = this._equipamentos;
            },
            error: err => console.log('Error', err)
        });
    }

    /*deleteById(contratoId: number): void{
        this.equipamentoService.deleteById(contratoId).subscribe({
            next: () => {
                console.log("Removido com sucesso");
                this.retornaTudo();
            },
            error: err => console.log('Error', err)
        });
    }*/

    set filtro(value: string){
        this._filterBy = value;

        this.equipamentosFiltrados = this._equipamentos.filter((equipamento: Equipamento)=> equipamento.nome.toLowerCase().indexOf(this._filterBy.toLowerCase())> -1);    
    }

    get filtro(){
        return this._filterBy;
    }
}