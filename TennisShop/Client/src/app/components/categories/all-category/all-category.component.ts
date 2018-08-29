import { Component, OnInit } from '@angular/core';
import { AllCategoryModel } from './models/all-category.model';
import { Observable } from 'rxjs';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { UsersService } from '../../users/services/users.service';
import { CreateCategoryModel } from './models/create-category.model';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
  allCategories$: Observable<AllCategoryModel[]>;
  allDeletedCategories$: Observable<AllCategoryModel[]>;
  allCategories: AllCategoryModel[] = [];
  category: CreateCategoryModel;
  constructor(
    private categoryService: CategoryService,
    private userService: UsersService,
    private router: Router
  ) {
    this.category = new CreateCategoryModel('');
   }

  ngOnInit() {
    this.loadCategories();
  }


  loadCategories() {
    this.allCategories$ = this.categoryService.getAll();
    this.allDeletedCategories$ = this.categoryService.getAllDeleted();
    // this.categoryService.getAll().subscribe(
      // res => {
      //   debugger;
      //   this.allCategories = res;
      //   console.log('allUsers res: ', res);
      // },
      // err => {
      //   debugger;
      //   console.log('allUsers error: ', err);
      // });
  }

  create(formData) {
    console.log(formData);
    this.categoryService
      .createcategory(this.category)
      .subscribe(
        res => {
          console.log('create Res: ', res);
          this.loadCategories();
        },
        err => console.log('create Err: ', err),
      );
  }

  restore(itemId){
    this.categoryService.restoreCategory(itemId)
    .subscribe(
      res => {
        console.log('Restore Res: ', res);
        this.loadCategories();
      },
      err => console.log('Restore Err: ', err),
    );
  }

  deleteCategory(itemId){
    this.categoryService.deleteCategory(itemId)
    .subscribe(
      res => {
        console.log('Delete Res: ', res);
        this.loadCategories();
      },
      err => console.log('Delete Err: ', err),
    );
  }

  editCategory(itemId, categoryName) {
    const data = {
      id: itemId,
      name: categoryName
    };
    this.categoryService.editCategory(itemId, data)
    .subscribe(
      res => {
        console.log('Delete Res: ', res);
        this.loadCategories();
      },
      err => console.log('Delete Err: ', err),
    );
  }

  isRoot(role) {
    if (role === 'ROOT') {
      return true;
    }

    return false;
  }

  isLoggedInUser(username) {
    const loggedInUserName = this.userService.getUsername();
    if (username === loggedInUserName) {
      return true;
    }
    return false;
  }
}
