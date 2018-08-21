// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng5-validation';
import { CategoryRoutingModule } from './category-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

// Components and Directives
import { categoryComponents } from '.';

// Services
import { CategoryService } from './category.service';


@NgModule({
    imports: [
    FormsModule,
        CommonModule,
        RouterModule,
        CustomFormsModule,
        CategoryRoutingModule,
        NgxPaginationModule
    ],
    declarations: [
        ...categoryComponents
    ],
    providers: [
        CategoryService
    ],
    exports: []
})
export class CategoryModule { }
