import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private toastrService: ToastrService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser['token']) {
            console.log('jwtToken2:', currentUser['token']);

            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${currentUser['token']}`,
                },
            });
        }

        return next.handle(request)
            .pipe(tap(
                (event: HttpEvent<any>) => {
                    console.log('event: ', event);
                    debugger;
                    // if (event instanceof HttpResponse && event.body.token && request.url.endsWith('login')) {
                    if (event instanceof HttpResponse && request.url.endsWith('login')) {
                        debugger;
                        console.log('login: ', event);
                        console.log('headeers: ', event.headers);
                        // this.toastrService.success('You have successfully logged in! - from Angular');
                        // this.toastrService.success(event['body']['message']);


                        this.saveToken(event['body']);
                        // this.router.navigate(['/furniture/all']);
                    }

                    // if (event instanceof HttpResponse && event.body.success && request.url.endsWith('register')) {
                    if (event instanceof HttpResponse && request.url.endsWith('register')) {
                        console.log('register: ', event);
                        // this.toastrService.success('You have successfully registered and logged in!  - from Angular');
                        // this.saveToken(event['body']);
                        this.toastrService.success(event['body']['message']);
                        this.router.navigate(['/login']);
                    }

                    if (event instanceof HttpResponse && event.body.success && request.url.endsWith('rackets/create')) {
                        console.log('create Furniture: ', event);
                        this.toastrService.success(event['body']['message']);
                        this.router.navigate(['/racket/all']);
                    }

                    if (event instanceof HttpResponse && event.body.success && request.url.indexOf('edit') > -1) {
                        console.log('edit Furniture: ', event);
                        this.toastrService.success(event['body']['message']);
                        this.router.navigate(['/racket/all']);
                    }
                }));
    }

    saveToken(data) {
        debugger;
        console.log('saveToken: ', '########################');
        const token = data.split(' ')[1];

        localStorage.setItem('currentUser', JSON.stringify({
            token,
            isAdmin: true,
            username: 'pesho'
        }));
        // localStorage.setItem('currentUser', JSON.stringify({
        //     user: data,
        //     token: data['token'],
        //     isAdmin: data['userData']['isAdmin']
        // },
        //     null,
        //     4));
        this.toastrService.success('You have successfully logged in! - from Angular');
        // this.toastrService.success(data['message']);
        this.router.navigate(['/home']);
    }

    // saveToken(data) {
    //     debugger;
    //     console.log('saveToken: ', '########################');
    //     localStorage.setItem('currentUser', JSON.stringify({
    //         user: data['userData'],
    //         token: data['token'],
    //         isAdmin: data['userData']['isAdmin']
    //     },
    //         null,
    //         4));
    //     this.toastrService.success(data['message']);
    //     this.router.navigate(['/home']);
    // }
}
