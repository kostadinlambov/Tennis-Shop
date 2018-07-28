import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpService } from './http.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginAndRegisterGuard } from './guards/loginAndRegister.guard';
import { HTTP_INTERCEPTORS } from '../../../node_modules/@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [RouterModule, CommonModule],
  providers: [
    HttpService,
    AuthGuard,
    LoginAndRegisterGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})

export class CoreModule { }
