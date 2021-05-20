import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common";
import { GestaoListComponent } from "./gestao/gestao-list.component";
import { GestaoInfoComponent } from "./gestao/gestao-info.component";

@NgModule({
    declarations:[
        GestaoListComponent,
        GestaoInfoComponent
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