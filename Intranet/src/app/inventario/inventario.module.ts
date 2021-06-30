import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { EquipamentoComponent } from "./equipamento/equipamento-cadastro.component";
import { EquipamentoInfoComponent } from "./equipamento/equipamento-details.component";
import { ListarEquipamentoComponent } from "./equipamento/equipamento-lista.component";
import { InventarioComponent } from "./inventario.component";

@NgModule({
    declarations: [
        InventarioComponent,
        EquipamentoComponent,
        ListarEquipamentoComponent,
        EquipamentoInfoComponent
    ],
    imports:[
        CoreModule,
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class InventarioModule{
    
}