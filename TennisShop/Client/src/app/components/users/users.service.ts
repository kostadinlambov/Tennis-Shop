import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';

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


    // logout() {
    //     return new Observable();
    // }

    createCar(formData) {
        return this.httpService.post('cars/create', formData);
    }

    checkIfLoggedIn(): boolean {
        return localStorage.getItem('currentUser') !== null;
    }

    get authtoken() {
        return this.currentAuthtoken;
    }

    set authtoken(value: string) {
        this.currentAuthtoken = value;
    }

    isAdmin() {
        if (this.user) {
            return this.user.isAdmin;
        }

        return false;
    }

    get user() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        return currentUser;
    }
}
