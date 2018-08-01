// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng5-validation';

// Components
import { AllFurnitureComponent } from './all-furniture/all-furniture.component';
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { MyFurnitureComponent } from './my-furniture/my-furniture.component';
import { DeleteFurnitureComponent } from './delete-furniture/delete-furniture.component';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';

//Directives
import { YearValidatorDirective } from './directives/year-validator.directive';
import { PriceValidatorDirective } from './directives/price-validator.directive';

// Services
import { FurnitureService } from './furniture.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        CustomFormsModule
    ],
    declarations: [
        AllFurnitureComponent,
        CreateFurnitureComponent,
        FurnitureDetailsComponent,
        MyFurnitureComponent,
        YearValidatorDirective,
        PriceValidatorDirective,
        DeleteFurnitureComponent,
        EditFurnitureComponent
    ],
    providers: [FurnitureService],
    exports: []
})

export class FurnitureModule { }


