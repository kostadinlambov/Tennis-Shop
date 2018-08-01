import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '../core/http.service';

@Injectable()
export class UsersService {
    private currentAuthtoken: string;
    constructor(private httpService: HttpService) { }

    register(user) {
        return this.httpService.post('auth/register', user);
    }

    login(formData) {
        return this.httpService.post('auth/login', formData);
    }

    logout() {
        return new Observable();
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // Use this after implement JWT and /logout Route on Server
        //     return this.http.post(logoutUrl,
        //         {},
        //         {
        //             headers: this.createAuthHeaders('Kinvey')
        //         });
    }

    createCar(formData) {
        return this.httpService.post('cars/create', formData);
    }

    checkIfLoggedIn(): boolean {
        // return this.currentAuthtoken === localStorage.getItem('authtoken');
        // return localStorage.getItem('authtoken') !== null || localStorage.getItem('authtoken') !== undefined ;
        return localStorage.getItem('currentUser') !== null;
    }

    get authtoken() {
        return this.currentAuthtoken;
    }

    set authtoken(value: string) {
        this.currentAuthtoken = value;
    }

    // private createAuthHeaders(type: string): HttpHeaders {
    //     if (type === 'Basic') {
    //         return new HttpHeaders({
    //             'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
    //             'Content-Type': 'application/json'
    //         });
    //     } else {
    //         return new HttpHeaders({
    //             'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
    //             'Content-Type': 'application/json'
    //         });
    //     }
    // }
}
