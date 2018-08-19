// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng5-validation';
import { RacketRoutingModule } from './racket-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

// Components and Directives
import { racketComponents } from '.';

// Services
import { RacketService } from './racket.service';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        CustomFormsModule,
        RacketRoutingModule,
        NgxPaginationModule
    ],
    declarations: [
        ...racketComponents,
    ],
    providers: [
        RacketService
    ],
    exports: []
})
export class RacketModule { }
