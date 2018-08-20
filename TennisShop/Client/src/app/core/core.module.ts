
// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { NavBarComponent } from './nav-bar/nav-bar.component';

// Services
import { HttpService } from './services/http.service';
import { UsersService } from './../components/users/users.service';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { LoginAndRegisterGuard } from './guards/loginAndRegister.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';

// Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [RouterModule, CommonModule],
providers: [
    HttpService,
    UsersService,
    AuthGuard,
    LoginAndRegisterGuard,
    AdminAuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})

export class CoreModule { }
