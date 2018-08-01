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
  // currentItem: Observable<DetailsFurnitureModel>;
  currentItem: Object;
  bindingModel: Object;
  id: string
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService
  ) {
    this.id = this.route.snapshot.params['id'];
    // this.bindingModel = new CreateFurnitureModel('', '', '', 0, '');
  }

  ngOnInit() {
    console.log(this.id);
    // this.currentItem = this.furnitureService.getDeatails(this.id);
    this.route.params.subscribe((params) => {
      if (params['id'] !== undefined) {
        const id = params['id']
        console.log('id: ', id);

        this.furnitureService.getDeatails(id)
          .subscribe(
            (item) => {
              // this.currentItem = item;
              // this.bindingModel =  this.currentItem;
              this.bindingModel =  item;
            },
            (err) => console.log(err)
          );
      }
    });
  }

  editFurniture(formData) {
    this.id = this.route.snapshot.params['id'];
    console.log('editForm: ', formData);
    console.log('id: ', this.id);
    this.furnitureService
      .edit(this.id, this.bindingModel)
      .subscribe(
        res => console.log('create Res: ', res),
        err => console.log('create Err: ', err),
    );
  }
}
