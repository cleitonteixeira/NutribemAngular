import { Component, OnInit } from "@angular/core";

import { EquipamentoService } from "./equipamento-cadastro.service"

import { Equipamento } from "./equipamento";
import { Unidade } from "../unidade/unidade";
import { Categoria } from "./categoria";

@Component({
    templateUrl: './equipamento-cadastro.component.html'
})
export class EquipamentoComponent implements OnInit{

    public equipamento: String = '';
    public unidadeIdUnidade: Number;
    public categoriaIdCategoria: Number;
    public descricao: String = '';
    public sequencialAtual: Number;

    newEquipamento: Equipamento;
    _equipamentos: Equipamento [] = [];
    equipamentos: Equipamento [] = [];

    _unidades: Unidade [] = [];
    unidades: Unidade [] = [];
    
    _categorias: Categoria [] = [];
    categorias: Categoria [] = [];

    sequencial: Number;

    constructor(private equipamentoService: EquipamentoService){
        this.newEquipamento = new Equipamento;
    }

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

        console.log(this.equipamento+' - '+this.categoriaIdCategoria+' - '+this.unidadeIdUnidade+' - '+this.sequencial+' - '+this.descricao);

        this.newEquipamento.nome = this.equipamento;
        this.newEquipamento.categoriaIdCategoria = this.categoriaIdCategoria;
        this.newEquipamento.sequencial = this.sequencial;
        this.newEquipamento.categoriaIdCategoria = this.categoriaIdCategoria;
        this.newEquipamento.unidadeIdUnidade = this.unidadeIdUnidade;
        this.newEquipamento.descricao = this.descricao;

        console.log(this.newEquipamento);
        this.equipamentoService.save(this.newEquipamento).subscribe({
            next: equipamento => console.log('Salvo com sucesso', equipamento),
            error: err => console.log("Error", err)
        });
    }
}