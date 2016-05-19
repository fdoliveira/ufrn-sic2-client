import 'rxjs/Rx';   // Load all features

import { Http, Response } from '@angular/http';
import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { MdCard } from '@angular2-material/card/';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';
import {MdIcon} from '@angular2-material/icon';

import { IContato } from './shared/contato.model';
import { ContatoService } from './shared/contato.service';

@Component({
  moduleId: module.id,
  selector: 'app-contato',
  templateUrl: 'contato.component.html',
  styleUrls: ['contato.component.css'],
  directives: [
    ROUTER_DIRECTIVES, 
    MdButton,
    MdCheckbox,
    MdCard,
    MdInput,
    MdIcon
  ],
  providers: [ContatoService ]
})
export class ContatoComponent implements OnInit {

    id: string;
    isFormShowing: boolean = false;
    contato: IContato;
    errorMessage: string;
    contatos: IContato[];

    constructor(private _contatoService: ContatoService,
                private _router: Router) {
    }
    
    ngOnInit(): void {
        this.contato = <IContato>{};

        this._contatoService.getContatos()
            .subscribe(
            contatos => this.contatos = contatos,
            error =>  this.errorMessage = <any>error);
    }
    
    onOK(): void {
        if (this.contato.id == null)
            this._contatoService.insert(this.contato)
                    .subscribe(
                        contato => this.contato = contato,
                        error => this.errorMessage = <any>error,
                        () => this.ngOnInit());
        else
            this._contatoService.update(this.contato)
                    .subscribe(
                        contato => this.contato = contato,
                        error => this.errorMessage = <any>error,
                        () => this.ngOnInit());
        
        this.isFormShowing = !this.isFormShowing; 
    }   
    
    onCancel(): void {
        this.contato = <IContato>{};
        this.isFormShowing = !this.isFormShowing; 
    }
    
    getContato(id: string) {
        this._contatoService.getContato(id)
            .subscribe(
            contato => this.contato = contato,
            error => this.errorMessage = <any>error);
    }

    onDelete(id: string): void {
        this.contato.id = id;
        this._contatoService.delete(this.contato)
            .subscribe(
                error => this.errorMessage = <any>error,
                () => this.ngOnInit());
    }
 
    onUpdate(id: string): void {
        this.getContato(id);
        if (this.contato != undefined)
          this.isFormShowing = !this.isFormShowing; 
    }
 
    onRefresh(): void {
        this.ngOnInit();
    }   
  
}
