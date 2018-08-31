import { Component, OnInit } from '@angular/core';
import { DetailsRacketModel } from '../models/deatils-racket.model';
import { ActivatedRoute } from '@angular/router';
import { RacketService } from '../racket.service';
import { CreateRacketModel } from '../models/create-racket.model';
import { Observable } from 'rxjs';
import { AllCategoryModel } from './../../categories/all-category/models/all-category.model';
import { CategoryService } from './../../categories/category.service';

@Component({
  selector: 'app-edit-racket',
  templateUrl: './edit-racket.component.html',
  styleUrls: ['./edit-racket.component.css']
})
export class EditRacketComponent implements OnInit {
  bindingModel: CreateRacketModel;
  id: string;
  allCategories$: Observable<AllCategoryModel[]>;
  constructor(
    private route: ActivatedRoute,
    private racketService: RacketService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.racketService
      .getRacketDeatails(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log('bindingModel: ', data);
        this.bindingModel = data;
      });
    this.allCategories$ =  this.categoryService.getAll();

  }

  edit() {
    this.racketService.editRacket(this.bindingModel['id'], this.bindingModel)
      .subscribe(data => {
        console.log('editRacketById: ', data); 
      });
  }
}
