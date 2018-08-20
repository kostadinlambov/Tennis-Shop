import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AllUserModel } from './all-user/all-user.model';

const baseUrl = 'http://localhost:8000/users/';


@Injectable()
export class UsersService {

    private currentAuthtoken: string;
    constructor(private http: HttpClient) { }

    // register(user) {
    //     return this.httpService.post('auth/register', user);
    // }

    register(user) {
        return this.http.post(baseUrl + 'register', user);
    }

    // login(formData) {
    //     return this.httpService.post('auth/login', formData);
    // }
    login(formData) {
        return this.http.post('http://localhost:8000/login', formData);
    }

    getAll(): Observable<AllUserModel[]> {
        return this.http.get<AllUserModel[]>(baseUrl + 'all');
    }

    promote(id) {
        return this.http.post(baseUrl + 'promote?id=' + id, id);
    }

    demote(id){
        return this.http.post(baseUrl + 'demote?id=' + id, id);
    }

    createCar(formData) {
        return this.http.post('cars/create', formData);
    }

    checkIfLoggedIn(): boolean {
        return localStorage.getItem('token') !== null;
    }

    get authtoken() {
        return this.currentAuthtoken;
    }

    set authtoken(value: string) {
        this.currentAuthtoken = value;
    }

    get user() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser;
    }

    get token() {
        const token = localStorage.getItem('token');
        return token;
    }

    isAdmin() {
        if (this.token) {
            const payload = JSON.parse(atob(this.token.split('.')[1]));
            const role = payload['role'];
            if (role === 'ADMIN' || role === 'ROOT') {
                return true;
            }
            return false;
        }

        return false;
    }

    isAdminAfterChangeRole(role){
        if (role === 'ADMIN' || role === 'ROOT') {
            return true;
        }
        return false;
    }

    isRoot() {
        if (this.token) {
            const payload = JSON.parse(atob(this.token.split('.')[1]));
            const role = payload['role'];
            if (role === 'ROOT') {
                return true;
            }
            return false;
        }

        return false;
    }

    getUsername() {
        if (this.token) {
            const payload = JSON.parse(atob(this.token.split('.')[1]));
            const username = payload['sub'];
            console.log('username: ', username);
            return username;
        }
    }


    
}
