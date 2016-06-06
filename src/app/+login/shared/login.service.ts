import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { ILogin } from './login.model';
import { IToken } from '../../common/token.model';
import { EntityService } from '../../common/entity.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService extends EntityService {
    
    constructor(protected _http: Http) {
        super(_http);
        this._url = 'http://localhost:5000/tokens';
    }

    login(login: ILogin): Observable<IToken> {
        return this._http.post(this._url, JSON.stringify(login), this.getHeader)
            .map((response: Response) => <IToken>response.json().token)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);        
    }

}
