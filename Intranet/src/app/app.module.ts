import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
 
import { AppComponent } from './app.component';
import { GestaoListComponent } from './gestao/gestao-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GestaoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
