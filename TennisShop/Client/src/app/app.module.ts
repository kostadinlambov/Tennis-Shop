// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutesModule } from './routes.module';
import { CoreModule } from './core/core.module';
import { FurnitureModule } from './components/furniture/furniture.module';
import { CustomFormsModule } from 'ng5-validation';
import { UserModule } from './components/users/users.module';
import { PagesModule } from './components/pages/pages.module';
import { SharedModule } from './components/shared/shared.module';
import { RacketModule } from './components/rackets/racket.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    // ToastrModule.forRoot({
    //   enableHtml: true,
    //   easing: 'ease-in',
    //   progressBar: true,
    //   preventDuplicates: true,
    // })
    HttpClientModule,
    CoreModule,
    UserModule,
    RacketModule,
    PagesModule,
    FurnitureModule,
    CustomFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
