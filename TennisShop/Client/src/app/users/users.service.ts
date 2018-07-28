import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '../core/http.service';

@Injectable()
export class UsersService {
    private currentAuthtoken: string;
    constructor(private httpService: HttpService) { }

    register(user)  {
        return this.httpService.post('auth/signup', user);
    }

    login(formData)  {
        return this.httpService.post('auth/login', formData);
    }

    logout() {
    //     return this.http.post(logoutUrl,
    //         {},
    //         {
    //             headers: this.createAuthHeaders('Kinvey')
    //         });
    // const sequence = new Observable();
        return new Observable();
    }

    checkIfLoggedIn() {
        return this.currentAuthtoken === localStorage.getItem('authtoken');
    }

    get authtoken() {
        return this.currentAuthtoken;
    }

    set authtoken(value: string) {
        this.currentAuthtoken = value;
    }

    // getMoviesInTheaters(): Observable<Movies> {
    //     return this.http.get<Movies>(`${this.path}${this.moviesInTheaters}${this.authentication}${apiKey}`);
    // }
}
