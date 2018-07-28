import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';
const baseUrl = 'http://localhost:5000/';

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
}
