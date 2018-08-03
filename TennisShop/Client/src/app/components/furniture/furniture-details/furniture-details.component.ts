import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  currentItem: Observable<DetailsFurnitureModel>;
  id: string
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.currentItem = this.furnitureService.getDeatails(this.id);
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
