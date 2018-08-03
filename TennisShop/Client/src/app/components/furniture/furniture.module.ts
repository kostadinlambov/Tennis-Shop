// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng5-validation';
import { FurnitureRoutingModule } from './furniture-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';


// Components and Directives
import { furnitureComponents } from '.';

// Services
import { FurnitureService } from './furniture.service';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        CustomFormsModule,
        FurnitureRoutingModule,
        NgxPaginationModule
    ],
    declarations: [
        ...furnitureComponents
    ],
    providers: [FurnitureService],
    exports: []
})

export class FurnitureModule { }


