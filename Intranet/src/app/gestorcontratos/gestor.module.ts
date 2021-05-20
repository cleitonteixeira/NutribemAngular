import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { GestorContratosComponent } from "./gestor.component";
import { LancamentoComponent } from "./lancamento/lancamento.component";

@NgModule({
    declarations: [
        LancamentoComponent,
        GestorContratosComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        CoreModule,
        RouterModule
        
    ]
})
export class GestorContratosModule{

}