import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        CoreModule,
        RouterModule
    ]
})
export class HomeModule{

}