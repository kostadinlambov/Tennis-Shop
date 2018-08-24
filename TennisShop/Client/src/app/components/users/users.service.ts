import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AllUserModel } from './models/all-user.model';
import { DetailsUserModel } from './models/details-user.model';
import { RegisterUser } from './models/register-user.model';

const baseUrl = 'http://localhost:8000/users/';


@Injectable()
export class UsersService {

    private currentAuthtoken: string;
    constructor(private http: HttpClient) { }

    // Requests to the Server

    register(user) {
        return this.http.post(baseUrl + 'register', user);
    }

    login(formData) {
        return this.http.post('http://localhost:8000/login', formData);
    }

    getAll(): Observable<AllUserModel[]> {
        return this.http.get<AllUserModel[]>(baseUrl + 'all');
    }

    getUserDetails(id): Observable<DetailsUserModel>{
        return this.http.get<DetailsUserModel>(baseUrl + `details/${id}`);
    }

    getUserByUsername(username): Observable<DetailsUserModel> {
        return this.http.get<DetailsUserModel>(baseUrl + `details/username/${username}`);
    }


    getUserEditDetails(id): Observable<DetailsUserModel> {
        return this.http.get<DetailsUserModel>(baseUrl + `editDetails/${id}`);
    }

    updateUser(id , formData): Observable<RegisterUser> {
        return this.http.put<RegisterUser>(baseUrl + `update`, formData);
    }

    deleteUser(id) {
        return this.http.delete(baseUrl + `delete/${id}`);
    }

    promote(id) {
        return this.http.post(baseUrl + 'promote?id=' + id, id);
    }

    demote(id){
        return this.http.post(baseUrl + 'demote?id=' + id, id);
    }

    // Utility Functions

    checkIfLoggedIn(): boolean {
        return localStorage.getItem('token') !== null;
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
        debugger;
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

    checkIfUserIsRoot(userData){
        debugger;
        const role = userData[0]['authority'];
        if (role === 'ROOT') {
            return true;
        }
        return false;
    }

    getUsername() {
        if (this.token) {
            const payload = JSON.parse(atob(this.token.split('.')[1]));
            const username = payload['sub'];
            // console.log('username: ', username);
            return username;
        }
    }

    getId(){
        if (this.token) {
            const payload = JSON.parse(atob(this.token.split('.')[1]));
            const id = payload['id'];
            // console.log('id: ', id);
            return id;
        }
    }

    get token() {
        const token = localStorage.getItem('token');
        return token;
    }

    get authtoken() {
        return this.currentAuthtoken;
    }

    set authtoken(value: string) {
        this.currentAuthtoken = value;
    }

    // get user() {
    //     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     return currentUser;
    // }

    createCar(formData) {
        return this.http.post('cars/create', formData);
    }
}
