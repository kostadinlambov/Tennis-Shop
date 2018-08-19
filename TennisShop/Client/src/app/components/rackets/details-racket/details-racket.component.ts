import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsRacketModel } from '../models/deatils-racket.model';
import { ActivatedRoute } from '@angular/router';
import { RacketService } from '../racket.service';

@Component({
  selector: 'app-details-racket',
  templateUrl: './details-racket.component.html',
  styleUrls: ['./details-racket.component.css']
})
export class DetailsRacketComponent implements OnInit {
  currentItem: Observable<DetailsRacketModel>;
  id: string
  constructor(
    private route: ActivatedRoute,
    private racketService: RacketService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.currentItem = this.racketService.getRacketDeatails(this.id);
    // this.route.params.subscribe((params) => {
    //   if (params['id'] !== undefined) {
    //     const id = params['id']
    //     console.log('id: ', id);

    //     this.furnitureService.getDeatails(id)
    //       .subscribe(
    //         (item) => {
    //           this.currentItem = item;
    //         },
    //         (err) => console.log(err)
    //       )
    //   }
    // })
  }
}
