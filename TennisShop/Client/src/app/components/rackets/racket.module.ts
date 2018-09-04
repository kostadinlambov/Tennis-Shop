// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng5-validation';
import { RacketRoutingModule } from './racket-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgProgressModule } from 'ngx-progressbar';
import { MDBBootstrapModule, WavesModule, CardsFreeModule, ModalModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { UserModule } from '../users/users.module';


// Components and Directives
import { racketComponents } from '.';

// Services
import { RacketService } from './racket.service';
import { CategoryService } from './../categories/category.service';
import { RacketComponent } from './racket/racket.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        CustomFormsModule,
        RacketRoutingModule,
        NgxPaginationModule,
        NgxSpinnerModule,
        NgProgressModule,
        MDBBootstrapModule,
        WavesModule,
        ModalModule,
        InputsModule,
        ButtonsModule,
        CardsFreeModule,
        UserModule,
    ],
    declarations: [
        ...racketComponents,
        RacketComponent,
    ],
    providers: [
        RacketService,
        CategoryService
    ],
    exports: []
})
export class RacketModule { }
