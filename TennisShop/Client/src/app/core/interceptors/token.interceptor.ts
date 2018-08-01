import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../users/users.service';

const appKey = 'kid_ryaKoAwE7'; // Here JWT from Server
const appSecret = '218c5675532648babe97c768fd32c650'; // Here JWT from Server
const jwtToken = localStorage.getItem('authtoken');


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private usersService: UsersService,
        private router: Router,
        private toastrService: ToastrService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        console.log('jwtToken:', jwtToken);
        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'
            },
        });
        // if (request.url.endsWith('login') || request.url.endsWith(appKey)) {
        //     request = request.clone({
        //         setHeaders: {
        //             // Need to be changed with JWT-headers, which to be sent to Server
        //             'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        //             'Content-Type': 'application/json'
        //         },
        //     });
        // } else {
        //     request = request.clone({
        //         setHeaders: {
        //             // Need to be changed with JWT-headers, which to be sent to Server
        //             'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        //             'Content-Type': 'application/json'
        //         },
        //     });
        // }

        return next.handle(request)
            .pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && request.url.endsWith('login')) {
                    console.log(event);
                    // this.toastrService.success('You have successfully logged in!');
                    this.successfulLoginAndRegister(event['body']);
                } else if (event instanceof HttpResponse && request.url.endsWith('register')) {
                    // this.toastrService.success('You have registered successfully!');
                    console.log('register: ', event);
                    this.successfulLoginAndRegister(event['body']);
                    // console.log('register: ', event);
                } else if (event instanceof HttpResponse && request.url.endsWith('_logout')) {
                    this.logOut();
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    this.toastrService.error(err['error']['message']);
                    switch (err.status) {
                        case 400:
                            // this.toastrService.error(err['error']['message']);
                            // this.router.navigate(['/login']);
                            break;
                        case 401:
                            // this.toastrService.error(err['error']['message']);
                            this.router.navigate(['/login']);
                            break;
                        case 404:
                            // this.toastrService.error(err['error']['message']);
                            this.router.navigate(['/page-not-found']);
                            break;
                        case 500:
                            // this.toastrService.error(err['error']['message']);
                            this.router.navigate(['/server-error']);
                            break;
                        default:
                            // this.toastrService.error(err['error']['message']);
                            this.router.navigate(['/page-not-found']);
                            break;
                    }
                }
            }));
    }

    logOut() {
        localStorage.clear();
        // this.authService.authtoken = '';
        this.toastrService.info('You have been successfully logged out!');
        this.router.navigate(['/login']);
    }

    successfulLoginAndRegister(data) {
        this.usersService.authtoken = data['token'];
        localStorage.setItem('authtoken', data['token']);
        // localStorage.setItem('username', data['userData']['username']);
        localStorage.setItem('e-mail', data['userData']['email']);
        this.toastrService.success(data['message']);
        this.router.navigate(['/home']);
    }
}
