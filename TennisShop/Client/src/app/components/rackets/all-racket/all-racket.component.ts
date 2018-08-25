import { Component, OnInit } from '@angular/core';
import { RacketService } from '../racket.service';
import { Observable } from 'rxjs';
import { DetailsRacketModel } from '../models/deatils-racket.model';

import { NgProgress } from 'ngx-progressbar';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from '../../users/users.service';


@Component({
  selector: 'app-all-racket',
  templateUrl: './all-racket.component.html',
  styleUrls: ['./all-racket.component.css']
})
export class AllRacketComponent implements OnInit {

  racketsObs: Observable<DetailsRacketModel[]>;
  rackets: DetailsRacketModel[];
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(
    private racketService: RacketService,
    private userService: UsersService,
    private ngProgress: NgProgress,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    // this.racketsObs = this.racketService.getAll()
    // this.ngProgress.done();

    this.racketService.getAll().subscribe(
      res => {
        debugger;
        this.rackets = res;
        console.log('allRackets res: ', res);
        this.spinner.hide();
        // setTimeout(() => {
        //   this.spinner.hide();
        // }, 5000);
      },
      err =>{
        debugger;
        console.log('allRackets error: ', err);
      }
    );
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
