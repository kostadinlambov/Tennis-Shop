import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { CollectionOfItemsModel } from '../models/collectionOfItems.model';
import { ToastrService } from 'ngx-toastr';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {

  furnitures: Observable<DetailsFurnitureModel[]>;
  // furnitures: DetailsFurnitureModel[]

  constructor(
    private furnitureService: FurnitureService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getMyFurniture();
  }

  getMyFurniture() {

    this.furnitures = this.furnitureService.myFurniture();
  }
}
