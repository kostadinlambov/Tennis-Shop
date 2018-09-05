import { Component, OnInit } from '@angular/core';
import { CreateRacketModel } from '../models/create-racket.model';
import { RacketService } from '../racket.service';
import { Observable } from 'rxjs';
import { AllCategoryModel } from './../../categories/all-category/models/all-category.model';
import { CategoryService } from './../../categories/category.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-racket',
  templateUrl: './create-racket.component.html',
  styleUrls: ['./create-racket.component.css']
})
export class CreateRacketComponent implements OnInit {
  bindingModel: CreateRacketModel;
  // bindingModel;
  categories$;
  allCategories$: Observable<AllCategoryModel[]>;
  selectedFile: File = null;
  imageUrl: string = '../../../../assets/img/noImage.jpg';
  fd: FormData = new FormData();
  // fd: FormData = new FormData();

  constructor(
    private racketService: RacketService,
    private categoryService: CategoryService,
    private spinner: NgxSpinnerService
  ) {
    this.bindingModel = new CreateRacketModel('', '', '', 0, 0, 0, '', null);
  }

  ngOnInit() {
    this.allCategories$ =  this.categoryService.getAll();
  }

  createRacket(formData) {
    console.log(formData);

    const data = new FormData();
    data.append('name', this.bindingModel.name);
    data.append('categoryName', this.bindingModel.categoryName);
    data.append('description', this.bindingModel.description);
    data.append('price', this.bindingModel.price.toString());
    data.append('headSize', this.bindingModel.headSize.toString());
    data.append('weight', this.bindingModel.weight.toString());
    data.append('stringPattern', this.bindingModel.stringPattern);
    data.append('mainImageUrl', this.bindingModel.mainImageUrl.get('mainImageUrl'));
    debugger;

    

    this.spinner.show();
      this.racketService
      .createRacket(data)
      .subscribe(
        res => {
          this.spinner.hide();
          console.log('create Res: ', res)
        },
        err => console.log('create Err: ', err),
      );
  }

  onFileSelected(event) {
    console.log('event: ', event);
    debugger;
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('mainImageUrl', this.selectedFile);
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    debugger;
    this.bindingModel.mainImageUrl = this.fd;
    console.log('bindingModel: ', this.bindingModel);
    console.log('bindingModel: ', this.fd);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event1: any) => {
      this.imageUrl = event1.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.racketService.uploadFile(fd).subscribe(
      res => console.log('upload Res: ', res),
      err => console.log('upload Err: ', err),
    );
  }


}
