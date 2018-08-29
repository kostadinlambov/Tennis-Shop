
// Modules
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule, CardsFreeModule, WavesModule, ModalModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserModule } from '../components/users/users.module';

// Components
import { NavBarComponent } from './nav-bar/nav-bar.component';

// Services
import { HttpService } from './services/http.service';
import { UsersService } from '../components/users/services/users.service';
import { DataSharingService } from './services/app.data-sharing.service';


// Guards
import { AuthGuard } from './guards/auth.guard';
import { LoginAndRegisterGuard } from './guards/loginAndRegister.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';

// Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MDBBootstrapModule,
    CardsFreeModule,
    WavesModule,
    ModalModule,
    InputsModule,
    ButtonsModule,
    NgxSpinnerModule,
    UserModule

  ],
  providers: [
    HttpService,
    UsersService,
    AuthGuard,
    LoginAndRegisterGuard,
    AdminAuthGuard,
    DataSharingService,
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
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class CoreModule { }
