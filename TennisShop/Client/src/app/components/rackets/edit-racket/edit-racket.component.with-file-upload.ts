// import { Component, OnInit } from '@angular/core';
// import { DetailsRacketModel } from '../models/deatils-racket.model';
// import { ActivatedRoute } from '@angular/router';
// import { RacketService } from '../racket.service';
// import { CreateRacketModel } from '../models/create-racket.model';
// import { Observable } from 'rxjs';
// import { AllCategoryModel } from '../../categories/all-category/models/all-category.model';
// import { CategoryService } from '../../categories/category.service';

// @Component({
//   selector: 'app-edit-racket',
//   templateUrl: './edit-racket.component.html',
//   styleUrls: ['./edit-racket.component.css']
// })
// export class EditRacketComponent implements OnInit {
//   bindingModel: CreateRacketModel;
//   id: string;
//   allCategories$: Observable<AllCategoryModel[]>;
//   selectedFile: File = null;
//   imageUrl: string = '../../../../assets/img/noImage.jpg';
//   fd: FormData = new FormData();
//   constructor(
//     private route: ActivatedRoute,
//     private racketService: RacketService,
//     private categoryService: CategoryService
//   ) { }

//   ngOnInit() {
//     this.racketService
//       .getRacketDeatails(this.route.snapshot.params['id'])
//       .subscribe(data => {
//         console.log('bindingModel: ', data);
//         this.bindingModel = data;
//         this.imageUrl = this.bindingModel.mainImageUrl;
//         console.log('this.imageUrl: ', this.imageUrl )
//       });
//     this.allCategories$ =  this.categoryService.getAll();

//   }

//   onFileSelected(event) {
//     console.log('event: ', event);
//     debugger;
//     this.selectedFile = <File>event.target.files[0];
//     this.fd.append('mainImageUrl', this.selectedFile);
//     // fd.append('image', this.selectedFile, this.selectedFile.name);
//     debugger;
//     this.bindingModel.mainImageUrl = this.fd;
//     console.log('bindingModel: ', this.bindingModel);
//     console.log('bindingModel: ', this.fd);

//     // Show image preview
//     const reader = new FileReader();
//     reader.onload = (event1: any) => {
//       this.imageUrl = event1.target.result;
//     };
//     reader.readAsDataURL(this.selectedFile);
//   }

//   edit() {
//     this.racketService.editRacket(this.bindingModel['id'], this.bindingModel)
//       .subscribe(data => {
//         console.log('editRacketById: ', data);
//       });
//   }
// }
