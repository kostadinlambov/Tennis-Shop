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

        // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const token = localStorage.getItem('token');

        if (token) {
            console.log('jwtToken2:', token);

            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`,
                },
            });
        }

        return next.handle(request)
            .pipe(tap(
                (event: HttpEvent<any>) => {
                    console.log('event: ', event);
                    debugger;
                    if (this.checkUrl(event, request)) {
                        console.log('Event : ', event);
                        this.toastrService.success(event['body']['message']);
                        // this.router.navigate(['home']);
                    }

                    if (event instanceof HttpResponse && request.url.endsWith('login')) {
                        debugger;
                        console.log('login: ', event);
                        console.log('headers: ', event.headers);
                        this.saveToken(event['body']);
                        // this.router.navigate(['/home']);
                    }

                    if (event instanceof HttpResponse && request.url.endsWith('register')) {
                        console.log('register: ', event);
                        this.toastrService.success(event['body']['message']);
                        this.router.navigate(['/user/login']);
                    }

                    if (event instanceof HttpResponse && event.body.success && request.url.endsWith('rackets/create')) {
                        console.log('create Racket: ', event);
                        this.toastrService.success(event['body']['message']);
                        this.router.navigate(['/racket/all']);
                    }

                    if (event instanceof HttpResponse && event.body.success && request.url.indexOf('rackets/edit') > -1) {
                        console.log('edit Racket: ', event);
                        this.toastrService.info(event['body']['message']);
                        this.router.navigate(['/racket/all']);
                    }

                    if (event instanceof HttpResponse && event.body.success && request.url.indexOf('rackets/delete') > -1) {
                        console.log('delete Racket: ', event);
                        this.toastrService.info(event['body']['message']);
                        this.router.navigate(['/racket/all']);
                    }
                }));
    }

    checkUrl(event, request) {
        const promoteUserUrl = request.url.indexOf('users/promote') > -1;
        const demoteUserUrl = request.url.indexOf('users/demote') > -1;
        const updateUserUrl = request.url.indexOf('users/update') > -1;
        const deleteUserUrl = request.url.indexOf('users/delete') > -1;
        const createCategoryUrl = request.url.indexOf('categories/create') > -1;
        const restoreCategoryUrl = request.url.indexOf('categories/restore') > -1;
        const deleteCategoryUrl = request.url.indexOf('categories/delete') > -1;
        const editCategoryUrl = request.url.indexOf('categories/edit') > -1;
        const orderRacketUrl = request.url.indexOf('orders/order') > -1;
        const checkoutUrl = request.url.indexOf('orders/checkout') > -1;
        const removeOrderUrl = request.url.indexOf('orders/remove') > -1;
        const clearLogsUrl = request.url.indexOf('logs/clear') > -1;
        const allLogsUrl = request.url.indexOf('logs/all') > -1;
        const findByUsernameLogsUrl = request.url.indexOf('logs/findByUserName') > -1;

        const success = promoteUserUrl || demoteUserUrl || updateUserUrl || deleteUserUrl
         || createCategoryUrl || restoreCategoryUrl || deleteCategoryUrl || editCategoryUrl
         || orderRacketUrl || checkoutUrl || removeOrderUrl || clearLogsUrl
         || findByUsernameLogsUrl || allLogsUrl;


        if (event instanceof HttpResponse && event.body.success && success) {
            return true;
        }

        return false;
    }

    saveToken(data) {
        debugger;
        console.log('saveToken: ', '########################');
        const token = data.split(' ')[1];

        const payload = JSON.parse(atob(token.split('.')[1]));
        const role = payload['role'];
        console.log('role: ', role);

        localStorage.setItem('token', token),

        this.toastrService.success('You have successfully logged in.');
        // this.toastrService.success(data['message']);
        this.router.navigate(['/home']);
    }

}
