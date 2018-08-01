import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    jwtToken: string = localStorage.getItem('authtoken');
    constructor(
        private toastrService: ToastrService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(catchError((err: HttpErrorResponse) => {

                switch (err.status) {
                    case 401:
                        if (err.error.errors) {
                            for (const e of Object.values(err.error.errors)) {
                                this.toastrService.error(e.toString(), 'Error!');
                            }
                        }
                        this.toastrService.error(err['error']['message'], 'Error!');
                        break;
                    case 400:
                        console.log('err:', err);

                        if (err.error.errors) {
                            for (const e of Object.values(err.error.errors)) {
                                this.toastrService.error(e.toString(), 'Error!');
                            }
                        }
                        // else {
                        //     this.toastrService.error(err['error']['message'], 'Error!');
                        // }
                        this.toastrService.error(err['error']['message'], 'Error!');

                        break;
                    case 404:
                        this.toastrService.error(err['error']['message'], 'Error!');
                        this.router.navigate(['/page-not-found']);
                        break;
                    case 500:
                        this.toastrService.error(err['error']['message'], 'Error!');
                        this.router.navigate(['/server-error']);
                        break;
                    default:
                        this.toastrService.error(err['error']['message'], 'Error!');
                        this.router.navigate(['/page-not-found']);
                        break;
                }
                return throwError(err);
            }));
    }
}
