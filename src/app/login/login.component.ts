import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    selector: 'login',
})
export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })
}