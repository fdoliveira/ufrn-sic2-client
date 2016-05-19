import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { ILogin } from './login.model';
import { IToken } from './token.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
    private _loginUrl = 'http://localhost:5000/tokens';

    constructor(private _http: Http) {
    }

    login(login: ILogin): Observable<IToken> {
        let body = JSON.stringify(login);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._loginUrl, body, options)
            .map((response: Response) => <IToken>response.json().token)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);        
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
