import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-alert-form',
    templateUrl: './alert-formulario.component.html'
})

export class AlertFormComponent{
    @Input() type = '';
    @Input() alertText = '';
}