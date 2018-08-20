import { Component, OnInit } from '@angular/core';
import { RacketService } from '../racket.service';
import { Observable } from 'rxjs';
import { DetailsRacketModel } from '../models/deatils-racket.model';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-all-racket',
  templateUrl: './all-racket.component.html',
  styleUrls: ['./all-racket.component.css']
})
export class AllRacketComponent implements OnInit {

  rackets: Observable<DetailsRacketModel[]>;
  pageSize: number = 6;
  currentPage: number = 1;

  constructor(
    private racketService: RacketService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.rackets = this.racketService.getAll();

    // this.racketService.getAll().subscribe(
    //   res => {
    //     debugger;
    //     console.log('allRackets res: ', res);
    //   },
    //   err =>{
    //     debugger;
    //     console.log('allRackets error: ', err);
    //   }
    // );
  }

  changePage(page) {
    this.currentPage = page;
  }


  all() {
    // this.furniture = this.furnitureService.getAll();
    // this.furniture = this.furnitureService.getAllSpringTest();

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
