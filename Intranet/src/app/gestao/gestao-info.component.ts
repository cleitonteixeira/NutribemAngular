import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Gestao } from "./gestao";
import { GestaoService } from "./gestao.service";

@Component({
    templateUrl: './gestao-info.component.html'
})
export class GestaoInfoComponent implements OnInit{
    
    contrato: Gestao;
    
    constructor(private activateRoute: ActivatedRoute, private contratoService: GestaoService) {}
        
    
    ngOnInit(): void{
        this.contrato = this.contratoService.retornoById(+this.activateRoute.snapshot.paramMap.get('id'));
    }

    save(): void{
        this.contratoService.save(this.contrato)
    }
}