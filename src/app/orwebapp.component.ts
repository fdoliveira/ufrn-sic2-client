import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { AboutComponent } from './+about';
import { IToken } from './+login/shared';
import { LoginComponent } from './+login';
import { WorkspaceComponent } from './+workspace';
import { ContatoComponent } from './+contato';

import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

@Component({
  moduleId: module.id,
  selector: 'orwebapp-app',
  templateUrl: 'orwebapp.component.html',
  styleUrls: ['orwebapp.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdIcon
  ],
  providers: [MdIconRegistry, ROUTER_PROVIDERS],
})
@Routes([
  { path: '/about', component: AboutComponent },
  { path: '/login', component: LoginComponent },
  { path: '/workspace', component: WorkspaceComponent },
  { path: '/contato', component: ContatoComponent }
])
export class OrwebappAppComponent implements OnInit {
  
  isForm: boolean = false;

  views: Object[] = [
    {
      name: "Contato",
      description: "Cadastro de contato",
      icon: "business_center"
    },
    // {
    //   name: "Estado",
    //   description: "Cadastro de estado",
    //   icon: "person"
    // },
    {
      name: "LogOut",
      description: "Sair do sistema",
      icon: "power_settings_new"
    }
  ];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.loggedIn();
    console.log('ngOnInit() called');
  }

  onLogIn(): void {
    this._router.navigate(['/login']);
  }

  onMenuClick(menuName: string): void {
    switch (menuName) {
      case "Contato":
        this._router.navigate(['/contato']);
        break;
      case "LogOut":
        localStorage.removeItem('token');

        this.loggedIn();
        this._router.navigate(['/']);
        break;

      default:
        break;
    }
  }

  loggedIn() {
    var _token: IToken = JSON.parse(localStorage.getItem("token"));
    return _token != undefined;
  }
}
