import { Component, OnInit } from '@angular/core';
import { CreateRacketModel } from '../models/create-racket.model';
import { RacketService } from '../racket.service';
import { Observable } from 'rxjs';
import { AllCategoryModel } from './../../categories/all-category/models/all-category.model';
import { CategoryService } from './../../categories/category.service';

@Component({
  selector: 'app-create-racket',
  templateUrl: './create-racket.component.html',
  styleUrls: ['./create-racket.component.css']
})
export class CreateRacketComponent implements OnInit {
  bindingModel: CreateRacketModel;
  categories$;
  allCategories$: Observable<AllCategoryModel[]>;
  selectedFile: File = null;

  constructor(
    private racketService: RacketService,
    private categoryService: CategoryService,
  ) {
    this.bindingModel = new CreateRacketModel('', '', '', 0, 0, 0, '', '', '', '');
  }

  ngOnInit() {
    this.allCategories$ =  this.categoryService.getAll();
  }

  createRacket(formData) {
    console.log(formData);
    debugger;
    this.racketService
      .createRacket(this.bindingModel)
      .subscribe(
        res => console.log('create Res: ', res),
        err => console.log('create Err: ', err),
      );
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.racketService.uploadFile(fd).subscribe(
      res => console.log('upload Res: ', res),
      err => console.log('upload Err: ', err),
    );
  }


}
