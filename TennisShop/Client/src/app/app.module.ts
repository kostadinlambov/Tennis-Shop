// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarRoutesModule } from './routes.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './users/users.module';
import { FurnitureModule } from './furniture/furniture.module';
import { CustomFormsModule } from 'ng5-validation';


// Components
import { AppComponent } from './app.component';

// import { NavbarComponent } from './core/navbar-component';
// import { RegisterComponent } from './users/register.component';

@NgModule({
  declarations: [
    AppComponent,
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
    PagesModule,
    FurnitureModule,
    CustomFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
