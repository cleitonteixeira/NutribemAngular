import { Component, OnInit } from "@angular/core";
import { Login } from "./login";
import { LoginService } from "./login.service";
 
@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

    login: Login;

    constructor(private loginService: LoginService){}

    ngOnInit(): void {

        console.log("Teste");
        
    }

}