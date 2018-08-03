import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  bindingModel: DetailsFurnitureModel;
  id: string
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService
  ) { }

  ngOnInit() {
    this.furnitureService
      .getFurnitureById(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log('bindingModel: ', data);
        this.bindingModel = data;
      })
  }

  editFurniture() {
    this.furnitureService.editFurnitureById(this.bindingModel['id'], this.bindingModel)
      .subscribe(data => {
        console.log('editFurnitureById: ', data);
      });
  }
}
