import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarInventarioComponent } from "./components/navbar/navbar-inventario/navbar-inventario.component";
import { NavBarGestorComponent } from "./components/navbar/navbar-gestor/navbar-gestor.component";
import { NavBarHomeComponent } from "./components/navbar/navbar-home/navbar-home.component";
import { AlertFormComponent } from "./components/alerts/alert-formulario.component";

@NgModule({
    declarations:[
        NavBarGestorComponent,
        NavBarInventarioComponent,
        NavBarHomeComponent,
        AlertFormComponent
    ],
    imports:[
        RouterModule,
        CommonModule
    ],
    exports: [
        NavBarGestorComponent,
        NavBarInventarioComponent,
        NavBarHomeComponent,
        AlertFormComponent
    ]
})
export class CoreModule{

}