import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';

import { IContato } from './contato.model';
import { IToken } from '../../+login/shared';

@Injectable()
export class ContatoService {
    private _contatoUrl = 'http://localhost:5000/contatos';

    constructor(private _http: Http) {

     }
     
     getHeader(): Headers {
        var _token: IToken = JSON.parse(localStorage.getItem("token"));
        var _headers = new Headers();
        
        _headers.append('Content-Type', 'application/json');
        _headers.append('token', _token.id);
        
        return _headers; 
     }

    insert(contato: IContato): Observable<IContato> {
        return this._http.post(this._contatoUrl, JSON.stringify(contato), { headers: this.getHeader() })
            .map((response: Response) => <IContato>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    update(contato: IContato): Observable<IContato> {
        return this._http.put(this._contatoUrl + '/' + contato.id, JSON.stringify(contato), { headers: this.getHeader() })
            .map((response: Response) => <IContato>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    delete(contato: IContato): Observable<IContato> {
        return this._http.delete(this._contatoUrl + '/' + contato.id, { headers: this.getHeader() })
            .map(res => res.json()
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError));
    }

    getContatos(): Observable<IContato[]> {
        return this._http.get(this._contatoUrl, { headers: this.getHeader() })
            .map((response: Response) => <IContato[]>response.json().contatos)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getContato(id: string): Observable<IContato> {
        return this.getContatos()
            .map((contatos: IContato[]) => contatos.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
