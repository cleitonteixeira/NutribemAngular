import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common";
import { NavBarComponent } from "../navbar/navbar.component";
import { GestaoListComponent } from "./gestaocontratos/gestao-list.component";
import { GestaoInfoComponent } from "./gestaocontratos/gestao-info.component";

@NgModule({
    declarations:[
        NavBarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'gestao', component: GestaoListComponent
            },
            {
                path: 'gestao/detalhe/:id', component: GestaoInfoComponent
            }
        ])
    ]
})
export class GestaoModule{

}