import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Equipamento } from "./equipamento";
import { EquipamentoService } from "./equipamento-cadastro.service";

@Component({
    templateUrl: './equipamento-details.component.html'
})
export class EquipamentoInfoComponent implements OnInit{
    
    salvo = false;
    alertText = '';
    type = '';

    equipamento: Equipamento;

    historicEquipamentosFiltrados: Equipamento[] = [];

    _historicEquipamentos: Equipamento[] = [];

    _filterBy: string;

    constructor(private activateRoute: ActivatedRoute, private equipamentoService: EquipamentoService, private router: Router) {}
        
    ngOnInit(): void{
        this.equipamentoService.retornoById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({
            next: equipamento => {
                this.equipamento = equipamento[0];
                console.log(equipamento[0]);
            },
            error: err => console.log("Error:",err)
        });
        this.returnHistoric();
    }

    returnHistoric(): void{
        this.equipamentoService.returnHistoric(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({
            next:equipamentos=>{
                this._historicEquipamentos = equipamentos;
                this.historicEquipamentosFiltrados = this._historicEquipamentos;
            },
            error: err => console.log('Error', err)
        });
    }

    save(): void{
        this.equipamentoService.save(this.equipamento).subscribe({
            next: equipamento =>{
                console.log('Salvo com sucesso', equipamento);
                
                this.alertText = "Salvo com sucesso!";
                this.type = "success";
                this.salvo = true;

                setTimeout(()=> {this.router.navigate(["inventario/listar"])}, 3000);
                
            } ,
            error: err => {
                console.log("Error", err)

                this.alertText = err;
                this.type = "danger";
                this.salvo = true;

                setTimeout(()=> {this.salvo = false;}, 3000);
            }
        });
    }
    set filtro(value: string){
        this._filterBy = value;

        this.historicEquipamentosFiltrados = this._historicEquipamentos.filter((equipamento: Equipamento)=> equipamento.nome.toLowerCase().indexOf(this._filterBy.toLowerCase())> -1);    
    }

    get filtro(){
        return this._filterBy;
    }
}