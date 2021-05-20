import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CoreModule,
        RouterModule
    ]
})
export class LoginModule{
    
}