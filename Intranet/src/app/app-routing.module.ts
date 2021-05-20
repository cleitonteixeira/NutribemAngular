import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./error-404/error-404.component";
import { GestorContratosComponent } from "./gestorcontratos/gestor.component";
import { LancamentoComponent } from "./gestorcontratos/lancamento/lancamento.component";
import { HomeComponent } from "./home/home.component";
import { EquipamentoComponent } from "./inventario/equipamento/equipamento-cadastro.component";
import { InventarioComponent } from "./inventario/inventario.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'gestorcontratos', component: GestorContratosComponent,
      children:[
        {
          path: 'lancamento', component: LancamentoComponent
        }
      ]
    },
    { path: 'inventario', component: InventarioComponent,
      children:[
        {
          path: 'cadastro', component: EquipamentoComponent
        }
      ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: Error404Component }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy'})]
})
export class AppRoutingModule { }