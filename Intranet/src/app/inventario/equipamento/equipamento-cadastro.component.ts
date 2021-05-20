import { Component, OnChanges, OnInit } from "@angular/core";
import { Equipamento } from "./equipamento";
import { EquipamentoService } from "./equipamento-cadastro.service"
import { Unidade } from "./unidade";
import { Categoria } from "./categoria";
import { FormGroup } from "@angular/forms";

@Component({
    templateUrl: './equipamento-cadastro.component.html'
})
export class EquipamentoComponent implements OnInit{

    equipamento: Equipamento;
    _equipamentos: Equipamento [] = [];
    equipamentos: Equipamento [] = [];

    _unidades: Unidade [] = [];
    unidades: Unidade [] = [];
    
    _categorias: Categoria [] = [];
    categorias: Categoria [] = [];

    sequencial: Number;

    constructor(private equipamentoService: EquipamentoService){}

    ngOnInit():void{
        this.retornaUnidades();
        this.retornaCategorias();

    }

    retornaSequencial(id: number): void{
        this.equipamentoService.retornaSequencial(id).subscribe({
            next:sequencial=>{
                this.sequencial = sequencial['Sequencial']
            }
        });
    }

    retornaUnidades(): void{
        this.equipamentoService.retornaUnidades().subscribe({
            next:unidades=>{
                this._unidades = unidades;
                this.unidades = this._unidades;
                console.log(this._unidades);
            },
            error: err => console.log('Error', err)
        });
    }
    retornaCategorias(): void{
        this.equipamentoService.retornaCategorias().subscribe({
            next:categorias=>{
                this._categorias = categorias;
                this.categorias = this._categorias;
                console.log(this._categorias);
                
            },
            error: err => console.log('Error', err)
        });
    }
    save(): void{
        this.equipamentoService.save(this.equipamento).subscribe({
            next: contrato => console.log('Salvo com sucesso', contrato),
            error: err => console.log("Error", err)
        });
    }
}