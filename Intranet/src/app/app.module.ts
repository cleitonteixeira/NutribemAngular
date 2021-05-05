import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router";

 
import { AppComponent } from './app.component';
import { GestaoListComponent } from './gestao/gestao-list.component';
import { NavBarComponent } from './navbar/navbar.component';
import { Error404Component } from './error-404/error-404.component';
import { GestaoInfoComponent } from './gestao/gestao-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GestaoListComponent,
    NavBarComponent,
    GestaoInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'gestao', component: GestaoListComponent
      },
      {
        path: 'gestao/detalhe/:id', component: GestaoInfoComponent
      },
      {
        path: '', redirectTo: 'gestao', pathMatch: 'full' 
      },
      
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
