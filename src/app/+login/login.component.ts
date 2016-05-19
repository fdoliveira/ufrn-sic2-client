import 'rxjs/Rx';   // Load all features

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/common';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl } from '@angular/common';

import {ILogin} from './shared/login.model';
import {IToken} from './shared/token.model';
import {LoginService} from './shared/login.service';

import { MdCard } from '@angular2-material/card/';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [LoginService],
  directives: [
    FORM_DIRECTIVES,
    MdButton,
    MdCheckbox,
    MdCard,
    MdInput]
})
export class LoginComponent implements OnInit {

  fb: FormBuilder;
  loginForm: ControlGroup;
  newTodo: Control;
  login: ILogin;
  errorMessage: string;

  constructor(fb: FormBuilder,
    private loginService: LoginService,
    private _router: Router) {
    this.fb = fb;

    this.buildForm();
  }

  ngOnInit(): void {    
    this.login = <ILogin>{};
    console.log('ngOnInit() called');
  }

  buildForm(): void {
    //this.newTodo = new Control('', Validators.required);

    this.loginForm = this.fb.group({
      'newTodo': this.newTodo
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      //this.todos.push(new TodoItem(this.newTodo.value, false));

      // How in hell do I reset this thing and prevent it from being validated?
      // The only thing that works is rebuilding the whole form/&%¤#""
      this.buildForm();
    }
  }

  loggedIn() {
    return false; //tokenNotExpired();
  }

  onLogin() {
    this.loginService.login(this.login)
      .subscribe(
      token => localStorage.setItem('token', JSON.stringify(token)),
      error => this.errorMessage = <any>error,
      () => this._router.navigate(['/']));

    console.log("Logged");
    console.log(localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id_token');

    this.loggedIn();
  }
}
