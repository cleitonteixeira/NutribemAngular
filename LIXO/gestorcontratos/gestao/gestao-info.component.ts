import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Gestao } from "./gestao";
import { GestaoService } from "./gestao.service";

@Component({
    templateUrl: './gestao-info.component.html'
})
export class GestaoInfoComponent implements OnInit{
    
    contrato: Gestao;
    
    constructor(private activateRoute: ActivatedRoute, private contratoService: GestaoService) {}
        
    ngOnInit(): void{
        this.contratoService.retornoById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({
            next: contrato => this.contrato = contrato,
            error: err => console.log("Error:",err)
        });
    }

    save(): void{
        this.contratoService.save(this.contrato).subscribe({
            next: contrato => console.log('Salvo com sucesso', contrato),
            error: err => console.log("Error", err)
        });
    }
}