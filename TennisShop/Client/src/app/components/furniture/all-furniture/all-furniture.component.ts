import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furniture: Observable<DetailsFurnitureModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private furnitureService: FurnitureService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.all();
  }

  changePage(page) {
    this.currentPage = page;
  }

  all() {
    // this.furniture = this.furnitureService.getAll();
    this.furniture = this.furnitureService.getAllSpringTest();

    // this.furnitureService.getAll()
    // .subscribe(
    //   res => {
    //     this.furniture = res;
    //     console.log('All furnitures:', this.furniture)
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // );
  }

}
