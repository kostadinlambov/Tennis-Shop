// Components
import { AllFurnitureComponent } from './all-furniture/all-furniture.component';
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { MyFurnitureComponent } from './my-furniture/my-furniture.component';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';
import { DeleteFurnitureComponent } from './delete-furniture/delete-furniture.component';

// Directives
import { YearValidatorDirective } from './directives/year-validator.directive';
import { PriceValidatorDirective } from './directives/price-validator.directive';

export const furnitureComponents = [
    AllFurnitureComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    MyFurnitureComponent,
    EditFurnitureComponent,
    DeleteFurnitureComponent,
    YearValidatorDirective,
    PriceValidatorDirective,
];
