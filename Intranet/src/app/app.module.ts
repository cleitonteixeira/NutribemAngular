import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
 
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { Error404Component } from './error-404/error-404.component';
import { AppRoutingModule } from './app-routing.module';
import { GestorContratosModule } from './gestorcontratos/gestor.module';
import { InventarioModule } from './inventario/inventario.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    LoginModule,
    RouterModule,
    AppRoutingModule,
    GestorContratosModule,
    InventarioModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
