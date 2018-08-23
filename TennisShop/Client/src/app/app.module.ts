// Modules
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutesModule } from './routes.module';
import { CoreModule } from './core/core.module';
import { CustomFormsModule } from 'ng5-validation';
import { PagesModule } from './components/pages/pages.module';
import { SharedModule } from './components/shared/shared.module';
import { MDBBootstrapModule, CardsFreeModule, WavesModule, ModalModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { NgProgressModule } from 'ngx-progressbar';
import { NgxSpinnerModule } from 'ngx-spinner';


// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    CardsFreeModule,
    ModalModule,
    InputsModule,
    ButtonsModule,
    NgProgressModule,
    NgxSpinnerModule,
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
    PagesModule,
    CustomFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
