import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarInventarioComponent } from "./components/navbar/navbar-inventario/navbar-inventario.component";
import { NavBarGestorComponent } from "./components/navbar/navbar-gestor/navbar-gestor.component";
import { NavBarHomeComponent } from "./components/navbar/navbar-home/navbar-home.component";

@NgModule({
    declarations:[
        NavBarGestorComponent,
        NavBarInventarioComponent,
        NavBarHomeComponent
    ],
    imports:[
        RouterModule,
        CommonModule
    ],
    exports: [
        NavBarGestorComponent,
        NavBarInventarioComponent,
        NavBarHomeComponent
    ]
})
export class CoreModule{

}