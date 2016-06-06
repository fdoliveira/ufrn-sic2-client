import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';

import { IEntity } from './entity.model';
import { IToken } from './token.model';

@Injectable()
export class EntityService {
    protected _url;

    constructor(protected _http: Http) {
    }

    protected getHeader(): Headers {
        var _token: IToken = JSON.parse(localStorage.getItem("token"));
        var _headers = new Headers();

        _headers.append('Content-Type', 'application/json');
        _headers.append('token', _token.id);

        return _headers;
    }

    protected handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    public insert(entity: IEntity): Observable<IEntity> {
        return this._http.post(this._url, JSON.stringify(entity), { headers: this.getHeader() })
            .map((response: Response) => <IEntity>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    public update(entity: IEntity): Observable<IEntity> {
        return this._http.put(this._url + '/' + entity.id, JSON.stringify(entity), { headers: this.getHeader() })
            .map((response: Response) => <IEntity>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    public delete(entity: IEntity): Observable<IEntity> {
        return this._http.delete(this._url + '/' + entity.id, { headers: this.getHeader() })
            .map(res => res.json()
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError));
    }

    public getEntitys(): Observable<IEntity[]> {
        return this._http.get(this._url, { headers: this.getHeader() })
            .map((response: Response) => <IEntity[]>response.json().contatos)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public getEntity(id: string): Observable<IEntity> {
        return this.getEntitys()
            .map((entitys: IEntity[]) => entitys.find(p => p.id === id));
    }
}