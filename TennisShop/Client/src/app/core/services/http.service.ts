import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';
// const baseUrl = 'http://localhost:5000/';
const baseUrl = 'http://localhost:8000/';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    post (url, data) {
        return this.http
        .post(baseUrl + url, data);
        // .post(baseUrl + url, JSON.stringify(data));
        // .subscribe();
        // .subscribe(res => res.json());
    }

    // post (url, data) {
    //     return this.http
    //     .post(baseUrl + url, data,
    //     // JSON.stringify(registerModel),
    //         // {
    //         //     headers: this.createAuthHeaders('Basic')
    //         // });

    //     // ####################################
    //     // .post(baseUrl + url, JSON.stringify(data));
    //     // .subscribe();
    //     // .subscribe(res => res.json());
    // }

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
