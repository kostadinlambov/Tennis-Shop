import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CarRoutesModule } from './routes.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './users/users.module';



import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// import { NavbarComponent } from './core/navbar-component';
// import { RegisterComponent } from './users/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CoreModule,
    UserModule,
    CarRoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
