import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
    BASIC_AUTH_TOKEN_SESSION_ATTRIBUTE_NAME = 'basicAuthToken';

    public username: string;
    public password: string;

    constructor(private http: HttpClient) {

    }

    authenticationService(username: string, password: string) {
        const authorization = this.createBasicAuthToken(username, password);
        return this.http.get(`http://localhost:8080/api/v1/basicauth`,
            {headers: {authorization}})
            .pipe(map((res) => {
                this.username = username;
                this.password = password;
                this.registerSuccessfulLogin(username, authorization);
            }));
    }

    createBasicAuthToken(username: string, password: string) {
        return `Basic ${window.btoa(`${username}:${password}`)}`;
    }

    registerSuccessfulLogin(username, token) {
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        sessionStorage.setItem(this.BASIC_AUTH_TOKEN_SESSION_ATTRIBUTE_NAME, token);
    }

    logout() {
        sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        this.username = null;
        this.password = null;
    }

    isUserLoggedIn() {
        const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        return user !== null;
    }

    getBasicAuthToken() {
        const token = sessionStorage.getItem(this.BASIC_AUTH_TOKEN_SESSION_ATTRIBUTE_NAME);
        return token === null ? '' : token;
    }
}
