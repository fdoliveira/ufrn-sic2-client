import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';

import { IContato } from './contato.model';
import { EntityService } from '../../common/entity.service';

@Injectable()
export class ContatoService extends EntityService {

    constructor(protected _http: Http) {
        super(_http);
        this._url = 'http://localhost:5000/contatos';
    }

}
