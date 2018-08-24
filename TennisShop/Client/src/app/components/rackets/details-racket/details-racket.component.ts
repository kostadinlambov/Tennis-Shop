import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsRacketModel } from '../models/deatils-racket.model';
import { ActivatedRoute } from '@angular/router';
import { RacketService } from '../racket.service';
import { UsersService } from '../../users/users.service';
import { OrderService } from '../../users/services/order.service';

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
    private racketService: RacketService,
    private userService: UsersService,
    private orderService: OrderService
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

  addRacketToCart(racketId) {
    debugger;
    console.log('Product id: ', racketId);
    const userId = this.userService.getId();
    const quantity = 1;
    const payload = { userId, racketId, quantity };
    this.orderService.placeOrder(payload).subscribe(
      res => console.log(),
      err => console.log()
    );

  }
}
